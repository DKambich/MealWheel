import React from "react";
import {
  Modal,
  Button,
  ModalTitle,
  ModalBody,
  Col,
  Container,
  Image,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

export default function WinnerModal({ onHide, show, winner }) {
  if (!winner) return null;
  let link = "https://www.google.com/maps/dir/?api=1&";
  let query = `travelmode=driving&destination=${winner.location
    .replace(" ", "+")
    .replace(",", "%2C")}`;
  return (
    <Modal
      show={show}
      size="lg"
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton onHide={onHide}>
        <ModalTitle id="contained-modal-title-vcenter">
          {winner.name} was Picked!
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Container>
          <Col className="justify-content-end text-center">
            <Image
              src="https://via.placeholder.com/350"
              rounded
              className="img-fluid img-thumbnail"
            />
            <h1 className="py-4">{winner.name}</h1>
            <a target="_blank" rel="noopener noreferrer" href={link + query}>
              <Button>Get Directions</Button>
            </a>
          </Col>
        </Container>
      </ModalBody>
    </Modal>
  );
}
