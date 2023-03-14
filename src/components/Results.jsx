// The results section

import React from "react";

function Results(props) {
    return <div>
        <h3>Fajr</h3>
        <h3>{props.fajr}</h3>

        <h3>Sunrise</h3>
        <h3>{props.sunrise}</h3>

        <h3>Dhuhr</h3>
        <h3>{props.dhuhr}</h3>

        <h3>Asr</h3>
        <h3>{props.asr}</h3>

        <h3>Maghrib</h3>
        <h3>{props.maghrib}</h3>

        <h3>Isha</h3>
        <h3>{props.isha}</h3>
    </div>
}

export default Results