// src/Components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Name */}
        <div>
          <h1 className="text-2xl font-bold text-white">Golam Kibria Hassan</h1>
          <p className="mt-2 text-sm text-gray-400">
            Passionate Full-Stack Developer. Crafting web experiences with React & Node.js.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Connect with Me</h2>
          <div className="flex space-x-5 text-2xl">
            <a href="https://github.com/kibria900" target="_blank" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/golam-kibria-hassan/" target="_blank" className="hover:text-white">
              <FaLinkedin />
            </a>
            <a href="mailto:kibriahassan3500@gmail.com" className="hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kibria. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
