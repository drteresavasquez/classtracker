import firebase from 'firebase/app';
import 'firebase/auth';
import Keys from './../Keys';

const baseUrl = Keys.firebaseConfig;


const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(baseUrl);
  }
};

export default firebaseApp;
