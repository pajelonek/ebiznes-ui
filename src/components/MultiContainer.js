import React, {useContext, useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import ClipsGrid from './ClipsGrid';
import {Pagination} from "@material-ui/lab";
import {SearchContext} from "../contexts/SearchContext";

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
    const [Search, setSearch] = useContext(SearchContext);
    const periodMap = new Map([['Telewizory', 'TV'], ['Konsole', 'Konsole']]);

    async function searchFetch() {
        return await fetch(buildUrl(), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .catch(e => console.error('api' + e));
    }

    useEffect(() => {
        searchFetch().then(res => {setClipResponse(res); console.log(res); });
    }, [Search]);


    function buildUrl() {
        let url = process.env.REACT_APP_APIURL + '/categories/products/' + handleSearch(Search);
        return url;
    }

    function handleSearch(search){
        return periodMap.get(search);
    }

    function handlePageChange(page) {
        return null;
    }

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