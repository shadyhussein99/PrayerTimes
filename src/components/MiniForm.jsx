// The component used to structure the Form file

import React from "react"

function MiniForm(props) {
    return <section className=" mt-10 text-center">
        <form>
            <label className=" block text-2xl font-bold">{props.label}</label>
            <input onChange={props.handleChange} value={props.value} className="text-black text-lg mt-4 rounded pl-3 pb-1" />
        </form>
    </section>
}

export default MiniForm