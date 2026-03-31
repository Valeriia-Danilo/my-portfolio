import ProjectCard from '../ProjectCard/ProjectCard';
import { Project } from '@/types/types';
import css from './ProgectList.module.css';

type Props = {
  projects: Project[];
};

const ProjectsList = ({ projects }: Props) => {
  return (
    <ul className={css.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
