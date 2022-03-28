import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddBookLent from "./AddBookLent";
import UpdateBookLent from "./UpdateBookLent";

const BookLending = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [bookLending, setBookLending] = useState([]);
  useEffect(() => {
    getBookLending();
  }, []);
  const getBookLending = async () => {
    const response = await axios.get("http://localhost:5000/booklending");
    setBookLending(response.data);
  };
  const deleteBookLent = async (id) => {
    await axios.delete(`http://localhost:5000/booklending/${id}`);
    getBookLending();
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
                deleteBookLent(id);
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
                  <AddBookLent
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getBookLending={getBookLending}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateBookLent
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getBookLending={getBookLending}
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
                    <th>User Id</th>
                    <th>Borrow Date</th>
                    <th>Due Date</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {bookLending.map((bookLent, index) => (
                    <tr key={bookLent.id}>
                      <td>{index + 1}</td>
                      <td>{bookLent.bookId}</td>
                      <td>{bookLent.userId}</td>
                      <td>{bookLent.borrowDate}</td>
                      <td>{bookLent.dueDate}</td>
                      {activeButton(bookLent.id)}
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
export default BookLending;
