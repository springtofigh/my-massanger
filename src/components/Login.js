import React from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';

//Icons
import google from '../assets/google.svg'

//Styles
import styles from './Login.module.css'

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <diV className={styles.loginCard}>
                <h2>Welcome to Botogram</h2>
                <div 
                className={styles.button}
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                <img src={google} alt="Google" /> Signin with Google
                </div>
            </diV>

            
        </div>
    );
};

export default Login;