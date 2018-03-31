import * as firebase from "firebase";
import { defaultData } from '../utils/defaultData';
// import { config } from './config';

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().remove();

// defaultData.map(data => {
//   database.ref('flightCards').push(data);
// })

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
