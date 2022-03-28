/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateAuthor = (props) => {
  const [bookId, setBookId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editAuthor = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/authors/${id}`, {
      bookId: bookId,
      authorName: authorName,
    });
    props.getAuthors();
    navigate("/");
  };

  useEffect(() => {
    getAuthorById();
  }, []);

  const getAuthorById = async () => {
    const response = await axios.get(`http://localhost:5000/authors/${id}`);
    setBookId(response.data.bookId);
    setAuthorName(response.data.authorName);
  };

  return (
    <Card.Body>
      <Form onSubmit={editAuthor}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="FormAuthorName">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateAuthor;
