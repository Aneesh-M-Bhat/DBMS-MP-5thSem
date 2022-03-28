/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditAuthor = () => {
  const [bookId, setBookId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateAuthor = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/authors/${id}`, {
      bookId: bookId,
      authorName: authorName,
    });
    navigate("/");
  };

  useEffect(() => {
    getAuthorById();
  }, []);

  const getAuthorById = async () => {
    const response = await axios.get(`http://localhost:5000/authors/${id}`);
    setBookId(response.data.title);
    setAuthorName(response.data.price);
  };

  return (
    <div>
      <form onSubmit={updateAuthor}>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditAuthor;
