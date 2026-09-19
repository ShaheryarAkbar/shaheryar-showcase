const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Foundations",
      skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "ES6"]
    },
    {
      title: "Frameworks",
      skills: ["React.js", "Next.js"]
    },
    {
      title: "UI & Styling",
      skills: [
        "Tailwind CSS",
        "Bootstrap",
        "React Bootstrap",
        "Material UI",
        "PrimeReact",
        "PrimeFlex",
        "Styled Components",
        "Responsive Design"
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-0 md:px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-6xl px-5 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="glass rounded-xl p-5 sm:p-6 hover:shadow-card transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="text-xl font-bold text-accent mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 text-sm font-medium bg-primary/10 text-foreground rounded-full border border-primary/20"
                  >
                    {skill}
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

export default Skills;