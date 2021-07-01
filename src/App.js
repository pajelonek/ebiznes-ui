import React from 'react';
import './App.css';
import Header from "./components/Header"
import Album from "./components/Album";
import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import MultiContainer from "./components/MultiContainer";
import LoginForm from "./components/login/LoginForm";

function App() {

    return (
        <div className="App">
            <Header/>
            <Route exact path="/">
                <Album/>
                <MultiContainer/>
            </Route>
            <Route exact path="/login">
                <LoginForm/>
            </Route>
            <Footer/>
        </div>
    );
}

export default App;
