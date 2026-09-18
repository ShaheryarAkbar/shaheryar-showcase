import { Code2, Laptop, PanelsTopLeft } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Reusable Components",
      description: "Building reusable React.js and Next.js interface components"
    },
    {
      icon: Laptop,
      title: "Responsive Design",
      description: "Creating interfaces that adapt across mobile, tablet, and desktop"
    },
    {
      icon: PanelsTopLeft,
      title: "Design to Code",
      description: "Converting Figma, PSD, WordPress, and image designs into interfaces"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 px-0 md:px-6">
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="glass rounded-2xl p-5 sm:p-8 md:p-12 mb-12 animate-scale-in">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Frontend / UI Developer with 4+ years of experience building responsive web interfaces
            with React.js and Next.js.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Focused on converting Figma, PSD, WordPress, and image designs into responsive interfaces
            using Tailwind CSS, Bootstrap, SASS/SCSS, and reusable components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-5 sm:p-6 hover:shadow-glow transition-smooth animate-fade-in"
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