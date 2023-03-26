import React from 'react'

import { WEAPONS_MODEL } from '../../data/Models'

import { useState } from 'react'

import { Accordion, AccordionSummary, AccordionDetails } from './Accordion'
import WeaponCard from '../../components/WeaponCard/WeaponCard'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { Link } from 'react-router-dom'

const Weapons = () => {

  const [weaponCategory, setWeaponCategory] = useState(WEAPONS_MODEL)

  return (
    <SectionWrapper>
      {
        weaponCategory?.map((category) => {
          return <Accordion 
            className="accordionStyle" 
            key={category.id}
          >
            <AccordionSummary>
              {category.categoryName}
            </AccordionSummary>
            <AccordionDetails>
              {category.weapons.map((weapon) => {
                return <Link key={weapon.id} to={weapon.name}>
                  <WeaponCard title={weapon.name} img={weapon.img} />
                </Link>
                
              })}
            </AccordionDetails>
          </Accordion>
        })
      }
    </SectionWrapper>
  )
}

export default Weapons