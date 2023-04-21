import React from 'react'
import { AgentCardContainer, CardImg, CardTitle } from './AgentCardStyles'
import { useNavigate } from 'react-router-dom';

const AgentCard = ({agent}) => {
  const {image, name} = agent;

  const navigate = useNavigate()

  return (
    <AgentCardContainer
      onClick={() => navigate(`/agentes/${name}`, {state: agent})}
    >
        <CardImg src={image} />
        <CardTitle>{name}</CardTitle>
    </AgentCardContainer>
  )
}

export default AgentCard