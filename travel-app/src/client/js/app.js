/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


function performAction(event){
  const zipValue = document.getElementById('zip').value
  getWeather(baseURL,zipValue, apiKey)
  
  .then(function(newData) {
    const newFeelings =  document.getElementById('feelings').value;
    postData('http://localhost:8081/addData', {temperature: newData.main.temp, date: newDate, userResponse: newFeelings});
  })

  .then(function() {
    updateUI();
  })
};

// Make a GET request to weather API

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=81ceed59d612f527d142d8800b3d59fc';

const getWeather = async (baseURL, zipNum, key)=>{
  const apiResponse = await fetch(baseURL+zipNum+'&units=imperial'+key)
  try {
    const data = await apiResponse.json();
    // console.log(data)
    return data;
  } catch(error) {
    console.log("error", error);
  }
}

// Takes weather API data and stores it in postData endpoint
const postData = async ( url = '', data = {})=>{
  console.log(data);
  const response = await fetch(url, {
    method: 'POST',
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
    document.getElementById('date').innerHTML = allData[count].date;
    document.getElementById('temp').innerHTML = allData[count].temperature + ' Fahrenheit';
    document.getElementById('content').innerHTML = allData[count].userResponse;
  } catch(error) {
    console.log('error', error);
  }
};


export { performAction }