import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AiOutlineHome, AiOutlineUser, AiFillStar } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";

export default function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        navColour ? "backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        </Link>
      <button
      onClick={() => setExpand(!expand)}
      className="md:hidden text-white text-2xl focus:outline-none relative z-50"
      >
      {expand ? "✖" : "☰"}
      </button>
      {expand && (
      <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-md transition-all duration-300"></div>
      )}
    <div className={`md:flex items-center gap-6 md:block`}>
          {[
            { to: "/", label: "Introduction", icon: <AiOutlineHome className="text-xl" /> },
            { to: "/about", label: "À propos", icon: <AiOutlineUser className="text-xl" /> },
            { to: "/projects", label: "Projets", icon: <CgFileDocument className="text-xl" /> },
            { to: "/contact", label: "Contactez-moi", icon: <CgFileDocument className="text-xl" /> },
          ].map((item, index) => (
            <Link
            key={index}
            to={item.to}
            className="flex items-center gap-2 text-white relative group"
            >
              {item.icon}
            <span>{item.label}</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://github.com/Adoums22"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-white hover:bg-gray-700 transition-all"
          >
            <CgGitFork className="text-xl" />
            <AiFillStar className="text-lg" />
          </a>
        </div>
      </div>
    </nav>
  );
}
