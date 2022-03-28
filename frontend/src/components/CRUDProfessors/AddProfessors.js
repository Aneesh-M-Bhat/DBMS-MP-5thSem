import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddProfessor = (props) => {
  const [professorId, setProfessorId] = useState("");
  const navigate = useNavigate();
  const saveProfessors = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/professors", {
      professorId: professorId,
    });
    props.getProfessors();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveProfessors}>
        <Form.Group className="mb-2" controlId="FormProfessorId">
          <Form.Label>Professor Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Professor Id"
            value={professorId}
            onChange={(event) => setProfessorId(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddProfessor;
