import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import Links from './components/Links';
import Footer from './components/Footer';

// Componente de fundo (sem alterações)
const AnimatedBackground = () => {
  const waveTransition = {
    duration: 25,
    ease: "linear",
    repeat: Infinity,
    repeatType: "mirror",
  };

  const variants = [
    { initial: { d: "M -20,20 Q 30,50 50,20 T 90,-10 T 130,20" }, animate: { d: "M -20,20 Q 30,-20 50,20 T 90,50 T 130,20" } },
    { initial: { d: "M -20,40 Q 20,10 45,40 T 100,70" }, animate: { d: "M -20,40 Q 20,70 45,40 T 100,10" } },
    { initial: { d: "M -20,60 Q 40,95 60,60 T 100,30 T 140,60" }, animate: { d: "M -20,60 Q 40,30 60,60 T 100,95 T 140,60" } },
    { initial: { d: "M -20,80 Q 25,60 50,80 T 110,110" }, animate: { d: "M -20,80 Q 25,110 50,80 T 110,60" } },
    { initial: { d: "M -20,100 Q 35,130 55,100 T 115,70" }, animate: { d: "M -20,100 Q 35,70 55,100 T 115,130" } },
    { initial: { d: "M -20,0 Q 15,-30 40,0 T 95,30" }, animate: { d: "M -20,0 Q 15,30 40,0 T 95,-30" } },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <svg
          className="w-full h-full opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ filter: 'drop-shadow(0 0 15px #b91c1c)' }}
      >
        {variants.map((variant, index) => (
          <motion.path 
            key={index}
            variants={variant} 
            initial="initial" 
            animate="animate" 
            transition={{ ...waveTransition, delay: index * 4 }} 
            stroke="#b91c1c" 
            strokeWidth="0.2" 
            fill="none" 
          />
        ))}
      </svg>
    </div>
  );
};

// A função principal App (sem alterações)
function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <div className="px-4 w-full">
          <About />
          <Music />
          <Links />
        </div>
        <Footer />
      </main>
    </div>
  );
}

// A linha export default App foi movida para o final, onde pertence
export default App;