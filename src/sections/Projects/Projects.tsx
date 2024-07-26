import styles from './ProjectsStyles.module.css';
import lectura from '../../assets/lectura.png';
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={lectura}
          link="https://github.com/ryankamiri/Lectura"
          title="lectura"
          desc="classroom engagement web app"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/huiwxng/keybeats"
          title="keybeats"
          desc="online keyboard web app"
        />
      </div>
    </section>
  );
}

export default Projects;
