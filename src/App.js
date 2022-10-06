import './App.css';
let weather_data = require('./weather.json');

function App() {
  let current_weather_detail = (weather_data?.query?.results?.channel?.item?.forecast).filter(function (el) {
    return el.code === weather_data?.query.results?.channel?.item?.condition.code;
  });

  return (
    <div className="container">
      <div className='weather-desc'><span><img src='location.png' height={40} style={{ marginTop: '20px' }} /></span><h1 style={{ textAlign: 'center' }}>{weather_data?.query?.results?.channel?.location?.city} City, {weather_data?.query?.results?.channel?.location?.region}, {weather_data?.query?.results?.channel?.location?.country}</h1></div>


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
    </div>

  );
}

export default App;
