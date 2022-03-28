/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [publishedYear, setPublishedYear] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const updateBook = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/book/${id}`, {
      bookId: bookId,
      bookName: bookName,
      publishedYear: publishedYear,
    });
    navigate("/");
  };

  useEffect(() => {
    getBookById();
  }, []);

  const getBookById = async () => {
    const response = await axios.get(`http://localhost:5000/book/${id}`);
    setBookId(response.data.bookId);
    setBookName(response.data.bookName);
    setPublishedYear(response.data.publishedYear);
  };

  return (
    <div>
      <form onSubmit={updateBook}>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
