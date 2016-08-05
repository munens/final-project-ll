// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App.jsx';
import Signup from './signup/Signup.jsx';


render((
  <Router history={browserHistory}>
     <Route path="/" component={App}>
    </Route>
    <Route path="/signup" component={Signup}>
    </Route>
  </Router>
), document.getElementById('react-root'))


