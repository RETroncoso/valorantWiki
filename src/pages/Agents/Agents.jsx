import React, { useState } from 'react'

import { AGENTS_MODEL } from '../../data/Models'
import AgentCard from "./AgentCard/AgentCard"
import { Link } from 'react-router-dom'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'

const Agents = () => {

  const [agents, setagents] = useState(AGENTS_MODEL)

  return (
    <SectionWrapper>
      {
        agents.map((agent) => {
          return <Link key={agent.id} to={agent.name}>
            <AgentCard img={agent.img} name={agent.name} />
          </Link>
          
        })
      }
    </SectionWrapper>
  )
}

export default Agents