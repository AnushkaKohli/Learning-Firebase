import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { auth, db } from "./config/firebase";
import AddBook from "./components/AddBook";
import DeleteBook from "./components/DeleteBook";
import AllBooks from "./components/AllBooks";
import { useEffect } from "react";
import QueryBook from "./components/QueryBook";
import SingleDoc from "./components/SingleDoc";
import UpdateBook from "./components/UpdateBook";
import SignupPage from "./components/SignupPage";
import Logout from "./components/Logout";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";

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

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Status change: User is signed in: ", user);
    } else {
      console.log("Status change: User is signed out");
    }
  });

  return (
    <Router>
      <div>
        <h1>Firebase</h1>
        <div className="button-div">
          <button onClick={() => handleGetDocs()}>Get Documents</button>
          <button>
            <Link className="link" to="/books">
              All Books
            </Link>
          </button>
          <button>
            <Link className="link" to="/add">
              Add Book
            </Link>
          </button>
          <button>
            <Link className="link" to="/delete">
              Delete Book
            </Link>
          </button>
          <button>
            <Link className="link" to="/query">
              Query Book
            </Link>
          </button>
          <button>
            <Link className="link" to="/single">
              Single Doc
            </Link>
          </button>
          <button>
            <Link className="link" to="/update">
              Update Book
            </Link>
          </button>
          <button>
            <Link className="link" to="/signup">
              Signup
            </Link>
          </button>
          <button>
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
          <button>
            <Link className="link" to="/logout">
              Logout
            </Link>
          </button>
        </div>
      </div>
      <Routes>
        <Route path="/books" element={<AllBooks />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/delete" element={<DeleteBook />} />
        <Route path="/query" element={<QueryBook />} />
        <Route path="/single" element={<SingleDoc />} />
        <Route path="/update" element={<UpdateBook />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
