import React from 'react';
import {Switch} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Button from "@material-ui/core/Button";

export default function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });


    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    function LogInButton() {
        return <Button>Sign in</Button>;
    }

    function RegisterButton() {
        return  <Button>Sign up</Button>;
    }

    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid>
                    <h1>StreamersClipsViewer</h1>
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