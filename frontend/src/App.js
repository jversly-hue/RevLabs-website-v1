import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import TechBackground from "./components/TechBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import HowItWorks from "./components/HowItWorks";
import Systems from "./components/Systems";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CTABlock from "./components/CTABlock";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#121418] relative">
      <TechBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Systems />
        <Benefits />
        <Testimonials />
        <CTABlock />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
