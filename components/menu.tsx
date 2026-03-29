"use client";
import { useState } from "react";
import Modal from "./modal";
import Contato from "./contato";

const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Projetos", href: "https://github.com/andreluizsantana" },
  { label: "Contato", href: null },
];

const Topo = () => {
  const [open, setOpen] = useState(false);
  const [contatoAberto, setContatoAberto] = useState(false);

  return (
    <nav className="w-full bg-gray-800 border-b border-gray-700 font-mono">
      <div className="h-14 flex items-center justify-between px-8">
        <div className="text-sm text-gray-200">
          <span className="text-blue-400">class</span>{" "}
          <span className="text-yellow-300 font-bold">Andre</span>{" "}
          <span className="text-blue-400">implements</span>{" "}
          <span className="text-teal-400 font-bold">BackendDeveloper</span>
          <span className="cursor-blink ml-1 text-white">|</span>
        </div>

        <ul className="hidden md:flex gap-6 font-sans">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              {label === "Contato" ? (
                <button
                  onClick={() => setContatoAberto(true)}
                  className="text-sm text-gray-400 cursor-pointer hover:text-gray-200 transition-colors"
                >
                  {label}
                </button>
              ) : (
                <a
                  href={href as string}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  className="text-sm text-gray-400 cursor-pointer hover:text-gray-200"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <button
          className="flex md:hidden flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 origin-center ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-gray-400 transition-all duration-200 origin-center ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <ul
        className={`flex flex-col md:hidden overflow-hidden transition-all duration-300 font-sans ${open ? "max-h-48" : "max-h-0"}`}
      >
        {navItems.map(({ label, href }) => (
          <li key={label} className="border-b border-gray-700">
            {label === "Contato" ? (
              <button
                onClick={() => {
                  setContatoAberto(true);
                  setOpen(false);
                }}
                className="block w-full text-left px-8 py-3 text-sm text-gray-400 cursor-pointer hover:text-gray-200 hover:bg-gray-900 transition-colors"
              >
                {label}
              </button>
            ) : (
              <a
                href={href as string}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="block px-8 py-3 text-sm text-gray-400 cursor-pointer hover:text-gray-200 hover:bg-gray-900"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <Modal isOpen={contatoAberto} onClose={() => setContatoAberto(false)}>
        <Contato onClose={() => setContatoAberto(false)} />
      </Modal>
    </nav>
  );
};

export default Topo;