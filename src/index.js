import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();