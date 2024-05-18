import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updateProfile as updateFirebaseProfile,
  sendEmailVerification,
  onAuthStateChanged,
} from "@firebase/auth";
import { setUser } from "../user/reducers";
import { setIsLogedIn } from "./reducers";
import { auth } from "../../firebase";

export async function login(dispatch, payload) {
  const { email, password } = payload;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  dispatch(
    setUser({ email: user.email, uid: user.uid, displayName: user.displayName })
  );
  return user;
}

export async function signup(dispatch, payload) {
  const { email, password } = payload;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  dispatch(
    setUser({ email: user.email, uid: user.uid, displayName: user.displayName })
  );
  return user;
}

export async function logout(dispatch) {
  await signOut(auth);
  dispatch(setIsLogedIn(false));
  return true;
}

export async function updateProfile(dispatch, payload) {
  const { uid, email, username } = payload;

  try {
    const user = auth.currentUser;

    if (user.email !== email) {
      await updateEmail(user, email);
      await sendEmailVerification(user);
      alert(
        "Please verify your new email to complete the update. Check your inbox for a verification email."
      );
    }

    await updateFirebaseProfile(user, { displayName: username });

    dispatch(
      setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      })
    );
    return true;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
}

export function initUserAuthStateListener(dispatch) {
  return onAuthStateChanged(auth, (user) => {
    if (
      user &&
      !user.emailVerified &&
      user.providerData
        .map((provider) => provider.providerId)
        .includes("password")
    ) {
      alert("Please verify your email.");
    }
    dispatch(
      setUser(
        user
          ? { email: user.email, uid: user.uid, displayName: user.displayName }
          : null
      )
    );
  });
}
