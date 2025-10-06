import { ExternalLink, Code, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Aawit Platform",
      description: "Comprehensive web platform with Dashboard, Profile, Live Hub, Events, Messaging, and Member Survey features. Built with HTML5 and CSS3.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["20+ Pages", "Custom Dashboard", "Event Management", "Member Survey"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Sailor",
      description: "Fully responsive web application built with HTML, CSS, and Bootstrap. Optimized for both desktop and mobile viewing experiences.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Responsive Design", "Bootstrap Framework", "Cross-browser Compatible"],
      images: [
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "TutorsPro",
      description: "Modern tutoring platform built with NextJS and Tailwind CSS. Features clean design and smooth user experience.",
      technologies: ["NextJS", "Tailwind CSS", "React"],
      features: ["Server-side Rendering", "Modern UI", "Fast Performance"],
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "EmpowerCare",
      description: "Healthcare platform developed with ReactJS and SCSS. Focused on user-friendly interface and accessibility.",
      technologies: ["ReactJS", "SCSS", "JavaScript"],
      features: ["Component Architecture", "Custom Styling", "Responsive Layout"],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Toolio Admin Panel",
      description: "Complete admin dashboard with multiple views including Dashboard, Reviews, Messages, Orders, Settings, and Product management.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Admin Dashboard", "Data Visualization", "User Management"],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Blip Marketplace",
      description: "Full-featured marketplace web application with 22+ pages including authentication, order tracking, payment integration, and courier services.",
      technologies: ["ReactJS", "SCSS", "Bootstrap"],
      features: ["E-commerce", "Payment Gateway", "Order Tracking", "Multi-page SPA"],
      images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556742521-9713bf272865?w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Digital Mojo",
      description: "Educational platform featuring course management and user interface built with HTML and CSS.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Course Management", "Clean UI", "Interactive Elements"],
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop"
      ]
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
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button 
                onClick={() => setSelectedProject(index)}
                className="w-full"
                variant="outline"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Screenshots
              </Button>
            </div>
          ))}
        </div>

        {/* Project Screenshots Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gradient">
                    {projects[selectedProject].title}
                  </DialogTitle>
                  <DialogDescription>
                    {projects[selectedProject].description}
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="carousel" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="carousel">Slider View</TabsTrigger>
                    <TabsTrigger value="grid">Grid View</TabsTrigger>
                  </TabsList>

                  <TabsContent value="carousel" className="mt-6">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {projects[selectedProject].images.map((image, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative aspect-video rounded-lg overflow-hidden glass">
                              <img
                                src={image}
                                alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="grid" className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projects[selectedProject].images.map((image, idx) => (
                        <div key={idx} className="relative aspect-video rounded-lg overflow-hidden glass">
                          <img
                            src={image}
                            alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;