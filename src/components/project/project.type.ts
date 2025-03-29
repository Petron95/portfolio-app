export type ProjectProps = {
    contentTypeId: "project",
    fields: {
        title: string;
        roles: string[];
        summary: string;
        description: string;
        website: string;
        github: string;
        slug: string;
        id: number;
        photos: string[];
        videoUrls: string[];
    }
    
}