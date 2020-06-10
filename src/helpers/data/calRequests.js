import axios from 'axios';
import apiKeys from '../apiKeys';
import Keys from './../Keys.js';

const baseUrl = !window.location.href.includes("localhost") ? apiKeys.firebaseConfig.databaseURL : Keys.firebaseConfig.databaseURL;


const getCalEventsRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/cal.json`)
    .then((res) => {
      const events = [];
      const calCollection = res.data;
      Object.keys(calCollection).forEach((key) => {
        calCollection[key].id = key;
        events.push(calCollection[key]);
      });
      resolve(events);
    })
    .catch(err => reject(err));
});

export default { getCalEventsRequest };
