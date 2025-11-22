import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { auth } from '../firebase/firebase.init';
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Register user
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }

    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Observe user state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged (auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        registerUser,
        signInUser,
        googleSignIn,
        user,
        loading,
        logOut,
        
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;