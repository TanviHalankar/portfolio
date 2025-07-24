import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  GraduationCap,
  Briefcase,
  Award,
  Heart,
  Code2,
  Download,
  MapPin,
  Calendar,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const experiences = [
    {
      title: "Junior Software Developer (Intern)",
      company: "Hellbent Software and Educational Services",
      period: "November 2023 - April 2024",
      description:
        "Developed an accessible gardening website tailored for senior citizens, focusing on intuitive navigation, personalization, and community interaction. Applied Java and object-oriented principles alongside user-centered design to create an inclusive and functional web platform.",
      technologies: ["Java", "OOP", "HTML", "CSS", "User-Centered Design", "Accessibility"],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Application",
      school: "Mukesh Patel School of Technology, Management and Engineering (NMIMS), Mumbai",
      period: "2024–2026",
      gpa: "9.42/10",
      coursework: [
        "Software Engineering & Project Management",
        "Operating System",
        "Data Mining",
        "Design and Analysis of Algorithm",
        "Artificial Intelligence and Machine Learning",
        "Web Technology (Node.js, React, Flutter)",
        "Cloud Computing",
        "Deep Learning"
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "SVKM's Mithibai College of Arts, Science & Commerce",
      period: "2021–2024",
      gpa: "8.36/10",
      coursework: [
        "Operating Systems",
        "Computer Organization and Architecture",
        "Compiler Design",
        "Computer Networks",
        "Android Development",
        "Web Technology",
        "Information Retrieval"
      ],
    },
  ];

  const certifications = [
    {
      name: "Python For Absolute Beginners: Learn Python from Scratch",
      issuer: "Udemy",
      year: "2023",
    },
    {
      name: "JavaScript Ultimate Guide",
      issuer: "Udemy",
      year: "2023",
    },
    {
      name: "Backend Web Development – Express and Node.js (GDSC x AWS)",
      issuer: "DevTown Bootcamp",
      year: "2023",
    },
  ];


  const languages = [
    { name: "English", level: 100 },
    { name: "Marathi", level: 90 },
    { name: "Hindi", level: 90 },
  ];

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">TH</span>
                  </div>
                  <CardTitle className="text-2xl text-white">
                    Tanvi Halankar
                  </CardTitle>
                  <p className="text-cyan-300">Full Stack Developer</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-zinc-300">
                    <MapPin className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Calendar className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>Available for opportunities</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>tanvihalankar312@gmail.com</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Phone className="h-4 w-4 mr-2 text-cyan-400" />
                    <span>+91 99204 68550</span>
                  </div>

                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white mt-4">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-cyan-300">Languages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-300">{lang.name}</span>
                        <span className="text-zinc-400">{lang.level}%</span>
                      </div>
                      <Progress value={lang.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-300">
                    <Heart className="h-5 w-5 mr-2" />
                    Interests
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Analysis",
                      "Machine Learning",
                      "Web Development",
                      "Mobile App Development",
                      "AI and Automation",
                      "Sports",
                      "Fitness",
                      "Gaming",
                      "Traveling",
                      "Cooking",
                    ].map((interest) => (
                      <Badge
                        key={interest}
                        variant="secondary"
                        className="bg-zinc-700 text-zinc-300 hover:bg-cyan-400/10 hover:text-cyan-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    My Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300 space-y-4">
                  <p>
                    Hi! I&apos;m Tanvi Halankar, a passionate software developer
                     currently pursuing my Master&apos;s in Computer Applications
                      at NMIMS, Mumbai. My journey into tech began during my 
                      undergraduate studies at Mithibai College, where I built a
                       solid foundation in computer science and cultivated a 
                       strong interest in full-stack and mobile development.
                  </p>
                  <p>
                    I&apos;ve had the opportunity to work on a wide variety of
                     projects—from role-based college portals and business 
                     networking apps to 3D multiplayer games and travel planning
                      tools. I enjoy crafting user-friendly, scalable applications 
                      using technologies like Flutter, Firebase, Node.js, and 
                      Unity. Winning 1st place in a Software Engineering Project 
                      at NMIMS affirmed my commitment to building meaningful tech 
                      solutions.
                  </p>
                  <p>
                    Outside of academics and code, I&apos;m an active learner, 
                    team collaborator, and tech event enthusiast. Whether I&apos;m 
                    exploring a new framework, organizing college events, or 
                    experimenting with UI designs, I&apos;m constantly driven by 
                    creativity, clarity, and the impact of technology in everyday 
                    life.
                  </p>
                </CardContent>


              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <Briefcase className="h-6 w-6 mr-3 text-cyan-400" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-cyan-400/30 pl-6 relative"
                    >
                      <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-2 top-2"></div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-300 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-zinc-400">{exp.period}</p>
                        <p className="text-zinc-300">{exp.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-zinc-700 text-zinc-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <GraduationCap className="h-6 w-6 mr-3 text-cyan-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-300 font-medium">
                          {edu.school}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-zinc-400 mt-1">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-zinc-300 mb-2">
                          Relevant Coursework:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {edu.coursework.map((course) => (
                            <div key={course} className="text-sm text-zinc-400">
                              • {course}
                            </div>
                          ))}
                        </div>
                      </div>
                      {index < education.length - 1 && (
                        <div className="border-t border-zinc-700/50 pt-6 mt-6"></div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zinc-800/50 border-zinc-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-white">
                    <Award className="h-6 w-6 mr-3 text-cyan-400" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="bg-zinc-700/30 rounded-lg p-4"
                      >
                        <h3 className="font-semibold text-white">
                          {cert.name}
                        </h3>
                        <p className="text-cyan-300 text-sm">{cert.issuer}</p>
                        <p className="text-zinc-400 text-sm">{cert.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
