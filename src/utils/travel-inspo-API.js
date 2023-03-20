let historicalRuins = [  
        "Rome",  
        "Athens",   
        "Cusco",  
        "Teotihuacan",  
        "Angkor Wat",  
        "Bagan",  
        "Petra",  
        "Ephesus",  
        "Palmyra",  
        "Luxor",  
        "Giza",  
        "Jerusalem",  
        "Tikal",  
        "Palenque",  
        "Copan",  
        "Tulum",  
        "Pompeii",  
        "Trier"
    ]


let familyFriendly = [
     "Orlando",  
     "Anaheim",  
     "San Diego",  
     "Tokyo",  
     "Paris",  
     "London",  
     "Sydney",  
     "Vancouver",  
     "Dubai",  
     "Hong Kong",  
     "Singapore",  
     "Oranjestad",  
     "Phuket",  
     "Cancun",  
     "Punta Cana",  
     "Nassau",  
     "Barcelona",  
     "Copenhagen",  
     "Vienna",  
     "Oslo"

]

let outdoorCities = [  
    "Queenstown",  
    "Cape Town",  
    "Vancouver",  
    "Denver",  
    "Queenstown",  
    "Sydney",  
    "Buenos Aires",  
    "Munich",  
    "Rio de Janeiro",  
    "Innsbruck",  
    "Reykjavik",  
    "Salzburg",  
    "Zurich",  
    "San Francisco",  
    "Denver",  
    "Chiang Mai",  
    "Bergen",  
    "Vancouver",  
    "Portland",  
    "Cape Town"
]

let randomHistoricalRuins = Math.floor(Math.random()*outdoorCities.length);
let randomHistoricalCity = historicalRuins[randomHistoricalRuins];

let randomFamilyFriendly = Math.floor(Math.random()*familyFriendly.length);
let randomFamilyCity = familyFriendly[randomFamilyFriendly];

let randomOutdoorCities = Math.floor(Math.random()*outdoorCities.length);
let randomOutdoorCity = outdoorCities[randomOutdoorCities];

export const attractionSuggest = (citySuggest) =>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '47e6d4f5a8msh3bf3f52ec4ae6dfp1b820bjsn8fdebc238bd5',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };
    
    
    fetch(
        `https://travel-advisor.p.rapidapi.com/locations/search?query=${citySuggest}&limit=1&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
        options
        )
        .then((response) => response.json())
        .then((response) => {
            
            let locationId = response.data[0].result_object.location_id
            let cityImage = response.data[0].result_object.photo.images.original.url
            
            return fetch(`https://travel-advisor.p.rapidapi.com/attractions/list?location_id=${locationId}&currency=USD&lang=en_US&lunit=km&sort=recommended`, options)
            .then(response => response.json())
            .then(response => {
                
                console.log(response)
                
                
                
            })})
        };
            
            