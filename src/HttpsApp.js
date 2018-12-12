import React, {Component} from 'react';
import App from './App';
import HttpsRedirect from 'react-https-redirect';

class HttpsApp extends React.Component {

    render() {
        return (
            <HttpsRedirect>
                <App/>
            </HttpsRedirect>
        );
    }
}

export default HttpsApp;