import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { AiOutlineHome, AiOutlineUser, AiFillStar } from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";

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
        navColour ? "backdrop-blur-md shadow-lg bg-gray-900/80" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </Link>

        {/* Toggle button mobile */}
        <button
          onClick={() => setExpand(!expand)}
          className="md:hidden text-white text-2xl focus:outline-none relative z-50"
        >
          {expand ? "✖" : "☰"}
        </button>

        {/* Overlay mobile */}
        {expand && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md md:hidden transition-all duration-300"
            onClick={() => setExpand(false)}
          ></div>
        )}

        {/* Menu */}
        <div
          className={`absolute md:relative top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-300 ${
            expand ? "h-screen py-20" : "h-0 py-0 md:h-auto md:py-0"
          } overflow-hidden md:overflow-visible`}
        >
          {[
            { to: "/", label: "Introduction", icon: <AiOutlineHome className="text-xl" /> },
            { to: "/about", label: "À propos", icon: <AiOutlineUser className="text-xl" /> },
            { to: "/projects", label: "Projets", icon: <CgFileDocument className="text-xl" /> },
            { to: "/contact", label: "Contactez-moi", icon: <ImBlog className="text-xl" /> },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="flex items-center gap-2 text-white relative group"
              onClick={() => setExpand(false)}
              {...(item.external && { target: "_blank", rel: "noreferrer" })}
            >
              {item.icon}
              <span>{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
            </Link>
          ))}

          {/* GitHub Button */}
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
