import ProjectsList from '@/components/ProjecstList/ProjectsList';
import data from '@/public/data/data.json';

const ProjectsPage = () => {
  return (
    <>
      <ProjectsList projects={data} />
    </>
  );
};

export default ProjectsPage;
