import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-800 text-gray-300 py-6 z-10 max-h-20"
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Jade Didon. All rights reserved.
        </p>
        <div className="flex justify-center items-center my-2">
          <a
            href="mailto:jade.didon@gmail.com"
            className="hover:text-yellow-400 transition mx-2"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jade-didon-1567b5240/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition mx-2"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/jade_didon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition mx-2"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
