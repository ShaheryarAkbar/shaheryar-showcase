import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer",
      company: "TECHLEADZ",
      period: "May 2022 - July 2026",
      location: "Lahore, Pakistan",
      description: "Built responsive React.js and Next.js interfaces and reusable components from Figma, PSD, WordPress, and image designs. Used Tailwind CSS, Bootstrap, and SASS/SCSS while collaborating with backend developers through GitHub and Agile workflows.",
      achievements: [
        "Responsive React.js and Next.js UI",
        "Reusable interface components",
        "Figma, PSD, WordPress, and image design to code",
        "GitHub and Agile collaboration"
      ]
    },
    {
      type: "work",
      icon: Briefcase,
      title: "React JS Developer Intern",
      company: "Devicon Software House",
      period: "July 2021 - September 2021",
      location: "Rahim Yar Khan, Pakistan",
      description: "Gained hands-on experience in React development and frontend technologies.",
      achievements: []
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "BS Computer Science",
      company: "Khawaja Fareed UEIT",
      period: "2018 - 2022",
      location: "Rahim Yar Khan, Punjab, Pakistan",
      description: "Completed Bachelor's degree in Computer Science with focus on web development and software engineering.",
      achievements: []
    },
    {
      type: "award",
      icon: Award,
      title: "1st Position - Final Year Project",
      company: "Hand Gesture Recognition System",
      period: "2022",
      location: "University Project Exhibition",
      description: "Developed an AI-powered system to control mouse and keyboard using hand gestures. Secured first position in Computer Science field.",
      achievements: ["AI Implementation", "Python Development", "Innovation Award"]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-20 px-0 md:px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl px-5 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                {/* Icon positioned to align with timeline */}
                <div className={`absolute left-1/2 top-0 transform -translate-x-1/2 md:left-1/2 md:transform md:-translate-x-1/2`}>
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow">
                    <exp.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`ml-0 md:ml-0 glass rounded-xl p-6 w-full hover:shadow-glow transition-smooth mt-16 md:mt-10 text-left ${
                  index % 2 === 0 ? 'md:mr-[calc(50%+4rem)] md:w-[calc(50%-4rem)]' : 'md:ml-[calc(50%+4rem)] md:w-[calc(50%-4rem)]'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      exp.type === 'work' ? 'bg-accent/20 text-accent' :
                      exp.type === 'education' ? 'bg-secondary/20 text-secondary' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {exp.type === 'work' ? 'Work' : exp.type === 'education' ? 'Education' : 'Award'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="text-primary font-semibold mb-1">{exp.company}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {exp.period} • {exp.location}
                  </div>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>
                  
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;