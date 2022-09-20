import { auth } from "../firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export function getAuthState() {
  let currentUser = null;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      currentUser = user;
    } else {
      currentUser = user;
    }
  });
  return currentUser;
}

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());

    return result.user;
  } catch (error) {
    return {
      errorCode: error.code,
      errorMessage: error.message,
      errorEmail: error.email,
    };
  }
};
