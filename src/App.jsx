import "./App.css";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import AllBooks from "./components/AllBooks";
import { useEffect } from "react";
import QueryBook from "./components/QueryBook";
import SingleDoc from "./components/SingleDoc";
import UpdateBook from "./components/UpdateBook";

function App() {
  // Collection reference
  const collectionRef = collection(db, "books");
  const handleGetDocs = async () => {
    const books = [];
    // Get documents from collection
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log("Books: ", books);
  };
  // Get real time data
  const handleRealTimeUpdates = async () => {
    onSnapshot(collectionRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New book!");
        } else if (change.type === "modified") {
          console.log("Modified book!");
        } else if (change.type === "removed") {
          console.log("Removed book!");
        }
      });
      const books = [];
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
      });
      console.log("Books: ", books);
    });
  };
  useEffect(() => {
    handleRealTimeUpdates();
  }, []);

  return (
    <div>
      <h1>Firebase</h1>
      <div className="button-div">
        <button onClick={() => handleGetDocs()}>Get Documents</button>
      </div>
      <AddBook />
      <DeleteBook />
      <AllBooks />
      <QueryBook />
      <SingleDoc />
      <UpdateBook />
    </div>
  );
}

export default App;
