import React from "react";
import { DiVisualstudio } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { TfiAndroid } from "react-icons/tfi";
import { SiEclipseide } from "react-icons/si";

const techIcons = [
  { icon: <DiVisualstudio />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <TfiAndroid />, name: "Android" },
  { icon: <SiEclipseide />, name: "Eclipse" },
];

export default function OutilsCard() {
  return (
    <div className="py-12 ">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
        Outils{" "} <span className="text-lime-500">Logiciel</span>
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
