import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "hidden",
    authDomain: "hidden",
    projectId: "hidden",
    storageBucket: "hidden",
    messagingSenderId: "hidden",
    appId: "hidden",
    measurementId: "hidden"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
