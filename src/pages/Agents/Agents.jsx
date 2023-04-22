import React, { useEffect, useState } from 'react'

import { AGENTS_MODEL } from '../../data/Models'
import AgentCard from "./AgentCard/AgentCard"
import { Link, useNavigate } from 'react-router-dom'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { getAllAgents } from '../../queries/agentsQueries'
import { Loader } from '../../components/UI/Loader/Loader'

const Agents = () => {

  const [agents, setAgents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      (async () => {
        const data = await getAllAgents();
        setLoading(false)
        setAgents(data)
      })();
    } catch(error){
      console.log(error);
    }
  },[])

  return <SectionWrapper>
      {
         agents?.map((agent) => {
          return <AgentCard key={agent.id} agent={{...agent}}/> })
      }
      {
        loading && <Loader/>
      }
    </SectionWrapper>

}

export default Agents