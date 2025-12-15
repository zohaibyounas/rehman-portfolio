import React from "react";
import { Button } from "../components/ui/Button";
import { ArrowRight, Download } from "lucide-react";

export function Home() {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left animate-in slide-in-from-left duration-700 fade-in">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
              Muhammad <span className="text-blue-600">Rehman</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
              Amazon VA
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I help businesses grow by combining e-commerce expertise with
              advanced web solutions. Building modern, high-converting digital
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <Button
                onClick={() => (window.location.href = "#contact")}
                className="flex items-center gap-2"
              >
                Hire Me <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Download CV <Download size={20} />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center animate-in slide-in-from-right duration-700 fade-in delay-200">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="/romi.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
