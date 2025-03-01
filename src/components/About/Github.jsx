import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="flex flex-col items-center pb-10 px-4 w-full">
      <h1 className="text-2xl font-bold text-white pb-5 text-center">
        Days I <span className="text-lime-500">Code</span>
      </h1>
      <div className="w-full overflow-x-auto flex justify-center">
        <GitHubCalendar
          username="Adoums22"
          blockSize={12}  // Réduit la taille des blocs pour mieux s'adapter aux écrans petits
          blockMargin={4} // Réduit l'espacement pour éviter le débordement
          color="#c084f5"
          fontSize={14} // Réduit la taille du texte pour s'adapter
        />
      </div>
    </div>
  );
}
