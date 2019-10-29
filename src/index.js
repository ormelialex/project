import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header'
import Footer from './footer/Footer.js'
import * as serviceWorker from './serviceWorker';
import Main from './routing/MainRouting';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<Header />, document.getElementById('headerRoot'));
ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>, document.getElementById('mainRoot')
);
ReactDOM.render(<Footer />, document.getElementById('footerRoot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
