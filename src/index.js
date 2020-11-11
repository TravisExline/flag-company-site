import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import App from './App';
import FlagsPage from './containers/FlagsPage'
import AboutMePage from './containers/AboutMePage'
import CustomForm from './components/CustomForm'
import ShoppingCartPage from './containers/ShoppingCartPage'
import {store} from './store'
import * as serviceWorker from './serviceWorker';
import ViewFlagPage from './containers/ViewFlagPage';
import Order from './containers/Order'

ReactDOM.render(
      <Router>
        <div>
          <Provider store={store}>
            <Route exact path='/' component={App} />
            <Route exact path='/flags' component={FlagsPage} />
            <Route exact path='/about' component={AboutMePage} />
            <Route exact path='/custom' component ={CustomForm} />
            <Route exact path='/cart' component={ShoppingCartPage} />
            <Route exact path='/viewflag' component={ViewFlagPage} />
            <Route exact path='/order' component={Order} />
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
