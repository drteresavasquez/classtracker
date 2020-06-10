import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../keys';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
  }
};

export default firebaseApp;
