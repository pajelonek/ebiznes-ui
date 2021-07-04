import React, {useContext, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Redirect} from 'react-router-dom';
import {UserContext} from "../contexts/UserContext";
import GoogleButton from 'react-google-button';

async function register(email, password){
    return fetch(process.env.REACT_APP_APIURL + '/signIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: `{
        "email": "${email}",
        "password": "${password}"
}`,
    })
        .then(res => (res.ok ? res : Promise.reject(res)))
        .catch(e => console.error('api' + e));
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    googleButton: {
    margin: theme.spacing(3, 0, 2),
}
}));

export default function LoginForm() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [referrer, setReferrer] = useState('');
    const [final, setFinal] = useState(false);

    const [User, setUser] = useContext(UserContext);


    const signUp = (e): void => {
        e.preventDefault();

        register(email, password).then(response => {
            if (response) {
                setReferrer('/');
                setRedirectToReferrer(true);
                localStorage.setItem("user", "ok");
            }
        });
    };

    useEffect(() => {
        if (redirectToReferrer) {
            setUser(true);
            console.log("User equals "+ User);
            setFinal(true);
        }
    }, [redirectToReferrer]);

    if(final){
        return <Redirect to={referrer} />;
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={signUp}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                </form>
                <Grid container>
                    <Grid item>
                        <GoogleButton
                            className={classes.googleButton}
                            onClick={() => {
                                window.location.href =
                                    process.env.REACT_APP_APIURL + '/authenticate/google';
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}