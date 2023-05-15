import React from 'react'
import { useLocation } from 'react-router-dom'
import { CarouselStyled, ImageContainer, MapDataContainer, MapWrapper } from './MapStyles'
import Typewriter from "typewriter-effect"

const Map = () => {

  const {name, description, images} = useLocation().state
  return (
    <MapWrapper>
      <CarouselStyled
        navButtonsAlwaysVisible="true"
      >
        {
          images.map((image, i) => {
            return <ImageContainer key={name}>
              <img src={image} alt={name} />
            </ImageContainer>
       
          })
        }
      </CarouselStyled>
      <MapDataContainer>
        <h2>
          <Typewriter
            options={{
                strings: [name ],
                autoStart: true,
                loop: true,
                delay: 100
            }}
        />
        </h2>
        
        <p>{description}</p>
      </MapDataContainer>
    </MapWrapper>
  )
}

export default Map