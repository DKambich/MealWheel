import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Wheel } from "./components/Wheel";
import WinnerModal from "./components/WinnerModal";

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

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
