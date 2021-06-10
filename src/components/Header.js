import React from 'react';
import {Switch, Button, MenuItem} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {Link as RouterLink} from "react-router-dom";

export default function Header() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    return (
        <div>
            <Grid container spacing={2} justify="center">
                <Grid xs={4} item/>
                <Grid xs={4} item>
                    <h1>KOX SHOP</h1>
                </Grid>
                <Grid item xs={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                    <Brightness4Icon style={{fontSize: 30}}/>
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        aria-label="spacing"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />

                    <Button size="medium" type="submit">
                        Sign up
                    </Button>
                    <MenuItem to="/login" component={RouterLink}>
                        Sign in
                    </MenuItem>
                </Grid>
            </Grid>
        </div>
    );
}