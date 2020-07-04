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


const isEmpty = (string) => {
    if(string.trim() === ' ') return true;
    else return false;
}
const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regEx)) return true;
    else return false
}
// Signup route

app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };
    // TODO Validate data
    let errors = {};
    if(isEmpty(newUser.email)) {
        errors.email = 'Email must not be empty'
    } else if (!isEmail(newUser.email)){
        errors.email = 'Must be a valid email address'
    }

    if(isEmpty(newUser.password)) errors.password = 'Must not be empty.'
    if(newUser.password !== newUser.confirmPassword) errors.confirmPassword= 'Passwords must match';
    if(isEmpty(newUser.handle)) errors.handle = 'Must not be empty.' 
    if(Object.keys(errors).length > 0) return res.status(400).json(errors);


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
});

app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    let errors = {};

    if(isEmpty(user.email)) return errors.email = "Don't leave this empty.";
    if(isEmpty(user.password)) return errors.password = "Don't leave this empty.";

    if(Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            return res.json({token})
        })
        .catch(err => {
            console.error(err);
            if(err.code === 'auth/wrong-password'){
                return res.status(403).json({ general: 'Wrong credentials, please try again'})
            }else return res.status(500).json({error: err.code});
        })

})

exports.api = functions.https.onRequest(app)