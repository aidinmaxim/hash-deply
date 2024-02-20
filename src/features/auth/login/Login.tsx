import React, {FC, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {loginAction} from "../authAction";
import ICredentials from "../types/Credentials";
import useLocalStorage from "../../../hooks/useLS";
import {Navigate, useNavigate} from "react-router-dom";
//import styles from './Login.module.css'

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {user} = useAppSelector(state => state.user)
    // const [username, setUsername] = useLocalStorage('username', '')
    // const [password, setPassword] = useLocalStorage('password', '')
    const [username, setUsername] = useLocalStorage('username', '')
    const [password, setPassword] = useLocalStorage('password','')

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const credentials: ICredentials = {
            username,
            password,
        }
        dispatch(loginAction(credentials))
        navigate('/')
    }

    if (user) {
        return <Navigate to='../'/>
    }

    return (
        <div>
            <h1>Login</h1>
            <span>default user/password: kminchelle/0lelplR</span>
            <form action="" onSubmit={handleSubmit}>
                <input placeholder='username' value={username} type="text"
                       onChange={(e) => setUsername(e.target.value)}/>
                <input placeholder='password' value={password} type="password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">login</button>
            </form>
        </div>
    );
};

export default Login;