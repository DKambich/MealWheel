import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { Wheel } from "../components/Wheel";
import WinnerModal from "../components/WinnerModal";
import restaurants from "../data/restaurants.json";

function getWheelData() {
  return restaurants
    .filter((entry) => entry.type === "take_out")
    .map((restaurant) => ({
      fillStyle: restaurant.bgColor,
      text: restaurant.name,
      textFillStyle: restaurant.fontColor,
      textOrientation: "horizontal",
    }));
}

export default function CarryOut() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <Wheel
              segments={getWheelData()}
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
