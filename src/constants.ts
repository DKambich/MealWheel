import restaurants from "./data/restaurants.json";

export type FixMeLater = any;

export function getFontSize(text: string) {
  if (text.length < 10) return 22;
  if (text.length < 15) return 20;
  if (text.length < 20) return 18;
  return 16;
}

export function getWheelData(restaurantType?: string) {
  return restaurants
    .filter((entry) => (!restaurantType ? true : entry.type === restaurantType))
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
