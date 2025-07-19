import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogleDrive, FaGlobe } from 'react-icons/fa';

const WavingFlag = () => ( <motion.span className="inline-block" animate={{ rotateY: [0, 360], }} transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop", repeatDelay: 3.5 }}>🇧🇷</motion.span> );
const ptContent = { title: "O PROJETO", p1: `Nascido em 2022, <strong class="font-semibold text-white">ARCH'ANGEL</strong> é o ritual sonoro do artista e DJ paulistano Ícaro Archanjo. Uma fusão experimental que <strong class="font-semibold text-white">aguçam os sentidos sensoriais e os extra-sensoriais</strong>, mergulhando em Sound Healing e ritmos xamânicos, com muitas referências da Zenon Rec., para criar uma experiência auditiva profunda e única.`, p2: `Cada track é uma chave, cuidadosamente forjada com batidas pulsantes e códigos subconscientes. A missão não é apenas ouvir, mas <strong class="font-semibold text-white">sentir</strong>. É uma imersão hipnótica desenhada para guiar a mente através do "véu de Maya", promovendo introspecção e uma profunda reconexão.`, p3: `Mais que música, Arch'Angel é um convite à evolução.` };
const enContent = { title: "THE PROJECT", p1: `Born in 2022, <strong class="font-semibold text-white">ARCH'ANGEL</strong> is the sonic ritual of São Paulo-based artist and DJ Ícaro Archanjo. An experimental fusion that <strong class="font-semibold text-white">ignites sensory and extra-sensory perceptions</strong>, diving into Sound Healing and shamanic rhythms, with deep influences from Zenon Rec., to create a profound and unique auditory journey.`, p2: `Each track is a key, carefully forged with pulsating beats and subconscious codes. The mission is not just to listen, but to <strong class="font-semibold text-white">feel</strong>. It's a hypnotic immersion designed to guide the mind through the "veil of Maya," promoting introspection and a deep reconnection.`, p3: `More than music, Arch'Angel is an invitation to evolve.` };

const About = () => {
  const [language, setLanguage] = useState('pt');
  const content = language === 'pt' ? ptContent : enContent;

  return (
    // =========================================================
    // ANIMAÇÃO ALTERADA AQUI: REMOVIDO o whileInView
    // =========================================================
    <motion.section 
      id="about" 
      className="w-full max-w-6xl py-20 my-16 mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} // Agora a animação acontece junto com o carregamento da página
      transition={{ duration: 1.5, delay: 0.2 }} // Um pequeno delay para suavizar a entrada
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="relative md:col-span-2 h-full">
            <div className="h-96 md:h-full bg-artist-photo bg-cover bg-center bg-no-repeat rounded-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-900/40 rounded-lg pointer-events-none"></div>
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0px_50px_rgba(0,0,0,0.8)]"></div>
        </div>
        <motion.div 
            className="md:col-span-3 relative p-8 border border-gray-800 rounded-2xl bg-psy-texture bg-cover bg-center overflow-hidden"
            animate={{ boxShadow: [ "0 0 15px 0px rgba(185, 28, 28, 0.2)", "0 0 30px 5px rgba(185, 28, 28, 0.4)", "0 0 15px 0px rgba(185, 28, 28, 0.2)", ], }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", }}
        >
            <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
            <div className="relative z-10 text-left">
              <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-wider uppercase font-elegance">
                {content.title} <WavingFlag />
              </h2>
              <div className="space-y-6 text-gray-300 font-light text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `<p>${content.p1}</p><p>${content.p2}</p><p>${content.p3}</p>` }}></div>
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <motion.a href="https://drive.google.com/drive/folders/1uAH9GudciJm-CYi7QoG7lyd09oqo8x25?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-3 px-6 py-3 text-sm font-semibold border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white hover:border-red-800 transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <FaGoogleDrive className="text-xl" />
                  <span>Material Presskit</span>
                </motion.a>
                <motion.button onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')} className="inline-flex items-center gap-x-2 px-4 py-3 text-xs font-semibold border border-gray-700 bg-black/30 text-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <FaGlobe className="text-lg" />
                  <span>{language === 'pt' ? 'English' : 'Português'}</span>
                </motion.button>
              </div>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default About;