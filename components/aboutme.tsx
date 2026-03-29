import Image from "next/image";
import fotoPerfil from "../src/fotoPerfil.png";

const Aboutme = () => {
  const skills = [
    "Java", "OOP", "Collections", "Streams API", "Maven",
    "Spring Boot", "Docker", "Swagger", "Microsserviços", "Quarkus",
  ];

  return (
    <div className="max-w-3xl mx-auto px-12 py-10 mt-1">

      <div className="flex flex-col md:flex-row gap-6 bg-gray-800/50 border border-gray-700 rounded-lg p-6 md:p-8">

        {/* Foto + badge + tag java */}
        <div className="shrink-0 flex flex-col items-center gap-2">
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-gray-800" />
            <Image
              src={fotoPerfil}
              alt="André Luiz"
              priority
              fill
              className="rounded-full object-cover"
            />
          </div>

          {/* Disponível */}
          <div className="flex items-center gap-1.5">
            <div className="bg-green-400 w-1.5 h-1.5 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500 font-mono">Disponível</span>
          </div>

          {/* Tag Java minimalista */}
          <span className="font-mono text-xs text-cyan-400/70">
            <span className="text-gray-600">&gt;&gt;</span> javac ready
          </span>
        </div>

        {/* Divisor vertical */}
        <div className="hidden md:block w-px bg-gray-700 self-stretch" />

        {/* Texto */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">

          <h1 className="text-xl font-semibold text-gray-100 mb-1">André Luiz</h1>

          <p className="text-blue-400 text-sm mb-3 font-mono">
            // backend developer · Java
          </p>

          <p className="text-gray-400 text-sm leading-6 border-l-2 border-gray-600 pl-3 mb-4">
            Desenvolvedor backend com foco em Java, orientação a objetos e
            fundamentos de engenharia de software. Busco construir sistemas bem
            estruturados, compreendendo o funcionamento interno antes de usar
            abstrações. Em constante evolução através de estudo e projetos reais.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs border border-gray-600 text-blue-400 px-2.5 py-0.5 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Aboutme;