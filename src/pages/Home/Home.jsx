import React from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import { HomeContainer } from './HomeStyles'

import mapsImg from "../../img/maps.jpg"
import agentsImg from "../../img/agents.jpg"
import weaponsImg from "../../img/weapons.png"

const Home = () => {
  return (
    <HomeContainer>
      <HomeCard title={"mapas"} desc={"Los mapitas"} bg={mapsImg}/>
      <HomeCard title={"agentes"} desc={"Los agentes"} bg={agentsImg}/>
      <HomeCard title={"armas"} desc={"Las armukis"} bg={weaponsImg}/>
    </HomeContainer>
  )
}

export default Home