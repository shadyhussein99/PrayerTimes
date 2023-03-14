// The section of the user's input

import React from "react";
import { useState, useEffect } from "react";
import MiniForm from "./MiniForm"

function Form(props) {

    var day = new Date().getDate()
    var month = (new Date().getMonth()) + 1
    var year = new Date().getFullYear()

    var [country, setCountry] = useState("")    // Tracks user while typing in country input
    var [city, setCity] = useState("")          // Tracks user while typing in city input

    var [savedCountry, setSavedCountry] = useState("")     // User's country input after clicking the search button
    var [savedCity, setSavedCity] = useState("")           // User's city input after clicking the search button

    useEffect(function () {

        fetch(`https://api.aladhan.com/v1/timingsByAddress/14-03-2023?address=Cairo,Egypt&method=15`)
            .then(res => res.json())
            .then(res => {
                
                const { data } = res
                const { timings } = data

                props.setResult(timings)
            })
            .catch(err => console.log(err))
    }, [])


    function countryChange(event) {
        setCountry(event.target.value)
    }

    function cityChange(event) {
        setCity(event.target.value)
    }

    function handleClick() {
        setSavedCountry(country)
        setSavedCity(city)
    }


    return <div>
        <MiniForm
            label="Country"
            handleChange={countryChange}
            value={country}
        />
        <MiniForm
            label="City"
            handleChange={cityChange}
            value={city}
        />
        <button onClick={handleClick}>Search</button>

    </div>
}

export default Form

