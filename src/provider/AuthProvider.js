import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authmethods'

export const firebaseAuth = React.createContext()

const AuthProvider = (props) => {
    const initState = { email: '', password: '' }
    const [inputs, setInputs] = useState(initState)
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)


    const handleSignup = () => {

        // middle man between firebase and signup 
        console.log('handleSignup')
            // calling signup from firebase server
        authMethods.signup(inputs.email, inputs.password, setErrors, setToken)
        console.log(errors, token)
    }
    const handleSignin = () => {
        //changed to handleSingin
        console.log('handleSignin!!!!')
            // made signup signin
        authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
        console.log(errors, token)
    }

    const GoogleSignin = () => {
        //changed to handleSingin
        console.log("handleSigningoogle");
        // made signup signin
        authMethods.GoogleSignin(setErrors, setToken, setUser);
        console.log(errors, token, user);

    };

    const GithubSignin = () => {
        //changed to handleSingin
        console.log("handleSigningoogle");
        // made signup signin
        authMethods.GithubSignin(setErrors, setToken, setUser);
        console.log(errors, token, user);
    };



    const handleSignout = () => {
        authMethods.signout(setErrors, setToken)
    }

    return ( <
        firebaseAuth.Provider value = {
            {
                //replaced test with handleSignup
                handleSignup,
                handleSignin,
                token,
                inputs,
                setInputs,
                errors,
                GoogleSignin,
                GithubSignin,
                handleSignout,
                user,
            }
        } > { props.children } <
        /firebaseAuth.Provider>
    );
};

export default AuthProvider;