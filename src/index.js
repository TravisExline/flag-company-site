import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import FlagsPage from './containers/FlagsPage'
import AboutMePage from './containers/AboutMePage'
import ContactPage from './containers/ContactPage'
import ShoppingCartPage from './containers/ShoppingCartPage'
import flagsReducer from './reducers/flagsReducer'
import * as serviceWorker from './serviceWorker';

const store = createStore(flagsReducer)

ReactDOM.render(
      <Router>
        <div>
          <Provider store={store}>
            <Route exact path='/' component={App} />
            <Route exact path='/flags' component={FlagsPage} />
            <Route exact path='/about' component={AboutMePage} />
            <Route exact path='/contact' component={ContactPage} />
            <Route exact path='/cart' component={ShoppingCartPage} />
          </Provider>
        </div>
      </Router>,

document.getElementById('root')
);
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
