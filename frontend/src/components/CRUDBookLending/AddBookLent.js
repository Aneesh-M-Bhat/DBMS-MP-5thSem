import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddBookLent = (props) => {
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [borrowDate, setBorrowDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();
  const saveBookLent = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/booklending", {
      bookId: bookId,
      userId: userId,
      borrowDate: borrowDate,
      dueDate: dueDate,
    });
    props.getBookLending();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveBookLent}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormUserId">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Id"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormBorrowDate">
          <Form.Label>Borrow Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Borrow Date"
            value={borrowDate}
            onChange={(event) => setBorrowDate(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormDueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Due Date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddBookLent;
