import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import About from "./Components/About";
import SidebarWrapper from "./Components/SideBarWrapper";
import { type ProjectType, projects } from "./data/projects";
import { useMemo, useState } from "react";

export default function App() {
  const allTags = useMemo(
    () =>
      Array.from(
        new Set(
          projects
            .flatMap((project) => project.tags)
            .filter((tag): tag is string => typeof tag === "string")
        )
      ),
    [projects]
  );

  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const [activeSection, setActiveSection] = useState<"projects" | "about">(
    "about"
  );

  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
    setActiveProject(null);
  };

  const handleActiveSection = (section: "projects" | "about") => {
    setActiveSection(section);
    if (section === "projects") {
      setActiveProject(null);
    }
  };

  const handleActiveProject = (project: ProjectType | null) => {
    setActiveProject(project);
  };

  const filteredProjects = useMemo(
    () =>
      selectedTag
        ? projects.filter((project) => project.tags?.includes(selectedTag))
        : projects,
    [selectedTag, projects]
  );
  return (
    <div className="flex flex-col min-h-screen">
      <Header
        allTags={allTags}
        selectedTag={selectedTag}
        activeSection={activeSection}
        onSelectTag={handleSelectTag}
        onSelectSection={handleActiveSection}
      />
      <div className="flex flex-1 pt-20">
        <SidebarWrapper
          allTags={allTags}
          selectedTag={selectedTag}
          activeSection={activeSection}
          onSelectTag={handleSelectTag}
          onSelectSection={handleActiveSection}
        />
        <main className="flex-1 md:ml-60 pt-20 ">
          {activeSection === "projects" && (
            <Projects
              projects={filteredProjects}
              selectedTag={selectedTag}
              activeProject={activeProject}
              setActiveProject={handleActiveProject}
            />
          )}
          {activeSection === "about" && <About />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
