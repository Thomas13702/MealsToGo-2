import camelize from "camelize";
import { host } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(`${host}/placesNearby?location=${location}`)
    .then(async (res) => {
      const response = await res.json();
      return response;
    })
    .catch((err) => console.log(err));
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSE_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
