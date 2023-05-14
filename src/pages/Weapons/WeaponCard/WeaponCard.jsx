import React from 'react'
import { CardImg, CardTitle, WeaponCardContainer } from './WeaponCardStyles'
import { useNavigate } from 'react-router-dom';

const WeaponCard = ({weapon}) => {
const {img, name} = weapon;

const navigate = useNavigate();

  return (
    <WeaponCardContainer
      onClick={() => navigate(`/armas/${name.toLowerCase()}`, {state: weapon})}
    >
        <CardImg src={img} />
        <CardTitle>{name}</CardTitle>
    </WeaponCardContainer>
  )
}

export default WeaponCard