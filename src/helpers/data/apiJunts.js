import apiKeys from '../apiKeys';

// COMMENT OUT ON DEPLOY 
// import Keys from './../Keys.js';

// const baseUrl = !window.location.href.includes("localhost") ? apiKeys.firebaseConfig.databaseURL : Keys.firebaseConfig.databaseURL;

// COMMENT OUT WHEN LOCAL
const baseUrl = apiKeys.firebaseConfig.databaseURL;


export default baseUrl;