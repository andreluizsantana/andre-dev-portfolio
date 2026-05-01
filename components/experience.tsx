interface SectionProps {
  title: string;
  items: string[];
  link?: {
    label: string;
    url: string;
  };
}

const Section = ({ title, items, link }: SectionProps) => (
  <div className="max-w-2xl mx-auto px-7 py-6 bg-gray-900 border border-gray-700 rounded-lg font-mono flex flex-col h-full">
    <div className="flex-grow">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
        {title}
      </p>
      <ul className="list-disc pl-4 space-y-2">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-sm text-gray-400 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Renderiza o link apenas se a prop for passada */}
    {link && (
      <div className="mt-6 pt-4 border-t border-gray-800">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
        >
          {link.label}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    )}
  </div>
);

const Experience = () => {
  const itemsExp: string[] = [
    "Desenvolvimento de APIs RESTful utilizando o ecossistema Spring (Boot, Security, Data)",
    "Implementação de segurança e autenticação stateless baseada em tokens JWT",
    "Mapeamento e segregação de contratos de API utilizando DTOs e MapStruct",
    "Persistência e criação de rotinas de auditoria de dados utilizando Spring Data JPA e Hibernate",
    "Implementação de tratamento global de exceções para padronização de respostas da API",
    "Modelagem e desenvolvimento de rotinas de agendamento e tarefas recorrentes no backend",
    "Desenvolvimento e manutenção de sistemas Java web em ambiente enterprise utilizando e-Gen Developer (RAD), Struts e JSF.",
    "Implementação e customização de regras de negócio",
    "Desenvolvimento de telas e formulários utilizando componentes JSF e HTML/CSS",
    "Integração com banco de dados Oracle e SQL Server",
    "Manutenção e adaptação de código gerado",
    "Ajustes de fluxo MVC (Actions / Forms)",
    "Desenvolvimento de validações e lógica de backend",
    "Desenvolvimento de integração para impressão de etiquetas Zebra via ZPL"
  ];

  const itemsForm: string[] = [
    "UNIESP Centro Universitário",
    "Análise e Desenvolvimento de Sistemas",
    "2009 - 2011"
  ];

  return (
    <div className="space-y-6">
      <Section title="Formação Superior" items={itemsForm} />
      <Section 
        title="Experiência de Trabalho" 
        items={itemsExp} 
        link={{
          label: "Ver projetos e código-fonte no GitHub",
          url: "https://github.com/andreluizsantana"
        }}
      />
    </div>
  );
};

export default Experience;