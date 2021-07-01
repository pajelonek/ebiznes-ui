import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {CardActions} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));

class ClipsGrid extends Component {

    render() {
        if (!this.props.props) return null;
        else {
            return <Grid container spacing={4}>
                {this.props.props.map((clip) => (
                    <Grid key={clip.id} xs={12} sm={6} md={4}>
                        <CardActionArea className={useStyles.card}>
                            <CardMedia style={{height: 0, paddingTop: '56%'}}
                                       className={useStyles.cardMedia}
                                       image={clip.image}
                                       title="Image title"
                            />
                            <CardContent className={useStyles.cardContent}>
                                <Typography gutterBottom variant="h5" component="h5">
                                    {clip.title}
                                </Typography>
                                <Typography>
                                    {clip.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Dodaj
                                </Button>
                            </CardActions>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>;
        }
    }
}

export default ClipsGrid;


