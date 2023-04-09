import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Ootd from "./component/pages/Ootd";
import Tpo from "./component/pages/Tpo";
import Outfit from "./component/pages/Outfit";
import Weather from "./component/pages/Weather";
import Colormatch from "./component/pages/Colormatch";
import Washing from "./component/pages/Washing";
import Survey from "./component/pages/Survey";
import {Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import Footer from "./component/Footer";

function App() {
  const [weather, setWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);

  //위치 가져오기
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      getAirPollutionByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getAirPollutionByCurrentLocation = async (lat, lon) => {
    let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&lang=kr&appid=07c8f80150954d942a79882827366bc7&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setAirPollution(data);
  };

  useEffect(() => {
    getCurrentLocation();
    if (airPollution) {
      getAirPollutionByCurrentLocation();
    }
  }, []);

  return (
    <div>
      <Navbar weather={weather} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ootd" element={<Ootd />} />
        <Route path="/tpo" element={<Tpo />} />
        <Route
          path="/outfit"
          element={<Outfit weather={weather} airPollution={airPollution} />}
        />
        <Route path="/weather" element={<Weather />} />
        <Route path="/colormatch" element={<Colormatch />} />
        <Route path="/washing" element={<Washing />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
