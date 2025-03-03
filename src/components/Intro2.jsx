import React from "react";
import myImg from "../Assets/avatar-logo.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const email = "adelsaadna22@gmail.com";

const socialLinks = [
  { href: "https://github.com/Adoums22", icon: <AiFillGithub /> },
  { href: "https://www.linkedin.com/in/adelsaadna", icon: <FaLinkedinIn /> },
  { href: `mailto:${email}`, icon: <SiGmail /> },
];


export default function Home2() {
  return (
    <section id="about" className="px-2 text-white">
      <div className="container mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">
              PERMETTEZ-MOI <span className="text-lime-500">DE ME</span> PRÉSENTER
            </h1>
            <p className="text-lg leading-relaxed">
              Dès le lycée, la programmation est devenue une passion 🤷‍♂️
              <br />
              <br />Performant avec les langages{" "}
              <b className="text-lime-500">Kotlin, JavaScript, C# et Python.</b>
              <br />
              <br />
              Passionné par le développement de{" "}
              <b className="text-lime-500">nouveaux sites et applications web</b>, ainsi que les{" "}
              <b className="text-lime-500">applications mobiles.</b>
              <br />
              <br />
              Dans mes projets, j'utilise aussi{" "}
              <b className="text-lime-500">Node.js</b> ainsi que{" "}
              <b className="text-lime-500">des frameworks modernes</b> comme{" "}
              <b className="text-lime-500">React.js, Tailwind CSS et Next.js.</b>
            </p>
          </div>
          <div className="flex justify-center">
            <Tilt>
              <img src={myImg} alt="avatar" className="w-72 md:w-80 rounded-lg shadow-lg" />
            </Tilt>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">RETROUVEZ-MOI</h2>
          <p className="text-lg">
            N'hésitez pas à <span className="text-lime-500">me contacter</span>
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
      </div>
    </section>
  );
}
