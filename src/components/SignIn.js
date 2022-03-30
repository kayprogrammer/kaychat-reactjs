import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{color: '#ffffff', display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{color: '#ffffff', padding: '30px', fontSize: '20px', border: '2px solid #ffffff', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
        </div>
    )
}

export default SignIn

