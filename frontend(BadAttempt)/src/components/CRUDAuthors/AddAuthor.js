import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddAuthor = () => {
  const [bookId, setBookId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const saveAuthor = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/authors", {
      bookId: bookId,
      authorName: authorName,
    });
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={saveAuthor}>
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
          <label className="label">authorName</label>
          <input
            className="input"
            type="text"
            placeholder="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="button is-primary">Save</button>
        </div>
      </form>
    </div>
  );
};
export default AddAuthor;
