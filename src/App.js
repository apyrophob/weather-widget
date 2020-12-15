import React, { useState } from 'react';
import axios from "axios";

import './App.css'

import WeatherSearchComponent from './components/WeatherSearch/WeatherSearchComponent';
import WeatherContentComponent from './components/WeatherContent/WeatherContentComponent';

const App = (props) => {

  const [weather, setWeather] = useState('')

  const getWeather = async e => {
    e.preventDefault();
    
    const location = e.target.elements.location.value;

    const API_KEY = 'cfa85b88ced05e26a7f12f385aad547c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data);
  }
  
  return (
    <div>
      <WeatherSearchComponent getWeather={getWeather} />
      {weather && <WeatherContentComponent weather={weather}/>}
    </div>
  );
}
export default App;