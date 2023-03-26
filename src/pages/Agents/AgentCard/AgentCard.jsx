import React from 'react'
import { AgentCardContainer, CardImg, CardTitle } from './AgentCardStyles'

const AgentCard = ({img, name}) => {
  return (
    <AgentCardContainer>
        <CardImg src={img} />
        <CardTitle>{name}</CardTitle>
    </AgentCardContainer>
  )
}

export default AgentCard