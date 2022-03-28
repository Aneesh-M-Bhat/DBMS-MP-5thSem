import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import CRUDCardBody from "../CRUDCardBody";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const [activeComponentLeftCard, setActiveComponentLeftCard] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/users/${id}`);
    getUsers();
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
                deleteUser(id);
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
                  <AddUser
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getUsers={getUsers}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <UpdateUser
                    setActiveComponentLeftCard={(str) =>
                      setActiveComponentLeftCard(str)
                    }
                    getUsers={getUsers}
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
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Phone Number</th>
                    <th>Email Address</th>
                    {activeAttribute()}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.userId}</td>
                      <td>{user.userName}</td>
                      <td>{user.phoneNumber}</td>
                      <td>{user.emailAddress}</td>
                      {activeButton(user.id)}
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
export default Users;
