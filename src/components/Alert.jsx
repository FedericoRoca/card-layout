import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function Alert({show,position,handleClose}) {
  return (
    <div>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>{position}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Alert;
