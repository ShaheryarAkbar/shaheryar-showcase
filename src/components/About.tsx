import { Code2, Laptop, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, semantic HTML5, CSS, and React components"
    },
    {
      icon: Laptop,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display on all devices"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience in Agile methodology and cross-functional collaboration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="glass rounded-2xl p-8 md:p-12 mb-12 animate-scale-in">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Frontend Developer with 2.5+ years of experience developing web user interfaces. 
            Hands-on experience in developing advanced single page applications using React JS and Next JS. 
            Skilled in building responsive and accessible frontends that optimize user experience.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Specialized in converting designs from Figma, PSD, and images into pixel-perfect, 
            production-ready code using modern frameworks and best practices. Passionate about 
            creating seamless user experiences with clean, maintainable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:shadow-glow transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;