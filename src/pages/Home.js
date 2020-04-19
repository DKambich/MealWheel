import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import WinnerModal from "../components/WinnerModal";
import { Wheel } from "../components/Wheel";

function getWheelData(numEntries) {
  return new Array(numEntries).fill(0).map((val, index) => ({
    fillStyle: getRandomColor(),
    text: `${index}`,
    textOrientation: numEntries > 6 ? "horizontal" : "curved",
  }));
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <Wheel
              segments={getWheelData(5)}
              onSpinEnd={(segment) => {
                setModalShow(true);
                setWinner(segment);
              }}
            />
          </Col>
          <WinnerModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            winner={winner}
          />
        </Row>
      </Container>
    </>
  );
}
