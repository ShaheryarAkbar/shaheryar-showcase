import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Frontend Developer",
      company: "TECHLEADZ",
      period: "May 2022 - Present",
      location: "Lahore, Pakistan",
      description: "Developing multiple systems, managing teams, working with version control (GitHub), implementing Tailwind CSS and SASS/SCSS, collaborating with backend developers, redesigning applications, and converting designs to code.",
      achievements: [
        "Team Management Experience",
        "Multiple project handling simultaneously",
        "Figma/PSD to React/Next.js conversion",
        "Agile Methodology implementation"
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
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-12 rounded-full" />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 md:transform md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 animate-fade-in ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : 'md:flex-row md:justify-start'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center md:transform md:-translate-x-1/2 shadow-glow z-10">
                  <exp.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 glass rounded-xl p-6 flex-1 hover:shadow-glow transition-smooth ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
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