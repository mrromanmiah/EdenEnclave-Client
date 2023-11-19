/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const updatedUser = {
                    ...result.user,
                    displayName,
                    photoURL,
                };
                setUser(updatedUser);
                return result;
            });
    }

    const signInUser = (email, password, displayName, photoURL) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const updatedUser = {
                ...result.user,
                displayName,
                photoURL,
            };
            setUser(updatedUser);
            return result;
        });

    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => 
            {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
            if (currentUser){
                axios.post('https://eden-enclave-server.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res => {
                    console.log('token response', res.data);
                }) 
            }
            else{
                axios.post('https://eden-enclave-server.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        });
        return () => {
           return unsubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, signInUser, signInWithGoogle, signOutUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;