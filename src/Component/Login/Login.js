import React, { useContext, useState } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {

    const { setLoggedInUser } = useContext(UserContext);
    var provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        img: '',
        email: ''
    })
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    img: photoURL,
                    email:email
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div className="login-container">
            <button onClick={handleGoogleSignIn}><FontAwesomeIcon className="icon" icon={faGoogle} /> Sign In With Google</button>
        </div>
    );
};

export default Login;