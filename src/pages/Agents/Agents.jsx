import React, { useEffect, useState } from 'react'

import { AGENTS_MODEL } from '../../data/Models'
import AgentCard from "./AgentCard/AgentCard"
import { Link } from 'react-router-dom'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { getAllAgents } from '../../queries/agentsQueries'

const Agents = () => {

  const [agents, setAgents] = useState([])

  useEffect(() => {
    try {
      (async () => {
        const data = await getAllAgents();
        setAgents(data)
      })();
    } catch(error){
      console.log(error);
    }
  },[])

  return (
    <SectionWrapper>
      {
         agents?.map((agent) => {
          return <Link key={agent.id} to={agent.name}>
            <AgentCard img={agent.image} name={agent.name} />
          </Link>
          
        })
      }
    </SectionWrapper>
  )
}

export default Agents