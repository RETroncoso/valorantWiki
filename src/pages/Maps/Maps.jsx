import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalCard from '../../components/HorizontalCard/HorizontalCard'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'

import { MAPS_MODEL } from '../../data/Models'

const Maps = () => {

  const [maps, setMaps] = useState(MAPS_MODEL)

  return ( <SectionWrapper>
    {
      maps.map((map) => {
        return <Link key={map.id} to={map.name}>
          <HorizontalCard title={map.name} bg={map.img} /> 
        </Link>
          

      })
    }
  </SectionWrapper>
    
  )
}

export default Maps