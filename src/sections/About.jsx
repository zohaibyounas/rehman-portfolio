import React from "react";
import { Card } from "../components/ui/Card";
import { Briefcase, Globe, Users } from "lucide-react";

export function About() {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Senior Amazon VA",
      company: "Global Retail",
      desc: "Managing FBA operations, optimizing PPC campaigns with ACOS under 15%, handling customer support, and improving listing conversions.",
    },
    {
      year: "2024 - 2025",
      role: "Amazon VA",
      company: "E-commerce Clients",
      desc: "Provided comprehensive VA services including product research, listing optimization, order management, inventory control, and customer support.",
    },
    {
      year: "2023 - 2024",
      role: "Freelance Amazon VA",
      company: "Upwork",
      desc: "Supported multiple international clients in managing their Amazon stores efficiently, optimizing listings, and increasing sales performance.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experienced Amazon Virtual Assistant bridging the gap between
            e-commerce management and technical support. I help businesses grow
            by managing FBA operations, optimizing listings, and providing
            top-notch customer support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Why Choose Me?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              As a dedicated Amazon VA, I understand the nuances of the
              platform, from product listing optimization to order and customer
              management. I provide reliable and efficient support to ensure
              your Amazon business runs smoothly and profitably.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              My goal is to help you save time, reduce errors, and increase
              sales while handling all operational tasks professionally.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <Card className="text-center p-4">
                <Briefcase className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-slate-900 dark:text-white">
                  4+ Years
                </div>
                <div className="text-sm text-slate-500">Experience</div>
              </Card>
              <Card className="text-center p-4">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-slate-900 dark:text-white">
                  20+
                </div>
                <div className="text-sm text-slate-500">Clients</div>
              </Card>
              <Card className="text-center p-4">
                <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-slate-900 dark:text-white">
                  50+
                </div>
                <div className="text-sm text-slate-500">Projects</div>
              </Card>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform"></div>
                    <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 mt-1"></div>
                  </div>
                  <div className="pb-8">
                    <span className="text-sm text-blue-600 font-semibold">
                      {exp.year}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      {exp.role}
                    </h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {exp.company}
                    </span>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
