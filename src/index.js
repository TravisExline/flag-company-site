import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import FlagsPage from './containers/FlagsPage'
import AboutMePage from './containers/AboutMePage'
import ContactPage from './containers/ContactPage'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
      <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route exact path='/flags' component={FlagsPage} />
          <Route exact path='/about' component={AboutMePage} />
          <Route exact path='/contact' component={ContactPage} />
        </div>
      </Router>,

document.getElementById('root')
);
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
