import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getPollsData = async () => {
  const polls = [];
  const querySnapshot = await getDocs(collection(db, "polls"));
  querySnapshot.forEach((doc) => {
    const pollData = {
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      status: doc.data().status,
      total_votes: doc.data().total_votes,
      options: doc.data().options,
    };
    polls.push(pollData);
  });
  return polls;
};
