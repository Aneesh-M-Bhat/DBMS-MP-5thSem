import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddPublisher = (props) => {
  const [bookId, setBookId] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const navigate = useNavigate();
  const savePublisher = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/publishers", {
      bookId: bookId,
      publisherName: publisherName,
    });
    props.getPublishers();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={savePublisher}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormPublisherName">
          <Form.Label>Publisher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Publisher Name"
            value={publisherName}
            onChange={(event) => setPublisherName(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddPublisher;
