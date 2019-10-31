import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const PLACES = [
    { name: "Ижевск", zip: "426000" },
    { name: "Москва", zip: "101000" },
    { name: "Санкт-Петербург", zip: "190000" },
    ];


    ReactDOM.render(<App  places={PLACES} />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
