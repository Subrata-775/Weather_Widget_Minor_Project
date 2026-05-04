import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'


function SearchBox() {
    const [city, setCity] = useState("")
    let changeHandler = (event) => {
        setCity(event.target.value)
    }
    let submitHandler = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("")
    }
    return (
        <div className='search'>
            <h3>Search for the Weather.</h3>
            <form onSubmit={submitHandler}>
                <TextField id="city" label="City" variant="outlined"
                    required onChange={changeHandler} value={city} />
                <br /><br />
                <Button variant="contained" color="success" type='submit'>
                    Success
                </Button>

            </form>
        </div>
    )
}

export default SearchBox