// React libraries:
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Styles libraries
import "semantic-ui-css/semantic.min.css";
import './components/styles/navbar.css'
import './index.css';


// Redux and Middleware
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// Firebase libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { ReactReduxFirebaseProvider, createFirestoreInstance } from 'react-redux-firebase'; // Correct import

// Import Firebase configuration
import FirebaseConfig from './api/FirebaseConfig'; 


// Initialize Firebase App
const firebaseApp = initializeApp(FirebaseConfig);

// Initialize Firebase Services
const firestore = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

// React Redux Firebase configuration
const rrfConfig = {
    userProfile: 'users', // Firestore collection where user profiles are stored
    useFirestoreForProfile: true, // Use Firestore for profile instead of Realtime Database
    attachAuthIsReady: true, // Attach auth is ready
};



// Enhacers for Redux store
const storeEnhancers = compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase: auth, getFirestore: firestore })),
)


const store = createStore(
    rootReducer,
    storeEnhancers
)

// React Redux Firebase provider props
const rrfProps = {
    firebase: firebaseApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // Pass createFirestoreInstance
};

// Wait for Firebase Auth to be ready before rendering the app
store.firebaseAuthIsReady = new Promise((resolve) => {
    auth.onAuthStateChanged(resolve);
});

// Wait for Firebase Auth to be ready before rendering the app
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </Provider>,
        document.getElementById('root'));
})


