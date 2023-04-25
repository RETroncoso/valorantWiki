import React from 'react'
import { CardImg, CardTitle, HorizontalCardContainer } from './HorizontalCardStyles'
import { useNavigate } from 'react-router-dom'

const HorizontalCard = ({map}) => {
  const {name, images} = map;

  const navigate = useNavigate()

  return (
    <HorizontalCardContainer
      onClick={() => navigate(`/mapas/${name.toLowerCase()}`, {state: map})}
    >
        <CardImg src={images[0]} />
        <CardTitle>{name}</CardTitle>
    </HorizontalCardContainer>
  )
}

export default HorizontalCard