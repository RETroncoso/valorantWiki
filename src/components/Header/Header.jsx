import React from 'react'
import { HeaderContainer, ImgContainer } from './HeaderStyles'
import icon from "../../img/icon.png"
import { Link, useLocation } from 'react-router-dom'
import GoBack from '../goBack/GoBack'

const Header = () => {

  const {pathname} = useLocation();

  return (
    <HeaderContainer>
      {
        pathname !== "/" && <GoBack />
      }
     
      <Link to="/">
        <ImgContainer>
            <img src={icon} alt="" />
        </ImgContainer>
      </Link>
        
    </HeaderContainer>
  )
}

export default Header