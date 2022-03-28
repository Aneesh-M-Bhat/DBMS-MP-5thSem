import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
const AddUser = (props) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();
  const saveUser = async (event) => {
    event.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.post("http://localhost:5000/users", {
      userId: userId,
      userName: userName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    });
    props.getUsers();
    navigate("/");
  };
  return (
    <Card.Body>
      <Form onSubmit={saveUser}>
        <Form.Group className="mb-2" controlId="FormUserId">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Id"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="FormEmailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </Form.Group>
        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Save
        </Button>
      </Form>
    </Card.Body>
  );
};

export default AddUser;
