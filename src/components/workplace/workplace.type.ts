import type {ProjectProps} from '../project/project.type.ts'

export type WorkplaceProps = {
    name: string;
    description: string;
    project: ProjectProps[];
}