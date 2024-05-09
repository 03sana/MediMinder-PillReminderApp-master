import {initializeApp} from "firebase/app";
import { getAuth } from '@firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBSBS6Y1vnKlq5uM2RP9dAR3uCsAl7x220",
  authDomain: "midi-minder.firebaseapp.com",
  databaseURL: "https://midi-minder-default-rtdb.firebaseio.com",
  projectId: "midi-minder",
  storageBucket: "midi-minder.appspot.com",
  messagingSenderId: "186195701379",
  appId: "1:186195701379:web:7e1723ecbc88b0bfc7f5b6",
  measurementId: "G-HLZ0VJ2KDH"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;