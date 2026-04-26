import ProjectsDetails from '@/components/ProjectDetails/ProjectDetails';
import data from '@/public/data/data.json';
import { Project } from '@/types/types';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const DetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const project = data.find((p: Project) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectsDetails project={project} />;
};

export default DetailsPage;
