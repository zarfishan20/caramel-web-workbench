import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-gold opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float delay-1000">
        <Palette className="w-10 h-10 text-cream opacity-50" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float delay-2000">
        <Zap className="w-6 h-6 text-gold-light opacity-70" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting beautiful, functional websites that grow your business.
          </h1>
          
          <p className="text-xl md:text-2xl text-cream mb-8 max-w-3xl mx-auto leading-relaxed">
            Design-forward, responsive, and reliable web solutions for modern brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group animate-fade-in-scale delay-300"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 animate-fade-in-scale delay-500"
            >
              View Our Work
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in delay-700">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-light mb-2">50+</div>
            <div className="text-cream opacity-80">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-light mb-2">5+</div>
            <div className="text-cream opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-light mb-2">100%</div>
            <div className="text-cream opacity-80">Client Satisfaction</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;