import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        console.log(name);
        if(!name){
            return alert('please enter a full name');
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            });
        }).catch((error) => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            console.log(userAuth);
            dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
        }))
        });
    };
    return (
        <div className="login">
            <img src="https://www.paperlesslabacademy.com/wp-content/uploads/2017/02/linkedin-logo-transparent.png" alt="" />
            <form action="">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"/>
                <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic url"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="password"/>
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member? <span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
