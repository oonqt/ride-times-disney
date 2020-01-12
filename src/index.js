import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

// for boomer browsers
import "react-app-polyfill/ie9"
import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"
import 'raf/polyfill';

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();