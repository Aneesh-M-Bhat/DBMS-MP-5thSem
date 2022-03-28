/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateProfessor = (props) => {
  const [professorId, setProfessorId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editProfessor = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/professors/${id}`, {
      professorId: professorId,
    });
    props.getProfessors();
    navigate("/");
  };

  useEffect(() => {
    getProfessorById();
  }, []);

  const getProfessorById = async () => {
    const response = await axios.get(`http://localhost:5000/professors/${id}`);
    setProfessorId(response.data.professorId);
  };

  return (
    <Card.Body>
      <Form onSubmit={editProfessor}>
        <Form.Group className="mb-2" controlId="FormBookId">
          <Form.Label>Book Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Book Id"
            value={professorId}
            onChange={(e) => setProfessorId(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateProfessor;
