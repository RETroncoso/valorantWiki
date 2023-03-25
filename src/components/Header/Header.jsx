import React from 'react'
import { HeaderContainer, ImgContainer } from './HeaderStyles'
import icon from "../../img/icon.png"

const Header = () => {
  return (
    <HeaderContainer>
        <ImgContainer>
            <img src={icon} alt="" />
        </ImgContainer>
    </HeaderContainer>
  )
}

export default Header