// Taking a city name and returning a very big object containing some relevant city data.
export const getCityData = (cityName) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "be7aa16224msh4141bc3db3fa21fp1b2af1jsn8984df291939",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  // Using fetch to make an API request with the city name.
  return fetch(
    `https://travel-advisor.p.rapidapi.com/locations/search?query=${cityName}&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      // Extracting relevant city data from the response and return it as an smaller object.
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
