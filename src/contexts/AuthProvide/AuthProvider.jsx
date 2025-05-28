import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser]= useState(null);

    const provider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser) {
                setUser(currentUser);
                setLoading(false)
            }else {
                setUser(null);
                setLoading(false);
            }
        })
        return ()=> {
            unSubscribe()
        }
    }, [])



    const google = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    const values = {
        createUser,
        loading,
        signInUser,
        logOutUser,
        user,
        google
    }
    return (
        <AuthContext value={values}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;