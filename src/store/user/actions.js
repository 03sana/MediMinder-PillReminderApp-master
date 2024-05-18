import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { setUser } from "./reducers";
import { auth } from "../../firebase";

export function initUserAuthStateListner(dispatch, callback) {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged", user);
    dispatch(setUser(user ? { email: user.email, uid: user.uid } : null));
    callback();
  });

  return unsubscribe;
}
