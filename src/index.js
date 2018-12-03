import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<button>Hello world!</button>, document.getElementById('root'));

serviceWorker.unregister();
