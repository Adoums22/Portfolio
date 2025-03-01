import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const email = "adelsaadna22@gmail.com";

const socialLinks = [
  { href: "https://github.com/Adoums22", icon: <FaGithub /> },
  { href: `mailto:${email}`, icon: <SiGmail /> }, // 🔥 Ouvre directement le client mail
  { href: "https://www.linkedin.com/in/adelsaadna", icon: <FaLinkedin /> },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-lg">
          Conçu et développé par <span className="font-bold">Adel SAADNA</span> © 2025 |  
          Réalisé avec React.js, Vite et Tailwind CSS
        </p>
        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-3xl text-gray-400 hover:text-lime-500 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
