import './App.css';
import Footer from './components/Footer';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=4825963ab6ecb37294636312a923d693`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
  }, [lat,long])
  
  return (
    <div className='body'>
    <div className='title'>Weather</div>
      <div className="App">
          {(typeof data.main != 'undefined') ? (
            <Weather weatherData={data}/>
          ): (
            <div>
          Loading
            </div>
            )}
          <div className='footer'>
            <Footer></Footer>
          </div>
      </div>
    </div>
  
  );
}