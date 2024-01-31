import React, {useState} from 'react'
import axios from 'axios'


function App() {
  const API_key = 'dbafa9aab1ad78fe793475dee0990fd1'
  const city_name ='Sydney'

  // get latitude and longitude from city name
  const geocoding_url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=${API_key}`


  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_key}`


  return (
    <div className="App">
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
            <p>15°C</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>10 km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
