import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBwgE8QTbtDaoEQAI8DqWsMJa_ywYETzPg",
    authDomain: "firechat-8115b.firebaseapp.com",
    projectId: "firechat-8115b",
    storageBucket: "firechat-8115b.appspot.com",
    messagingSenderId: "449709640910",
    appId: "1:449709640910:web:7e7bdc1de982b1832c949f",
    measurementId: "G-XT1EM93M01"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }