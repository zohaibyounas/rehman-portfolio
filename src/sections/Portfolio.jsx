import React from "react";
import { Card } from "../components/ui/Card";

export function Portfolio() {
  const projects = [
    {
      title: "Amazon FBA Store Management",
      category: "Amazon VA",
      image: "/amazon.jpg",
      description:
        "Managed multiple Amazon FBA stores including inventory, orders, and customer support to increase sales and reduce errors.",
      tags: ["FBA Management", "Inventory Control", "Customer Support"],
    },
    {
      title: "Product Listing Optimization",
      category: "Amazon VA",
      image:
        "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?fit=crop&w=800&q=80",
      description:
        "Optimized product listings with keyword research, SEO, and high-converting descriptions to improve ranking and sales.",
      tags: [
        "Keyword Research",
        "SEO",
        "Listing Optimization",
        "Competitor Analysis",
      ],
    },
    {
      title: "PPC Campaign Management",
      category: "Amazon VA",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=800&q=80",
      description:
        "Created and managed PPC campaigns for Amazon products, maintaining ACOS under 15% and improving ad performance.",
      tags: ["PPC", "Ad Optimization", "Sales Analytics"],
    },
  ];

  return (
    <section
      id="work"
      className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Amazon VA Work
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of Amazon VA projects demonstrating my expertise in
            managing stores, optimizing listings, and running PPC campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden p-0 border-0">
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
