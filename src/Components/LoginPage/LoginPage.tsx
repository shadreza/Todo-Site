import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../Firebase/firebase.config';
import './LoginPage.css';
firebase.initializeApp(firebaseConfig);


const googleProvider = new firebase.auth.GoogleAuthProvider();

const LoginPage = () => {

    // history
    let history = useHistory();

    // contexts
    const USER = useContext(UserContext)

    // functions
    const googleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(response => {
            // console.log(response.user)
            const {displayName, email, photoURL} = {...response.user}
            const userData = {
                name       : displayName ,
                image      : photoURL ,
                email      : email ,
                isLoggedIn : true
            }
            USER[1](userData);
            history.push('/')
        })
        .catch(err => {
            alert(err.message);
        })
    }

    return (
        <div className="login">
            <p><strong>Continue with Google Sign in</strong></p>
            <button onClick={()=>{googleLogin()}}>Sign in</button>
            <br />
            <br />
            <p><small>Go Back</small></p>
            <button onClick={()=>{history.push('/')}}>Back</button>
        </div>
    );
};

export default LoginPage;