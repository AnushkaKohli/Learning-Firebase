import { useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const QueryBook = () => {
  const collectionRef = collection(db, "books");
  const q = query(collectionRef, where("author", "==", "J.K. Rowling"));
  const handleRealTimeUpdates = async () => {
    onSnapshot(q, (snapshot) => {
      const books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      console.log("Queried Books: ", books);
    });
  };
  useEffect(() => {
    handleRealTimeUpdates();
  }, []);
  return <div></div>;
};

export default QueryBook;
