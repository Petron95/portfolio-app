import styles from "./page.module.css";
import { getWorkPlaces } from "../utils/contentful";

export default async function Home() {
  const workplaces = await getWorkPlaces();
  console.log(workplaces[0].project)
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Petras Portfolio</h1>
        <div>
        {workplaces.map((workplace, i) => (
          <div key={i}>
            <h2>{workplace.name}</h2>
            <p>{workplace.description}</p>
          
            {workplace.project.map((project) => (
              <div key={project.fields.title}>
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
