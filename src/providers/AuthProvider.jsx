import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = ()=>{
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // console.log('observing current user : '+ currentUser);
        });

        return ()=>{
            unSubscribe();
        }
    },[])


    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {user, createUser, signInUser, logOut, googleSignIn, githubSignIn};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;