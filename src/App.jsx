import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Links from './components/Links';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      {/* Penas de Pavão Decorativas */}
      <motion.img
        src="/images/peacock-left.png"
        alt=""
        className="hidden md:block fixed top-0 left-0 w-1/4 max-w-[250px] opacity-30 pointer-events-none z-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/peacock-right.png"
        alt=""
        className="hidden md:block fixed top-0 right-0 w-1/3 max-w-[350px] opacity-30 pointer-events-none z-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <div className="px-4">
          <About />
          <Music />
          <Links />
        </div>
        <Footer />
      </main>
    </div>
  );
}
export default App;