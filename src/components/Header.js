import React, {useState} from 'react';
import {Switch} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from "@material-ui/core/Button";
import {Redirect} from "react-router-dom";

export default function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [login, setLogin] = useState('');

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    function LogInButton() {
        console.log("USER = " + localStorage.getItem("user"));
        if (localStorage.getItem("user") === undefined || localStorage.getItem("user") === null) {
            return  <Button onClick={handleLogin}>Sign in</Button>;
        }
        else return <Button>Hello</Button>;
    }
    function handleLogin(){
        setLogin('/login');
        setRedirectToLogin(true);
    }

    function RegisterButton() {
        return  <Button>Sign up</Button>;
    }

    if (redirectToLogin) {
        return <Redirect to="/login" />;
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
                </Grid>
            </Grid>
        </div>
    );
}