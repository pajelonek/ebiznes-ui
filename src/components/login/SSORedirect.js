import React from 'react';
import {Redirect} from 'react-router';
import * as qs from 'qs';

export default function SSORedirect() {
    const token = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    }).token;

    if (typeof token === 'string') {
        localStorage.setItem('authToken', token);
    }

    return <Redirect to="/" />;
}
