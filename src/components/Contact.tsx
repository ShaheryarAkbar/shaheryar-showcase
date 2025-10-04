import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sheryrao.sa@gmail.com",
      href: "mailto:sheryrao.sa@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 309 6731105",
      href: "tel:+923096731105"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nishat Colony, Lahore, Pakistan",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "shaheryar-akbar",
      href: "https://linkedin.com/in/shaheryar-akbar-06690a211"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-6 rounded-full" />
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="glass rounded-2xl p-8 md:p-12 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.label === "LinkedIn" ? "_blank" : undefined}
                rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                  <div className="font-semibold group-hover:text-primary transition-smooth">
                    {info.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground mb-6">
              Ready to start your next project? Let's create something amazing together!
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white hover:shadow-glow transition-smooth"
              onClick={() => window.location.href = 'mailto:sheryrao.sa@gmail.com'}
            >
              Send Me an Email
            </Button>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            Available for freelance opportunities and full-time positions
          </p>
          <p className="text-sm">
            Open to remote work and on-site positions in Lahore, Pakistan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;