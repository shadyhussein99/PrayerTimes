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

        fetch(`https://api.aladhan.com/v1/timingsByAddress/${day}-${month}-${year}?address=${savedCity},${savedCountry}&method=15`)
            .then(res => res.json())
            .then(res => {

                const { timings } = res.data

                props.setResult(timings)
            })
            .catch(err => console.log(err))
    }, [day, month, year, savedCity, savedCountry])


    function countryChange(event) {
        setCountry(event.target.value)
    }

    function cityChange(event) {
        setCity(event.target.value)
    }

    function handleClick() {
        setSavedCountry(country)
        setSavedCity(city)
        props.setShowResults(true)
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
        <div className=" flex justify-center mt-10">
            <button onClick={handleClick} className=" text-darkBlue text-xl bg-white py-2 px-6 rounded-full">Search</button>
        </div>
    </div>
}

export default Form

