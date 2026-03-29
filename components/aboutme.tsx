const Aboutme = () => {
  const skills = [
    "Java",
    "OOP",
    "Collections",
    "Streams API",
    "Maven",
    "Spring Boot",
    "Docker",
    "Swagger",
    "Microsserviços",
    "Quarkus",
  ];

  return (
    <div className="max-w-3xl mx-auto px-12 py-14 mt-1">
      <h1 className="text-2xl font-semibold text-gray-100 mb-1">André Luiz</h1>
      <h1 className="text-blue-400 mb-1">// backend developer · Java</h1>

      <div className="flex items-center gap-2 mb-5 ml-6">
        <div className="bg-green-400 w-2 h-2 rounded-full"></div>
        <span className="text-xs text-gray-500">Disponível</span>
      </div>

      <p className="text-gray-400 text-sm leading-7 border-l-2 border-gray-700 pl-4 mb-6">
        Desenvolvedor backend com foco em Java, orientação a objetos e
        fundamentos de engenharia de software. Busco construir sistemas bem
        estruturados, compreendendo o funcionamento interno antes de usar
        abstrações. Em constante evolução através de estudo e projetos reais.
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {skills.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs border border-gray-600 text-blue-400 px-3 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="text-sm px-5 py-2 bg-gray-100 text-gray-900 rounded font-medium hover:bg-white transition-colors">
          Ver projetos
        </button>
        <a
          href="https://github.com/andreluizsantana"
          target="_blank"
          className="text-sm px-5 py-2 border border-gray-600 text-gray-400 rounded hover:text-gray-200 hover:border-gray-400 transition-colors inline-block"
        >
          GitHub
        </a>

         <a
          href="https://www.linkedin.com/in/andrelssr/"
          target="_blank"
          className="text-sm px-5 py-2 border border-gray-600 text-white rounded hover:text-gray-200 hover:border-gray-400 transition-colors inline-block"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Aboutme;
