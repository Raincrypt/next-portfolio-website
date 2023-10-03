import { projectsData } from '@/lib/data'
import React from 'react'

type ParamsType = {
  params: string
}

const page = ({params}: ParamsType) => {

  const fetchProject = () => {
    const project = projectsData[0]
    console.log(project, typeof project)
  }

  fetchProject();

  
  return (
    <main>
      
    </main>
  )
}

export default page