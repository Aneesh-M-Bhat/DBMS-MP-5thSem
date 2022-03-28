/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateSubject = (props) => {
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [bookId, setBookId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editSubject = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/subjects/${id}`, {
      subjectCode: subjectCode,
      subjectName: subjectName,
      bookId: bookId,
    });
    props.getSubjects();
    navigate("/");
  };

  useEffect(() => {
    getSubjectById();
  }, []);

  const getSubjectById = async () => {
    const response = await axios.get(`http://localhost:5000/subjects/${id}`);
    setSubjectCode(response.data.subjectCode);
    setSubjectName(response.data.subjectName);
    setBookId(response.data.bookId);
  };

  return (
    <Card.Body>
      <Form onSubmit={editSubject}>
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
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateSubject;
