/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdatePublisher = (props) => {
  const [bookId, setBookId] = useState("");
  const [publisherName, setPublisherName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editPublisher = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/publishers/${id}`, {
      bookId: bookId,
      publisherName: publisherName,
    });
    props.getPublishers();
    navigate("/");
  };

  useEffect(() => {
    getPublisherById();
  }, []);

  const getPublisherById = async () => {
    const response = await axios.get(`http://localhost:5000/publishers/${id}`);
    setBookId(response.data.bookId);
    setPublisherName(response.data.publisherName);
  };

  return (
    <Card.Body>
      <Form onSubmit={editPublisher}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="FormPublisherName">
          <Form.Label>Publisher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Publisher Name"
            value={publisherName}
            onChange={(e) => setPublisherName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdatePublisher;
