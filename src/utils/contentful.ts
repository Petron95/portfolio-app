import { createClient } from 'contentful';
import { WorkplaceProps, WorkplaceContenfulModel } from '../components/workplace/workplace.type'

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID ?? '',
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
  })
}
const client = createContentClient()

export const getEntriesByType = async (type: string) => {
  const response = await client.getEntries({
    content_type: type,
  })

  return response.items
}

  export const getWorkPlaces = async () =>  {
    const response = await client.getEntries<WorkplaceContenfulModel>({
      content_type: 'workplace',
    })
  return response.items as WorkplaceProps[]
}

/*
export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    'fields.slug[match]': slug,
  }
  const queryResult = await client.getEntries(queryOptions)
  return queryResult.items[0]
}*/