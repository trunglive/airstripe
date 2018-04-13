import * as firebase from "firebase";
import { config } from '../firebase/config.js';

!firebase.apps.length && firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();