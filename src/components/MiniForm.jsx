// The component used to structure the Form file

import React from "react"

function MiniForm(props) {
    return <div>
        <form>
            <label>{props.label}</label>
            <input onChange={props.handleChange} value={props.value} />
        </form>
    </div>
}

export default MiniForm