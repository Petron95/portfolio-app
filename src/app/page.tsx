import styles from "./page.module.css";
import { getWorkPlaces } from "../utils/contentful";
import  Workplace from "@/components/workplace/workplaceComponent"

export default async function Home() {
  const workplaces = await getWorkPlaces();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Petras Portfolio</h1>
        <div>
        {workplaces.map((workplace) => (
          <Workplace key={String(workplace.fields.id)} {...workplace}/>
        ))}
      </div>
      </main>
      <footer className={styles.footer}>
        This was fun
      </footer>
    </div>
  );
}
