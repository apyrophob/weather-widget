import React from 'react';

function WeatherContentComponent(props) {
    const { weather } = props;
    console.log(weather);
    return (
        <div>
            <div className="city-box">
                <h2 className="city-name">
                    <span>{weather.name}</span>
                    <sup>{weather.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.main.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                    <p>{weather.weather[0].description}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherContentComponent;
