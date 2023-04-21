import React from 'react'
import { AgentWrapper, DataContainerStyled, ImageContainerStyled } from './AgentStyles';
import { useLocation } from 'react-router-dom';

const Agent = () => {
  const {name, role, biography,abilities, image} = useLocation().state;
  return (
    <AgentWrapper>
      <ImageContainerStyled>
        <img src={image} alt={name} />
      </ImageContainerStyled>
      <DataContainerStyled>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p>{biography}</p>
      </DataContainerStyled>
    </AgentWrapper>
  )
}

export default Agent