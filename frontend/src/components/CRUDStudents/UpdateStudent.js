/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateStudent = (props) => {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editStudent = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/students/${id}`, {
      studentId: studentId,
    });
    props.getStudents();
    navigate("/");
  };

  useEffect(() => {
    getStudentById();
  }, []);

  const getStudentById = async () => {
    const response = await axios.get(`http://localhost:5000/students/${id}`);
    setStudentId(response.data.studentId);
  };

  return (
    <Card.Body>
      <Form onSubmit={editStudent}>
        <Form.Group className="mb-2" controlId="FormStudentId">
          <Form.Label>Student Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student Id"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateStudent;
