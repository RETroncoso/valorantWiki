import React from 'react'
import { AgentWrapper, DataContainerStyled, ImageContainerStyled } from './AgentStyles';
import { useLocation } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '../../components/UI/Accordion/Accordion';

const Agent = () => {
  const {name, role, biography,abilities, image} = useLocation().state;
  return (
    <AgentWrapper>
      <ImageContainerStyled>
        <img src={image} alt={name} />
      </ImageContainerStyled>
      <DataContainerStyled>
        <h2>{name}</h2>
        <h3>{"< "+ role + " >"}</h3>
        <p>{biography}</p>
        {
          abilities?.map((ability) => {
            return <Accordion 
            className="accordionStyle" 
            key={ability._id}
          >
            <AccordionSummary
              sx={{fontFamily:"poppins"}}
            ><img src={ability.icon} alt={ability.name} style={{height: "24px", paddingRight:"20px"}} />
              {ability.name} 
            </AccordionSummary>
            <AccordionDetails
            sx={{padding:"20px", fontFamily:"poppins", fontSize:"1.25rem"}}
             
            >
              {ability.description}
            </AccordionDetails>
          </Accordion>
          })
        }
      </DataContainerStyled>
    </AgentWrapper>
  )
}

export default Agent