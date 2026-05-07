import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';

import './SearchBox.css';

function SearchBox({ updateInfo }) {

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "73af481272871a9185d72ced4d9c9d27";

    const getWeather = async () => {
        try {
            const response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            const JsonResponse = await response.json();

            const result = {
                city: city,
                temp: JsonResponse.main.temp,
                temp_max: JsonResponse.main.temp_max,
                temp_min: JsonResponse.main.temp_min,
                pressure: JsonResponse.main.pressure,
                humidity: JsonResponse.main.humidity,
                feels_like: JsonResponse.main.feels_like,
                description: JsonResponse.weather[0].description,
                weather: JsonResponse.weather[0].main
            };

            console.log(result);
            return result;

        } catch (err) {
            throw err;

        }
    };

    let changeHandler = (event) => {
        setCity(event.target.value);
    };

    let submitHandler = async (event) => {
        try {

            event.preventDefault();
            let newinfo = await getWeather();
            updateInfo(newinfo);
            setCity("");
        } catch (err) {
            setError(true)
        }

    };

    return (
        <div className='search-container'>

            <div className='search-box'>

                <h2 className='search-title'>
                    🌤 Weather Forecast
                </h2>

                <p className='search-subtitle'>
                    Search weather by city name
                </p>

                <form onSubmit={submitHandler}>

                    <TextField
                        id="city"
                        label="Enter City"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={changeHandler}
                        value={city}
                        className='input-field'
                    />

                    <Button
                        variant="contained"
                        type='submit'
                        startIcon={<SearchIcon />}
                        className='search-btn'
                        fullWidth
                    >
                        Search Weather
                    </Button>
                    {error && <p style={{color:"red"}}>No such place in our API!</p>}
                </form>


            </div>

        </div>
    );
}

export default SearchBox;