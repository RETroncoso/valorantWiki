import React, { useState } from 'react'
import { AgentCardsContainer } from './AgentsStyles'

import { AGENTS_MODEL } from '../../data/Models'
import AgentCard from '../../components/AgentCard/AgentCard'
import { Link } from 'react-router-dom'

const Agents = () => {

  const [agents, setagents] = useState(AGENTS_MODEL)

  return (
    <AgentCardsContainer>
      {
        agents.map((agent) => {
          return <Link key={agent.id} to={agent.name}>
            <AgentCard img={agent.img} name={agent.name} />
          </Link>
          
        })
      }
    </AgentCardsContainer>
  )
}

export default Agents