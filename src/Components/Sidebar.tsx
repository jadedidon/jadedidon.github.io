type SidebarProps = {
  allTags: string[];
  selectedTag: string | null;
  activeSection: "projects" | "about";
  onSelectTag: (tag: string | null) => void;
  onSelectSection: (section: "projects" | "about") => void;
};

export default function Sidebar({
  allTags,
  selectedTag,
  activeSection,
  onSelectTag,
  onSelectSection,
}: SidebarProps) {
  return (
    <div>
      <ul className="space-y-2 px-2">
        <li>
          <button
            onClick={() => onSelectSection("about")}
            className="block w-full text-left px-3 py-2 transition"
          >
            {activeSection === "about" ? (
              <u className="underline-offset-4">ABOUT</u>
            ) : (
              <p>ABOUT</p>
            )}
          </button>
        </li>

        <li>
          <button
            onClick={() => onSelectSection("projects")}
            className="block w-full text-left px-3 py-2 transition"
          >
            {activeSection === "projects" ? (
              <u className="underline-offset-4">PROJECTS</u>
            ) : (
              <p>PROJECTS</p>
            )}
          </button>
        </li>

        {activeSection === "projects" && (
          <div className="mt-4 ml-2 space-y-1">
            <button
              onClick={() => onSelectTag(null)}
              className="block w-full text-left px-3 py-1 transition"
            >
              {selectedTag === null ? (
                <u className="underline-offset-4">ALL</u>
              ) : (
                "ALL"
              )}
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onSelectTag(tag)}
                className="block w-full text-left px-3 py-1 transition"
              >
                {selectedTag === tag ? (
                  <u className="underline-offset-4">{tag}</u>
                ) : (
                  tag
                )}
              </button>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
