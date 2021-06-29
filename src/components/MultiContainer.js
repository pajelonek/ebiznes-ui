import React, {useContext, useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ClipsGrid from './ClipsGrid';
import {Pagination} from "@material-ui/lab";

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
    }
}));


function MultiContainer(props) {
    const [clipResponse, setClipResponse] = useState();
    const periodMap = new Map([['TOP ALL', 'all'], ['TOP 24H', 'day'], ['TOP 7D', 'week'], ['TOP 30D', 'month']]);
    let addedQuery = false;


    function buildUrl() {
        let url = "http://localhost:3000/clips";
        addedQuery = false;
        return url;
    }

    useEffect(() => {
        fetch(buildUrl(), {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        }).then(response => response.json())
            .then(response => {
                setClipResponse(response);
            });
    }, []);

    if (!clipResponse) return (<div/>);
    else {
        return (
            <div>
                <Container className={useStyles.cardGrid} style={{marginTop: "5%",}} maxWidth="md">
                    <ClipsGrid props={clipResponse}/>
                </Container>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Pagination onChange={(event, page) => handlePageChange(page)} size='large' count={10}
                                variant="outlined" shape="rounded" siblingCount={1}/>
                </div>
            </div>
        );
    }
}

export default MultiContainer;