import './App.css';
import Registry from './components/Registry';
import Header from "./components/Header"
import { useEffect, useState } from 'react';

function App() {
  const url = "http://localhost:8085/planets"
  const [planets, setPlanets] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadPlanets()
  }, [])

  const loadPlanets = () => {
    fetch(url)
    .then(r => r.json())
    .then(data => {setPlanets(data)})
  }

  const addPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet])
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="app-container">
      <Header />
      <Registry planets={planets} url={url} addPlanet={addPlanet} search={search} updateSearch={updateSearch}/>
    </div>
  );
}

export default App;
