import Navigation from "@/components/portfolio/Navigation";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Footer from "@/components/portfolio/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website using TypeScript, React, and Tailwind CSS. Implements dynamic rendering and modular design for maintainability and scalability.",
    image: "/images/Portfolio.png",
    technologies: ["TypeScript", "React", "Tailwind"],
    category: "frontend",
    liveUrl: "https://tanvihalankar-portfolio.vercel.app",
    githubUrl: "https://github.com/TanviHalankar/portfolio",
  },
  {
    title: "EduTrack",
    description:
      "Role-based academic portal built using the MERN stack. Features include real-time attendance, file uploads, and dashboards for students, faculty, and admins.",
    image: "/images/EduTrack.jpeg",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    category: "full-stack",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Google Maps Timeline Activity Dashboard",
    description:
      "Power BI dashboard analyzing 3+ months of geospatial travel data extracted from Google Maps Timeline. Designed with interactive visuals and DAX for behavioral insights.",
    image: "/images/GoogleMapsDashboard.png",
    technologies: ["Power BI", "Python", "DAX"],
    category: "tools",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "SmallBizz",
    description:
      "Cross-platform app for local business networking and event stall booking. Includes real-time chat, location-aware discovery, and Firebase backend.",
    image: "/images/SmallBizz.jpeg",
    technologies: ["Flutter", "Firebase", "Cloudinary"],
    category: "mobile",
    liveUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Warzone Chronicles",
    description:
      "3D multiplayer shooter game with dynamic environments and realistic mechanics built in Unity. Features performance optimization and immersive gameplay.",
    image: "/images/WarzoneChronicles.jpeg",
    technologies: ["Unity", "C#", "Photon PUN 2"],
    category: "game-dev",
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "TravelMate",
    description:
      "Travel discovery and trip planning Android app with secure login and destination exploration features. Built using Flutter, Firebase, and SQLite3.",
    image: "/images/TravelMate.jpeg",
    technologies: ["Flutter", "Firebase", "SQLite3"],
    category: "mobile",
    liveUrl: "",
    githubUrl: "",
  },
];


  const categories = [
  { value: "all", label: "All Projects" },
  { value: "full-stack", label: "Full Stack" },
  // { value: "frontend", label: "Frontend" },
  // { value: "backend", label: "Backend" },
  { value: "mobile", label: "Mobile" },
  // { value: "ml", label: "Machine Learning" },
  // { value: "devops", label: "DevOps" },
  { value: "game-dev", label: "Game Development" },
  // { value: "ai", label: "AI / NLP" },
  // { value: "utility", label: "Utilities / Scripts" },
];


  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A comprehensive showcase of my development work, from concept to
              deployment
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-400 focus:border-cyan-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={
                    selectedCategory === category.value
                      ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                      : "border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-cyan-300"
                  }
                >
                  <Filter className="h-4 w-4 mr-1" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-zinc-400">
                No projects found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-zinc-400">
                  Showing {filteredProjects.length} of {projects.length}{" "}
                  projects
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                    featured={project.featured}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
