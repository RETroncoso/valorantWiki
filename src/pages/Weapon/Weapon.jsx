import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Weapon = () => {
    const {bullets, damage, description, equipSpeed, fireRate, img, name, penetration, price, reloadSpeed, shotType, type} = useLocation().state


    return (
      <div>{name}</div>
    )
}

export default Weapon