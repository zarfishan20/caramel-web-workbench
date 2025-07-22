import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const { toast } = useToast();

  const handleViewProject = (projectTitle: string) => {
    toast({
      title: "Project Details",
      description: `Opening ${projectTitle} case study...`,
    });
    // In a real app, this would navigate to a detailed project page
  };

  const handleViewSource = (projectTitle: string) => {
    toast({
      title: "Source Code",
      description: `Viewing source code for ${projectTitle}...`,
    });
    // In a real app, this would open the GitHub repository
  };

  const handleViewAllProjects = () => {
    toast({
      title: "Portfolio",
      description: "Opening full portfolio gallery...",
    });
    // In a real app, this would navigate to a portfolio page
  };

  const projects = [
    {
      title: "MFA Carpet & Flooring",
      category: "Local Business",
      description: "A bold site with quote request for a local flooring business.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      tech: ["Quote System", "Local SEO", "Responsive", "Contact Forms"],
      gradient: "from-caramel to-gold"
    },
    {
      title: "FlexiPay Accountancy",
      category: "Professional Services",
      description: "A modern website for a payroll & bookkeeping firm.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      tech: ["Professional Design", "Service Pages", "Client Portal", "Security"],
      gradient: "from-gold to-caramel-light"
    },
    {
      title: "E-commerce Platform",
      category: "Online Store",
      description: "Modern e-commerce solution with advanced filtering and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Stripe", "Inventory", "Analytics"],
      gradient: "from-caramel-dark to-caramel"
    },
    {
      title: "Portfolio Website",
      category: "Creative Design",
      description: "Creative portfolio showcase with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["GSAP", "Animations", "Creative", "Responsive"],
      gradient: "from-gold-light to-gold"
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
                    <Button 
                      size="sm" 
                      variant="hero" 
                      className="scale-90 hover:scale-100"
                      onClick={() => handleViewProject(project.title)}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="bg-white/90 hover:bg-white scale-90 hover:scale-100"
                      onClick={() => handleViewSource(project.title)}
                    >
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
          <Button 
            variant="caramel" 
            size="lg" 
            className="animate-fade-in-scale"
            onClick={handleViewAllProjects}
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;