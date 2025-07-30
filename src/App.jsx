import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Music from './components/Music';
import Links from './components/Links';
import Footer from './components/Footer';

// Componente AnimatedBackground (sem alterações)
const AnimatedBackground = () => {
  const lineAnimation = { x: ['-5%', '5%', '-5%'], y: ['-5%', '5%', '-5%'], transition: { duration: 40, ease: "linear", repeat: Infinity, } };
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" style={{ filter: 'drop-shadow(0 0 12px #b91c1c)' }}>
        <motion.g animate={lineAnimation}>
            <path d="M-20,20 Q 30,50 50,20 T 90,-10 T 130,20" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
            <path d="M-20,40 Q 20,10 45,40 T 100,70" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
            <path d="M-20,60 Q 40,95 60,60 T 100,30 T 140,60" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
            <path d="M-20,80 Q 25,60 50,80 T 110,110" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
            <path d="M-20,100 Q 35,130 55,100 T 115,70" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
            <path d="M-20,0 Q 15,-30 40,0 T 95,30" stroke="#b91c1c" strokeWidth="0.2" fill="none" />
        </motion.g>
      </svg>
    </div>
  );
};

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      <AnimatedBackground />

      {/* ========================================================= */}
      {/* CONTAINER PRINCIPAL AGORA TEM A ANIMAÇÃO DE FADE-IN */}
      {/* ========================================================= */}
      <motion.main 
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0 }} // Começa invisível
        animate={{ opacity: 1 }} // Anima para visível
        transition={{ duration: 2, ease: "easeInOut" }} // Duração de 2 segundos para um efeito suave
      >
        <Hero />
        <div className="px-4 w-full">
          <About />
          <Gallery />
          <Music />
          <Links />
        </div>
        <Footer />
      </motion.main>
    </div>
  );
}

export default App;