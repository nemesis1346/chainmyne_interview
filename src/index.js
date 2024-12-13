// React libraries:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Styles libraries:
import "semantic-ui-css/semantic.min.css";
import './components/styles/navbar.css';
import './index.css';

// Redux and Middleware:
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Redux store configuration:
const storeEnhancers = compose(
    applyMiddleware(thunk)
);

const store = createStore(
    rootReducer,
    storeEnhancers
);

// Render the React app:
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);