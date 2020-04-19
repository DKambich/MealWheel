import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function WinnerModal(props) {
  return (
    <Modal
      show={props.show}
      size="lg"
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onHide={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.winner ? props.winner.toString() : ""}</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
