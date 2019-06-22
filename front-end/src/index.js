import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';

import createSagaMiddleware from "redux-saga";

import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

// Non Protected Routes
import Accommodation from './routers/accommodation';
import Home from './routers/home';
import Attraction from './routers/attraction';
import Contact from './containers/contact';
import Faq from './routers/faq/container';
import Notfound from './routers/notfound';
import Payment from './routers/payment';
import Tutorial from './routers/tutorial'

import Navbar from './components/navBar/navbar'

// Protected Routes
import Admin from './routers/admin/container';
import Dashboard from './routers/dashboard/container';
import DashboardAccommodation from './routers/dashboard/accommodation/container';
import DashboardAttraction from './routers/dashboard/attraction/container';
import DashboardContact from './routers/dashboard/contact/container';
import DashboardFAQ from './routers/dashboard/faq/container';
import DashboardHome from './routers/dashboard/home/container';
import DashboardSettings from './routers/dashboard/settings/container';

// tmp solution to get rid of white gaps around the browser
import './global.css'

import rootReducers from './reducers';
import rootSagas from "./sagas";

import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['contact']
};
const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(
    //compose(applyMiddleware(sagaMiddleware, routerMiddleware(history()))),
    applyMiddleware(sagaMiddleware, routerMiddleware(history)),
);

const persistedReducer = persistReducer(persistConfig, rootReducers(history));
const store = createStore(
    persistedReducer,
    enhancers,
);
sagaMiddleware.run(rootSagas);
const persistor = persistStore(store);

const routing = (
    <Provider store={ store }>
      <PersistGate persistor={ persistor } loading={null}>
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/booking" component={ Accommodation} />
            <Route exact path="/tutorial" component={ Tutorial } />
            <Route exact path="/admin" component={ Admin } />
            <Route exact path="/attraction" component={ Attraction } />
            <Route exact path="/contact" component={ Contact } />
            <Route exact path="/faq" component={ Faq } />
            <Route exact path="/payment" component={ Payment } />
            <Route exact path="/dashboard" component={ Dashboard } />
            <Route exact path="/dashboard/accommodation" component={ DashboardAccommodation } />
            <Route exact path="/dashboard/attraction" component={ DashboardAttraction } />
            <Route exact path="/dashboard/contact" component={ DashboardContact } />
            <Route exact path="/dashboard/faq" component={ DashboardFAQ } />
            <Route exact path="/dashboard/home" component={ DashboardHome } />
            <Route exact path="/dashboard/settings" component={ DashboardSettings } />
            <Route component={ Notfound } />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

module.hot.accept();
