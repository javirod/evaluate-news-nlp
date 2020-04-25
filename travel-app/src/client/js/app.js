/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let newDate = d.getFullYear()+'-'+ d.getMonth()+'-'+ d.getDate();

const baseGeonames = 'http://api.geonames.org/searchJSON?q=';
const keyGeonames = '&maxRows=1&username=javirod';

const baseWeatherbit = 'http://api.weatherbit.io/v2.0/forecast/daily?'
const keyWeatherbit = '&key=247ddd2a7d9b4c009e028ad4ee9ff9c0&units=I'

const basePixabay = 'https://pixabay.com/api/?'
const keyPixabay = 'key=16224877-a7edaf1e22b1122a6e45fc93f&q='

// Promise
function performAction(event){
  const city = document.getElementById('city').value
  return(getGeonames(baseGeonames, city, keyGeonames))

  .then(function(result) {
    const citySearch = result.geonames[0].name
    const weatherLat = result.geonames[0].lat
    const weatherLong = result.geonames[0].lng
    const cityEncode = encodeURI(citySearch)
    console.log(cityEncode)

    return(getPixabay(basePixabay, keyPixabay, cityEncode, citySearch, weatherLat, weatherLong))
  })

  .then(function(result) {
    const weatherLat = result.latPix
    const weatherLong = result.lngPix
    const urlImg = result.urlPix
    const city = result.cityPix

    const parseDate = document.getElementById('tripDate').value.split('-')
    const tripDate =  new Date(parseDate[0], parseDate[1]-1, parseDate[2]);
    const diff = Math.ceil((tripDate.getTime() - d.getTime())/(1000 * 3600 * 24))
    let castTimer = diff;

    if (diff < 8) {
      console.log('less than 7 days')
      castTimer = 0
    } else {
      castTimer = 15;
    }
    console.log(parseDate[0])
    const date = `${parseDate[1]}/${parseDate[2]}/${parseDate[0]}`
    console.log(date)
    return(getWeatherbit(baseWeatherbit, keyWeatherbit, weatherLat, weatherLong, city, date, diff, castTimer,urlImg))

  })
  
  .then(function(result) {
    console.log(result)
    const flightData = document.getElementById('flight').value;
    console.log(flightData)
    postData('http://localhost:8081/addData', {
      city: result.cityPost,
      date: result.datePost,
      countDown: result.countPost,
      highTemp: result.highPost,
      lowTemp: result.lowPost,
      weatherDesc: result.descPost,
      url: result.imgPost,
      flight: flightData
    })

  })

  .then(function() {
    updateUI();
  })
};

// Make a GET request to Geonames API

const getGeonames = async (baseGeonames, city, key)=>{
  const apiResponse = await fetch(baseGeonames+city+key)
  try {
    const data = await apiResponse.json();
    // console.log(data)
    console.log('Turn Trip Info on')
    document.getElementById('output').style.display = "flex"
    return data;
  } catch(error) {
    console.log("error", error);
  }
}

//Make a GET request to Pixabay API

const getPixabay = async (basePixabay, keyPixabay, cityEncode, citySearch, weatherLat, weatherLong)=>{
  const apiResponse = await fetch(basePixabay+keyPixabay+cityEncode+'%20city&image_type=photo')
  try {
    const pixData = await apiResponse.json();
    console.log(pixData.hits[0].largeImageURL)
    return({
      cityPix: citySearch,
      urlPix: pixData.hits[0].largeImageURL,
      latPix: weatherLat,
      lngPix: weatherLong
      })
  } catch(error) {
    console.log("error", error);
  }
}

//Make a GET request to Weatherbit API

const getWeatherbit = async (baseWeatherbit, key, lat, long, cityPass, datePass, diffPass, timerPass, imgPass)=>{
  const apiResponse = await fetch(baseWeatherbit+'lat='+lat+'&lon='+long+key)
  try {
    const weatherData = await apiResponse.json();
    // return weatherData;
    return({
      cityPost: cityPass,
      datePost: datePass,
      countPost: diffPass,
      highPost: weatherData.data[timerPass].high_temp,
      lowPost: weatherData.data[timerPass].low_temp,
      descPost: weatherData.data[timerPass].weather.description,
      imgPost: imgPass
      })
  } catch(error) {
    console.log("error", error);
  }
}

// Takes API data and stores it in postData endpoint, future proof to add multiple trips
const postData = async ( url = '', data = {})=>{
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });
  
  try {
    const newData = await response.json();
    return newData;
  } catch(error) {
    console.log("error", error);
  }
}

// Updates the UI based on API data
const updateUI = async () => {
  const request = await fetch('http://localhost:8081/getData');
  try {
    const allData = await request.json();
    console.log(allData);
    let count = allData.length-1;
    document.getElementById('cityPic').src = allData[count].imgServ
    document.getElementById('dynamicData').innerHTML = `<br>My trip to: ${allData[count].cityServ}<br>
      Departing: ${allData[count].dateServ}<br>
      On Flight: ${allData[count].flightServ}<br><br>
      Trip is ${allData[count].countServ} days away<br>
      Typical weather for then is:<br>
      High - ${allData[count].highServ}<br>
      Low - ${allData[count].lowServ}<br>
      ${allData[count].descrServ} throughout the day`;
  } catch(error) {
    console.log('error', error);
  }
};


export { performAction }