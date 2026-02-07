import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Hero from './components/Hero';
import About from './components/About';
import Links from './components/Links';
import Music from './components/Music';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

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
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="30" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
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

/** ✅ NAV FINO ABAIXO DO CABEÇALHO (Hero) */
const SectionNav = () => {
  const PRESSKIT_URL =
    "https://drive.google.com/drive/folders/1uAH9GudciJm-CYi7QoG7lyd09oqo8x25?usp=sharing";

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const items = [
    { id: 'presskit', label: 'Material Presskit', type: 'link', href: PRESSKIT_URL },
    { id: 'services-audio', label: 'Serviços de Áudio', type: 'scroll' },
    { id: 'social', label: 'Redes Sociais', type: 'scroll' },
    { id: 'streaming', label: 'Streaming', type: 'scroll' },
    { id: 'gallery', label: 'Galeria do Artista', type: 'scroll' },
    { id: 'aulas', label: 'Aulas', type: 'scroll' },
  ];

  return (
    <div className="w-full sticky top-0 z-40">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="mt-0 border border-gray-800 rounded-xl bg-black/70 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-center gap-2 py-2 px-2">
            {items.map((it) => {
              if (it.type === 'link') {
                return (
                  <a
                    key={it.id}
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-200 border border-gray-700 rounded-lg hover:bg-white/10 transition"
                  >
                    {it.label}
                  </a>
                );
              }

              return (
                <button
                  key={it.id}
                  onClick={() => scrollToId(it.id)}
                  className="px-3 py-1 text-[11px] sm:text-xs font-semibold text-gray-200 border border-gray-700 rounded-lg hover:bg-white/10 transition"
                >
                  {it.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Bio atual (mantida intacta)
const basePt = {
  about: {
    title: "O PROJETO",
    p1: `ARCH'ANGEL é o ritual sonoro do Artista e DJ brasileiro ,Ícaro Archanjo. Som experimental que aguça os sentidos sensoriais e os extra-sensoriais, despertando algo que só quem se permite, sente. uma experiência auditiva profunda , única e introspectiva. Caos organizado e dançante, que te leva nas profundezas de ti mesmo.`,
    p2: `Cada track é uma chave, cuidadosamente forjada para transmitir códigos subconscientes. É uma imersão hipnótica desenhada para guiar a mente através do "véu de Maya", promovendo uma profunda reconexão interna.`,
    p3: `Arch'Angel tem significado vivo. Sinta a mensagem pulsar dentro de ti.`,
    bottomLine: `Quero te tocar da forma mais sincera e honesta possível, usando essa ferramenta maravilhosa que é a música`,
    bottomAuthor: `- Icaro Archanjo de lima`
  },
  quote: { text: `"Quero te tocar da forma mais profunda e sincera, usando essa ferramenta maravilhosa que é a música"`, author: `- Ícaro Archanjo de Lima` },
  links: { title: "Open for Labels, Collabs and Bookings", follow: "Follow me" },
  music: { title: "Ouça", soundcloud: "SoundCloud", spotify: "Spotify", bandcamp: "Bandcamp" },
  gallery: { title: "Galeria do Artista" },
  footer: { quote: `"A música tem o poder de unir, e portanto, de mudar toda uma nação que ainda vive na ilusão da separação"`, author: `- Ícaro Archanjo de Lima` }
};

const baseEn = {
  about: {
    title: "THE PROJECT",
    p1: `Born in 2022, <strong class="font-semibold text-white">ARCH'ANGEL</strong> is the sonic ritual of São Paulo-based producer and DJ Ícaro Archanjo de Lima. An experimental fusion that sharpens sensory and extra-sensory perceptions, diving into Sound Healing and shamanic rhythms, with many references from Zenon Rec., creating a deep, unique, and introspective auditory experience.`,
    p2: `Each track is a key, carefully forged with pulsating beats and subconscious codes. The mission is not just to listen, but also to feel. It is a hypnotic immersion designed to guide the mind through the "veil of Maya," promoting a deep internal reconnection.`,
    p3: `It's not just a beat; Arch'Angel has living meaning. In his performances, this becomes noticeable.`
  },
  quote: { text: `"I want to touch you in the deepest and most sincere way, using this wonderful tool that is music"`, author: `- Ícaro Archanjo de Lima` },
  links: { title: "Open for Labels, Collabs and Bookings", follow: "Follow me" },
  music: { title: "Listen", soundcloud: "SoundCloud", spotify: "Spotify", bandcamp: "Bandcamp" },
  gallery: { title: "Artist Gallery" },
  footer: { quote: `"Music has the power to unite, and therefore, to change an entire nation that still lives in the illusion of separation"`, author: `- Ícaro Archanjo de Lima` }
};

const siteContent = {
  pt: basePt,
  en: baseEn,
  es: baseEn,
  fr: baseEn,
  de: baseEn,
  it: baseEn,
  nl: baseEn,
  ru: baseEn,
  ja: baseEn,
  ko: baseEn,
  zh: baseEn,
  ar: baseEn,
  tr: baseEn,
};

function App() {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState('pt');

  const currentContent = siteContent[language] || siteContent.pt;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-brand-black">
      {!isMobile && <AnimatedBackground />}

      <main className="relative z-10 flex flex-col items-center">
        <Hero language={language} content={currentContent} />

        {/* ✅ Rodapé fino de sessões (abaixo do cabeçalho) */}
        <SectionNav />

        <div className="px-4 w-full">
          <About
            isMobile={isMobile}
            language={language}
            setLanguage={setLanguage}
            content={currentContent}
          />

          <div id="social" className="scroll-mt-24">
            <Links content={currentContent.links} />
          </div>

          <div id="streaming" className="scroll-mt-24">
            <Music isMobile={isMobile} content={currentContent.music} />
          </div>

          <div id="gallery" className="scroll-mt-24">
            <Gallery isMobile={isMobile} content={currentContent.gallery} />
          </div>
        </div>

        <Footer content={currentContent.footer} />
      </main>

      <FloatingWhatsApp />
    </div>
  );
}

export default App;
