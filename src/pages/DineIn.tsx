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
  getRestaurantData,
} from "../constants";
import { Jumbotron, Container } from "react-bootstrap";
import SelectListModal from "../components/SelectListModal";

const dineInRestaurants = getRestaurantData("dine_in");

export default function DineIn() {
  const [showWinnerModal, setShowWinnerModal] = React.useState(false);
  const [showSelectModal, setShowSelectModal] = React.useState(false);

  const [winner, setWinner] = React.useState<Restaurant>(DEFAULT_RESTAURANT);
  const [restaurants, setRestaurants] = React.useState(dineInRestaurants);
  const segments = getWheelData(restaurants);

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
              setShowWinnerModal(true);
            }}
            customizeSegments={() => setShowSelectModal(true)}
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
        show={showWinnerModal}
        onHide={() => setShowWinnerModal(false)}
        winner={winner}
      />
      <SelectListModal
        show={showSelectModal}
        allData={dineInRestaurants}
        usedData={restaurants}
        title={"Select Dine In Restaurants"}
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
