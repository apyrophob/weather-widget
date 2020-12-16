import React from 'react'
import PropTypes from "prop-types";

import s from './WeatherSearchComponent.module.css';

const WeatherSearchComponent = props => {
    const { getWeather, } = props;

    return (
        <div className={s.searchBox}>
            <form onSubmit={getWeather}>
                <input
                    name="location"
                    type="text"
                    className={s.searchBar}
                    placeholder="Type your City"
                />
            </form>
        </div>
    )
};


WeatherSearchComponent.propTypes = {
    getWeather: PropTypes.func.isRequired,
};

export default WeatherSearchComponent;

