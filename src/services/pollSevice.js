import { db } from "../firebase";
import { getCurrentUser } from "./authService";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const getPollsData = async () => {
  const polls = [];
  const querySnapshot = await getDocs(
    query(collection(db, "polls"), where("user_id", "==", getCurrentUser().uid))
  );
  querySnapshot.forEach((doc) => {
    const pollData = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      total_votes: doc.data().total_votes,
      options: doc.data().options,
      user_id: doc.data().user_id,
    };
    polls.push(pollData);
  });
  return polls;
};
export const getPollData = async (id) => {
  const docRef = doc(db, "polls", id);

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        title: docSnap.data().title,
        description: docSnap.data().description,
        status: docSnap.data().status,
        total_votes: docSnap.data().total_votes,
        options: docSnap.data().options,
        user_id: docSnap.data().user_id,
      };
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};
export const addPollData = async (newPoll) => {
  try {
    const docRef = await addDoc(collection(db, "polls"), newPoll);
    return docRef;
  } catch (error) {
    console.log(error);
  }
};
export const updatePollData = async (id, updatedPoll) => {
  try {
    await setDoc(doc(db, "polls", id), updatedPoll);
  } catch (error) {
    console.log(error);
  }
};

export const deletePollData = async (id) => {
  try {
    await deleteDoc(doc(db, "polls", id));
  } catch (error) {
    console.log(error);
  }
};
