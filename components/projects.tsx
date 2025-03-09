"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/components/language-provider";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  detailedDescription: string;
  challenges: string;
  solutions: string;
  liveDemo: string;
  category: string;
  featured: boolean;
  github?: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const projectsPerPage = 6;
  const { t } = useLanguage();

  // Exemplo de projetos (você pode ter muito mais)
  const projects = [
    {
      id: 2,
      title: "Coletiva - Trabalhos academicos",
      description: t("coletivaDesc"),
      image: "/projects/coletiva.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      detailedDescription: t("coletivaDetailedDesc"),
      challenges: t("coletivaChallenges"),
      solutions: t("coletivaSolutions"),
      liveDemo: "https://coletiva.netlify.app/",
      category: "web",
      featured: true,
    },
    {
      id: 3,
      title: "SuppleManager",
      description: t("suppleManagerDesc"),
      image: "/projects/suppl.png",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "Ant Design"],
      detailedDescription: t("suppleManagerDetailedDesc"),
      challenges: t("suppleManagerChallenges"),
      solutions: t("suppleManagerSolutions"),
      liveDemo: "https://supplemanager.netlify.app/login",
      category: "fullstack",
      featured: true,
    },
    {
      id: 4,
      title: t("firstPortfolioTitle"),
      description: t("firstPortfolioDesc"),
      image: "projects/PORT.png",
      technologies: ["React", "Styled Components", "Framer Motion"],
      detailedDescription: t("firstPortfolioDetailedDesc"),
      challenges: t("firstPortfolioChallenges"),
      solutions: t("firstPortfolioSolutions"),
      liveDemo: "https://wilksonflor.netlify.app/",
      category: "web",
      featured: false,
    },
    {
      id: 5,
      title: "GitHub Find",
      description: t("githubFindDesc"),
      image: "/projects/gitfinder.png",
      technologies: ["React", "Styled Components", "Axios", "GitHub API"],
      detailedDescription: t("githubFindDetailedDesc"),
      challenges: t("githubFindChallenges"),
      solutions: t("githubFindSolutions"),
      liveDemo: "https://githubapiprofiles.netlify.app/",
      category: "web",
      featured: true,
    },
    {
      id: 6,
      title: "Shoes Jordan",
      description: t("shoesJordanDesc"),
      image: "projects/jordan.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      detailedDescription: t("shoesJordanDetailedDesc"),
      challenges: t("shoesJordanChallenges"),
      solutions: t("shoesJordanSolutions"),
      liveDemo: "https://shoesjordan.netlify.app/",
      category: "ecommerce",
      featured: true,
    },
    {
      id: 7,
      title: "Café Vida",
      description:
        "Um site moderno e interativo para uma cafeteria aconchegante, apresentando cardápio, localização e informações do ambiente.",
      image: "/projects/cafevida.png",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "React.js"],
      detailedDescription:
        "O Café Vida é um site sofisticado e responsivo desenvolvido para apresentar a identidade visual de uma cafeteria moderna. Conta com animações suaves, carregamento otimizado e um design envolvente.",
      challenges:
        "Criar uma experiência visual atrativa, responsiva e otimizada para SEO, garantindo carregamento rápido e boa usabilidade.",
      solutions:
        "Uso de Framer Motion para animações, otimização de imagens, layout flexível com Tailwind CSS e melhorias na acessibilidade.",
      liveDemo: "https://cafevida.netlify.app/",
      category: "web",
      featured: true,
    },
    // Você pode adicionar mais projetos aqui
  ];

  // Categorias únicas para o filtro
  const categories = [
    { value: "all", label: t("allProjects") },
    { value: "web", label: t("webProjects") },
    { value: "mobile", label: t("mobileProjects") },
    { value: "fullstack", label: t("fullstackProjects") },
    { value: "ecommerce", label: t("ecommerceProjects") },
  ];

  // Filtrar projetos com base na pesquisa e categoria
  useEffect(() => {
    let result = [...projects];

    // Filtrar por categoria
    if (selectedCategory !== "all") {
      result = result.filter(
        (project) => project.category === selectedCategory
      );
    }

    // Filtrar por termo de pesquisa
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(term))
      );
    }

    // Ordenar projetos destacados primeiro
    result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    setFilteredProjects(result);
    setCurrentPage(1); // Reset para a primeira página quando os filtros mudam
  }, [searchTerm, selectedCategory, t]);

  // Calcular projetos para a página atual
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t("projects")}</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("projectsDescription")}
          </p>
        </motion.div>

        {/* Filtros e Pesquisa */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={t("searchProjects")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder={t("filterByCategory")} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Resultados da pesquisa */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              {t("noProjectsFound")}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeInUp}
                >
                  <Card className="h-full flex flex-col overflow-hidden group">
                    <div className="relative overflow-hidden">
                      {project.featured && (
                        <div className="absolute top-2 right-2 z-10">
                          <Badge variant="default">{t("featured")}</Badge>
                        </div>
                      )}
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedProject(project)}
                      >
                        {t("viewDetails")}
                      </Button>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="ghost" size="icon" asChild>
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    )
                  )}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md"
              />
              <div>
                <h4 className="text-sm font-medium mb-2">
                  {t("technologiesUsed")}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">
                  {t("detailedDescription")}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {selectedProject.detailedDescription}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    {t("challenges")}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.challenges}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">{t("solutions")}</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedProject.solutions}
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                <Button variant="outline" asChild>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    {t("sourceCode")}
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {t("viewDemo")}
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
