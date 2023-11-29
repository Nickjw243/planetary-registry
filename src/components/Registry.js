import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry({planets, url, addPlanet, search, updateSearch}) {

    return(
        <div className="registry">
            <Search search={search} updateSearch={updateSearch}/>
            <div className="content">
                <PlanetList planets={planets} search={search}/>
                <NewPlanetForm url={url} addPlanet={addPlanet}/>
            </div>
        </div>
    )
}

export default Registry;