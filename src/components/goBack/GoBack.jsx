import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from './GoBackStyles'

import {AiOutlineArrowLeft} from "react-icons/ai"

const GoBack = () => {

  const navigate = useNavigate();

  return (
    <LinkContainer>
       <span onClick={()=>navigate(-1)} >{<AiOutlineArrowLeft/>} Volver</span>
    </LinkContainer>
  )
}

export default GoBack