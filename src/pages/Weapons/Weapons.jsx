import React from 'react'
import { WeaponsCardsContainer } from './WeaponsStyles'

import { WEAPONS_MODEL } from '../../data/Models'

import { useState } from 'react'

import { Accordion, AccordionSummary, AccordionDetails } from './Accordion'
import WeaponCard from '../../components/WeaponCard/WeaponCard'

const Weapons = () => {

  const [weaponCategory, setWeaponCategory] = useState(WEAPONS_MODEL)

  return (
    <WeaponsCardsContainer>
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
                return <WeaponCard title={weapon.name} img={weapon.img} />
              })}
            </AccordionDetails>
          </Accordion>
        })
      }
    </WeaponsCardsContainer>
  )
}

export default Weapons