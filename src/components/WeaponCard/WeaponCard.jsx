import React from 'react'
import { CardImg, CardTitle, WeaponCardContainer } from './WeaponCardStyles'

const WeaponCard = ({img, title}) => {
  return (
    <WeaponCardContainer>
        <CardImg src={img} />
        <CardTitle>{title}</CardTitle>
    </WeaponCardContainer>
  )
}

export default WeaponCard