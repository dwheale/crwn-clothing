import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD_nH2x4qXFDEI0oMNqB-fp7-lX0eQfatc",
    authDomain: "crwn-db-ec09e.firebaseapp.com",
    databaseURL: "https://crwn-db-ec09e.firebaseio.com",
    projectId: "crwn-db-ec09e",
    storageBucket: "crwn-db-ec09e.appspot.com",
    messagingSenderId: "694336971018",
    appId: "1:694336971018:web:cf10d7f92f7023d12a1af3"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase