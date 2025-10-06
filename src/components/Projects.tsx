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
        "https://i.ibb.co/ch6LzrP3/dashboard.png",
        "https://i.ibb.co/XxHxbLDv/profile.png",
        "https://i.ibb.co/ZptZwQkx/live-hub.png",
        "https://i.ibb.co/1J2Q0YP1/home.png",
        "https://i.ibb.co/j9S7LYdH/message.png",
        "https://i.ibb.co/r2zWJCbs/events.png",
        "https://i.ibb.co/zTND0RFc/member-survey.png",
        "https://i.ibb.co/q3pzxq7t/partnership-benefits.png",
        "https://i.ibb.co/mrdT8hZS/join.png",
        "https://i.ibb.co/Kj98KLjN/contact.png",
        "https://i.ibb.co/vxkvrrD1/member-login.png",
        "https://i.ibb.co/WWhqbQVR/employer-login.png",
        "https://i.ibb.co/67LbrRm7/employer-registration.png",
        "https://i.ibb.co/JRZL5C8L/terms.png",
        "https://i.ibb.co/N2s8x7PY/create-new-thread.png",
        "https://i.ibb.co/yF3Sdprq/calendar-integration.png",
        "https://i.ibb.co/4n4pXR4D/notification-setting.png",
        "https://i.ibb.co/rGcWvX9j/calendar-setting.png",
        "https://i.ibb.co/4ngbtCzn/category.png",
        "https://i.ibb.co/PZLcvbBr/not-found.png",
        "https://i.ibb.co/n8VVcZc7/contact-support.png",
        "https://i.ibb.co/pjSR7xV5/reset.png"
      ]
    },
    {
      title: "Sailor",
      description: "Fully responsive web application built with HTML, CSS, and Bootstrap. Optimized for both desktop and mobile viewing experiences.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Responsive Design", "Bootstrap Framework", "Cross-browser Compatible"],
      images: [
        "https://i.ibb.co/SQTmrLG/sailor-web.png",
        "https://i.ibb.co/9w7C5xD/sailor-mobile.png"
      ]
    },
    {
      title: "TutorsPro",
      description: "Modern tutoring platform built with NextJS and Tailwind CSS. Features clean design and smooth user experience.",
      technologies: ["NextJS", "Tailwind CSS", "React"],
      features: ["Server-side Rendering", "Modern UI", "Fast Performance"],
      images: [
        "https://i.ibb.co/MpvFQty/tutorspro.png"
      ]
    },
    {
      title: "EmpowerCare",
      description: "Healthcare platform developed with ReactJS and SCSS. Focused on user-friendly interface and accessibility.",
      technologies: ["ReactJS", "SCSS", "JavaScript"],
      features: ["Component Architecture", "Custom Styling", "Responsive Layout"],
      images: [
        "https://i.ibb.co/7Nw4QPB/empowercare-home.png"
      ]
    },
    {
      title: "Toolio Admin Panel",
      description: "Complete admin dashboard with multiple views including Dashboard, Reviews, Messages, Orders, Settings, and Product management.",
      technologies: ["HTML5", "CSS3", "Bootstrap"],
      features: ["Admin Dashboard", "Data Visualization", "User Management"],
      images: [
        "https://i.ibb.co/gv4Hb2W/toolio-dashboard.png",
        "https://i.ibb.co/C0GJM3H/toolio-reviews.png",
        "https://i.ibb.co/SwxCH2y/toolio-message.png",
        "https://i.ibb.co/t49JTv7/toolio-order.png",
        "https://i.ibb.co/Gc58Rvp/toolio-setting.png",
        "https://i.ibb.co/LtvJtcw/toolio-product.png"
      ]
    },
    {
      title: "Blip Marketplace",
      description: "Full-featured marketplace web application with 22+ pages including authentication, order tracking, payment integration, and courier services.",
      technologies: ["ReactJS", "SCSS", "Bootstrap"],
      features: ["E-commerce", "Payment Gateway", "Order Tracking", "Multi-page SPA"],
      images: [
        "https://i.ibb.co/2jz875g/blip-login.png",
        "https://i.ibb.co/XF22BmS/blip-register.png",
        "https://i.ibb.co/RNCtPJ6/blip-otp.png",
        "https://i.ibb.co/3MKyVsz/blip-dashboard.png",
        "https://i.ibb.co/gzHRDNH/blip-category.png",
        "https://i.ibb.co/6RfGsYK/blip-terms.png",
        "https://i.ibb.co/NNH16nQ/blip-profile.png",
        "https://i.ibb.co/Nj0T38t/blip-settings.png",
        "https://i.ibb.co/svH346z/blip-support.png",
        "https://i.ibb.co/Zg6hqq8/blip-tracking.png",
        "https://i.ibb.co/y0GDpHN/blip-ticket.png",
        "https://i.ibb.co/sHy6J0j/blip-payment.png",
        "https://i.ibb.co/sVgjCbc/blip-product-selection.png",
        "https://i.ibb.co/kDJ7vKb/blip-order-placement.png",
        "https://i.ibb.co/cFG0n5Y/blip-courier.png",
        "https://i.ibb.co/GWHkpR7/blip-pickup.png",
        "https://i.ibb.co/YcDQG7c/blip-dropoff.png",
        "https://i.ibb.co/cX9m8Vb/blip-checkout.png",
        "https://i.ibb.co/2tFSTMG/blip-order-confirmation.png",
        "https://i.ibb.co/N6vjBwM/blip-service-confirmation.png",
        "https://i.ibb.co/QfnnJV9/blip-security.png",
        "https://i.ibb.co/wzqZzmK/blip-deployment.png"
      ]
    },
    {
      title: "Digital Mojo",
      description: "Educational platform featuring course management and user interface built with HTML and CSS.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Course Management", "Clean UI", "Interactive Elements"],
      images: [
        "https://i.ibb.co/6WyxJxn/digital-mojo-courses.png"
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