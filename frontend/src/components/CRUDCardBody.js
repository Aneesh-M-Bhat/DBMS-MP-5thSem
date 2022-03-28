import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CRUDCardBody = (props) => {
  return (
    <Card.Body>
      <Card.Title>CRUD Functions</Card.Title>
      <Card.Text>
        Click on the various buttons shown below to change the table shown on
        the right.
      </Card.Text>
      <Card.Text>
        Click on{" "}
        <Link to="/add">
          <Button
            variant="primary"
            className="m-1"
            onClick={() => props.setActiveComponentLeftCard("add")}
          >
            ADD
          </Button>
        </Link>{" "}
        to open a form to add a tuple.
      </Card.Text>
      <Card.Text>
        Click on{" "}
        <Button
          variant="warning"
          className="m-1"
          onClick={() => props.setActiveComponentLeftCard("update")}
        >
          UPDATE
        </Button>{" "}
        and select a tuple to update it.
      </Card.Text>
      <Card.Text>
        Click on{" "}
        <Button
          variant="danger"
          className="m-1"
          onClick={() => props.setActiveComponentLeftCard("delete")}
        >
          DELETE
        </Button>{" "}
        and select a tuple to delete it.
      </Card.Text>
    </Card.Body>
  );
};
export default CRUDCardBody;
