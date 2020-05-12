import restaurantJSON from "./data/restaurants.json";

export const restaurants: Restaurant[] = restaurantJSON;

export const routes = {
  HOME: "home",
  CARRY_OUT: "carryout",
  DINE_IN: "dinein",
};

export type FixMeLater = any;

export type Restaurant = {
  name: string;
  type: string;
  cuisine: string;
  bgColor: string;
  fontColor: string;
  logo: string;
  location: string;
};

export type WheelSegment = {
  fillStyle: string;
  text: string;
  textFillStyle: string;
  textFontSize: number;
  lineWidth: number;
  textOrientation: string;
  data: Restaurant;
};

export type WinWheel = {
  animation: any;
  canvas: any;
  rotationAngle: number;
  scaleFactor: number;
  draw: (clearTheCanvas?: boolean) => void;
  startAnimation: () => void;
  stopAnimation: (canCallback?: boolean) => void;
};

export function getFontSize(text: string) {
  if (text.length < 10) return 22;
  if (text.length < 15) return 20;
  if (text.length < 20) return 18;
  return 16;
}

export function getWheelData(type?: string): WheelSegment[] {
  return restaurants
    .filter((entry: Restaurant) => (!type ? true : entry.type === type))
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

declare global {
  interface Window {
    Winwheel: any;
  }
}

window.Winwheel = window.Winwheel || {};

export const DEFAULT_WHEEL: WinWheel = new window.Winwheel({
  canvasId: "dummyCanvas",
  numSegments: 0,
});

export const DEFAULT_RESTAURANT: Restaurant = {
  name: "",
  type: "",
  cuisine: "",
  bgColor: "",
  fontColor: "",
  logo: "placeholder.png",
  location: "",
};
