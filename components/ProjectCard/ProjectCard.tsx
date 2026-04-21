import { Project } from '@/types/types';
import Image from 'next/image';
import css from './ProjectCard.module.css';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className={css.card}>
      <Image
        src={project.image}
        alt={project.title}
        className={css.image}
        width={400}
        height={250}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
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
        <FaHeart />
        {project.likes}
      </div>
      <Link href={`/projects/${project.id}`}>Details</Link>
    </div>
  );
};

export default ProjectCard;
