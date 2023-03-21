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
  departureDate
) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "be7aa16224msh4141bc3db3fa21fp1b2af1jsn8984df291939",
      "X-RapidAPI-Host": "skyscanner44.p.rapidapi.com",
    },
  };

  return fetch(
    `https://skyscanner44.p.rapidapi.com/search-extended?adults=${passengers}&origin=${departure}&destination=${destination}&departureDate=${departureDate}&currency=GBP&stops=0%2C1%2C2&duration=50&startFrom=00%3A00&arriveTo=23%3A59&returnStartFrom=00%3A00&returnArriveTo=23%3A59`,
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
        };
      });
    })
    .catch((err) => console.error(err));
};

// {
//   "itineraries": {
//       "results": [
//           {
//               "id": "13554-2303241905--32222-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241905--32222-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1035,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:05:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32222,
//                                   "name": "Iberia"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241905-2303242235--32222",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:05:00",
//                               "arrival": "2023-03-24T22:35:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "3173",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32222",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "6833",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "iber",
//                               "name": "Iberia",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 2.98,
//                               "feedback_count": 1052,
//                               "rating_breakdown": {
//                                   "reliable_prices": 3.224548,
//                                   "clear_extra_fees": 4.000232,
//                                   "customer_service": 5,
//                                   "ease_of_booking": 3.224548,
//                                   "other": 1.466332
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 674.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:18",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/iber/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32222%7C3173%7C13554%7C2023-03-24T19%3A05%7C13870%7C2023-03-24T22%3A35%7C150%7CVLNF60B6%7CV%7CYR2GBA1%3Bflight%7C-32222%7C6833%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CYR2GBA1&carriers=-32222&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=674.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A18&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241905--32222-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241545--32480-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241545--32480-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1235,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T15:45:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32480,
//                                   "name": "British Airways"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241545-2303241915--32480",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T15:45:00",
//                               "arrival": "2023-03-24T19:15:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "7067",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32480",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "4289",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "ba__",
//                               "name": "British Airways",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 4.25,
//                               "feedback_count": 13546,
//                               "rating_breakdown": {
//                                   "reliable_prices": 4.622984,
//                                   "clear_extra_fees": 4.600808,
//                                   "customer_service": 4.994156,
//                                   "ease_of_booking": 4.469772,
//                                   "other": 3.321472
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 587.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:17",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/ba__/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32480%7C7067%7C13554%7C2023-03-24T15%3A45%7C13870%7C2023-03-24T19%3A15%7C150%7CVLNF60B6%7CV%7CStandard%3Bflight%7C-32480%7C4289%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CBasic&carriers=-32480&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=587.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A17&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241545--32480-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241940--32480-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241940--32480-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1000,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:40:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32480,
//                                   "name": "British Airways"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241940-2303242310--32480",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:40:00",
//                               "arrival": "2023-03-24T23:10:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "7065",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32480",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "4289",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "trup",
//                               "name": "travelup",
//                               "is_carrier": false,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 3.7,
//                               "feedback_count": 18853,
//                               "rating_breakdown": {
//                                   "reliable_prices": 3.788712,
//                                   "clear_extra_fees": 4.433808,
//                                   "customer_service": 4.8884,
//                                   "ease_of_booking": 4.005192,
//                                   "other": 2.691152
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 584.22,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:21",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/trup/1/13554.16137.2023-03-24/air/trava/flights?itinerary=flight%7C-32480%7C7065%7C13554%7C2023-03-24T19%3A40%7C13870%7C2023-03-24T23%3A10%7C150%7C-%7C-%7C-%3Bflight%7C-32480%7C4289%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7C-%7C-%7C-&carriers=-32480&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=584.22&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A21&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241940--32480-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241710--32480-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241710--32480-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1150,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T17:10:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32480,
//                                   "name": "British Airways"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241710-2303242040--32480",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T17:10:00",
//                               "arrival": "2023-03-24T20:40:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "7061",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32480",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "4289",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "ba__",
//                               "name": "British Airways",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 4.25,
//                               "feedback_count": 13546,
//                               "rating_breakdown": {
//                                   "reliable_prices": 4.622984,
//                                   "clear_extra_fees": 4.600808,
//                                   "customer_service": 4.994156,
//                                   "ease_of_booking": 4.469772,
//                                   "other": 3.321472
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 587.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:17",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/ba__/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32480%7C7061%7C13554%7C2023-03-24T17%3A10%7C13870%7C2023-03-24T20%3A40%7C150%7CVLNF60B6%7CV%7CStandard%3Bflight%7C-32480%7C4289%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CBasic&carriers=-32480&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=587.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A17&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241710--32480-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241945--32677-1-16137-2303250940",
//               "legs": [
//                   {
//                       "id": "13554-2303241945--32677-1-16137-2303250940",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1015,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:45:00",
//                       "arrival": "2023-03-25T09:40:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32677,
//                                   "name": "Air France"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-10413-2303241945-2303242205--32677",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "CDG",
//                                   "parent": {
//                                       "flightPlaceId": "PAR",
//                                       "name": "Paris",
//                                       "type": "City"
//                                   },
//                                   "name": "Paris Charles de Gaulle",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:45:00",
//                               "arrival": "2023-03-24T22:05:00",
//                               "durationInMinutes": 80,
//                               "flightNumber": "1181",
//                               "marketingCarrier": {
//                                   "id": -32677,
//                                   "name": "Air France",
//                                   "alternate_di": "AF",
//                                   "allianceId": -31998
//                               },
//                               "operatingCarrier": {
//                                   "id": -32677,
//                                   "name": "Air France",
//                                   "alternate_di": "AF",
//                                   "allianceId": -31998
//                               }
//                           },
//                           {
//                               "id": "10413-16137-2303242320-2303250940--32677",
//                               "origin": {
//                                   "flightPlaceId": "CDG",
//                                   "parent": {
//                                       "flightPlaceId": "PAR",
//                                       "name": "Paris",
//                                       "type": "City"
//                                   },
//                                   "name": "Paris Charles de Gaulle",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:20:00",
//                               "arrival": "2023-03-25T09:40:00",
//                               "durationInMinutes": 860,
//                               "flightNumber": "406",
//                               "marketingCarrier": {
//                                   "id": -32677,
//                                   "name": "Air France",
//                                   "alternate_di": "AF",
//                                   "allianceId": -31998
//                               },
//                               "operatingCarrier": {
//                                   "id": -32677,
//                                   "name": "Air France",
//                                   "alternate_di": "AF",
//                                   "allianceId": -31998
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "ctuk",
//                               "name": "Trip.com",
//                               "is_carrier": false,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 4.13,
//                               "feedback_count": 67884,
//                               "rating_breakdown": {
//                                   "reliable_prices": 4.084108,
//                                   "clear_extra_fees": 4.606664,
//                                   "customer_service": 4.99456,
//                                   "ease_of_booking": 4.503012,
//                                   "other": 3.316636
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 790.4,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:22",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/ctuk/1/13554.16137.2023-03-24/air/trava/flights?itinerary=flight%7C-32677%7C1181%7C13554%7C2023-03-24T19%3A45%7C10413%7C2023-03-24T22%3A05%7C80%7C-%7C-%7C-%3Bflight%7C-32677%7C406%7C10413%7C2023-03-24T23%3A20%7C16137%7C2023-03-25T09%3A40%7C860%7C-%7C-%7C-&carriers=-32677&operators=-32677%3B-32677&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=790.40&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A22&pqid=true"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241945--32677-1-16137-2303250940?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241905--32480-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241905--32480-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1035,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:05:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32480,
//                                   "name": "British Airways"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241905-2303242235--32480",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:05:00",
//                               "arrival": "2023-03-24T22:35:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "7051",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32480",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "4289",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "ba__",
//                               "name": "British Airways",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 4.25,
//                               "feedback_count": 13546,
//                               "rating_breakdown": {
//                                   "reliable_prices": 4.622984,
//                                   "clear_extra_fees": 4.600808,
//                                   "customer_service": 4.994156,
//                                   "ease_of_booking": 4.469772,
//                                   "other": 3.321472
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 587.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:17",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/ba__/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32480%7C7051%7C13554%7C2023-03-24T19%3A05%7C13870%7C2023-03-24T22%3A35%7C150%7CVLNF60B6%7CV%7CStandard%3Bflight%7C-32480%7C4289%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CBasic&carriers=-32480&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=587.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A17&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241905--32480-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241940--32222-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241940--32222-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1000,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:40:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32222,
//                                   "name": "Iberia"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241940-2303242310--32222",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:40:00",
//                               "arrival": "2023-03-24T23:10:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "3179",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32222",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "6833",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "iber",
//                               "name": "Iberia",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 2.98,
//                               "feedback_count": 1052,
//                               "rating_breakdown": {
//                                   "reliable_prices": 3.224548,
//                                   "clear_extra_fees": 4.000232,
//                                   "customer_service": 5,
//                                   "ease_of_booking": 3.224548,
//                                   "other": 1.466332
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 674.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:18",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/iber/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32222%7C3179%7C13554%7C2023-03-24T19%3A40%7C13870%7C2023-03-24T23%3A10%7C150%7CVLNF60B6%7CV%7CYR2GBA1%3Bflight%7C-32222%7C6833%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CYR2GBA1&carriers=-32222&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=674.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A18&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241940--32222-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303242035--31697,-32115-1-16137-2303251105",
//               "legs": [
//                   {
//                       "id": "13554-2303242035--31697,-32115-1-16137-2303251105",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1050,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T20:35:00",
//                       "arrival": "2023-03-25T11:05:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -31697,
//                                   "name": "Virgin Atlantic"
//                               },
//                               {
//                                   "id": -32115,
//                                   "name": "LATAM Airlines"
//                               }
//                           ],
//                           "operating": [
//                               {
//                                   "id": -31222,
//                                   "name": "LATAM Airlines"
//                               },
//                               {
//                                   "id": -32115,
//                                   "name": "LATAM Airlines"
//                               }
//                           ],
//                           "operationType": "partially_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-11952-2303242035-2303250525--31697",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "GRU",
//                                   "parent": {
//                                       "flightPlaceId": "SAO",
//                                       "name": "Sao Paulo",
//                                       "type": "City"
//                                   },
//                                   "name": "Sao Paulo Guarulhos",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T20:35:00",
//                               "arrival": "2023-03-25T05:25:00",
//                               "durationInMinutes": 710,
//                               "flightNumber": "7700",
//                               "marketingCarrier": {
//                                   "id": -31697,
//                                   "name": "Virgin Atlantic",
//                                   "alternate_di": "VS"
//                               },
//                               "operatingCarrier": {
//                                   "id": -31222,
//                                   "name": "LATAM Airlines",
//                                   "alternate_di": "JJ"
//                               }
//                           },
//                           {
//                               "id": "11952-16137-2303250655-2303251105--32115",
//                               "origin": {
//                                   "flightPlaceId": "GRU",
//                                   "parent": {
//                                       "flightPlaceId": "SAO",
//                                       "name": "Sao Paulo",
//                                       "type": "City"
//                                   },
//                                   "name": "Sao Paulo Guarulhos",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-25T06:55:00",
//                               "arrival": "2023-03-25T11:05:00",
//                               "durationInMinutes": 250,
//                               "flightNumber": "701",
//                               "marketingCarrier": {
//                                   "id": -32115,
//                                   "name": "LATAM Airlines",
//                                   "alternate_di": "LA"
//                               },
//                               "operatingCarrier": {
//                                   "id": -32115,
//                                   "name": "LATAM Airlines",
//                                   "alternate_di": "LA"
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "xpuk",
//                               "name": "Expedia",
//                               "is_carrier": false,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 2.6,
//                               "feedback_count": 7371,
//                               "rating_breakdown": {
//                                   "reliable_prices": 2.174432,
//                                   "clear_extra_fees": 4.065268,
//                                   "customer_service": 5,
//                                   "ease_of_booking": 2.36672,
//                                   "other": 1.787184
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 661.81,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:23",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/xpuk/1/13554.16137.2023-03-24/air/trava/flights?itinerary=flight%7C-31697%7C7700%7C13554%7C2023-03-24T20%3A35%7C11952%7C2023-03-25T05%3A25%7C710%7CML00BCSC%7CM%7C-%3Bflight%7C-32115%7C701%7C11952%7C2023-03-25T06%3A55%7C16137%7C2023-03-25T11%3A05%7C250%7CML00BCSC%7CL%7C-&carriers=-31697%2C-32115&operators=-31222%3B-32115&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=661.81&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A23&pqid=true"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303242035--31697,-32115-1-16137-2303251105?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241940--32480,-32222-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241940--32480,-32222-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1000,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T19:40:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32480,
//                                   "name": "British Airways"
//                               },
//                               {
//                                   "id": -32222,
//                                   "name": "Iberia"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241940-2303242310--32480",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T19:40:00",
//                               "arrival": "2023-03-24T23:10:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "7065",
//                               "marketingCarrier": {
//                                   "id": -32480,
//                                   "name": "British Airways",
//                                   "alternate_di": "BA",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32222",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "6833",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "carl",
//                               "name": "Carlton Leisure",
//                               "is_carrier": false,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 3.83,
//                               "feedback_count": 3075,
//                               "rating_breakdown": {
//                                   "reliable_prices": 3.859532,
//                                   "clear_extra_fees": 4.276568,
//                                   "customer_service": 5,
//                                   "ease_of_booking": 4.43402,
//                                   "other": 2.744592
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 716.37,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:21",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/carl/1/13554.16137.2023-03-24/air/trava/flights?itinerary=flight%7C-32480%7C7065%7C13554%7C2023-03-24T19%3A40%7C13870%7C2023-03-24T23%3A10%7C150%7C-%7C-%7C-%3Bflight%7C-32222%7C6833%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7C-%7C-%7C-&carriers=-32480%2C-32222&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=716.37&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A21&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241940--32480,-32222-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           },
//           {
//               "id": "13554-2303241710--32222-1-16137-2303250920",
//               "legs": [
//                   {
//                       "id": "13554-2303241710--32222-1-16137-2303250920",
//                       "origin": {
//                           "id": 13554,
//                           "name": "London Heathrow",
//                           "displayCode": "LHR"
//                       },
//                       "destination": {
//                           "id": 16137,
//                           "name": "Santiago Arturo Merino Benitez",
//                           "displayCode": "SCL"
//                       },
//                       "durationInMinutes": 1150,
//                       "stopCount": 1,
//                       "isSmallestStops": true,
//                       "departure": "2023-03-24T17:10:00",
//                       "arrival": "2023-03-25T09:20:00",
//                       "timeDeltaInDays": 0,
//                       "carriers": {
//                           "marketing": [
//                               {
//                                   "id": -32222,
//                                   "name": "Iberia"
//                               }
//                           ],
//                           "operationType": "fully_operated"
//                       },
//                       "segments": [
//                           {
//                               "id": "13554-13870-2303241710-2303242040--32222",
//                               "origin": {
//                                   "flightPlaceId": "LHR",
//                                   "parent": {
//                                       "flightPlaceId": "LON",
//                                       "name": "London",
//                                       "type": "City"
//                                   },
//                                   "name": "London Heathrow",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T17:10:00",
//                               "arrival": "2023-03-24T20:40:00",
//                               "durationInMinutes": 150,
//                               "flightNumber": "3171",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           },
//                           {
//                               "id": "13870-16137-2303242359-2303250920--32222",
//                               "origin": {
//                                   "flightPlaceId": "MAD",
//                                   "parent": {
//                                       "flightPlaceId": "MAD",
//                                       "name": "Madrid",
//                                       "type": "City"
//                                   },
//                                   "name": "Madrid",
//                                   "type": "Airport"
//                               },
//                               "destination": {
//                                   "flightPlaceId": "SCL",
//                                   "parent": {
//                                       "flightPlaceId": "SCL",
//                                       "name": "Santiago",
//                                       "type": "City"
//                                   },
//                                   "name": "Santiago Arturo Merino Benitez",
//                                   "type": "Airport"
//                               },
//                               "departure": "2023-03-24T23:59:00",
//                               "arrival": "2023-03-25T09:20:00",
//                               "durationInMinutes": 801,
//                               "flightNumber": "6833",
//                               "marketingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               },
//                               "operatingCarrier": {
//                                   "id": -32222,
//                                   "name": "Iberia",
//                                   "alternate_di": "IB",
//                                   "allianceId": -32000
//                               }
//                           }
//                       ]
//                   }
//               ],
//               "pricing_options": [
//                   {
//                       "agents": [
//                           {
//                               "id": "iber",
//                               "name": "Iberia",
//                               "is_carrier": true,
//                               "update_status": "pending",
//                               "optimised_for_mobile": true,
//                               "live_update_allowed": true,
//                               "rating_status": "available",
//                               "rating": 2.98,
//                               "feedback_count": 1052,
//                               "rating_breakdown": {
//                                   "reliable_prices": 3.224548,
//                                   "clear_extra_fees": 4.000232,
//                                   "customer_service": 5,
//                                   "ease_of_booking": 3.224548,
//                                   "other": 1.466332
//                               }
//                           }
//                       ],
//                       "price": {
//                           "amount": 674.88,
//                           "update_status": "pending",
//                           "last_updated": "2023-03-21T01:28:18",
//                           "quote_age": 1253
//                       },
//                       "url": "https://www.skyscanner.net/transport_deeplink/4.0/UK/en-GB/GBP/iber/1/13554.16137.2023-03-24/air/airli/flights?itinerary=flight%7C-32222%7C3171%7C13554%7C2023-03-24T17%3A10%7C13870%7C2023-03-24T20%3A40%7C150%7CVLNF60B6%7CV%7CYR2GBA1%3Bflight%7C-32222%7C6833%7C13870%7C2023-03-24T23%3A59%7C16137%7C2023-03-25T09%3A20%7C801%7CVLNF60B6%7CV%7CYR2GBA1&carriers=-32222&operators=-32222%3B-32222&passengers=1&channel=website&cabin_class=economy&facilitated=false&ticket_price=674.88&is_npt=false&is_multipart=false&client_id=skyscanner_website&q_sources=JACQUARD&commercial_filters=false&q_datetime_utc=2023-03-21T01%3A28%3A18&pqid=false"
//                   }
//               ],
//               "deeplink": "https://www.skyscanner.net/transport/flights/lhr/scl/230324/config/13554-2303241710--32222-1-16137-2303250920?adults=1&adultsv2=1&cabinclass=economy&children=0&childrenv2=&destinationentityid=27546274&originentityid=27544008&inboundaltsenabled=false&infants=0&outboundaltsenabled=false&preferdirects=false&ref=home&rtn=0"
//           }
//       ]
//   },
//   "context": {
//       "status": "incomplete",
//       "sessionId": "dbc5db6b-f0d7-4304-8a75-ad8e08bab49d"
//   }
// }
