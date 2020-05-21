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
  getRestaurantData,
} from "../constants";
import { Container, Jumbotron, Button } from "react-bootstrap";
import SelectListModal from "../components/SelectListModal";

const carryOutRestaurants = getRestaurantData("carry_out");
export default function CarryOut() {
  const [showWinnerModal, setShowWinnerModal] = React.useState(false);
  const [showSelectModal, setShowSelectModal] = React.useState(false);
  const [restaurants, setRestaurants] = React.useState(carryOutRestaurants);
  const [winner, setWinner] = React.useState(DEFAULT_RESTAURANT);
  const segments = getWheelData(restaurants);

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
              setShowWinnerModal(true);
            }}
          />
        </>
      )}
      <Button onClick={() => setShowSelectModal(true)}>Test</Button>
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
        show={showWinnerModal}
        onHide={() => setShowWinnerModal(false)}
        winner={winner}
      />
      <SelectListModal
        show={showSelectModal}
        allData={carryOutRestaurants}
        usedData={restaurants}
        renderItem={(val: Restaurant) => {
          return <>{val.name}</>;
        }}
        onHide={(cancelled, data) => {
          setShowSelectModal(false);
          if (!cancelled && data) setRestaurants(data);
        }}
        validateData={(data) => data.length >= 2}
        getValidationError={(data) =>
          data.length <= 2 ? "Must have 2 or more restaurants selected!" : ""
        }
      />
    </>
  );
}
