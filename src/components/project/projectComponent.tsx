'use client'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { ProjectProps } from "./project.type"

 
export default function Project(project: ProjectProps) {
 
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.roles}</p>
      <p>{project.description}</p>
    </div>
  )
}