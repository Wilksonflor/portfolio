"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type Language = "pt-BR" | "en";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  "pt-BR": {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    services: "Serviços",
    contact: "Contato",
    contactDescription:
      "Tem um projeto em mente ou quer conversar sobre uma oportunidade? Entre em contato!",
    location: "Localização",
    email: "Email",
    phone: "Telefone",
    name: "Nome",
    yourName: "Seu nome",
    yourEmail: "seu.email@exemplo.com",
    subject: "Assunto",
    messageSubject: "Assunto da mensagem",
    message: "Mensagem",
    yourMessage: "Sua mensagem",
    sendMessage: "Enviar Mensagem",
    heroTitle: "Desenvolvedor Front-end",
    heroDescription:
      "Criando experiências digitais interativas e responsivas com ReactJS e React Native. Transformando ideias em interfaces elegantes e funcionais.",
    contactMe: "Entre em contato",
    viewProjects: "Ver projetos",
    aboutTitle: "Sobre Mim",
    aboutDescription:
      "Conheça um pouco da minha trajetória e habilidades como desenvolvedor.",
    myJourney: "Minha Trajetória",
    journeyDescription:
      "Natural de Palmares-PE, minha jornada na tecnologia começou com a curiosidade sobre como as coisas funcionam no mundo digital. Essa curiosidade me levou a cursar Desenvolvimento de Sistemas na UNINASSAU, onde pude aprofundar meus conhecimentos técnicos e descobrir minha paixão pelo desenvolvimento front-end.",
    experience:
      "Com 1 ano e meio de experiência profissional, tenho me especializado na criação de interfaces interativas e responsivas utilizando ReactJS e React Native, sempre buscando aplicar as melhores práticas de desenvolvimento e design.",
    fullStack:
      "Além do front-end, também possuo conhecimentos em tecnologias de back-end como Node.js, Express, MongoDB e PostgreSQL, o que me permite ter uma visão mais completa do desenvolvimento de aplicações web e mobile.",
    footerDescription:
      "Desenvolvedor front-end especializado em criar experiências digitais interativas e responsivas.",
    rightsReserved: "Todos os direitos reservados.",
    webDevelopment: "Desenvolvimento Web",
    webDevelopmentDesc:
      "Criação de sites e aplicações web responsivas, modernas e otimizadas para diferentes dispositivos e navegadores.",
    mobileDevelopment: "Desenvolvimento Mobile",
    mobileDevelopmentDesc:
      "Desenvolvimento de aplicativos móveis nativos e híbridos para iOS e Android utilizando React Native.",
    frontendDevelopment: "Desenvolvimento Front-end",
    frontendDevelopmentDesc:
      "Implementação de interfaces de usuário interativas e responsivas com foco em usabilidade e experiência do usuário.",
    backendDevelopment: "Desenvolvimento Back-end",
    backendDevelopmentDesc:
      "Criação de APIs RESTful, integração com bancos de dados e implementação de lógica de negócios no servidor.",
    uiuxPrototyping: "Prototipagem UI/UX",
    uiuxPrototypingDesc:
      "Criação de protótipos e wireframes para validação de conceitos e experiência do usuário antes da implementação.",
    technicalConsulting: "Consultoria Técnica",
    technicalConsultingDesc:
      "Consultoria em desenvolvimento de software, arquitetura de aplicações e escolha de tecnologias para projetos.",
    services1: "Serviços",
    servicesDescription:
      "Ofereço soluções personalizadas para atender às necessidades específicas do seu projeto.",
    projects1: "Projetos",
    projectsDescription:
      "Conheça alguns dos projetos que desenvolvi, aplicando diferentes tecnologias e soluções.",
    viewDetails: "Ver detalhes",
    technologiesUsed: "Tecnologias utilizadas",
    detailedDescription: "Descrição detalhada",
    challenges: "Desafios",
    solutions: "Soluções",
    sourceCode: "Código fonte",
    viewDemo: "Ver demo",
    // Adicione as traduções para os projetos aqui
    frontendTitle: "Front-end",
    frontendDescription:
      "Desenvolvimento de interfaces de usuário interativas e responsivas, com foco em experiência do usuário e performance.",
    backendTitle: "Back-end",
    backendDescription:
      "Conhecimentos em desenvolvimento de APIs e serviços web, gerenciamento de bancos de dados e lógica de negócios.",
    toolsTitle: "Ferramentas",
    toolsDescription:
      "Utilização de ferramentas e metodologias que auxiliam no processo de desenvolvimento e colaboração em equipe.",

    // Coletiva
    coletivaDesc:
      "Plataforma colaborativa para compartilhamento e gerenciamento de trabalhos acadêmicos.",
    coletivaDetailedDesc:
      "Coletiva é uma plataforma web desenvolvida para facilitar o compartilhamento e gerenciamento de trabalhos acadêmicos entre estudantes universitários. O sistema permite que os usuários façam upload, categorizem e compartilhem seus trabalhos, além de pesquisar e acessar trabalhos de outros usuários.",
    coletivaChallenges:
      "Os principais desafios incluíram a implementação de um sistema de busca eficiente com filtros avançados, o gerenciamento de permissões de acesso aos documentos e a criação de uma interface intuitiva que facilitasse a navegação entre diferentes categorias de trabalhos acadêmicos.",
    coletivaSolutions:
      "Implementei um sistema de busca otimizado utilizando indexação de conteúdo, desenvolvi um sistema de permissões baseado em papéis de usuário e criei uma interface responsiva com Tailwind CSS e Framer Motion para garantir uma experiência fluida em todos os dispositivos.",

    // SuppleManager
    suppleManagerDesc:
      "Sistema de gerenciamento de estoque e vendas para lojas de suplementos.",
    suppleManagerDetailedDesc:
      "SuppleManager é uma aplicação web completa para gerenciamento de estoque, vendas e clientes de lojas de suplementos alimentares. O sistema inclui funcionalidades como controle de estoque em tempo real, gestão de pedidos, cadastro de clientes, relatórios de vendas e integração com métodos de pagamento.",
    suppleManagerChallenges:
      "Os desafios incluíram o desenvolvimento de um sistema de controle de estoque em tempo real que pudesse lidar com múltiplos pontos de venda simultaneamente, a implementação de relatórios detalhados de vendas e a criação de um painel administrativo completo e intuitivo.",
    suppleManagerSolutions:
      "Utilizei React para o frontend com Ant Design para a interface, Node.js e Express para o backend, e PostgreSQL para o banco de dados. Implementei websockets para atualizações em tempo real do estoque e desenvolvi um sistema de relatórios personalizáveis com exportação para diferentes formatos.",

    // Primeiro Portfolio
    firstPortfolioTitle: "Portfolio Original",
    firstPortfolioDesc:
      "Meu primeiro portfolio profissional desenvolvido com React e Styled Components.",
    firstPortfolioDetailedDesc:
      "Este foi meu primeiro portfolio profissional, desenvolvido para apresentar meus projetos e habilidades de forma atrativa e funcional. O site conta com seções para apresentação pessoal, projetos, habilidades técnicas e formulário de contato.",
    firstPortfolioChallenges:
      "Os principais desafios foram criar um design único e memorável que refletisse minha identidade como desenvolvedor, implementar animações fluidas que não comprometessem a performance e garantir a responsividade em todos os dispositivos.",
    firstPortfolioSolutions:
      "Utilizei React com Styled Components para criar um design personalizado e Framer Motion para implementar animações suaves e de alta performance. Adotei uma abordagem mobile-first para garantir uma experiência consistente em todos os dispositivos.",

    // GitHub Find
    githubFindDesc:
      "Aplicação para busca e visualização de perfis e repositórios do GitHub.",
    githubFindDetailedDesc:
      "GitHub Find é uma aplicação web que permite aos usuários buscar perfis do GitHub e visualizar informações detalhadas sobre usuários e seus repositórios. A aplicação consome a API pública do GitHub para exibir dados como repositórios populares, contribuições, seguidores e linguagens mais utilizadas.",
    githubFindChallenges:
      "Os desafios incluíram o gerenciamento eficiente das requisições à API do GitHub respeitando os limites de taxa, a organização e apresentação de grandes volumes de dados de forma clara e a implementação de um sistema de cache para melhorar a performance.",
    githubFindSolutions:
      "Implementei um sistema de cache local para reduzir o número de requisições à API, utilizei gráficos e visualizações de dados para apresentar informações de forma clara e intuitiva, e criei um design responsivo com Styled Components para uma experiência consistente em diferentes dispositivos.",

    // Shoes Jordan
    shoesJordanDesc:
      "E-commerce especializado em tênis da linha Jordan com experiência de compra imersiva.",
    shoesJordanDetailedDesc:
      "Shoes Jordan é um e-commerce especializado em tênis da linha Jordan, oferecendo uma experiência de compra imersiva e diferenciada. O site conta com visualização 3D dos produtos, histórico de cada modelo, sistema de recomendação personalizada e integração com métodos de pagamento.",
    shoesJordanChallenges:
      "Os principais desafios foram a implementação de visualizações 3D dos produtos com boa performance, a criação de um sistema de recomendação eficiente baseado nas preferências do usuário e o desenvolvimento de uma experiência de checkout fluida e segura.",
    shoesJordanSolutions:
      "Utilizei React com Tailwind CSS para o frontend, implementei visualizações 3D otimizadas com Three.js, desenvolvi um algoritmo de recomendação baseado no histórico de navegação e preferências do usuário, e criei animações suaves com Framer Motion para enriquecer a experiência de compra.",

    // Novas traduções para a seção de projetos
    searchProjects: "Pesquisar projetos...",
    filterByCategory: "Filtrar por categoria",
    allProjects: "Todos os projetos",
    webProjects: "Projetos Web",
    mobileProjects: "Projetos Mobile",
    fullstackProjects: "Projetos Full Stack",
    ecommerceProjects: "E-commerce",
    noProjectsFound: "Nenhum projeto encontrado com os filtros atuais.",
    featured: "Destaque",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    services: "Services",
    contact: "Contact",
    contactDescription:
      "Have a project in mind or want to discuss an opportunity? Get in touch!",
    location: "Location",
    email: "Email",
    phone: "Phone",
    name: "Name",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    subject: "Subject",
    messageSubject: "Message subject",
    message: "Message",
    yourMessage: "Your message",
    sendMessage: "Send Message",
    heroTitle: "Front-end Developer",
    heroDescription:
      "Creating interactive and responsive digital experiences with ReactJS and React Native. Transforming ideas into elegant and functional interfaces.",
    contactMe: "Contact me",
    viewProjects: "View projects",
    aboutTitle: "About Me",
    aboutDescription: "Learn about my journey and skills as a developer.",
    myJourney: "My Journey",
    journeyDescription:
      "Born in Palmares-PE, my journey in technology began with curiosity about how things work in the digital world. This curiosity led me to study Systems Development at UNINASSAU, where I was able to deepen my technical knowledge and discover my passion for front-end development.",
    experience:
      "With 1.5 years of professional experience, I have specialized in creating interactive and responsive interfaces using ReactJS and React Native, always seeking to apply the best development and design practices.",
    fullStack:
      "In addition to front-end, I also have knowledge in back-end technologies such as Node.js, Express, MongoDB and PostgreSQL, which allows me to have a more complete view of web and mobile application development.",
    footerDescription:
      "Front-end developer specialized in creating interactive and responsive digital experiences.",
    rightsReserved: "All rights reserved.",
    webDevelopment: "Web Development",
    webDevelopmentDesc:
      "Creation of responsive, modern websites and web applications optimized for different devices and browsers.",
    mobileDevelopment: "Mobile Development",
    mobileDevelopmentDesc:
      "Development of native and hybrid mobile applications for iOS and Android using React Native.",
    frontendDevelopment: "Front-end Development",
    frontendDevelopmentDesc:
      "Implementation of interactive and responsive user interfaces focusing on usability and user experience.",
    backendDevelopment: "Back-end Development",
    backendDevelopmentDesc:
      "Creation of RESTful APIs, database integration, and implementation of server-side business logic.",
    uiuxPrototyping: "UI/UX Prototyping",
    uiuxPrototypingDesc:
      "Creation of prototypes and wireframes for concept validation and user experience before implementation.",
    technicalConsulting: "Technical Consulting",
    technicalConsultingDesc:
      "Consulting on software development, application architecture, and technology choices for projects.",
    servicess: "Services",
    servicesDescription:
      "I offer customized solutions to meet the specific needs of your project.",
    projectss: "Projects",
    projectsDescription:
      "Check out some of the projects I've developed, applying different technologies and solutions.",
    viewDetails: "View details",
    technologiesUsed: "Technologies used",
    detailedDescription: "Detailed description",
    challenges: "Challenges",
    solutions: "Solutions",
    sourceCode: "Source code",
    viewDemo: "View demo",
    // Add translations for projects here
    frontendTitle: "Front-end",
    frontendDescription:
      "Development of interactive and responsive user interfaces, focusing on user experience and performance.",
    backendTitle: "Back-end",
    backendDescription:
      "Knowledge in API and web service development, database management, and business logic.",
    toolsTitle: "Tools",
    toolsDescription:
      "Use of tools and methodologies that assist in the development process and team collaboration.",

    // Novas traduções para a seção de projetos
    searchProjects: "Search projects...",
    filterByCategory: "Filter by category",
    allProjects: "All projects",
    webProjects: "Web Projects",
    mobileProjects: "Mobile Projects",
    fullstackProjects: "Full Stack Projects",
    ecommerceProjects: "E-commerce",
    noProjectsFound: "No projects found with current filters.",
    featured: "Featured",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt-BR");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
