import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'

import { MAPS_MODEL } from '../../data/Models'
import { MapsCardsContainer } from './MapsStyles'

const Maps = () => {

  const [maps, setMaps] = useState(MAPS_MODEL)

  return ( <MapsCardsContainer>
    {
      maps.map((map) => {
        return <Link key={map.id} to={map.name}>
          <HorizontalCard title={map.name} bg={map.img} /> 
        </Link>
          

      })
    }
  </MapsCardsContainer>
    
  )
}

export default Maps