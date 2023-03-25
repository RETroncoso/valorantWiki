import React from 'react'
import { GeneralContainer } from './LayoutStyles'

const Layout = ({children}) => {
  return (<>
    <GeneralContainer>
        {children}
    </GeneralContainer>
    </>
  )
}

export default Layout