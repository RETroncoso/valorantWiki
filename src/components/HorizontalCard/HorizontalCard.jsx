import React from 'react'
import { CardImg, CardTitle, HorizontalCardContainer } from './HorizontalCardStyles'

const HorizontalCard = ({title, bg}) => {
  return (
    <HorizontalCardContainer>
        <CardImg src={bg} />
        <CardTitle>{title}</CardTitle>
    </HorizontalCardContainer>
  )
}

export default HorizontalCard