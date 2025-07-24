import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import ProjectCard from "@/components/portfolio/ProjectCard";
import SkillBadge from "@/components/portfolio/SkillBadge";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Gamepad2,
  Lock,
  Brain,
  Terminal,
  User,
  GraduationCap,
  MapPin,
  Calendar,
} from "lucide-react";

const Index = () => {
  const featuredProjects = [
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
      title: "SmallBizz",
      description:
        "Cross-platform mobile app for local business networking and event stall booking. Includes real-time chat, location-aware discovery, and Firebase backend. Winner of 1st place in Software Engineering Project at NMIMS.",
      image: "/images/SmallBizz.jpeg",
      technologies: ["Flutter", "Firebase", "Cloudinary"],
      category: "mobile",
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
    {
      title: "Google Maps Timeline Activity Dashboard",
      description:
        "Interactive Power BI dashboard analyzing 3+ months of travel data from Google Maps Timeline. Used Python to clean and transform data into meaningful geospatial insights.",
      image: "/images/GoogleMapsDashboard.png",
      technologies: ["Power BI", "Python", "DAX"],
      category: "tools",
      liveUrl: "",
      githubUrl: "",
      featured: true,
    },
  ];


  const skills = [
    {
      name: "Flutter",
      level: 85,
      category: "mobile" as const,
      icon: <Smartphone className="h-4 w-4" />,
    },
    {
      name: "React",
      level: 90,
      category: "frontend" as const,
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      name: "Node.js",
      level: 80,
      category: "backend" as const,
      icon: <Server className="h-4 w-4" />,
    },
    {
      name: "MongoDB",
      level: 78,
      category: "backend" as const,
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: "Firebase",
      level: 80,
      category: "backend" as const,
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: "JavaScript",
      level: 90,
      category: "languages" as const,
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      name: "Python",
      level: 90,
      category: "languages" as const,
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      name: "C#",
      level: 78,
      category: "languages" as const,
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      name: "Dart",
      level: 82,
      category: "languages" as const,
      icon: <Terminal className="h-4 w-4" />,
    },
    {
      name: "Unity",
      level: 70,
      category: "game-dev" as const,
      icon: <Gamepad2 className="h-4 w-4" />,
    },
    {
      name: "Tailwind CSS",
      level: 85,
      category: "frontend" as const,
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      name: "Git",
      level: 75,
      category: "tools" as const,
      icon: <GitBranch className="h-4 w-4" />,
    },
    {
      name: "VS Code",
      level: 70,
      category: "tools" as const,
      icon: <Code2 className="h-4 w-4" />,
    },
    {
      name: "MySQL",
      level: 75,
      category: "backend" as const,
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: "SQLite3",
      level: 70,
      category: "backend" as const,
      icon: <Database className="h-4 w-4" />,
    },
  ];


  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Computer Science graduate with a passion for creating innovative
              digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <User className="h-5 w-5 mr-2" />
                    Background
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300">
                  <p className="mb-4">
                    Hi! I&apos;m Tanvi Halankar, an aspiring full-stack and mobile developer currently pursuing my Master&apos;s in Computer Applications at NMIMS, Mumbai. My journey into tech began with a Bachelor&apos;s in Computer Science from Mithibai College, where I laid the foundation for my love of building smart, user-centric digital solutions.
                  </p>
                  <p>
                    I&apos;ve worked on a diverse range of projects—from role-based academic portals to 3D multiplayer games and business networking apps—each strengthening my skills in React, Flutter, Firebase, and Unity. Beyond code, I enjoy solving real-world problems through creative tech and was honored with a first-place award for my SmallBizz project at NMIMS.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300">
                  <div className="space-y-2">
                    <h4 className="font-semibold">
                      Masters of Computer Application
                    </h4>
                    <p className="text-zinc-400">
                      NMIMS, Mumbai • 2024–2026
                    </p>
                    <p className="text-sm">CGPA: 9.42</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-zinc-300 mb-6">
                <MapPin className="h-5 w-5 mr-2 text-cyan-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center text-zinc-300 mb-6">
                <Calendar className="h-5 w-5 mr-2 text-cyan-400" />
                <span>Available for opportunities</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "Problem Solving",
                    "Team Collaboration",
                    "Technical Events",
                    "Software Engineering",
                    "Game Development",
                    "Learning New Tech",
                    "Creative Projects",
                  ].map((interest) => (
                    <Badge
                      key={interest}
                      variant="secondary"
                      className="bg-zinc-700 text-zinc-300"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Constantly learning and evolving with the latest technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
                category={skill.category}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
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

          <div className="text-center">
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
