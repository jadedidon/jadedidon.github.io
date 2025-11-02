import type { ProjectType } from "../data/projects";

type ProjectCardProps = {
  project: ProjectType;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="relative group overflow-hidden cursor-pointer"
    >
      {project.coverVideo ? (
        <video
          src={project.coverVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
      ) : (
        <img
          src={project.coverImg}
          alt={project.title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
      )}

      <div
        className="
          absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-start items-start 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          p-4 text-white
        "
      >
        <h3 className="text-md font-bold">{project.title}</h3>
        <p className="text-sm font-thin">{project.date}</p>
      </div>
    </div>
  );
}
