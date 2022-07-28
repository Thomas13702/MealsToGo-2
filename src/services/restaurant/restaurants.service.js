import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSE_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
restaurantRequest()
  .then(restaurantTransform)
  .then((transformedResult) => {
    console.log(transformedResult);
  })
  .catch((error) => {
    console.log("Error message: ", error);
  });
