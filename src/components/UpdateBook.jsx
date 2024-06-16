import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const UpdateBook = () => {
  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "books", e.target.docId.value);
    updateDoc(docRef, {
      title: e.target.title.value,
      author: e.target.author.value,
    });
    e.target.reset();
  };
  return (
    <div className="form-div">
      <h2>Update Book</h2>
      <form className="form" onSubmit={handleUpdateBook}>
        <div className="input-field">
          <label htmlFor="docId">Document ID: </label>
          <input type="text" id="docId" name="docId" />
        </div>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="input-field">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
