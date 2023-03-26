import React from 'react'
import { useParams } from 'react-router-dom'

const Agent = () => {
    const {agent} = useParams();
  return (
    
    <div>{agent}</div>
  )
}

export default Agent