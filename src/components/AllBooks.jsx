import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect } from "react";
import { useState } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const collectionRef = collection(db, "books");
  useEffect(() => {
    const getBooks = async () => {
      const tempBooks = [];
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        tempBooks.push({ ...doc.data(), id: doc.id });
      });
      setBooks(tempBooks);
    };
    getBooks();
  }, [books, collectionRef]);
  return (
    <div className="form-div">
      {books &&
        books.map((book, index) => (
          <div key={index}>
            <h2>
              Title: {book.title} ({book.id})
            </h2>
            <p>Author: {book.author}</p>
          </div>
        ))}
    </div>
  );
};

export default AllBooks;
