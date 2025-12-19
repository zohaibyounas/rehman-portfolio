import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Rehman <span className="text-blue-600"> Ullah</span>
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Building digital experiences with passion.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/share/17rwisfoLN/"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:contact@example.com"
              className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
