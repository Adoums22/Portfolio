import React from "react";
import { DiReact, DiNodejs, DiPython, DiGit, DiJava } from "react-icons/di";
import { SiNextdotjs, SiPostgresql, SiKotlin } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiIonic } from "react-icons/si";


const techIcons = [
  { icon: <SiKotlin />, name: "Kotlin" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiIonic />, name: "Ionic" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJava />, name: "Java" },
];

export default function TechCards() {
  return (
    <div className="py-12 mt-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
        Compétences <span className="text-lime-500">professionnelles</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-32 h-32 border-4 border-lime-500 rounded-2xl text-white text-6xl p-6 transition-all hover:scale-110 relative"
          >
            {/* Effet Néon */}
            <div className="absolute inset-0 rounded-2xl border-4 border-lime-500 blur-lg opacity-50"></div>

            {/* Icône */}
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
