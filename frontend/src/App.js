import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Books from "./components/CRUDBook/Books";
import Authors from "./components/CRUDAuthors/Authors";
import Publishers from "./components/CRUDPublishers/Publishers";
import BookLending from "./components/CRUDBookLending/BookLending";
import BookCopies from "./components/CRUDBookCopies/BookCopies";
import Users from "./components/CRUDUsers/Users";
import Students from "./components/CRUDStudents/Students";
import Subjects from "./components/CRUDSubjects/Subjects";
import Professors from "./components/CRUDProfessors/Professors";
export default function App() {
  const [activeComponent, setActiveComponent] = useState(1.1);
  const ActiveComponent = () => {
    switch (activeComponent) {
      // case 0.0:
      //   return <Home />;
      case 1.1:
        return <Books />;
      case 1.2:
        return <Authors />;
      case 1.3:
        return <Publishers />;
      case 1.4:
        return <BookLending />;
      case 1.5:
        return <BookCopies />;
      case 2.1:
        return <Users />;
      case 2.2:
        return <Students />;
      case 2.3:
        return <Professors />;
      case 3.0:
        return <Subjects />;
      default:
        return;
      // return <div>Something Wrong Happened!!!!!!!!!</div>;
    }
  };
  return (
    <Router>
      <NavigationBar setActiveComponent={(num) => setActiveComponent(num)} />
      {ActiveComponent()}
      {/* <Container fluid>s
        <Row className="g-0">
          <Col>
            <Cards
              width="19vw"
              type="buttons"
              activeComponent={activeComponent}
            />
          </Col>
          <Col>
            <Cards
              width="78vw"
              type="table"
              activeComponent={activeComponent}
            />
          </Col>
        </Row>
      </Container> */}
    </Router>
  );
}
