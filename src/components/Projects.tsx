import { Code, Eye } from "lucide-react";
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

  const featuredProjects = [
    {
      title: "IAprovelt",
      description: "Responsive interface converted from Figma designs.",
      technologies: ["Next.js", "PrimeReact", "PrimeFlex", "JSX", "CSS"],
      images: []
    },
    {
      title: "Mikvah-RSVP",
      description: "Responsive React interface converted from Figma designs.",
      technologies: ["React.js", "React Bootstrap", "JSX", "SCSS"],
      images: []
    },
    {
      title: "TheMikvahInfo",
      description: "Responsive React interface built with reusable UI components.",
      technologies: ["React.js", "React Bootstrap", "JSX", "SCSS"],
      images: []
    },
    {
      title: "TutorsPro",
      description: "Responsive React interface converted from Figma designs.",
      technologies: ["React.js", "React Bootstrap", "Tailwind CSS", "JSX"],
      images: ["https://i.ibb.co/MpvFQty/tutorspro.png"]
    },
    {
      title: "Toolio Admin Panel",
      description: "Responsive admin template converted from Figma designs.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      images: [
        "https://i.ibb.co/gv4Hb2W/toolio-dashboard.png",
        "https://i.ibb.co/C0GJM3H/toolio-reviews.png",
        "https://i.ibb.co/SwxCH2y/toolio-message.png",
        "https://i.ibb.co/t49JTv7/toolio-order.png",
        "https://i.ibb.co/Gc58Rvp/toolio-setting.png",
        "https://i.ibb.co/LtvJtcw/toolio-product.png"
      ]
    }
  ];

  const additionalProjects = [
    {
      title: "Aawit Platform",
      description: "Multi-page web interface with dashboard, profile, events, messaging, and member survey screens.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: [
        "https://i.ibb.co/ch6LzrP3/dashboard.png", "https://i.ibb.co/XxHxbLDv/profile.png",
        "https://i.ibb.co/ZptZwQkx/live-hub.png", "https://i.ibb.co/1J2Q0YP1/home.png",
        "https://i.ibb.co/j9S7LYdH/message.png", "https://i.ibb.co/r2zWJCbs/events.png",
        "https://i.ibb.co/zTND0RFc/member-survey.png", "https://i.ibb.co/q3pzxq7t/partnership-benefits.png",
        "https://i.ibb.co/mrdT8hZS/join.png", "https://i.ibb.co/Kj98KLjN/contact.png",
        "https://i.ibb.co/vxkvrrD1/member-login.png", "https://i.ibb.co/WWhqbQVR/employer-login.png",
        "https://i.ibb.co/67LbrRm7/employer-registration.png", "https://i.ibb.co/JRZL5C8L/terms.png",
        "https://i.ibb.co/N2s8x7PY/create-new-thread.png", "https://i.ibb.co/yF3Sdprq/calendar-integration.png",
        "https://i.ibb.co/4n4pXR4D/notification-setting.png", "https://i.ibb.co/rGcWvX9j/calendar-setting.png",
        "https://i.ibb.co/4ngbtCzn/category.png", "https://i.ibb.co/PZLcvbBr/not-found.png",
        "https://i.ibb.co/n8VVcZc7/contact-support.png", "https://i.ibb.co/pjSR7xV5/reset.png"
      ]
    },
    {
      title: "Sailor",
      description: "Responsive web interface for desktop and mobile screens.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      images: ["https://i.ibb.co/SQTmrLG/sailor-web.png", "https://i.ibb.co/9w7C5xD/sailor-mobile.png"]
    },
    {
      title: "EmpowerCare",
      description: "Responsive healthcare interface built with React.js and SCSS.",
      technologies: ["React.js", "SCSS", "JavaScript"],
      images: ["https://i.ibb.co/7Nw4QPB/empowercare-home.png"]
    },
    {
      title: "Blip Marketplace",
      description: "Multi-page marketplace interface with account, order, tracking, checkout, and courier screens.",
      technologies: ["React.js", "SCSS", "Bootstrap"],
      images: [
        "https://i.ibb.co/2jz875g/blip-login.png", "https://i.ibb.co/XF22BmS/blip-register.png",
        "https://i.ibb.co/RNCtPJ6/blip-otp.png", "https://i.ibb.co/3MKyVsz/blip-dashboard.png",
        "https://i.ibb.co/gzHRDNH/blip-category.png", "https://i.ibb.co/6RfGsYK/blip-terms.png",
        "https://i.ibb.co/NNH16nQ/blip-profile.png", "https://i.ibb.co/Nj0T38t/blip-settings.png",
        "https://i.ibb.co/svH346z/blip-support.png", "https://i.ibb.co/Zg6hqq8/blip-tracking.png",
        "https://i.ibb.co/y0GDpHN/blip-ticket.png", "https://i.ibb.co/sHy6J0j/blip-payment.png",
        "https://i.ibb.co/sVgjCbc/blip-product-selection.png", "https://i.ibb.co/kDJ7vKb/blip-order-placement.png",
        "https://i.ibb.co/cFG0n5Y/blip-courier.png", "https://i.ibb.co/GWHkpR7/blip-pickup.png",
        "https://i.ibb.co/YcDQG7c/blip-dropoff.png", "https://i.ibb.co/cX9m8Vb/blip-checkout.png",
        "https://i.ibb.co/2tFSTMG/blip-order-confirmation.png", "https://i.ibb.co/N6vjBwM/blip-service-confirmation.png",
        "https://i.ibb.co/QfnnJV9/blip-security.png", "https://i.ibb.co/wzqZzmK/blip-deployment.png"
      ]
    },
    {
      title: "Digital Mojo",
      description: "Educational platform interface with course screens.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      images: ["https://i.ibb.co/6WyxJxn/digital-mojo-courses.png"]
    }
  ];

  const projects = [...featuredProjects, ...additionalProjects];

  return (
    <section id="projects" className="py-12 md:py-20 px-0 md:px-6">
      <div className="mx-auto max-w-7xl px-5 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl p-5 sm:p-6 hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in group flex h-full flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Code className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.images.length > 0 && (
                <Button 
                  onClick={() => setSelectedProject(index)}
                  className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                  variant="outline"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Screenshots
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Additional <span className="text-gradient">Work</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            More responsive interface projects and screen collections
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass rounded-xl p-5 sm:p-6 hover:shadow-glow transition-smooth hover:-translate-y-2 animate-fade-in group flex h-full flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Code className="w-10 h-10 text-accent" />
                </div>

                <h4 className="text-xl font-bold mb-3 group-hover:text-gradient transition-smooth">
                  {project.title}
                </h4>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.images.length > 0 && (
                  <Button
                    onClick={() => setSelectedProject(featuredProjects.length + index)}
                    className="w-full hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                    variant="outline"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Screenshots
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project Screenshots Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] p-4 sm:p-6 overflow-y-auto">
            {selectedProject !== null && (
              <>
                <DialogHeader className="space-y-2 sm:space-y-3">
                  <DialogTitle className="text-xl sm:text-2xl font-bold text-gradient pr-8">
                    {projects[selectedProject].title}
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base">
                    {projects[selectedProject].description}
                  </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="carousel" className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-2 h-9 sm:h-10">
                    <TabsTrigger value="carousel" className="text-xs sm:text-sm">Slider View</TabsTrigger>
                    <TabsTrigger value="grid" className="text-xs sm:text-sm">Grid View</TabsTrigger>
                  </TabsList>

                  <TabsContent value="carousel" className="mt-4 sm:mt-6">
                    <Carousel className="w-full">
                      <CarouselContent className="-ml-2 md:-ml-4">
                        {projects[selectedProject].images.map((image, idx) => (
                          <CarouselItem key={idx} className="pl-2 md:pl-4">
                            <div className="relative w-full rounded-lg overflow-hidden glass bg-muted/30">
                              <img
                                src={image}
                                alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                                className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[65vh] mx-auto"
                                loading="lazy"
                              />
                              <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded backdrop-blur-sm">
                                {idx + 1} / {projects[selectedProject].images.length}
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-0 sm:left-2 h-8 w-8 sm:h-10 sm:w-10 -translate-x-0 sm:-translate-x-12" />
                      <CarouselNext className="right-0 sm:right-2 h-8 w-8 sm:h-10 sm:w-10 translate-x-0 sm:translate-x-12" />
                    </Carousel>
                  </TabsContent>

                  <TabsContent value="grid" className="mt-4 sm:mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-h-[60vh] overflow-y-auto pr-2">
                      {projects[selectedProject].images.map((image, idx) => (
                        <div key={idx} className="relative w-full rounded-lg overflow-hidden glass bg-muted/30">
                          <img
                            src={image}
                            alt={`${projects[selectedProject].title} screenshot ${idx + 1}`}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-4 sm:mt-6 pt-4 border-t border-border">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
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