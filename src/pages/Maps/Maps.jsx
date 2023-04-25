import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HorizontalCard from './HorizontalCard/HorizontalCard'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import {getAllMaps} from "../../queries/mapsQueries"

import { MAPS_MODEL } from '../../data/Models'
import { Loader } from '../../components/UI/Loader/Loader'

const Maps = () => {

  const [maps, setMaps] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try{
      (async () => {
        const data = await getAllMaps();
        setLoading(false);
        setMaps(data)
      })();
    } catch(error) {
      console.log(error);
    }
  }, [])

  return ( <SectionWrapper>
    {
      maps?.map((map) => {
        return <HorizontalCard key={map.id} map={{...map}} /> 
      })
    }
    {
      loading && <Loader />
    }
  </SectionWrapper>
    
  )
}

export default Maps