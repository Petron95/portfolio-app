'use client'

import { ProjectProps } from "./project.type"

 
export default function Project(project: ProjectProps) {
 
  return (
    <div>
      <h3>{project.fields.title}</h3>
      <p>{project.fields.roles}</p>
      <p>{project.fields.description}</p>
    </div>
  )
}