const apiKeys = {
    firebaseConfig: {
        apiKey: process.env.REACT_APP_PT_API_KEY,
        authDomain: process.env.REACT_APP_PT_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_PT_DATABASE_URL,
        projectId: process.env.REACT_APP_PT_PROJECT_ID,
        storageBucket: process.env.REACT_APP_PT_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_PT_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_PT_APP_ID,
        measurementId: process.env.REACT_APP_PT_MEASUREMENT_ID
    }
  };
  
  export default apiKeys;

//   // import firebaseConfig from "./FBConfig";      
// // Initialize Firebase
// if (!window.location.href.includes("localhost")) {
//     const firebaseConfig = {
     
//     };
//     firebase.initializeApp(firebaseConfig);
//   } else {
//     // firebase.initializeApp(firebaseConfig);
//   }