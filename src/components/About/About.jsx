import Github from "./Github";
import React from "react";
import { ImPointRight } from "react-icons/im";
import { AiOutlineDownload } from "react-icons/ai";
import TechCards from "./TechCards";
import OutilsCard from "./OutilsCards";

<a 
  href="/CV_Adel_Saadna.pdf" 
  download="CV_Adel_Saadna.pdf" 
  className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-all"
>
  <AiOutlineDownload className="text-xl" />
  Télécharger mon CV
</a>


export default function About() {
  return (
    <div className="flex flex-col items-center text-white p-24 mt-32">
        <blockquote className="text-center">
          <p className="text-lg text-justify">
           Salut à tous, je m'appelle{" "}
            <span className="text-lime-500 font-semibold">Adel Saadna</span>{" "}
            j'habite à <span className="text-lime-500 font-semibold">Toulouse.</span>
            <br />
            Je suis actuellement à la recherche d'une{" "}<span className="text-lime-500 font-semibold">Alternance.</span>
            <br />
            J'ai obtenue mon diplôme de{" "}<span className="text-lime-500 font-semibold">Concepteur Développeur d'Application{" "}</span>à l'IPI.
            <br />
            <br />
            Dans mon temps libre j'adore !
          </p>

          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <ImPointRight className="text-lime-500 mr-2" /> Jouer aux jeux vidéo
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-lime-500 mr-2" /> Voyager
            </li>
            <li className="flex items-center">
              <ImPointRight className="text-lime-500 mr-2" /> Faire du sport
            </li>
          </ul>
          <div className="flex justify-center mt-4">
            <a 
                href="/Adel-Saadna-cv.pdf" 
                download="Adel-Saadna-cv.pdf" 
                className="px-6 py-2 bg-lime-500 text-white rounded-lg flex items-center gap-2 hover:bg-lime-700 transition-all w-fit"
            >
                <AiOutlineDownload className="text-xl" />Télécharger mon CV
            </a>
        </div>
        </blockquote>
        <TechCards/>
        <OutilsCard/>
        <Github/>
      </div>
    );
  }
  