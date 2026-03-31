import ProjectsList from '@/components/ProjecstList/ProjectsList';
import data from '@/public/data/data.json';

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsList projects={data} />
    </div>
  );
};

export default ProjectsPage;
