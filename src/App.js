import React from 'react';
import './App.css';
import Header from "./components/Header"
import Album from "./components/Album";
import {Route} from "react-router-dom";
import Footer from "./components/Footer";
import FormPage from "./components/login/FormPage";

function App() {

    return (
        <div className="App">
            <Header/>
            <Route exact path="/">
                <Album/>
            </Route>
            <Route exact path="/login">
                <FormPage />
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
