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
      <h3 className={css.title}>{project.title}</h3>
      <p className={css.description}>{project.description}</p>
      <ul className={css.stackContainer}>
        {project.tags.map((tag, i) => {
          return (
            <li key={i} className={css.stack}>
              <p>{tag}</p>
            </li>
          );
        })}
      </ul>
      <div className={css.detailsContainer}>
        <div className={css.likes}>
          <FaHeart />
          {project.likes}
        </div>
        <Link href={`/projects/${project.id}`} className={css.detailsButton}>
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
