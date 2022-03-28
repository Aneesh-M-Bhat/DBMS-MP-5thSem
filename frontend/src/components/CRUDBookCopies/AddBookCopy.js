import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddBookCopy = (props) => {
  const [bookId, setBookId] = useState("");
  const [noOfCopiesAvailable, setNoOfCopiesAvailable] = useState("");
  const [noOfCopiesLent, setNoOfCopiesLent] = useState("");
  const navigate = useNavigate();
  const saveBookCopy = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/bookcopies", {
      bookId: bookId,
      noOfCopiesAvailable: noOfCopiesAvailable,
      noOfCopiesLent: noOfCopiesLent,
    });
    props.getBookCopies();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveBookCopy}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormNoOfCopiesAvailable">
          <Form.Label>No Of Copies Available</Form.Label>
          <Form.Control
            type="number"
            placeholder="No Of Copies Available"
            value={noOfCopiesAvailable}
            onChange={(event) => setNoOfCopiesAvailable(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormNoOfCopiesLent">
          <Form.Label>No Of Copies Lent</Form.Label>
          <Form.Control
            type="number"
            placeholder="No Of Copies Lent"
            value={noOfCopiesLent}
            onChange={(event) => setNoOfCopiesLent(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddBookCopy;
