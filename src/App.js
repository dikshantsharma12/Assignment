import React, { useState } from "react";
import './App.css';
let weather_data = require('./weather.json');

function App() {
  const [currentDate, setCurrentDate] = useState(0);
  const [buttonShow, setButtonShow] = useState(true);

  let current_weather_detail = (weather_data?.query?.results?.channel?.item?.forecast).filter(function (el) {
    return el.code === weather_data?.query.results?.channel?.item?.condition.code;
  });

  var forecast_data = weather_data?.query?.results?.channel?.item?.forecast
  var theRemovedElement = forecast_data.slice(1)

  const handleChange = (data) => {
    if ((theRemovedElement.length - 2) == data) {
      setButtonShow(false)
    }
    if (theRemovedElement.length == data) {
      return false
    }
    setCurrentDate(data + 1)
  }

  return (
    <div className="container">
      <div className='weather-desc'><span><img src='location.png' height={40} style={{ marginTop: '20px' }} /></span><h1 style={{ textAlign: 'center' }}>{weather_data?.query?.results?.channel?.location?.city} City, {weather_data?.query?.results?.channel?.location?.region}, {weather_data?.query?.results?.channel?.location?.country}</h1>
      </div>

      <div className='weather-desc'><span><img src='date.png' height={25} style={{marginRight: '5px', marginTop: '2px'}}/></span><span><h3 style={{ textAlign: 'center', lineHeight: 0 }}> {current_weather_detail[0]?.day}, {current_weather_detail[0]?.date}</h3></span></div>


      <div className='weather-desc'>
        <span><img src='cloudy_day_night.png' width={55} /></span>
        <span className='weather-desc-text'>{weather_data?.query?.results?.channel?.item?.condition?.text}</span>
      </div>

      <div className='weather-temp'>
        <span>{weather_data?.query?.results?.channel?.item?.condition?.temp}°</span>
      </div>

      <div className='weather-sec'>
        <div className='weather-info temperature'>
          <h3>Temperature</h3>
          <div className='temp-sec'>
            <span><span><img src='high-temp.png' width={20} /></span>{current_weather_detail[0]?.high}°</span>
            <span><span><img src='low-temp.png' width={20} /></span>{current_weather_detail[0]?.low}°</span>
          </div>

        </div>

        <div className='weather-info Details'>
          <h3>Details</h3>
          <span className='detail-sec'><span><img src='wind.png' width={25} /> Wind Speed</span> <span>{weather_data?.query?.results?.channel?.wind?.speed} km/h</span></span><br />
          <span className='detail-sec'><span><img src='humidity.png' width={25} /> Humidity</span> {weather_data?.query?.results?.channel?.atmosphere?.humidity} %</span><br />
          <span className='detail-sec'><span><img src='pressure.png' width={25} /> Pressure</span> {weather_data?.query?.results?.channel?.atmosphere?.pressure} mb</span>
        </div>

        <div className='weather-info sun-desc'>
          <h3>Sunrise & Sunset</h3>
          <div className='temp-sec'>
            <span><img src='sunrise.png' width={50} /></span>
            <span><img src='sunset.png' width={50} /></span>
          </div>
          <div className='temp-sec'>
            <span>{weather_data?.query?.results?.channel?.astronomy?.sunrise}</span>
            <span>{weather_data?.query?.results?.channel?.astronomy?.sunset}</span>
          </div>
        </div>
      </div>

      <div className='forecast-container'>
        <div className='forecast-section'><h2 style={{ textAlign: 'center' }}>Forecast for {weather_data?.query?.results?.channel?.location?.city} City, {weather_data?.query?.results?.channel?.location?.region}, {weather_data?.query?.results?.channel?.location?.country}</h2>
          <p className='forecast-detail'>
            <h3>{theRemovedElement[currentDate]?.day}, {theRemovedElement[currentDate]?.date}</h3>
            <div className='weather-desc'>
              <span><img src='cloudy_day_night.png' width={55} /></span>
              <span className='weather-desc-text'>{theRemovedElement[currentDate]?.text}</span>
            </div>
            <div className='temperature'>
              <div className=''>
                <span style={{ marginRight: '30px' }}><span><img src='high-temp.png' width={20} /></span>{theRemovedElement[currentDate]?.high}°</span>
                <span><span><img src='low-temp.png' width={20} /></span>{theRemovedElement[currentDate]?.low}°</span>
              </div>
            </div>
          </p>
          {buttonShow && <button onClick={() => handleChange(currentDate + 1)} className="button-next">Next Day</button>
          }
        </div>

      </div>
    </div >

  );
}

export default App;
