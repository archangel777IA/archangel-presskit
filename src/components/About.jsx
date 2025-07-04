import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogleDrive } from 'react-icons/fa';

const WavingFlag = () => (
  <motion.span className="inline-block" animate={{ rotate: [0, 5, -5, 5, 0], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 8 }}}>🇧🇷</motion.span>
);

const AnimatedBackgroundLines = () => (
    <motion.svg className="absolute top-0 left-0 w-full h-full opacity-10 md:opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.g animate={{ x: ['-5%', '5%'], y: ['-5%', '5%'], rotate: [0, 2], scale: [1, 1.05], transition: { duration: 20, ease: "linear", repeat: Infinity, repeatType: "mirror" }}}>
            <path d="M-10,10 Q20,30 40,10 T80,10 T120,10" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,20 Q35,0 55,20 T115,20" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,30 Q25,5 50,30 T110,30" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,40 Q40,70 60,40 T100,40 T140,40" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,50 Q30,80 50,50 T90,50 T130,50" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,60 Q15,40 40,60 T95,60" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,70 Q20,50 45,70 T100,70" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,80 Q30,100 50,80 T90,80 T130,80" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
            <path d="M-10,90 Q40,110 60,90 T100,90 T140,90" stroke="#b91c1c" strokeWidth="0.15" fill="none" />
        </motion.g>
    </motion.svg>
);


const About = () => {
  return (
    <motion.section 
      id="about" 
      className="relative w-full max-w-4xl py-20 my-16 mx-auto overflow-hidden px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <AnimatedBackgroundLines />
      
      {/* 1. Layout principal alterado para coluna centralizada */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Foto do artista agora centralizada no topo */}
        <div className="relative w-full max-w-sm mb-12">
            <div className="h-96 md:h-[500px] bg-artist-photo bg-cover bg-center bg-no-repeat rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-900/40 rounded-lg pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0px_50px_rgba(0,0,0,0.8)]"></div>
        </div>

        {/* Título centralizado */}
        <div className="w-full">
          <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-wider uppercase">
            O PROJETO <WavingFlag />
          </h2>
          
          {/* Texto da biografia centralizado */}
          <div className="space-y-6 text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              Nascido em 2022, <strong className="font-semibold text-white">ARCH'ANGEL</strong> é o ritual sonoro do artista e DJ paulistano Ícaro Archanjo. Uma fusão experimental que <strong className="font-semibold text-white">aguçam os sentidos sensoriais e os extra-sensoriais</strong>, mergulhando em Sound Healing e ritmos xamânicos, com muitas referências da Zenon Rec., para criar uma experiência auditiva profunda e única.
            </p>
            <p>
              Cada track é uma chave, cuidadosamente forjada com batidas pulsantes e códigos subconscientes. A missão não é apenas ouvir, mas <strong className="font-semibold text-white">sentir</strong>. É uma imersão hipnótica desenhada para guiar a mente através do "véu de Maya", promovendo introspecção e uma profunda reconexão.
            </p>
            <p>
              Mais que música, Arch'Angel é um convite à evolução.
            </p>
          </div>
          
          {/* Botão Presskit centralizado */}
          <motion.a
            href="https://drive.google.com/drive/folders/1uAH9GudciJm-CYi7QoG7lyd09oqo8x25?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-3 mt-10 px-6 py-3 text-sm font-semibold border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white hover:border-red-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGoogleDrive className="text-xl" />
            <span>Material Presskit</span>
          </motion.a>

        </div>
      </div>
    </motion.section>
  );
};

export default About;