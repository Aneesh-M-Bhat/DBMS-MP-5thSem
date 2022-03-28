import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBookCopy = () => {
  const [bookId, setBookId] = useState("");
  const [noOfCopiesAvailable, setNoOfCopiesAvailable] = useState(0);
  const [noOfCopiesLent, setNoOfCopiesLent] = useState(0);
  const navigate = useNavigate();
  const saveBookCopy = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/bookcopies", {
      bookId: bookId,
      noOfCopiesAvailable: noOfCopiesAvailable,
      noOfCopiesLent: noOfCopiesLent,
    });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={saveBookCopy}>
        <div className="field">
          <label className="label">bookId</label>
          <input
            className="input"
            type="text"
            placeholder="bookId"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">noOfCopiesAvailable</label>
          <input
            className="input"
            type="text"
            placeholder="noOfCopiesAvailable"
            value={noOfCopiesAvailable}
            onChange={(e) => setNoOfCopiesAvailable(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">noOfCopiesLent</label>
          <input
            className="input"
            type="text"
            placeholder="noOfCopiesLent"
            value={noOfCopiesLent}
            onChange={(e) => setNoOfCopiesLent(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};
export default AddBookCopy;
