import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Continuation from './components/Continuation';
import Footer from './components/Footer';

// Hook para detectar se é um dispositivo móvel
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  return isMobile;
};

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
  return ( <div className="fixed inset-0 z-0 overflow-hidden"><svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><defs><filter id="neon-glow"><feGaussianBlur stdDeviation="30" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><g filter="url(#neon-glow)" opacity="0.8">{lines.map((line, index) => ( <motion.path key={index} variants={line.variants} initial="initial" animate="animate" transition={{ ...commonTransition, delay: line.delay, duration: line.duration || 25 }} stroke="#b91c1c" strokeWidth="4" fill="none" /> ))}</g></svg></div> );
};

const FloatingWhatsApp = () => ( <motion.a href="https://wa.me/5511997429410" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 2, duration: 0.5, ease: "easeOut" }} whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(37, 211, 102, 0.8)" }} whileTap={{ scale: 0.9 }}><FaWhatsapp className="text-3xl sm:text-4xl" /></motion.a> );

const siteContent = {
  pt: {
    about: { title: "O PROJETO", p1: `Nascido em 2022, <strong class="font-semibold text-white">ARCH'ANGEL</strong> é o ritual sonoro do artista e DJ paulistano Ícaro Archanjo. Uma fusão experimental que <strong class="font-semibold text-white">aguçam os sentidos sensoriais e os extra-sensoriais</strong>, mergulhando em Sound Healing e ritmos xamânicos, com muitas referências da Zenon Rec., para criar uma experiência auditiva profunda e única.`, p2: `Cada track é uma chave, cuidadosamente forjada com batidas pulsantes e códigos subconscientes. A missão não é apenas ouvir, mas <strong class="font-semibold text-white">sentir</strong>. É uma imersão hipnótica desenhada para guiar a mente através do "véu de Maya", promovendo introspecção e uma profunda reconexão.`, p3: `Mais que música, Arch'Angel é um convite à evolução.` },
    quote: { text: `"Quero te tocar da forma mais profunda e sincera, usando essa ferramenta maravilhosa que é a música"`, author: `- Ícaro Archanjo de Lima` },
    links: { title: "Open for Labels, Collabs and Bookings", follow: "Follow me" },
    music: { title: "Ouça", soundcloud: "SoundCloud", spotify: "Spotify", bandcamp: "Bandcamp" },
    gallery: { title: "Galeria do Artista" },
    continuation: { title: "Jornada e Propósito", p1: `Seguindo fielmente o caminho da expressão real através da MÚSICA, Arch'Angel vem conquistando seu espaço, com passos firmes, participando de projetos colaborativos como a Legatus coletivo, Square Garden festival, e entre outros.`, p2: `Além de dar aulas voluntárias de produção musical para amigos e conhecidos que também tem o sonho de expressar a sua luz através da musica.`, button: "Se você quer aprender produção musical do zero, clique aqui" },
    footer: { quote: `"A música tem o poder de unir, e portanto, de mudar toda uma nação que ainda vive na ilusão da separação"`, author: `- Ícaro Archanjo de Lima` }
  },
  en: {
    about: { title: "THE PROJECT", p1: `Born in 2022, <strong class="font-semibold text-white">ARCH'ANGEL</strong> is the sonic ritual of São Paulo-based artist and DJ Ícaro Archanjo. An experimental fusion that <strong class="font-semibold text-white">ignites sensory and extra-sensory perceptions</strong>, diving into Sound Healing and shamanic rhythms, with deep influences from Zenon Rec., to create a profound and unique auditory journey.`, p2: `Each track is a key, carefully forged with pulsating beats and subconscious codes. The mission is not just to listen, but to <strong class="font-semibold text-white">feel</strong>. It's a hypnotic immersion designed to guide the mind through the "veil of Maya," promoting introspection and a deep reconnection.`, p3: `More than music, Arch'Angel is an invitation to evolve.` },
    quote: { text: `"I want to touch you in the deepest and most sincere way, using this wonderful tool that is music"`, author: `- Ícaro Archanjo de Lima` },
    links: { title: "Open for Labels, Collabs and Bookings", follow: "Follow me" },
    music: { title: "Listen", soundcloud: "SoundCloud", spotify: "Spotify", bandcamp: "Bandcamp" },
    gallery: { title: "Artist Gallery" },
    continuation: { title: "Journey and Purpose", p1: `Faithfully following the path of real expression through MUSIC, Arch'Angel has been conquering its space, with firm steps, participating in collaborative projects such as the Legatus collective, Square Garden festival, and others.`, p2: `In addition to giving volunteer music production classes to friends and acquaintances who also dream of expressing their light through music.`, button: "If you want to learn music production from scratch, click here" },
    footer: { quote: `"Music has the power to unite, and therefore, to change an entire nation that still lives in the illusion of separation"`, author: `- Ícaro Archanjo de Lima` }
  }
};

function App() {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState('pt');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      {!isMobile && <AnimatedBackground />}
      <main className="relative z-10 flex flex-col items-center">
        <Hero />
        <div className="px-4 w-full">
          <About 
            isMobile={isMobile} 
            language={language} 
            setLanguage={setLanguage} 
            content={siteContent[language]} 
          />
          <Links content={siteContent[language].links} />
          <Music isMobile={isMobile} content={siteContent[language].music} />
          <Gallery isMobile={isMobile} content={siteContent[language].gallery} />
          <Continuation isMobile={isMobile} content={siteContent[language].continuation} />
        </div>
        <Footer content={siteContent[language].footer} />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;