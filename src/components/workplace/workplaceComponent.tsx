'use client'

import { ProjectProps } from "../project/project.type";
import Project from "../project/projectComponent";
import { WorkplaceProps } from "./workplace.type";

 
export default function Workplace(workplace: WorkplaceProps) {
  return (
    <div>
      <h2>Name: {workplace.fields.name}</h2>
      <p>desc: {workplace.fields.description}</p>
    
      {workplace.fields.project?.map((project: ProjectProps) => (
        <Project  key={String(project.fields.id)} {...project}></Project>
      ))}
    </div>
  )
}