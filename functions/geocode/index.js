const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock == "true") {
    const locationMock = locationsMock[city.toLowerCase()];

    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: "apiKey",
      },
      timeout: 1000, // milliseconds
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((err) => {
      response.status(400);
      return response.send(err.response.data.error_message);
    });
};
