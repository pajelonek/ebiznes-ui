import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export default function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                TwitchClipsViewer
            </Typography>
            <Copyright/>
        </footer>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/pajelonek">
                Paweł Jelonek
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            All Rights Reserved
        </Typography>
    );
}