import React from 'react'
import { CardContainer, CardImg, CardText, CardTitle } from './HomeCardStyles'

const HomeCard = ({title, desc, bg}) => {
  return (
    <CardContainer>
        <CardImg src={bg} />
        <CardTitle>{title}</CardTitle>
        <CardText>{desc}</CardText>
    </CardContainer>
  )
}

export default HomeCard