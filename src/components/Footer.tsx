import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-foreground text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="text-3xl font-bold">
                <span className="text-gold">Caramel</span>
                <span className="text-white ml-2">Web Studios</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              We specialize in creating exceptional digital experiences that help 
              businesses thrive in the modern web landscape. From concept to launch, 
              we're your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Portfolio", "Contact"].map(link => <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/80 hover:text-gold transition-colors">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-white/80 text-sm">info@caramelwebstudios.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-white/80 text-sm">07472 311317</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-white/80 text-sm">London, UK</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              &copy; 2023 - {new Date().getFullYear()} Caramel Web Studios. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/60 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="cookies" className="text-white/60 hover:text-gold transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;