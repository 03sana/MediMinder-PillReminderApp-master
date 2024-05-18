import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA_ZvBdoBzUe1_7CuY4b7FQ4GbMfpH1GB0",
  authDomain: "mediminder-a3d22.firebaseapp.com",
  databaseURL: "https://mediminder-a3d22-default-rtdb.firebaseio.com",
  projectId: "mediminder-a3d22",
  storageBucket: "mediminder-a3d22.appspot.com",
  messagingSenderId: "97566136614",
  appId: "1:97566136614:web:44d38debaf1890dd5cc9e7",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
