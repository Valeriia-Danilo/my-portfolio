import { Project } from '@/types/types';
import Image from 'next/image';
import css from './ProjectCard.module.css';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={css.card}>
      <Image src={project.image} alt={project.title} width={400} height={250} />
      <h3>{project.title}</h3>
      <ul>
        {project.tags.map((tag, i) => {
          return (
            <li key={i}>
              <p>{tag}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <a href={project.live}></a>
        <a href={project.github}></a>
      </div>
    </div>
  );
};

export default ProjectCard;
