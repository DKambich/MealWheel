import React from "react";
import Navbar from "../components/Navbar";
import { Wheel } from "../components/Wheel";
import WinnerModal from "../components/WinnerModal";
import {
  WheelSegment,
  getWheelData,
  Restaurant,
  DEFAULT_RESTAURANT,
  routes,
} from "../constants";
import { Container, Jumbotron } from "react-bootstrap";

export default function CarryOut() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState<Restaurant>(DEFAULT_RESTAURANT);
  const segments = getWheelData("take_out");

  return (
    <>
      <Navbar activeTab={routes.CARRY_OUT} />
      {segments.length > 0 && (
        <>
          <h1 className="display-6 text-center">Carry Out Wheel</h1>
          <Wheel
            segments={segments}
            onSpinEnd={(segment: WheelSegment) => {
              setWinner(segment.data);
              setModalShow(true);
            }}
          />
        </>
      )}
      {segments.length === 0 && (
        <Container>
          <Jumbotron className="my-4">
            <h1 className="display-4">Oops No Data Available!</h1>
            <p className="lead">
              Sorry no data on Carry Out restaurants has been collected yet. Try
              again later!
            </p>
          </Jumbotron>
        </Container>
      )}
      <WinnerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        winner={winner}
      />
    </>
  );
}
