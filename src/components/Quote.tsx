import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Briefcase, Globe, Calendar } from "lucide-react";



const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    websiteType: "",
    features: "",
    budget: "",
    timeline: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.websiteType ||
      !formData.features ||
      !formData.budget ||
      !formData.timeline
    ) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Request Sent",
        description: "Thank you! We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        websiteType: "",
        features: "",
        budget: "",
        timeline: "",
        notes: "",
      });
    } catch {
      toast({
        title: "Error",
        description: "Submission failed. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Accent Circles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-24 left-12 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-16 w-48 h-48 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-light rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Request a <span className="text-gold-light">Custom Quote</span>
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Tell us about your project, and we'll provide a tailored quote to help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quote Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm border-white/20 shadow-strong animate-fade-in-scale">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="border-border/50 focus:border-caramel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="border-border/50 focus:border-caramel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                <Input
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name (optional)"
                  className="border-border/50 focus:border-caramel"
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                  <Briefcase className="w-4 h-4 text-gold-light" />
                  Type of Website *
                </label>
                <select
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:border-caramel bg-background"
                >
                  <option value="">Select...</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-commerce Website</option>
                  <option value="portfolio">Portfolio Website</option>
                  <option value="blog">Blog</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Required Features *</label>
                <Textarea
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  placeholder="Contact form, payment gateway, etc."
                  rows={3}
                  className="border-border/50 focus:border-caramel resize-none"
                  required
                />
              </div>

              <div>
                <label className=" text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                  <Globe className="w-4 h-4 text-gold-light" />
                  Budget Range *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border/50 rounded-md focus:outline-none focus:border-caramel bg-background"
                >
                  <option value="">Select...</option>
                  <option value="under-500">Under £500</option>
                  <option value="500-1000">£500 - £1000</option>
                  <option value="1000-5000">£1000 - £5000</option>
                  <option value="5000-10000">£5000 - £10000</option>
                  <option value="above-10000">Above £10000</option>
                </select>
              </div>

              <div>
                <label className=" text-sm font-medium text-foreground mb-2 flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-gold-light" />
                  Timeline *
                </label>
                <Input
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="e.g. 4-6 weeks"
                  className="border-border/50 focus:border-caramel"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any other details or requirements"
                  rows={3}
                  className="border-border/50 focus:border-caramel resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Request"}
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Info / CTA Section */}
          <div className="space-y-8 animate-fade-in-scale delay-300">
         <div>
  <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
  <p className="text-cream leading-relaxed mb-4">
    At Caramel Web Studios, we believe your website is the heart of your digital presence. We don’t just build websites — we craft powerful online experiences tailored specifically to your business goals and your audience.
  </p>
  <p className="text-cream leading-relaxed mb-4">
    Our team combines creative design with cutting-edge technology to deliver websites that are not only visually stunning but also user-friendly, fast, and optimized for search engines. Whether you're a small startup or an established company, we customize every project to fit your unique needs.
  </p>
  <p className="text-cream leading-relaxed mb-4">
    We pride ourselves on clear communication, timely delivery, and ongoing support. From your initial consultation to the final launch — and beyond — we work closely with you every step of the way to ensure your vision becomes a reality.
  </p>
  <p className="text-cream leading-relaxed">
    Choosing Caramel Web Studios means choosing a partner dedicated to your success. Let’s build something amazing together that drives growth and leaves a lasting impression.
  </p>
</div>


        
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
