import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const FormPage = () => {
    const classes = useStyles();
    // create state variables for each input
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        fetch(process.env.REACT_APP_APIURL + '/users')
            .then(response => response.json())
            .then(response => console.log(response));
        // console.log(firstName, lastName, email, password);
        // console.log(fetch("http://localhost:9000/users"))
    };

    // const fetchAPI = e => {
    //     // param is a highlighted word from the user before it clicked the button
    //     console.log(fetch("http://localhost:9000/users"));
    // }


    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="filled"
                // required
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                label="Last Name"
                variant="filled"
                // required
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                // required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                // required
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div>
                <Link to="/" className="btn btn-primary">
                    <Button variant="contained">
                        Cancel
                    </Button>
                </Link>
                <Button type="submit" variant="contained" color="primary">
                    Signup
                </Button>
            </div>
        </form>
    );
};

export default FormPage;