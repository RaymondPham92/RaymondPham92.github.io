import React, {useState} from 'react'
import axios from 'axios'


function App() {
  const API_key = 'dbafa9aab1ad78fe793475dee0990fd1'

  const [data, setData] = useState({})
  const [cityName, setCityName] = useState("")
  const [weatherData, setWeatherData] = useState({})

  var lat = 0
  var lon = 0

  // get latitude and longitude from city name
  const geocoding_url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_key}`

  const searchLocation = (event) =>{
    if (cityName === '') {
      return
    }
    axios.get(geocoding_url).then((response) => {
      setData(response.data[0])
      lat = data.lat
      lon = data.lon
      console.log(data)
      const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
      axios.get(weather_url).then((response) => {
        setWeatherData(response.data)
        console.log(weatherData)
        setCityName('')
      })
      
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
          onClick={searchLocation}
        >
          Search
        </button>
      </div>

      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Sydney</p>
          </div>
          <div className='temp'>
            <h1>10°C</h1>
          </div>
          <div className='desc'>
            <p>Clouds</p>
          </div>
        </div>

        <div className='bot'>
          <div className='feels_like'>
            <p className='bold'>15°C</p>
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className='wind'>
            <p className='bold'>10 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
