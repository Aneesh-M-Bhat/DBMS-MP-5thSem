import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddBook = (props) => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const navigate = useNavigate();
  const saveBook = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/book", {
      bookId: bookId,
      bookName: bookName,
      publishedYear: publishedYear,
    });
    props.getBooks();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveBook}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Name"
            value={bookName}
            onChange={(event) => setBookName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormPublishedYear">
          <Form.Label>Published Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Published Year"
            value={publishedYear}
            onChange={(event) => setPublishedYear(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddBook;
