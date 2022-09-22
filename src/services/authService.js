import { auth } from "../firebase";
import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentUser = () => {
  return auth.currentUser;
};
