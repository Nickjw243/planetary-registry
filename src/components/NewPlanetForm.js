import React, { useState } from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({url, addPlanet}) {
    const formOutline = {
        name: "",
        climate: "",
        terrain: "",
        population: ""
    }

    const [form, setForm] = useState(formOutline)

    const handleChange =(e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                ...form
            })
        })
        .then(r => r.json())
        .then(data => {
            addPlanet(data)
            setForm(formOutline)
        })
    }

    return(
        <form onSubmit={handleSubmit}> 
            <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />
            <input onChange={handleChange} value={form.climate} type="text" name="climate" placeholder="Climate" />
            <input onChange={handleChange} value={form.terrain} type="text" name="terrain" placeholder="Terrain"/>
            <input onChange={handleChange} value={form.population} type="text" name="population" placeholder="Population" />
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;