import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddSubject from "./AddSubject";
import UpdateSubject from "./UpdateSubject";

const Subjects = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    getSubjects();
  }, []);
  const getSubjects = async () => {
    const response = await axios.get("http://localhost:5000/subjects");
    setSubjects(response.data);
  };
  const deleteSubject = async (id) => {
    await axios.delete(`http://localhost:5000/subjects/${id}`);
    getSubjects();
  };
  const activeButton = (id) => {
    switch (activeComponentLeftCard) {
      case "update":
        return (
          <td>
            <Link to={`/edit/${id}`}>
              <Button
                variant="primary"
                onClick={() => setActiveComponentLeftCard("")}
              >
                UPDATE
              </Button>
            </Link>
          </td>
        );
      case "delete":
        return (
          <td>
            <Button
              variant="primary"
              onClick={() => {
                setActiveComponentLeftCard("");
                deleteSubject(id);
              }}
            >
              DELETE
            </Button>
          </td>
        );
      default:
        return;
    }
  };
  const activeAttribute = () => {
    switch (activeComponentLeftCard) {
      case "update":
        return <th>Click To Update</th>;
      case "delete":
        return <th>Click To Delete</th>;
      default:
        return;
    }
  };
  return (
    <Container fluid>
      <Row className="g-0">
        <Col>
          <Card border="primary" style={{ width: "19vw", height: "90vh" }}>
            <Routes>
              <Route
                path="/"
                element={
                  <CRUDCardBody
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                  />
                }
              />
              <Route
                path="/add"
                element={
                  <AddSubject
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getSubjects={getSubjects}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateSubject
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getSubjects={getSubjects}
                  />
                }
              />
            </Routes>
          </Card>
        </Col>
        <Col>
          <Card border="primary" style={{ width: "78vw", height: "90vh" }}>
            <Card.Body>
              <Card.Title>Table View</Card.Title>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Subject Code</th>
                    <th>Subject Name</th>
                    <th>Book Id</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={subject.id}>
                      <td>{index + 1}</td>
                      <td>{subject.subjectCode}</td>
                      <td>{subject.subjectName}</td>
                      <td>{subject.bookId}</td>
                      {activeButton(subject.id)}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Subjects;
