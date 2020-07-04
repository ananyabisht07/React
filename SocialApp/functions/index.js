const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express')
const app = express();


admin.initializeApp()

const config = {
    apiKey: "AIzaSyD2myiyYLZSTcUfxG_LiWjWsnCNfqeUVWk",
    authDomain: "socialapp-react-86b06.firebaseapp.com",
    databaseURL: "https://socialapp-react-86b06.firebaseio.com",
    projectId: "socialapp-react-86b06",
    storageBucket: "socialapp-react-86b06.appspot.com",
    messagingSenderId: "14162182982",
    appId: "1:14162182982:web:5ef5c3da53123c20bd9b47",
    measurementId: "G-G16L7STZNT"
  };



const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/screams', (req, res) => {
    db
        .collection('screams')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let screams = [];
            data.forEach(doc => {
                screams.push({
                    screamId: doc.id,
                    ...doc.data()
                });
            });
            return res.json(screams);
    })
    .catch(err => console.error(err));
})



app.post('/scream',(req, res) => {
    const newScream= {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };
    db
    .collection('screams')
    .add(newScream)
    .then(doc => {
        res.json({message: `document ${doc.id} created successfully`})
    })
    .catch(err => {
        res.status(500).json({error: 'something went wrong'});
        console.error(err);
    })
});

// Signup route

app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };

    // TODO Validate data
    let token, userId;
    db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if(doc.exists) {
                return res.status(400).json({ handle: 'This handle is already taken'})
            } else {
                return firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then( (data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then((idToken) => {
            token= idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            };
            db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json( {token });
        })
        .catch((err) => {
        console.error(err);
        if(err.code === 'auth/email-already-in-use'){
            return res.status(400).json({ email: 'Email is already in use.'})
        } else {
            return res.status(500).json({ error: err.code});
        }
        });

    // firebase
    // .auth()
    // .createUserWithEmailAndPassword(newUser.email, newUser.password)
    // .then((data) => {
    //     return res
    //     .status(201)
    //     .json({message: `user ${data.user.uid} signed up sucessfully`});
    // })
    // .catch((err) => {
    //     console.error(err);
    //     return res.status(500).json({ error: err.code});
    // });
});

exports.api = functions.https.onRequest(app)