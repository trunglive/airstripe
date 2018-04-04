import * as firebase from "firebase";
// import { defaultData } from '../firebase/defaultData.js';
import { config } from '../firebase/config.js';

!firebase.apps.length && firebase.initializeApp(config);

// const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// database.ref().remove();

// go through each item in array, and push it to firebase
// firebase will automatically convert it to JSON, with random ID
// defaultData.map(data => {
//   database.ref('flightCards').push(data);
// })

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// export { firebase, database, googleAuthProvider as default };
