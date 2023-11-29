import React from "react"
import Planet from "./Planet"

function PlanetList({planets, search}) {

    const filteredPlanets = planets.filter(planet => {
        return (
            planet.name.toLowerCase().includes(search.toLowerCase()) ||
            planet.climate.toLowerCase().includes(search.toLowerCase()) ||
            planet.terrain.toLowerCase().includes(search.toLowerCase()) ||
            planet.population.toString().includes(search.toString())
    )})

    const renderPlanets = filteredPlanets.map(planet => 
        <Planet key={planet.id} planet={planet} />
        )

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {/** Render a list of <Planet> components here. */}
                
                {renderPlanets}
            </tbody>
        </table>
    );
}

export default PlanetList;