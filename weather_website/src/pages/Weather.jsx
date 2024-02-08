import React, {useState} from 'react'
import axios from 'axios'
import './Weather.css'

export function Weather () {
	const API_key = 'dbafa9aab1ad78fe793475dee0990fd1'

  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState({})
  const [name, setName] = useState("")
  

  const searchLocation = (event) =>{
    if (cityName === '' || cityName === null) {
      return
    }
    const geocoding_url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`
    axios.get(geocoding_url).then((response) => {
      const locationData = response.data[0];
      
      if (locationData) {
        const lat = locationData.lat
        const lon = locationData.lon
        setName(locationData.name)
        console.log(locationData);
        const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
        axios.get(weather_url).then((weatherResponse) => {
          setWeatherData(weatherResponse.data)
          console.log(weatherResponse.data)
          setCityName('')
        })
      }
    }).catch((error) => {
      console.error('Error fetching geocoding data:', error);
    })
  }

  return (
    <div className="App">
      <div className='search'>
        <input
          id='search' 
          value={cityName}
          onChange={event => setCityName(event.target.value)}
          placeholder='Enter city name'
          type='text'
        >
        </input>
        <button 
					className='searchButton'
          onClick={searchLocation}
        >
          Search
        </button>
      </div>

      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{name}</p>
          </div>
          <div className='temp'>
            {weatherData.main ? <h1>{weatherData.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='desc'>
            {weatherData.weather ? <p>{weatherData.weather[0].main}</p> : null}
           
          </div>
        </div>

        {weatherData.name !== undefined &&
          <div className='bot'>
          <div className='feels_like'>
            {weatherData.main ? <p className='bold'>{weatherData.main.feels_like.toFixed()}°C</p> : null }
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {weatherData.main ? <p className='bold'>{weatherData.main.humidity}%</p> : null }
            <p>Humidity</p>
          </div>
          <div className='wind'>
            {weatherData.wind ? <p className='bold'>{weatherData.wind.speed}m/s</p> : null }  
            <p>Wind Speed</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

