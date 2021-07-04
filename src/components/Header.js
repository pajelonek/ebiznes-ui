import React, {useContext, useEffect, useState} from 'react';
import {Switch} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";
import {UserContext} from "./contexts/UserContext";

export default function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const [User, setUser] = useContext(UserContext);
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [login, setLogin] = useState('');
    const [redirectToLogOut, setRedirectToLogOut] = useState(false);
    const [LogOut, setLogOut] = useState('');
    const [final, setFinal] = useState(false);
    const [redirectToRegister, setRedirectToRegister] = useState(false);
    const [register, setRegister] = useState('');

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };
    function LogInButton() {
        if (verifyNoUserInStorage() && verifyNoAuthTokenInStorage()) {
            return  <Button onClick={handleLogin}>Sign in</Button>;
        }
        else return <Button>You are logged in</Button>;
    }

    function LogOutButton() {
        if (!verifyNoUserInStorage() || !verifyNoAuthTokenInStorage()) {
            return  <Button onClick={handleLogOut}>Log out</Button>;
        }
        return null;
    }

    function RegisterButton() {
        if (verifyNoUserInStorage() && verifyNoAuthTokenInStorage()) {
            return  <Button onClick={handleRegister}>Sign up</Button>;
        }
        return null;
    }

    function verifyNoUserInStorage(){
        return localStorage.getItem("user") === "undefined" || localStorage.getItem("user") === "null";
    }

    function verifyNoAuthTokenInStorage(){
        return localStorage.getItem('authToken') === "undefined" || localStorage.getItem('authToken') === "null";
    }

    function handleLogin(){
        setLogin('/login');
        console.log("Login equals" + login);
        setRedirectToLogin(true);
    }

    function handleRegister(){
        setRegister('/register');
        console.log("Register equals "+ register);
        setRedirectToRegister(true);
        console.log("Redirect equals "+ redirectToRegister);
    }

    function handleLogOut(){
        localStorage.setItem("user", undefined);
        localStorage.setItem('authToken', undefined);
        setLogOut('/');
        console.log("Loggout equals " + LogOut);
        setRedirectToLogOut(true);
    }

    useEffect(() => {
        if (redirectToLogOut) {
            setUser(false);
            console.log("User equals " + User);
            setFinal(true);
        }
    }, [redirectToLogOut, ]);


    if (redirectToLogin) {
        return <Redirect to="/login" />;
    }

    if (final) {
        return <Redirect to="/" />;
    }


    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid>
                    <h1>Ebiznes-Webshop</h1>
                </Grid>
                <Grid style={{display: 'flex', alignItems: 'center', justifyContent:'flex-end'}}>
                    <Brightness4Icon style={{ fontSize: 30}}/>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        aria-label="spacing"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </Grid>
                <Grid style={{display: 'flex', alignItems: 'right', justifyContent:'flex-right'}}>
                    <LogInButton/>
                    <RegisterButton/>
                    <LogOutButton/>
                </Grid>
            </Grid>
        </div>
    );
}