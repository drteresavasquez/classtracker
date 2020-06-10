# ClassTracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2531dd6-1763-4adb-9791-41d6d3aadc1b/deploy-status)](https://app.netlify.com/sites/classtracker/deploys)


### Description
ClassTracker is used to help students stay up to date on their progress in the evening cohort coursework.

### Screenshots


### Included Features
- [x] Authenticate via github

### Feature Wishlist
- [] Last 30 days of github history
- [] Commits from last Night (number of github commits yesterday)

### How to Install
- Clone the Repo Locally
- `npm i`
- Update files in `database` directory with your course JSON files. Follow the format.

### Create your database on Firebase
- Create a new project
- Set Database Rules by copying the `database.rules.json` file into the DB.
- Import the JSON files from the `database` directory into Firebase.

### How to Run
##### To run Development with live reload:
```>  npm start```

### How to Deploy (via Netlify)
- Ensure that you have updated your [apiKeys.js](./src/helpers/apiKeys.js) file with ENV Variables through Netlify. (Settings > Build & Deploy > Environment)
- Netlify uses continuous deployment so once you connect your Repo in Netlify, select the production branch that you would like to deploy from. When you push to that branch, Netlify with run the build automatically.

**NOTE: Do this on a separate branch and remove the file from the `.gitignore` file. Using this locally will break the application.**

EXAMPLE:
```
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
```

### Contributors
- [Zoe Ames](https://github.com/zoeames)
- [Lauren Rouse](https://github.com/rousell)
- [Callan Morrison](https://github.com/morecallan)

### License
[MIT](LICENSE)
