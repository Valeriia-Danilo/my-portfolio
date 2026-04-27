import Image from 'next/image';
import css from './ProjectDetails.module.css';
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaHeart,
} from 'react-icons/fa';
import Link from 'next/link';
import { Project } from '@/types/types';

type Props = {
  project: Project;
};

const ProjectsDetails = ({ project }: Props) => {
  return (
    <div className={css.detailsContainer}>
      <Link href="/projects" className={css.backButton}>
        <FaArrowLeft />
        Back
      </Link>
      <div className={css.imageInfoContainer}>
        <Image
          src={project.image}
          alt={project.title}
          className={css.image}
          width={1200}
          height={750}
        />
        <div className={css.infoContainer}>
          <div className={css.titleLikeContainer}>
            <h3 className={css.title}>{project.title}</h3>
            <div className={css.likesContainer}>
              <p>Likes:</p>
              {project.likes}
              <FaHeart />
            </div>
          </div>
          <p className={css.description}>{project.description}</p>

          <p className={css.subtitle}>Tech stack:</p>
          <ul className={css.stackContainer}>
            {project.tags.map((tag, i) => {
              return (
                <li key={i} className={css.stack}>
                  <p>{tag}</p>
                </li>
              );
            })}
          </ul>

          <div className={css.buttonsContainer}>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={css.liveButton}
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={css.githubButton}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
