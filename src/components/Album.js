import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroContent from "./HeroContent";
import AlbumMenu from "./AlbumMenu";

export default function Album() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <HeroContent/>
                <AlbumMenu/>
            </main>
        </React.Fragment>
    );
}