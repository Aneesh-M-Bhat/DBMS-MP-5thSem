import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddPublisher from "./AddPublisher";
import UpdatePublisher from "./UpdatePublisher";

const Books = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [publishers, setPublishers] = useState([]);
  useEffect(() => {
    getPublishers();
  }, []);
  const getPublishers = async () => {
    const response = await axios.get("http://localhost:5000/publishers");
    setPublishers(response.data);
  };
  const deletePublisher = async (id) => {
    await axios.delete(`http://localhost:5000/publishers/${id}`);
    getPublishers();
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
                deletePublisher(id);
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
                  <AddPublisher
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getPublishers={getPublishers}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdatePublisher
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getPublishers={getPublishers}
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
                    <th>Book Id</th>
                    <th>Publisher Name</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {publishers.map((publisher, index) => (
                    <tr key={publisher.id}>
                      <td>{index + 1}</td>
                      <td>{publisher.bookId}</td>
                      <td>{publisher.publisherName}</td>
                      {activeButton(publisher.id)}
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
export default Books;
