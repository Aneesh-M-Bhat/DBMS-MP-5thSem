import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddAuthor from "./AddAuthor";
import UpdateAuthor from "./UpdateAuthor";

const Authors = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthors();
  }, []);
  const getAuthors = async () => {
    const response = await axios.get("http://localhost:5000/authors");
    setAuthors(response.data);
  };
  const deleteAuthor = async (id) => {
    await axios.delete(`http://localhost:5000/authors/${id}`);
    getAuthors();
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
                deleteAuthor(id);
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
                  <AddAuthor
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getAuthors={getAuthors}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateAuthor
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getAuthors={getAuthors}
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
                    <th>Author Name</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {authors.map((author, index) => (
                    <tr key={author.id}>
                      <td>{index + 1}</td>
                      <td>{author.bookId}</td>
                      <td>{author.authorName}</td>
                      {activeButton(author.id)}
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
export default Authors;
