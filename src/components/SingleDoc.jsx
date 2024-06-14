import {
  doc,
  // getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect } from "react";

const SingleDoc = () => {
  const docRef = doc(db, "books", "yzoJO7A0tG89xUTUYMLp");
  const getSingleDoc = async () => {
    // const docSnap = await getDoc(docRef);
    // console.log("Single Doc: ", docSnap.data());
    onSnapshot(docRef, (doc) => {
      console.log("Single doc:", doc.data(), doc.id);
    });
  };
  useEffect(() => {
    getSingleDoc();
  }, []);
  return <div></div>;
};

export default SingleDoc;
