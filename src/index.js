import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/styles.scss';

ReactDOM.render(<App />, document.getElementById('root'));
