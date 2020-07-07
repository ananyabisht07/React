const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp();

exports.addAdminRule  = functions.https.onCall((data, context) => {
    // check request amde by an admin 
    if ( context.auth.token.admin !== true ) {
        return { error:'Only admins can add other admin, sucker!' }
    }
    
    // get user and add custum claims (admin)
    return admin.auth().getUserByEmail(data.email)
    .then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin.`
        }
    }).catch( err => {
        return err;
    })
})
