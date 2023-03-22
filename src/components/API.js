export const getCityData = (cityName) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "be7aa16224msh4141bc3db3fa21fp1b2af1jsn8984df291939",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  return fetch(
    `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return {
        name: response.data[0].result_object.name,
        country: response.data[0].result_object.ancestors.find((ancestor) => {
          return ancestor.subcategory[0].key === "country";
        }).name,
        id: response.data[0].result_object.location_id,
        image: response.data[0].result_object.photo.images.original.url,
      };
    })
    .catch((err) => console.error(err));
};

export const getFlightsData = (
  passengers,
  departure,
  destination,
  departureDate,
  returnDate
) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47e6d4f5a8msh3bf3f52ec4ae6dfp1b820bjsn8fdebc238bd5",
      "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
    },
  };

  return fetch(
    `https://skyscanner44.p.rapidapi.com/search-extended?adults=${passengers}&origin=${departure}&destination=${destination}&departureDate=${departureDate}&returnDate=${returnDate}&currency=GBP&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response.itineraries.results.map((result) => {
        return {
          airline: result.legs[0].carriers.marketing[0].name,
          departureAirport: result.legs[0].origin.name,
          arrivalAirport: result.legs[0].destination.name,
          departureTime: result.legs[0].departure,
          arrivalTime: result.legs[0].arrival,
          price: result.pricing_options[0].price.amount,
          link: result.deeplink
        };
      });
    })
    .catch((err) => console.error(err));
};

