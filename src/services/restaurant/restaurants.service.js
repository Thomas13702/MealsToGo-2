import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `https://9e8f-2a00-23c6-761b-ba01-ada1-236a-b58d-5baf.ngrok.io/mealstogo-c4b4c/us-central1/placesNearby?location=${location}`
  )
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
// restaurantsRequest()
//   .then(restaurantsTransform)
//   .then((transformedResult) => {})
//   .catch((error) => {
//     console.log("Error message: ", error);
//   });
