import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const locationRequest = async (searchTerm) => {
  return fetch(`${host}/geocode?city=${searchTerm}&mock=${isMock}`)
    .then(async (res) => {
      const response = await res.json();
      return response;
    })
    .catch((err) => console.log(err));
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
