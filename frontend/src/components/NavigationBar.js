import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

export default function NavigationBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={() => props.setActiveComponent(0.0)}>
          BookBytes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => props.setActiveComponent(0.0)}>
              Home
            </Nav.Link> */}

            <NavDropdown title="Books">
              <NavDropdown.Item onClick={() => props.setActiveComponent(1.1)}>
                List of Books
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(1.2)}>
                Authors
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(1.3)}>
                Publishers
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(1.4)}>
                Lent Books
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(1.5)}>
                No. of Copies of Books
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Users">
              <NavDropdown.Item onClick={() => props.setActiveComponent(2.1)}>
                List of Users
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(2.2)}>
                List of Students
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => props.setActiveComponent(2.3)}>
                List of Teachers/Professors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => props.setActiveComponent(3.0)}>
              Subjects
            </Nav.Link>
            {/* <Nav.Link onClick={() => props.setActiveComponent(4.0)}>
              E-Library?
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
