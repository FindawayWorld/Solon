import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
