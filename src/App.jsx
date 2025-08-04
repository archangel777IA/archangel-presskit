import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const AnimatedBackground = () => {
  const commonTransition = {
    duration: 25,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "mirror",
  };

  const lines = [
    { variants: { initial: { d: "M -100,150 C 400,-150 800,450 2020,150" }, animate: { d: "M -100,150 C 400,450 800,-150 2020,150" } }, delay: 0, duration: 25 },
    { variants: { initial: { d: "M -100,300 C 500,900 600,-300 2020,300" }, animate: { d: "M -100,300 C 500,-300 600,900 2020,300" } }, delay: 2, duration: 12.5 },
    { variants: { initial: { d: "M -100,450 C 350,-225 750,900 2020,450" }, animate: { d: "M -100,450 C 350,900 750,-225 2020,450" } }, delay: 4, duration: 35 },
    { variants: { initial: { d: "M -100,600 C 600,0 400,1200 2020,600" }, animate: { d: "M -100,600 C 600,1200 400,0 2020,600" } }, delay: 6, duration: 28 },
    { variants: { initial: { d: "M -100,750 C 300,-300 900,1800 2020,750" }, animate: { d: "M -100,750 C 300,1800 900,-300 2020,750" } }, delay: 8, duration: 40 },
    { variants: { initial: { d: "M -100,900 C 550,2250 650,-150 2020,900" }, animate: { d: "M -100,900 C 550,-150 650,2250 2020,900" } }, delay: 10, duration: 22 },
    { variants: { initial: { d: "M -100,1050 C 450,1650 750,450 2020,1050" }, animate: { d: "M -100,1050 C 450,450 750,1650 2020,1050" } }, delay: 12, duration: 12.5 },
    { variants: { initial: { d: "M -100,1200 C 500,2100 700,900 2020,1200" }, animate: { d: "M -100,1200 C 500,900 700,2100 2020,1200" } }, delay: 14, duration: 25 },
    { variants: { initial: { d: "M -100,1350 C 400,600 800,2100 2020,1350" }, animate: { d: "M -100,1350 C 400,2100 800,600 2020,1350" } }, delay: 16, duration: 33 },
    { variants: { initial: { d: "M -100,1500 C 550,1350 650,1650 2020,1500" }, animate: { d: "M -100,1500 C 550,1650 650,1350 2020,1500" } }, delay: 18, duration: 29 },
    { variants: { initial: { d: "M -100,1650 C 450,1200 750,2100 2020,1650" }, animate: { d: "M -100,1650 C 450,2100 750,1200 2020,1650" } }, delay: 20, duration: 36 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs><filter id="neon-glow"><feGaussianBlur stdDeviation="30" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
        <g filter="url(#neon-glow)" opacity="0.8">
          {lines.map((line, index) => (
            <motion.path
              key={index}
              variants={line.variants}
              initial="initial"
              animate="animate"
              transition={{ ...commonTransition, delay: line.delay, duration: line.duration || 25 }}
              stroke="#b91c1c"
              strokeWidth="4"
              fill="none"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/5511997429410"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(37, 211, 102, 0.8)" }}
    whileTap={{ scale: 0.9 }}
  >
    <FaWhatsapp className="text-3xl sm:text-4xl" />
  </motion.a>
);

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      <AnimatedBackground />
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <div className="px-4 w-full">
          <About />
          <Links />
          <Music />
          <Gallery />
        </div>
        <Footer />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;