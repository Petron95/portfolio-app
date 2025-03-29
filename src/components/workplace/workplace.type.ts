import type {ProjectProps} from '../project/project.type.ts'
import * as contentful from 'contentful'

export type WorkplaceProps = {
    fields: {
        name: string;
        description: string;
        id: number;
        project: ProjectProps[];
    }
}

export type WorkplaceContenfulModel = {
    contentTypeId: "workplace",
    fields: {
        name: contentful.EntryFieldTypes.Text;
        description: contentful.EntryFieldTypes.Text;
        id: contentful.EntryFieldTypes.Number;
        project: ProjectProps[];
    }
}