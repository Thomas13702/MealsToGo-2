import camelize from "camelize";
import axios from "axios";

export const locationRequest = async (searchTerm) => {
  return fetch(
    `https://9e8f-2a00-23c6-761b-ba01-ada1-236a-b58d-5baf.ngrok.io/mealstogo-c4b4c/us-central1/geocode?city=${searchTerm}`
  )
    .then(async (res) => {
      const response = await res.json();
      return response;
    })
    .catch((err) => console.log(err));

  // return axios
  //   .get(
  //     `http://localhost:5001/mealstogo-c4b4c/us-central1/geocode?city=${searchTerm}`
  //   )
  //   .then((res) => {
  //     return res.json();
  //   });
};

export const locationTransform = (result) => {
  console.log(result);
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
