import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [publishedYear, setPublishedYear] = useState(0);
  const navigate = useNavigate();
  const saveBook = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/book", {
      bookId: bookId,
      bookName: bookName,
      publishedYear: publishedYear,
    });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={saveBook}>
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
          <label className="label">bookName</label>
          <input
            className="input"
            type="text"
            placeholder="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">publishedYear</label>
          <input
            className="input"
            type="number"
            placeholder="publishedYear"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
