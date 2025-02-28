import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-lg">
          Conçu et développé par <span className="font-bold">Adel SAADNA</span> © 2025 |
          Réalisé avec React.js, Vite et Tailwind CSS
        </p>
        <div className="mt-4 flex space-x-6">
          {[
            { href: "https://www.linkedin.com/in/adelsaadna", icon: <FaLinkedin /> },
            { href: "https://github.com/Adoums22", icon: <FaGithub /> },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-lime-500 transition-all"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
