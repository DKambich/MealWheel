import React from "react";
import Navbar from "../components/Navbar";
import { Wheel } from "../components/Wheel";
import WinnerModal from "../components/WinnerModal";
import { FixMeLater, getWheelData } from "../constants";
import { Jumbotron, Container } from "react-bootstrap";

export default function DineIn() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  const [segments, setSegments] = React.useState(getWheelData("dine_in"));

  return (
    <>
      <Navbar />
      {segments.length > 0 && (
        <Wheel
          segments={segments}
          onSpinEnd={(segment: FixMeLater) => {
            setWinner(segment.data);
            setModalShow(true);
          }}
        />
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
