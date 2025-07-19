import { Card } from "@/components/ui/card";
import { Code, Palette, Smartphone, Zap, Globe, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Create intuitive and engaging user experiences with modern UI design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites, portfolios, and e-commerce solutions tailored to your needs.",
      features: ["React & Next.js", "TypeScript", "Node.js", "API Integration"]
    },
    {
      icon: Zap,
      title: "Maintenance & Hosting",
      description: "Reliable website maintenance, hosting, backups, and performance optimization.",
      features: ["Site Monitoring", "Security Updates", "Performance Optimization", "Backups"]
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Increase visibility and drive traffic with SEO strategies and targeted digital marketing.",
      features: ["SEO Strategy", "Content Marketing", "Analytics", "Conversion Optimization"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-caramel">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive web development services 
            that help your business thrive in the digital landscape
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="p-6 bg-gradient-card border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-scale group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-caramel/10 rounded-lg group-hover:bg-caramel/20 transition-colors">
                  <service.icon className="w-6 h-6 text-caramel" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-caramel transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-caramel rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;