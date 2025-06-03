import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

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
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)

                // sending user email to jwt at backend to verify token (only when creating custom tokens instead of firebase token)
                if (currentUser) {
                    const userData = {email: user?.email};
                    // const userData = user?.email;
                    axios.post('http://localhost:3000/jwt', { userData }, { withCredentials: true })
                        .then(res => {
                            console.log('after jwt', res.data);
                        })
                        .catch(err => console.log(err));
                }

            } else {
                setUser(null);
                setLoading(false);
            }
        })
        return () => {
            unSubscribe()
        }
    }, [user])

    console.log(user)

    const google = () => {
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