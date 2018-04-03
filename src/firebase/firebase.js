import * as firebase from "firebase";
// import { defaultData } from '../firebase/defaultData.js';
import { config } from '../firebase/config.js';

!firebase.apps.length && firebase.initializeApp(config);

const database = firebase.database();

// database.ref().remove();

// go through each item in array, and push it to firebase
// firebase will automatically convert it to JSON, with random ID
// defaultData.map(data => {
//   database.ref('flightCards').push(data);
// })

export { firebase, database as default };
