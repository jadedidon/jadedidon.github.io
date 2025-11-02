import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  allTags: string[];
  selectedTag: string | null;
  activeSection: "projects" | "about";
  onSelectTag: (tag: string | null) => void;
  onSelectSection: (section: "projects" | "about") => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  allTags,
  selectedTag,
  activeSection,
  onSelectTag,
  onSelectSection,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-64 h-full p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar
              allTags={allTags}
              selectedTag={selectedTag}
              activeSection={activeSection}
              onSelectTag={(tag) => {
                onSelectTag(tag);
                onClose();
              }}
              onSelectSection={(section) => {
                onSelectSection(section);
                if (section === "about") onClose();
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
