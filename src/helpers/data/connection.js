import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../apiKeys';
import Keys from './../Keys.js';

const baseUrl = !window.location.href.includes("localhost") ? apiKeys.firebaseConfig : Keys.firebaseConfig;

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(baseUrl);
  }
};

export default firebaseApp;
