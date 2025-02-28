import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_lyr0p0p", // Remplace par ton Service ID
        "template_no3w22j", // Remplace par ton Template ID
        form.current,
        "GL0d9mNgimCDmEx9F" // Remplace par ton User ID
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          console.error("Erreur d'envoi :", error);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 text-white p-20 mt-20 flex-grow flex-col min-h-screen">
      <div className="container mx-auto text-center px-4">
      <h2 className="text-4xl font-bold mb-10">
        Me <span className="text-lime-500">Contacter</span>
      </h2>
        <p className="text-lg mb-8 text-gray-300">
          Une question, un projet ? Envoie-moi un message !
        </p>

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-6">
          {/* Nom */}
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              name="user_name"
              placeholder="Votre nom"
              required
              className="w-full p-3 pl-10 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="email"
              name="user_email"
              placeholder="Votre email"
              required
              className="w-full p-3 pl-10 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <BiMessageDetail className="absolute left-3 top-5 text-gray-400 text-xl" />
            <textarea
              name="message"
              rows="5"
              placeholder="Votre message..."
              required
              className="w-full p-3 pl-10 bg-gray-800 rounded-lg text-white focus:ring-2 focus:ring-lime-500"
            ></textarea>
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full bg-lime-500 text-black font-semibold py-3 rounded-lg transition hover:bg-lime-600"
            disabled={loading}
          >
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>

          {/* Message de confirmation */}
          {sent && (
            <p className="text-lime-400 text-sm mt-4">
              ✅ Message envoyé avec succès !
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
