'use client'

import { WorkplaceProps } from "./workplace.type";

 
export default function Workplace(workplace: WorkplaceProps) {
 
  return (
    <div>
      <h2>Name: {workplace.name}</h2>
      <p>desc: {workplace.description}</p>
    
      {/*workplace.project.map((project: any) => (
        <Project project={project}></Project>
      ))*/}
    </div>
  )
}