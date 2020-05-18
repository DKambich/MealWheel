import React from "react";
import Navbar from "../components/Navbar";
import { Wheel } from "../components/Wheel";
import WinnerModal from "../components/WinnerModal";
import {
  getWheelData,
  WheelSegment,
  Restaurant,
  DEFAULT_RESTAURANT,
  routes,
} from "../constants";
import { Jumbotron, Container } from "react-bootstrap";

export default function DineIn() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState<Restaurant>(DEFAULT_RESTAURANT);
  const segments = getWheelData("dine_in");

  return (
    <>
      <Navbar activeTab={routes.DINE_IN} />

      {segments.length > 0 && (
        <>
          <h1 className="display-6 text-center">Dine In Wheel</h1>
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
              Sorry no data on Dine In restaurants has been collected yet. Try
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
