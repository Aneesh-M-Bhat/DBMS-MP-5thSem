import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BookList = () => {
  const [books, setBook] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/book");
    setBook(response.data);
  };
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/book/${id}`);
    getBooks();
  };
  return (
    <div>
      <Link to="/add" className="button is-primary mt-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>bookId</th>
            <th>bookName</th>
            <th>publishedYear</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <td>{index + 1}</td>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.publishedYear}</td>
              <td>
                <Link
                  to={`/edit/${book.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default BookList;
