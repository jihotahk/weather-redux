import axios from 'axios';

const API_KEY = '599849e6048d135ad639a174d2802cb6';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER = 'FETCH_WEATHER';

//q={city name},{country code}

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // resquest is a promise of api request
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}