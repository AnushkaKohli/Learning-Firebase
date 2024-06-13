import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const DeleteBook = () => {
  const handleDeleteBook = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "books", e.target.docId.value);
    await deleteDoc(docRef);
    e.target.reset();
  };
  return (
    <div className="form-div">
      <h2>Delete Book</h2>
      <form className="form" onSubmit={handleDeleteBook}>
        <div className="input-field">
          <label htmlFor="docId">Document ID: </label>
          <input type="text" id="docId" name="docId" />
        </div>
        <button type="submit">Delete Book</button>
      </form>
    </div>
  );
};

export default DeleteBook;
