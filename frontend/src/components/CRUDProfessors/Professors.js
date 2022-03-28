import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddProfessor from "./AddProfessors";
import UpdateProfessor from "./UpdateProfessors";

const Professors = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [professors, setProfessors] = useState([]);
  useEffect(() => {
    getProfessors();
  }, []);
  const getProfessors = async () => {
    const response = await axios.get("http://localhost:5000/professors");
    setProfessors(response.data);
  };
  const deleteProfessors = async (id) => {
    await axios.delete(`http://localhost:5000/professors/${id}`);
    getProfessors();
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
                deleteProfessors(id);
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
                  <AddProfessor
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getProfessors={getProfessors}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateProfessor
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getProfessors={getProfessors}
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
                    <th>Professor Id</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {professors.map((professor, index) => (
                    <tr key={professor.id}>
                      <td>{index + 1}</td>
                      <td>{professor.professorId}</td>
                      {activeButton(professor.id)}
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
export default Professors;
