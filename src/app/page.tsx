import styles from "./page.module.css";
import { getWorkPlaces } from "../utils/contentful";
import { ProjectProps } from "@/components/project/project.type";

export default async function Home() {
  const workplaces = await getWorkPlaces();
  console.log(workplaces[0].project)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Petras Portfolio</h1>
        <div>
        {workplaces.map((workplace) => (
          <div key={workplace.id as string} data-id={workplace.id}>
            <h2>{workplace.name as string}</h2>
            <p>{workplace.description as string}</p>
          
            {(workplace.project as ProjectProps[])?.map((project: any) => (
              <div key={project.fields.slug as string}>
                <h3>{project.fields.title}</h3>
                <p>{project.fields.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      </main>
      <footer className={styles.footer}>
        This was fun
      </footer>
    </div>
  );
}
