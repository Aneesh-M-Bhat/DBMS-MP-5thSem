/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBookCopy = () => {
  const [bookId, setBookId] = useState("");
  const [noOfCopiesAvailable, setNoOfCopiesAvailable] = useState(0);
  const [noOfCopiesLent, setNoOfCopiesLent] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const updateBookCopy = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/bookcopies/${id}`, {
      bookId: bookId,
      noOfCopiesAvailable: noOfCopiesAvailable,
      noOfCopiesLent: noOfCopiesLent,
    });
    navigate("/");
  };

  useEffect(() => {
    getBookCopyById();
  }, []);

  const getBookCopyById = async () => {
    const response = await axios.get(`http://localhost:5000/bookcopies/${id}`);
    setBookId(response.data.bookId);
    setNoOfCopiesAvailable(response.data.noOfCopiesAvailable);
    setNoOfCopiesLent(response.data.noOfCopiesLent);
  };

  return (
    <div>
      <form onSubmit={updateBookCopy}>
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
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditBookCopy;
