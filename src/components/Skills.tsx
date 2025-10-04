const Skills = () => {
  const skills = [
    { name: "ReactJS", level: 95 },
    { name: "NextJS", level: 90 },
    { name: "HTML5", level: 98 },
    { name: "CSS3/SCSS", level: 95 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Bootstrap", level: 95 },
    { name: "JavaScript/ES6", level: 90 },
    { name: "Styled Components", level: 85 },
    { name: "Material UI", level: 85 },
    { name: "React Bootstrap", level: 90 },
    { name: "PrimeReact", level: 80 },
    { name: "Responsive Design", level: 98 }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:shadow-card transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-lg font-semibold">{skill.name}</span>
                <span className="text-accent font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div
                  className="gradient-primary h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;