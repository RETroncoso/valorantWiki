import React from 'react'
import { useParams } from 'react-router-dom'

const Map = () => {

    const {map} = useParams()

  return (
    <div>{map}</div>
  )
}

export default Map