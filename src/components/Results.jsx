// The results section

import React from "react";

function Results(props) {
    return <div className=" font-bold mt-7 pl-24 md:mt-10 md:pl-40 xl:pl-72">
        <h3 className="prayers">Fajr</h3>
        <h3 className="times">{props.fajr}</h3>

        <h3 className="prayers">Sunrise</h3>
        <h3 className="times">{props.sunrise}</h3>

        <h3 className="prayers">Dhuhr</h3>
        <h3 className="times">{props.dhuhr}</h3>

        <h3 className="prayers">Asr</h3>
        <h3 className="times">{props.asr}</h3>

        <h3 className="prayers">Maghrib</h3>
        <h3 className="times">{props.maghrib}</h3>

        <h3 className="prayers">Isha</h3>
        <h3 className="times mb-12">{props.isha}</h3>
    </div>
}

export default Results