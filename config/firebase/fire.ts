import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'

export default class Firebase  {

    private static firebaseInstance: Firebase = null;

    readonly version = firebase.SDK_VERSION;
    auth: firebase.auth.Auth

    static getInstance() {
        if (!this.firebaseInstance) {
            this.firebaseInstance = new Firebase();
        }
        return this.firebaseInstance;
    }

    private constructor() {
        const config = {
            apiKey: 'AIzaSyCEBbYC-Z6BINUVAgYn-h9V2w7fke9UwfQ',
            authDomain: 'factory-dev.firebaseapp.com',
            databaseURL: 'https://factory-dev.firebaseio.com',
            projectId: 'factory-dev',
            storageBucket: 'factory-dev.appspot.com',
            messagingSenderId: '181863708134'
        }
        if (process['browser']) {
            firebase.initializeApp(config);
        } else {
            if (firebase.apps.length === 0) {
                firebase.initializeApp(config);
            }
        }
        this.auth = firebase.auth()
    }
}
