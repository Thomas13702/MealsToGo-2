const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  // console.log(city);
  const locationMock = locationsMock[city.toLowerCase()];

  response.json(locationMock);
};
