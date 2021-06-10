import React from 'react';
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import sampleImage from "../img/mm.jpg";


const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export default function HeroContent() {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <CardMedia
                    // component='video'
                    style={{height: 0, paddingTop: '56%'}}
                    image={sampleImage}
                    autoPlay
                />
            </Container>
        </div>
    );
}