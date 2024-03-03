import React from 'react'
import { useParams } from 'react-router-dom'
import {projects as items} from '../data.json'
import Navbar from '../components/Navbar';

const Projects = () => {
const { slug } = useParams();
const item = items.find((x) => x.slug === slug)

  return (
    <div>
      <Navbar />
      <p>{item.id}</p>
      <p>{item.project}</p>
    </div>
  )
}

export default Projects
