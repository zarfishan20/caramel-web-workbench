import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    toast
  } = useToast();
  
const handleNavClick = (href, label) => {
  if (href.startsWith("http")) {
    // External link → open in new tab
    window.open(href, "_blank", "noopener,noreferrer");
  } else {
    // Internal anchor → smooth scroll
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close mobile menu
    }
  }
};




  const handleRequestQuote = () => {
    const contactSection = document.querySelector('#quote');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
    toast({
      title: "Let's get started!",
      description: "Please fill out the form below to request a quote."
    });
  };



  const navItems = [{
    label: "Projects",
    href: "#portfolio"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Packages",
    href: "#packages"
  }, {
    label: "Contact",
    href: "#contact"
  } , {
    label: "Hosting",
    href: "https://byte6hosting.caramelwebstudios.com" // external subdomain link
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
               <a href="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Caramel Web Studios"
                className="h-10 w-auto"
              />
                {/* Text logo - hidden on mobile */}
              <span className="hidden sm:block font-bold text-xl text-caramel">
               <div className="text-2xl font-bold">
              <span className="text-caramel">Caramel</span>
              <span className="text-gold ml-1">Web Studios</span>
            </div>
              </span>
            </a>
           
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href, item.label)} className="text-foreground hover:text-caramel transition-colors duration-300 font-medium relative group">
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-caramel scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>)}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex space-x-4">
  <Button
    variant="caramel"
    size="sm"
    onClick={handleRequestQuote}
    className="px-5 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFD580] text-white"
  >
    Request a Quote
  </Button>


</div>

          

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground hover:text-caramel transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border/50 bg-white/95 backdrop-blur-sm animate-slide-in-right">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.label} onClick={() => handleNavClick(item.href, item.label)} className="text-foreground hover:text-caramel transition-colors duration-300 font-medium px-2 py-1 text-left">
                  {item.label}
                </button>)}
           <div className="pt-4 flex flex-col space-y-2">
  <Button
    variant="caramel"
    size="sm"
    className="w-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FFD580] text-white"
    onClick={handleRequestQuote}
  >
    Request a Quote
  </Button>


</div>


            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;