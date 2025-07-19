import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-light rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something
            <span className="block text-gold-light">Amazing Together</span>
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss 
            how we can bring your vision to life
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-white/20 shadow-strong animate-fade-in-scale">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input placeholder="John" className="border-border/50 focus:border-caramel" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input placeholder="Doe" className="border-border/50 focus:border-caramel" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" className="border-border/50 focus:border-caramel" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                <select className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:border-caramel bg-background">
                  <option>Web Development</option>
                  <option>E-commerce</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="border-border/50 focus:border-caramel resize-none"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-scale delay-300">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>
              <p className="text-cream leading-relaxed">
                We'd love to hear about your project and discuss how we can help 
                bring your ideas to life. Reach out to us through any of the 
                channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-cream">hello@caramelwebstudios.com</p>
                  <p className="text-cream">projects@caramelwebstudios.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Phone className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-cream">+1 (555) 123-4567</p>
                  <p className="text-cream">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <MapPin className="w-6 h-6 text-gold-light" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Office</h4>
                  <p className="text-cream">123 Creative Street</p>
                  <p className="text-cream">Tech District, CA 90210</p>
                </div>
              </div>
            </div>
            
            {/* CTA Box */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
              <h4 className="text-white font-semibold mb-3">Ready to start?</h4>
              <p className="text-cream text-sm mb-4">
                Book a free consultation call to discuss your project requirements.
              </p>
              <Button variant="gold" size="sm" className="w-full">
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;