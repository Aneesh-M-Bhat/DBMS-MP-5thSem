import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddBookCopy from "./AddBookCopy";
import UpdateBookCopy from "./UpdateBookCopy";

const BookCopies = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [bookCopies, setBookCopies] = useState([]);
  useEffect(() => {
    getBookCopies();
  }, []);
  const getBookCopies = async () => {
    const response = await axios.get("http://localhost:5000/bookcopies");
    setBookCopies(response.data);
  };
  const deleteBookCopy = async (id) => {
    await axios.delete(`http://localhost:5000/bookcopies/${id}`);
    getBookCopies();
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
                deleteBookCopy(id);
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
                  <AddBookCopy
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getBookCopies={getBookCopies}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateBookCopy
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getBookCopies={getBookCopies}
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
                    <th>No Of Copies Available</th>
                    <th>No Of Copies Lent</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {bookCopies.map((bookCopy, index) => (
                    <tr key={bookCopy.id}>
                      <td>{index + 1}</td>
                      <td>{bookCopy.bookId}</td>
                      <td>{bookCopy.noOfCopiesAvailable}</td>
                      <td>{bookCopy.noOfCopiesLent}</td>
                      {activeButton(bookCopy.id)}
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
export default BookCopies;
