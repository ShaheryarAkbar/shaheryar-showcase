import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-24">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto text-center z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="text-gradient">Shaheryar Akbar</span>
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-4">
          Frontend Developer
        </p>
        <p className="text-xl md:text-2xl text-accent mb-8">
          ReactJS | NextJS | Tailwind CSS
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          2.5+ years crafting pixel-perfect, responsive web experiences with modern technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="gradient-primary text-white hover:shadow-glow transition-smooth text-lg px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-lg px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;