import React from 'react';
import PropTypes from 'prop-types'

import s from './WeatherContentComponent.module.css';

const WeatherContentComponent = props => {
    const { weather, } = props;

    return (
        <div className={s.cityBox}>
            <h2 className={s.cityName}>
                <span>{weather.name}</span>
                <sup>{weather.sys.country}</sup>
            </h2>
            <div className={s.cityTemp}>
                {Math.round(weather.main.temp)}
                <sup>&deg;C</sup>
            </div>
            <div className={s.info}>
                <img className={s.cityIcon} src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <p>{weather.weather[0].description}</p>
            </div>
        </div>
    )
}

WeatherContentComponent.propTypes = {
    weather: PropTypes.shape({
        weather: PropTypes.array.isRequired,
    })
};

export default WeatherContentComponent;
