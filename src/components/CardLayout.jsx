import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "./Alert";
import { useState } from "react";
import "./CardLayout.css";
const CardLayout = ({ data }) => {
  const { job, location } = data;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card
      className="text-center"
      style={{ width: "18rem", margin: "1rem" }}
    >
      <Card.Body className="wrapper">
        <Card.Text>{location}</Card.Text>
        <Card.Title  className="overflow">{job}</Card.Title>
        <hr />
        <Button variant="primary" className="btn-round-lg" onClick={handleShow}>
          APPLY
        </Button>
        <Alert show={show} position={job} handleClose={handleClose}/>
      </Card.Body>
    </Card>
  );
};

export default CardLayout;
