let historicalRuins = [  
        "Rome, Italy",  
        "Athens, Greece",  
        "Machu Picchu, Peru", 
        "Cusco, Peru",  
        "Chichen Itza, Mexico",  
        "Teotihuacan, Mexico",  
        "Angkor Wat, Cambodia",  
        "Bagan, Myanmar",  
        "Petra, Jordan",  
        "Ephesus, Turkey",  
        "Palmyra, Syria",  
        "Luxor, Egypt",  
        "Giza, Egypt",  
        "Jerusalem, Israel",  
        "Tikal, Guatemala",  
        "Palenque, Mexico",  
        "Copan, Honduras",  
        "Tulum, Mexico",  
        "Pompeii, Italy",  
        "Trier, Germany"
    ]


let familyFriendly = [
     "Orlando, Florida, USA",  
     "Anaheim, California, USA",  
     "San Diego, California, USA",  
     "Tokyo, Japan",  
     "Paris, France",  
     "London, United Kingdom",  
     "Sydney, Australia",  
     "Vancouver, Canada",  
     "Dubai, United Arab Emirates",  
     "Hong Kong, China",  
     "Singapore",  
     "Oranjestad, Aruba",  
     "Phuket, Thailand",  
     "Cancun, Mexico",  
     "Punta Cana, Dominican Republic",  
     "Nassau, Bahamas",  
     "Barcelona, Spain",  
     "Copenhagen, Denmark",  
     "Vienna, Austria",  
     "Oslo, Norway"

]

let outdoorCities = [  
    "Queenstown, New Zealand",  
    "Cape Town, South Africa",  
    "Vancouver, Canada",  
    "Denver, Colorado, USA",  
    "Queenstown, New Zealand",  
    "Sydney, Australia",  
    "Buenos Aires, Argentina",  
    "Munich, Germany",  
    "Rio de Janeiro, Brazil",  
    "Innsbruck, Austria",  
    "Reykjavik, Iceland",  
    "Salzburg, Austria",  
    "Zurich, Switzerland",  
    "San Francisco, California, USA",  
    "Denver, Colorado, USA",  
    "Chiang Mai, Thailand",  
    "Bergen, Norway",  
    "Vancouver, Canada",  
    "Portland, Oregon, USA",  
    "Cape Town, South Africa"
]


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '47e6d4f5a8msh3bf3f52ec4ae6dfp1b820bjsn8fdebc238bd5',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended', options)
	.then(response => response.json())
	.then(response => console.log(response));

