import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

type HeaderProps = {
  allTags: string[];
  selectedTag: string | null;
  activeSection: "projects" | "about";
  onSelectTag: (tag: string | null) => void;
  onSelectSection: (section: "projects" | "about") => void;
};

export default function Header({
  allTags,
  selectedTag,
  activeSection,
  onSelectTag,
  onSelectSection,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex sm:flex-row justify-between items-start md:items-center p-4">
        <div className="text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Jade Didon</h1>
          <p className="text-gray-600 px-1">Student at Estienne,</p>
          <p className="text-gray-600 px-1">
            DSAA Design Stratégies Créatives et Médias
          </p>
        </div>

        <div className="hidden lg:flex flex-col my-4">
          <p className="font-thin">
            Seeking for a three-month internship in advertising and
            communication,
          </p>
          <p className="font-thin">
            available from February 23rd to May 18th, 2026
          </p>
        </div>

        <div className="hidden sm:flex justify-center items-center gap-4 text-gray-700 text-2xl">
          <a
            href="https://www.linkedin.com/in/jade-didon-1567b5240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/jade_didon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          allTags={allTags}
          selectedTag={selectedTag}
          activeSection={activeSection}
          onSelectTag={onSelectTag}
          onSelectSection={onSelectSection}
        />
      </div>
    </header>
  );
}
