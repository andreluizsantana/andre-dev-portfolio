interface SectionProps {
  title: string;
  items: string[];
}

const Section = ({ title, items }: SectionProps) => (
  <div className="max-w-2xl mx-auto px-7 py-6 bg-gray-900 border border-gray-700 rounded-lg font-mono">
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
);

const Experience = () => {
  const itemsExp: string[] = [
    "Desenvolvimento e manutenção de sistemas Java web em ambiente enterprise utilizando e-Gen Developer (RAD), Struts e JSF.",
    "Implementação e customização de regras de negócio",
    "Desenvolvimento de telas e formulários utilizando componentes JSF e HTML/CSS",
    "Integração com banco de dados Oracle e SQL Server",
    "Manutenção e adaptação de código gerado",
    "Ajustes de fluxo MVC (Actions / Forms)",
    "Desenvolvimento de validações e lógica de backend",
    "Integração com banco de dados SQL",
    "Desenvolvimento de integração para impressão de etiquetas Zebra via ZPL",
  ];

  const itemsForm: string[] = [
    "UNIESP Centro Universitário",
    "Análise e Desenvolvimento de Sistemas",
    "2009 - 2011",
  ];

  return (
    <div className="space-y-6">
      <Section title="Formação Superior" items={itemsForm} />
      <Section title="Experiência de Trabalho" items={itemsExp} />
    </div>
  );
};

export default Experience;