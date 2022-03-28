/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";

const UpdateUser = (props) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editUser = async (e) => {
    e.preventDefault();
    props.setActiveComponentLeftCard("");
    await axios.patch(`http://localhost:5000/users/${id}`, {
      userId: userId,
      userName: userName,
      phoneNumber: phoneNumber,
      emailAddress: emailAddress,
    });
    props.getUsers();
    navigate("/");
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setUserId(response.data.userId);
    setUserName(response.data.userName);
    setPhoneNumber(response.data.phoneNumber);
    setEmailAddress(response.data.emailAddress);
  };

  return (
    <Card.Body>
      <Form onSubmit={editUser}>
        <Form.Group>
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="User Id"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </Form.Group>

        <Button type="submit" style={{ width: "100%", marginTop: "2vh" }}>
          Update
        </Button>
      </Form>
    </Card.Body>
  );
};

export default UpdateUser;
