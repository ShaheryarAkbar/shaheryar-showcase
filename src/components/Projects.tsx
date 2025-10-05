import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Aawit Platform",
      description: "Comprehensive web platform with Dashboard, Profile, Live Hub, Events, Messaging, and Member Survey features. Built with HTML5 and CSS3.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["20+ Pages", "Custom Dashboard", "Event Management", "Member Survey"]
    },
    {
      title: "Sailor",
      description: "Fully responsive web application built with HTML, CSS, and Bootstrap. Optimized for both desktop and mobile viewing experiences.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Responsive Design", "Bootstrap Framework", "Cross-browser Compatible"]
    },
    {
      title: "TutorsPro",
      description: "Modern tutoring platform built with NextJS and Tailwind CSS. Features clean design and smooth user experience.",
      technologies: ["NextJS", "Tailwind CSS", "React"],
      features: ["Server-side Rendering", "Modern UI", "Fast Performance"]
    },
    {
      title: "EmpowerCare",
      description: "Healthcare platform developed with ReactJS and SCSS. Focused on user-friendly interface and accessibility.",
      technologies: ["ReactJS", "SCSS", "JavaScript"],
      features: ["Component Architecture", "Custom Styling", "Responsive Layout"]
    },
    {
      title: "Toolio Admin Panel",
      description: "Complete admin dashboard with multiple views including Dashboard, Reviews, Messages, Orders, Settings, and Product management.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Admin Dashboard", "Data Visualization", "User Management"]
    },
    {
      title: "Blip Marketplace",
      description: "Full-featured marketplace web application with 22+ pages including authentication, order tracking, payment integration, and courier services.",
      technologies: ["ReactJS", "SCSS", "Bootstrap"],
      features: ["E-commerce", "Payment Gateway", "Order Tracking", "Multi-page SPA"]
    },
    {
      title: "Digital Mojo",
      description: "Educational platform featuring course management and user interface built with HTML and CSS.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Course Management", "Clean UI", "Interactive Elements"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-0 md:px-6">
      <div className="mx-auto max-w-7xl px-5 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl p-5 sm:p-6 hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Code className="w-10 h-10 text-accent" />
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-smooth" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-accent mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;