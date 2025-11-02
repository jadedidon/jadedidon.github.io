import type { ProjectType } from "../data/projects";
import FinalProject from "./FinalProject";
import LumiereProject from "./LumiereProject";
import Project from "./Project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: ProjectType[];
  selectedTag: string | null;
  activeProject: ProjectType | null;
  setActiveProject: (project: ProjectType | null) => void;
};

export default function Projects({
  projects,
  selectedTag,
  activeProject,
  setActiveProject,
}: Props) {
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags?.includes(selectedTag))
    : projects;

  if (activeProject) {
    switch (activeProject.title) {
      case "Atelier Lumière - Color portraits":
        return (
          <LumiereProject
            project={activeProject}
            onBack={() => setActiveProject(null)}
          />
        );
      case "Atelier Lumière - Black and White portraits":
        return (
          <LumiereProject
            project={activeProject}
            onBack={() => setActiveProject(null)}
          />
        );
      case "Pas Commun(s)":
        return (
          <FinalProject
            project={activeProject}
            onBack={() => setActiveProject(null)}
          />
        );
      default:
        return (
          <Project
            project={activeProject}
            onBack={() => setActiveProject(null)}
          />
        );
    }
  }

  return (
    <section className="py-4">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {selectedTag === null ? "All my projects" : `${selectedTag}`}
      </h2>

      {filteredProjects.length === 0 ? (
        <p className="text-center text-gray-600">Aucun projet pour ce tag.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setActiveProject(project)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
