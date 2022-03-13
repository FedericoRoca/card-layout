import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardLayout.css";
const CardLayout = ({ data }) => {
  const { job, location } = data;
  return (
    <Card
      className="text-center"
      style={{ width: "18rem", margin: "1rem" }}
    >
      <Card.Body>
        <Card.Text>{location}</Card.Text>
        <Card.Title>{job}</Card.Title>
        <hr />
        <Button variant="primary" className="btn-round-lg">
          APPLY
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardLayout;
