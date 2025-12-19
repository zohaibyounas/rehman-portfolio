import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
