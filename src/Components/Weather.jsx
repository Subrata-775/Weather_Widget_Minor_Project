import React, { useState } from 'react'
import SearchBox from '../Components/SearchBox';
import InfoBox from '../Components/InfoBox';

function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "contai",
        description: "broken clouds",
        feels_like: 36.09,
        humidity: 57,
        pressure: 1010,
        temp: 31.95,
        temp_max: 31.95,
        temp_min: 31.95,
        weather: "Clouds"
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center", color: " #1976d2" }}>
            <h2 style={{ textDecoration: "Underline" }}>Weather App By Subrata</h2>
            <div className='main'>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    )
}

export default Weather