/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateBook = (props) => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editBook = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/book/${id}`, {
      bookId: bookId,
      bookName: bookName,
      publishedYear: publishedYear,
    });
    props.getBooks();
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
    <Card.Body>
      <Form onSubmit={editBook}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="FormBookName">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormPublishedYear">
          <Form.Label>Published Year</Form.Label>
          <Form.Control
            type="number"
            placeholder="Published Year"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateBook;
