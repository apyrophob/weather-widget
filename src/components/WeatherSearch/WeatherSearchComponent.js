import React from 'react'

function WeatherSearchComponent(props) {
    const { getWeather } = props;

    return (
        <div className="main-container">
            <div className="search-box">
                <form onSubmit={getWeather}>
                    <input
                        name="location"
                        type="text"
                        className="search-bar"
                        placeholder="Type your City"
                    />
                    <button className="seacrh-box">Search</button>
                </form>
            </div>
        </div>
    )
};

export default WeatherSearchComponent;
