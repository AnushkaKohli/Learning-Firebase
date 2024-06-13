import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const AddBook = () => {
  const collectionRef = collection(db, "books");
  const handleAddBook = async (e) => {
    e.preventDefault();
    const form = e.target;
    await addDoc(collectionRef, {
      title: form.title.value,
      author: form.author.value,
      createdAt: serverTimestamp(),
    });
    form.reset();
  };
  return (
    <div className="form-div">
      <h2>Add Book</h2>
      <form className="form" onSubmit={handleAddBook}>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="input-field">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
