import React from "react";
import Github from "./Github";
import TechCards from "./TechCards";
import OutilsCard from "./OutilsCards";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex flex-col items-center text-white p-15 mt-24 ">
      <h2 className="text-3xl font-bold mb-10 text-4xl">
        Qui <span className="text-lime-500 text-4xl">suis-je ?</span>
      </h2>
      <blockquote className="text-center py-6 sm:px-10">
        <p className="text-2xl text-center">
          Bonjour à tous, je m'appelle{" "}
          <span className="text-lime-500 font-semibold">Adel Saadna</span> et j'habite à{" "}
          <span className="text-lime-500 font-semibold">Toulouse.</span>
          <br />
          <br />
          Actuellement à la recherche d'une{" "}
          <span className="text-lime-500 font-semibold">alternance.</span>
          <br />
          <br />
          Diplomé d'un Bachelor{" "}
          <span className="text-lime-500 font-semibold">
            Concepteur Développeur d'Application
          </span>{" "}
          à l'IPI.
          <br />
          <br />
          Mes activités :
        </p>

        <ul className="mt-4 space-y-2 text-center">
          {["Jouer aux jeux vidéo", "Voyager", "Faire du sport"].map((hobby, index) => (
          <li key={index} className="flex items-center justify-center text-2xl">
            <ImPointRight className="text-lime-500 mr-2 text-2xl" /> {hobby}
          </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <a
            href="/Adel-Saadna-cv.pdf"
            download="Adel-Saadna-cv.pdf"
            className="px-6 py-2 bg-lime-500 text-white rounded-lg flex items-center gap-2 hover:bg-lime-700 transition-all w-fit"
          >
            <AiOutlineDownload className="text-xl animate-bounce" /> Télécharger mon CV
          </a>
        </div>
      </blockquote>

      <TechCards />
      <OutilsCard />
      <Github />
    </div>
  );
}