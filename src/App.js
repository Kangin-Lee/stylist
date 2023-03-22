import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import Ootd from './component/Ootd';
import Tpo from './component/Tpo';
import Outfit from './component/Outfit';
import Weather from './component/Weather';
import Colormatch from './component/Colormatch';
import Washing from './component/Washing';
import Survey from './component/Survey';
import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState(null);

  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeather(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <Navbar weather={weather}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/ootd' element={<Ootd />}/>
        <Route path='/tpo' element={<Tpo />}/>
        <Route path='/outfit' element={<Outfit />}/>
        <Route path='/weather' element={<Weather />}/>
        <Route path='/colormatch' element={<Colormatch />}/>
        <Route path='/washing' element={<Washing />}/>
        <Route path='/survey' element={<Survey />}/>
      </Routes>
    </div>
  );
}

export default App;
