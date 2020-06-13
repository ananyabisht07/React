
import firebase from 'firebase/app'

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
            firebase.firestore().collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId:1234,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project:project})
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    
    }
}