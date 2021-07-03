import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {SearchProvider} from "./components/contexts/SearchContext";
import {UserProvider} from "./components/contexts/UserContext";
import {store} from "./components/products/BasketActions";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <SearchProvider>
                <Provider store={store}>
                    <App/>
                </Provider>
            </SearchProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
