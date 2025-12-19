import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss Amazon strategies? Let's
            talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Contact Information
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm essentially available for freelance work and open to full-time
              opportunities. Feel free to reach out via email or the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Email
                  </div>
                  <div>rehmanu303@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Phone
                  </div>
                  <div>03239812915</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Location
                  </div>
                  <div>Remote / Islamabad pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full flex justify-center items-center py-3"
              >
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
