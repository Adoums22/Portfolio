import React from "react";
import justiceLogo from "../../assets/ministere_justice.jpg";
import airbusLogo from "../../assets/Airbus_logo_2017.png";
import sewarStage from "../../assets/sewar_project.png";
import muscleApp from "../../assets/my_muscle_app_logo.png";
import logoPokemon from "../../assets/logo-pokemon.png";
import battleGameLogo from "../../assets/battle-game-logo.png";

const projects = [
  {
    title: "MaJustice",
    description: "Application mobile pour le Ministère de la Justice, facilitant l'accès aux informations juridiques.",
    image: justiceLogo,
    github: null,
    demo: "https://play.google.com/store/apps/details?id=fr.justice.mobile.android&hl=fr&pli=1",
  },
  {
    title: "MyDigitalWorkPlace",
    description: "Application KMP pour Airbus permettant de suivre la consommation des employés en papier et en données.",
    image: airbusLogo,
    github: null,
    demo: "https://www.airbus.com/fr",
  },
  {
    title: "Plateforme e-commerce",
    description: "Lors de mon deuxième stage chez Sewargroup en Arabie Saoudite, j'ai conçu et développé une plateforme de commerce électronique pour la vente de produits sportifs en ligne.",
    image: sewarStage,
    github: null,
    demo: "https://adkev.online/projet_2/",
  },
  {
    title: "MyMuscle App",
    description: "Application mobile en Kotlin Multiplatform développée chez Sopra Steria pour apprendre cette technologie.",
    image: muscleApp,
    github: "https://github.com/Adoums22/MuscleApp",
    demo: null,
  },
  {
    title: "Pokemon App",
    description: "Application Kotlin utilisant une API pour afficher des informations sur les Pokémon.",
    image: logoPokemon,
    github: "https://github.com/Adoums22/PokemonApp",
    demo: null,
  },
  {
    title: "Battle Game",
    description: "Jeu en Python où des personnages s'affrontent en utilisant un système de classes et d’héritage.",
    image: battleGameLogo,
    github: "https://github.com/Adoums22/py-battle-game-cdan",
    demo: null,
  },
];

export default function SelfProjects() {
  return (
    <div className="flex flex-col items-center text-white p-16 mt-20">
      <h2 className="text-3xl font-bold mb-10">
        Mes <span className="text-lime-500">Projets</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-4 border-lime-500 rounded-2xl p-5 w-80 bg-transparent text-center shadow-lg shadow-lime-500 flex flex-col h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-contain rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 text-sm flex-grow mb-4">{project.description}</p>

            <div className="mt-auto flex justify-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-lime-500 rounded-lg hover:bg-lime-700 transition"
                >
                  Voir sur GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium text-white bg-lime-500 rounded-lg hover:bg-lime-700 transition"
                >
                  Voir le site
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
