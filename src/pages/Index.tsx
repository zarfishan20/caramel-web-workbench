import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import  Quote  from "@/components/Quote";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
           <section id="packages">
          <Packages />
        </section>
   <section id="quote">
          <Quote />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
