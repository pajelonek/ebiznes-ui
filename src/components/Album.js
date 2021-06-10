import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroContent from "./HeroContent";
import AlbumMenu from "./AlbumMenu";
import MyProvider from "./MyProvider";

export default function Album() {

    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <MyProvider>
                    <HeroContent/>
                    <AlbumMenu/>
                </MyProvider>
            </main>
        </React.Fragment>
    );
}