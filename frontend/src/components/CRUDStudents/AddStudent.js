import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddStudent = (props) => {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();
  const saveStudent = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/students", {
      studentId: studentId,
    });
    props.getStudents();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveStudent}>
        <Form.Group className="mb-2" controlId="FormStudentId">
          <Form.Label>Student Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student Id"
            value={studentId}
            onChange={(event) => setStudentId(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddStudent;
