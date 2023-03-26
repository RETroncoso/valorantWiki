import React from 'react'
import { useParams } from 'react-router-dom'

const Weapon = () => {
    const {weapon} = useParams()

    return (
      <div>{weapon}</div>
    )
}

export default Weapon