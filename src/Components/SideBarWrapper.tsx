import Sidebar from "./Sidebar";

type Props = {
  allTags: string[];
  selectedTag: string | null;
  activeSection: "projects" | "about";
  onSelectTag: (tag: string | null) => void;
  onSelectSection: (section: "projects" | "about") => void;
};

export default function SidebarWrapper({
  allTags,
  selectedTag,
  activeSection,
  onSelectTag,
  onSelectSection,
}: Props) {
  return (
    <aside className="hidden md:flex flex-col w-60 fixed left-0 top-32 bottom-0 bg-white border-r shadow-md p-6 overflow-y-auto">
      <Sidebar
        allTags={allTags}
        selectedTag={selectedTag}
        activeSection={activeSection}
        onSelectTag={onSelectTag}
        onSelectSection={onSelectSection}
      />
    </aside>
  );
}
