import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddSubject = (props) => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [bookId, setBookId] = useState("");
  const navigate = useNavigate();
  const saveSubject = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/subjects", {
      subjectCode: subjectCode,
      subjectName: subjectName,
      bookId: bookId,
    });
    props.getSubjects();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveSubject}>
        <Form.Group className="mb-2" controlId="FormSubjectCode">
          <Form.Label>Subject Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject Code"
            value={subjectCode}
            onChange={(event) => setSubjectCode(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormSubjectName">
          <Form.Label>Subject Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Subject Name"
            value={subjectName}
            onChange={(event) => setSubjectName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={bookId}
            onChange={(event) => setBookId(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddSubject;
