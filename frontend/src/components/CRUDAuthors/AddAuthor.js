import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddAuthor = (props) => {
  const [bookId, setBookId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const saveAuthor = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/authors", {
      bookId: bookId,
      authorName: authorName,
    });
    props.getAuthors();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveAuthor}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormAuthorName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(event) => setAuthorName(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddAuthor;
