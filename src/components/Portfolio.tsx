import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Full-Stack Development",
      description: "A modern e-commerce platform with advanced filtering, secure payments, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      gradient: "from-caramel to-gold"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Comprehensive analytics dashboard with real-time data visualization and advanced reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      gradient: "from-gold to-caramel-light"
    },
    {
      title: "Restaurant Website",
      category: "Business Website",
      description: "Beautiful restaurant website with online reservations, menu management, and customer reviews.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      tech: ["React", "Tailwind", "Firebase", "Stripe"],
      gradient: "from-caramel-dark to-caramel"
    },
    {
      title: "Portfolio Website",
      category: "Creative Design",
      description: "Stunning portfolio website for a creative agency with smooth animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["Vue.js", "GSAP", "Three.js", "Netlify"],
      gradient: "from-gold-light to-gold"
    },
    {
      title: "Learning Platform",
      category: "Educational Tech",
      description: "Interactive learning platform with video streaming, progress tracking, and certification system.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tech: ["React", "Express", "Video.js", "MySQL"],
      gradient: "from-caramel to-caramel-dark"
    },
    {
      title: "Fitness App",
      category: "Mobile Web App",
      description: "Progressive web app for fitness tracking with workout plans, nutrition guides, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["PWA", "React", "Chart.js", "Firebase"],
      gradient: "from-gold to-caramel-light"
    }
  ];

  return (
    <section className="py-20 bg-cream/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-caramel">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses 
            transform their digital presence with stunning web solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden bg-white border-border/50 shadow-soft hover:shadow-strong transition-all duration-500 hover:-translate-y-3 animate-fade-in-scale group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="flex gap-3">
                    <Button size="sm" variant="hero" className="scale-90 hover:scale-100">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white scale-90 hover:scale-100">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-caramel bg-caramel/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-caramel transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="caramel" size="lg" className="animate-fade-in-scale">
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;