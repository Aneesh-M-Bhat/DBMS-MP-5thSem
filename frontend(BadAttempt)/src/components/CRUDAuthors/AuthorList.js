import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AuthorList = () => {
  const [authors, setAuthor] = useState([]);
  useEffect(() => {
    getAuthors();
  }, []);
  const getAuthors = async () => {
    const response = await axios.get("http://localhost:5000/authors");
    setAuthor(response.data);
  };
  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/authors/${id}`);
    getAuthors();
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
            <th>authorName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={author.id}>
              <td>{index + 1}</td>
              <td>{author.bookId}</td>
              <td>{author.authorName}</td>
              <td>
                <Link
                  to={`/edit/${author.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(author.id)}
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
export default AuthorList;
