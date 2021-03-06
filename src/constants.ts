import restaurantJSON from "./data/restaurants.json";

export const restaurants: Restaurant[] = restaurantJSON;

export const routes = {
  HOME: "home",
  CARRY_OUT: "carryout",
  DINE_IN: "dinein",
};

export type FixMeLater = any;

export type Branding = {
  bgColor: string;
  fontColor: string;
  logo: string;
};

export type Restaurant = {
  name: string;
  type: string;
  cuisine: string;
  brand: Branding;
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
  if (text.length < 30) return 14;
  return 12;
}

export function getRestaurantData(type?: string): Restaurant[] {
  return restaurants
    .filter((entry: Restaurant) => (!type ? true : entry.type === type))
    .sort((a, b) => (a.name < b.name ? -1 : 1));
}

export function getWheelData(restaurants: Restaurant[]): WheelSegment[] {
  return restaurants.map((restaurant) => ({
    fillStyle: restaurant.brand.bgColor,
    text: restaurant.name,
    textFillStyle: restaurant.brand.fontColor,
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
  brand: { bgColor: "", fontColor: "", logo: "placeholder.png" },
  location: "",
};
