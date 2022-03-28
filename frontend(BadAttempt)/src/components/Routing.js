import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./CRUDBook/BookList";
import AddBook from "./CRUDBook/AddBook";
import EditBook from "./CRUDBook/EditBook";

import AuthorList from "./CRUDAuthors/AuthorList";
import AddAuthor from "./CRUDAuthors/AddAuthor";
import EditAuthor from "./CRUDAuthors/EditAuthor";
export default function tables() {
  return (
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<BookList />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route path="/" element={<AuthorList />} />
              <Route path="/add" element={<AddAuthor />} />
              <Route path="/edit/:id" element={<EditAuthor />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
