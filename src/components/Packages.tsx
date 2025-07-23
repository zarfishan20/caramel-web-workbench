import { useState } from "react";

type Package = {
  title: string;
  features: string[];
};

type PackageGroup = {
  [key: string]: Package[];
};

const packages: PackageGroup = {
  webDevelopment: [
    {
      title: "Starter Site",
      features: ["1–3 pages", "Responsive design", "Basic SEO", "Contact form"],
    },
    {
      title: "Professional Site",
      features: [
        "4–6 pages",
        "Custom design",
        "Blog or gallery",
        "Google Analytics & SEO setup",
      ],
    },
    {
      title: "Premium Site",
      features: [
        "7+ pages",
        "CMS integration",
        "Advanced animations",
        "Full SEO & analytics",
      ],
    },
  ],
  ecommerce: [
    {
      title: "Basic Store",
      features: ["Up to 10 products", "Payment gateway", "Mobile-ready design"],
    },
    {
      title: "Standard Store",
      features: ["Up to 50 products", "Inventory, coupons, user accounts"],
    },
    {
      title: "Advanced Store",
      features: [
        "Unlimited products",
        "Custom checkout flow",
        "Multi-vendor setup",
        "Email marketing integration",
      ],
    },
  ],
  maintenance: [
    {
      title: "Basic Care",
      features: [
        "Monthly backups",
        "Plugin & platform updates",
        "Security scans",
      ],
    },
    {
      title: "Standard Support",
      features: [
        "Everything in Basic",
        "Content updates",
        "Performance monitoring",
      ],
    },
    {
      title: "Pro Plan",
      features: [
        "All of Standard",
        "SEO tweaks",
        "Analytics reports",
        "Small design changes",
      ],
    },
  ],
};

const tabs = [
  { key: "webDevelopment", label: "Web Development & Design" },
  { key: "ecommerce", label: "E-Commerce" },
  { key: "maintenance", label: "Maintenance (Monthly)" },
];

const Packages = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof packages>("webDevelopment");

  return (
    <div id="packages" className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-[hsl(var(--foreground))]">
        Our Packages
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as keyof typeof packages)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                activeTab === tab.key
                  ? "bg-[hsl(var(--caramel))] text-[hsl(var(--primary-foreground))]"
                  : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))]"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <Section data={packages[activeTab]} />
    </div>
  );
};

type SectionProps = {
  data: Package[];
};

const Section: React.FC<SectionProps> = ({ data }) => (
  <section className="mb-10">
    <div className="grid gap-6 md:grid-cols-3">
      {data.map((pkg, index) => (
        <div
          key={index}
          className="bg-[hsl(var(--card))] shadow-md rounded-xl p-6 flex flex-col justify-between transition hover:shadow-lg"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[hsl(var(--foreground))]">
              {pkg.title}
            </h3>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[hsl(var(--caramel))] font-bold">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <a
            href="#quote"
            className="mt-6 inline-block text-center bg-[hsl(var(--caramel))] text-[hsl(var(--primary-foreground))] py-2 px-4 rounded hover:bg-[hsl(var(--caramel-dark))] transition"
            style={{ transition: "var(--transition-smooth)" }}
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Packages;
