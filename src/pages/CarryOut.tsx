import React from "react";
import Navbar from "../components/Navbar";
import { Wheel } from "../components/Wheel";
import WinnerModal from "../components/WinnerModal";
import restaurants from "../data/restaurants.json";
import { FixMeLater } from "../constants";

function getFontSize(text: string) {
  if (text.length < 10) return 22;
  if (text.length < 15) return 20;
  if (text.length < 20) return 18;
  return 16;
}

function getWheelData() {
  return restaurants
    .filter((entry) => entry.type === "take_out")
    .map((restaurant) => ({
      fillStyle: restaurant.bgColor,
      text: restaurant.name,
      textFillStyle: restaurant.fontColor,
      textFontSize: getFontSize(restaurant.name),
      lineWidth: 2,
      textOrientation: "horizontal",
      data: restaurant,
    }));
}

export default function CarryOut() {
  const [modalShow, setModalShow] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  return (
    <>
      <Navbar />
      <Wheel
        segments={getWheelData()}
        onSpinEnd={(segment: FixMeLater) => {
          setWinner(segment.data);
          setModalShow(true);
        }}
      />
      <WinnerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        winner={winner}
      />
    </>
  );
}
