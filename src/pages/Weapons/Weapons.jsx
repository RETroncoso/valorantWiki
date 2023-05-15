import React, { useEffect } from 'react'

import { useState } from 'react'

import { Accordion, AccordionSummary, AccordionDetails } from '../../components/UI/Accordion/Accordion'
import WeaponCard from './WeaponCard/WeaponCard'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { getAllWeapons } from '../../queries/weaponsQueries'
import { Loader } from '../../components/UI/Loader/Loader'

const Weapons = () => {

  const [weaponCategory, setWeaponCategory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      (async () => {
        const data = await getAllWeapons();

        const resultArray = Object.values(
          data.reduce((acc, weapon) => {
            const weaponType = weapon.type;
            if (!acc[weaponType]) {
              acc[weaponType] = { type: weaponType, items: [] };
            }
            acc[weaponType].items.push(weapon);
            return acc;
          }, {})
        );
        setLoading(false)
        setWeaponCategory(resultArray);

      })()
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <SectionWrapper>
      {
        weaponCategory?.map((category) => {
          return <Accordion 
            className="accordionStyle" 
            key={category.type}
          >
            <AccordionSummary>
              {category.type}
            </AccordionSummary>
            <AccordionDetails>
              {category.items.map((weapon) => {
                return <WeaponCard key={weapon._id} weapon={{...weapon}} />
            
                
              })}
            </AccordionDetails>
          </Accordion>
        })
      }
      {
        loading && <Loader/>
      }
    </SectionWrapper>
  )
}

export default Weapons