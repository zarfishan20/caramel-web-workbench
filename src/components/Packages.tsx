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
        "Hosting management",
        "Domain management",
        "Backups (daily/weekly)",
        "Security monitoring",
        "Plugin updates",
        "Performance checks",
      ],
    },
    {
      title: "Standard Support",
      features: [
        "Uptime monitoring",
        "Small monthly edits",
        "Bug fixes",
        "Speed optimisation",
        "Priority support",
      ],
    },
    {
      title: "Pro Plan",
      features: [
        "Unlimited website edits (within reason)",
        "New pages/features",
        "SEO monitoring",
        "Monthly analytics reports",
        "Full technical support",
        "Development of new components",
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
  const [activeTab, setActiveTab] = useState<keyof typeof packages>(
    "webDevelopment"
  );

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
      <Section
        data={packages[activeTab]}
        external={activeTab === "maintenance"}
        externalUrl="https://byte6hosting.caramelwebstudios.com/billing/index.php?rp=/store/development-support-packages"
      />
    </div>
  );
};

type SectionProps = {
  data: Package[];
  external?: boolean;
  externalUrl?: string;
};

const Section: React.FC<SectionProps> = ({ data, external, externalUrl }) => (
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
            href={external ? externalUrl : "#quote"}
            target={external ? "_blank" : "_self"}
            rel={external ? "noopener noreferrer" : undefined}
            className="mt-6 inline-block text-center py-2 px-4 rounded bg-[hsl(var(--caramel))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--caramel-dark))] transition"
            style={{ transition: "var(--transition-smooth)" }}
          >
            {external ? "Buy Now" : "Learn More"}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Packages;
