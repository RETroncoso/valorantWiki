import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import { HomeContainer } from './HomeStyles'
import { Link } from 'react-router-dom'

import mapsImg from "../../img/maps.jpg"
import agentsImg from "../../img/agents.jpg"
import weaponsImg from "../../img/weapons.png"

const Home = () => {
  return (
    <HomeContainer>
      <Link to="/mapas">
        <HomeCard title={"mapas"} desc={"Los mapitas"} bg={mapsImg}/>
      </Link>
      <Link to="/agentes">
        <HomeCard title={"agentes"} desc={"Los agentes"} bg={agentsImg}/>
      </Link>
      
      <Link to="/armas">
        <HomeCard title={"armas"} desc={"Las armukis"} bg={weaponsImg}/>
      </Link>
      
    </HomeContainer>
  )
}

export default Home