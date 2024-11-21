import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOutUser = () => {
        return signOut(auth);
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_SERVER_URL}/auth`, { email: currentUser.email })
                    .then(data => {
                        if (data.data) {
                            localStorage.setItem('access-token', data?.data?.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        // cleanup
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        createUser, loginUser, logOutUser, googleLogin, user, loading
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;