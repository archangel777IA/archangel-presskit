import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGoogleDrive, FaGlobe } from 'react-icons/fa';
import PropTypes from 'prop-types';

const WavingFlag = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.span
      ref={ref}
      className="inline-block"
      animate={isInView ? { rotateY: [0, 360] } : { rotateY: 0 }}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
        repeat: isInView ? Infinity : 0,
        repeatType: 'loop',
        repeatDelay: 3.5,
      }}
    >
      🇧🇷
    </motion.span>
  );
};

const SoundArchitectureSection = ({ isMobile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const base = 'https://wa.me/5511997429410';
  const mixLink = `${base}?text=${encodeURIComponent('ola quero fazer um orcamento de mix/master')}`;

  return (
    <motion.section
      id="services-audio"
      ref={ref}
      className="w-full max-w-6xl mx-auto px-4 pb-16 sm:pb-24 scroll-mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="relative w-full p-5 sm:p-8 border border-gray-800 rounded-2xl overflow-hidden"
        animate={
          !isMobile && isInView
            ? {
                boxShadow: [
                  '0 0 15px rgba(185,28,28,0.2)',
                  '0 0 30px rgba(185,28,28,0.4)',
                  '0 0 15px rgba(185,28,28,0.2)',
                ],
              }
            : { boxShadow: '0 0 15px rgba(185,28,28,0.2)' }
        }
        transition={{ duration: 2.2, repeat: isInView ? Infinity : 0, ease: 'easeInOut' }}
      >
        {/* VIDEO DE FUNDO DA ARQUITETURA DE SOM (MANTIDO) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/audio.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/35 z-10"></div>

        <div className="relative z-20">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase font-elegance mb-6 sm:mb-8">
            Arquitetura de Som
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
            <div className="p-4 sm:p-6 border border-gray-800 rounded-xl bg-black/40 backdrop-blur-[2px]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-red-200">
                    Mixagem, Masterização e Evolução Técnica
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Do ajuste cirúrgico ao impacto final para pista e streaming
                  </p>
                </div>

                <motion.a
                  href={mixLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2 text-xs sm:text-sm border rounded-lg text-white bg-black/30"
                  style={{ borderColor: '#22c55e' }}
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(34,197,94,0)',
                      '0 0 16px rgba(34,197,94,0.75)',
                      '0 0 0 rgba(34,197,94,0)',
                    ],
                  }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Fale conosco
                </motion.a>
              </div>

              {/* ✅ ÂNCORA "Aulas" (para o botão Aulas do menu) */}
              <div id="aulas" className="scroll-mt-24" />

              <ul className="space-y-2 text-gray-100 leading-relaxed text-sm sm:text-base">
                <li>• Mixagem e masterização profissionais</li>
                <li>• Correção de balanceamento + imagem estéreo</li>
                <li>• Profundidade, espaço e narrativa sonora</li>
                <li>• Ajustes focados em emoção e impacto</li>
                <li>• Preservação de dinâmica emocional</li>
                <li>• Estética sonora coerente com o projeto</li>
                <li>• Aulas de produção musical</li>
                <li>• Aulas de mixagem e masterização avançada</li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 border border-gray-800 rounded-xl bg-black/40 backdrop-blur-[2px]">
              <h4 className="text-lg sm:text-xl font-semibold text-red-200 mb-2">
                Direção Musical e Aplicações
              </h4>

              <div className="space-y-5 text-gray-100 leading-relaxed text-sm sm:text-base">
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Conteúdo de alto impacto para quem:</p>
                  <ul className="space-y-2">
                    <li>• Já tem o seu Live set</li>
                    <li>• Já toca DJ Sets</li>
                    <li>• Quer lançar Álbuns, EPs e singles.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-gray-300 mb-2">Análise estrutural:</p>
                  <ul className="space-y-2">
                    <li>• Diagnóstico da track</li>
                    <li>• O que remover? O que reforçar?</li>
                    <li>• Direção de mixagem, arranjo e textura</li>
                    <li>• Equalização sutil e estratégica</li>
                    <li>• Os fundamentos de uma boa masterização</li>
                    <li>• O caminho mais rápido pra ter um bom workflow</li>
                    <li>• A dissolução dos medos em possibilidades musicais.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-300">
            Para orçamentos e disponibilidade, entre em contato pelo WhatsApp.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

SoundArchitectureSection.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const About = ({ isMobile, language, setLanguage, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [langOpen, setLangOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0, width: 220 });
  const langBtnRef = useRef(null);

  const openMenu = () => {
    if (!langBtnRef.current) return;
    const r = langBtnRef.current.getBoundingClientRect();
    const menuWidth = 220;
    const left = Math.max(12, Math.min(r.right - menuWidth, window.innerWidth - menuWidth - 12));
    const top = Math.min(r.bottom + 10, window.innerHeight - 260);
    setMenuPos({ top, left, width: menuWidth });
    setLangOpen(true);
  };

  const closeMenu = () => setLangOpen(false);

  useEffect(() => {
    if (!langOpen) return;

    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };

    const onClick = (e) => {
      const btn = langBtnRef.current;
      if (btn && btn.contains(e.target)) return;
      closeMenu();
    };

    const onReposition = () => {
      if (!langBtnRef.current) return;
      const r = langBtnRef.current.getBoundingClientRect();
      const menuWidth = 220;
      const left = Math.max(12, Math.min(r.right - menuWidth, window.innerWidth - menuWidth - 12));
      const top = Math.min(r.bottom + 10, window.innerHeight - 260);
      setMenuPos({ top, left, width: menuWidth });
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    window.addEventListener('scroll', onReposition, true);
    window.addEventListener('resize', onReposition);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('scroll', onReposition, true);
      window.removeEventListener('resize', onReposition);
    };
  }, [langOpen]);

  const bottomLine = content?.about?.bottomLine || '';
  const bottomAuthor = content?.about?.bottomAuthor || '';

  return (
    <>
      {/* MENU FIXED */}
      {langOpen && (
        <div className="fixed inset-0 z-[9999]" aria-hidden="true">
          <div
            className="absolute rounded-lg border border-gray-700 bg-black/90 backdrop-blur-md overflow-hidden"
            style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width }}
          >
            {[
              ['pt', 'Português (BR)'],
              ['en', 'English'],
              ['es', 'Español'],
              ['fr', 'Français'],
              ['de', 'Deutsch'],
              ['it', 'Italiano'],
              ['nl', 'Nederlands'],
              ['ru', 'Русский'],
              ['ja', '日本語'],
              ['ko', '한국어'],
              ['zh', '中文'],
              ['ar', 'العربية'],
              ['tr', 'Türkçe'],
            ].map(([code, label]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code);
                  closeMenu();
                }}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 ${
                  language === code ? 'text-white bg-white/10' : 'text-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <motion.section
        id="about"
        ref={ref}
        className="w-full max-w-6xl py-20 my-16 mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* FOTO */}
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative h-full min-h-[420px] bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-artist-photo bg-contain bg-top bg-no-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-900/40 pointer-events-none"></div>
              <div className="absolute inset-0 shadow-[inset_0_0px_50px_rgba(0,0,0,0.8)]"></div>
            </div>
          </div>

          {/* BIOGRAFIA */}
          <motion.div
            className="md:w-3/5 relative p-8 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
            animate={
              !isMobile && isInView
                ? {
                    boxShadow: [
                      '0 0 15px rgba(185, 28, 28, 0.2)',
                      '0 0 30px rgba(185, 28, 28, 0.4)',
                      '0 0 15px rgba(185, 28, 28, 0.2)',
                    ],
                  }
                : { boxShadow: '0 0 15px rgba(185, 28, 28, 0.2)' }
            }
            transition={{ duration: 2.2, repeat: isInView ? Infinity : 0, ease: 'easeInOut' }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src="/videos/abrir%20o%20peito.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px] z-10"></div>

            <div className="relative z-20 text-left flex flex-col flex-grow">
              <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-wider uppercase font-elegance">
                {content.about.title} <WavingFlag />
              </h2>

              <div
                className="space-y-6 font-bold text-red-100 text-base md:text-lg leading-relaxed flex-grow"
                style={{ textShadow: '0 0 10px rgba(0,0,0,0.65)' }}
                dangerouslySetInnerHTML={{
                  __html: `${content.about.p1}<br/><br/>${content.about.p2}<br/><br/>${content.about.p3}`,
                }}
              />

              {(bottomLine || bottomAuthor) && (
                <div className="mt-8 pt-6 border-t border-gray-700">
                  {bottomLine && (
                    <p className="text-gray-100 italic text-base md:text-lg">
                      “{bottomLine}”
                    </p>
                  )}
                  {bottomAuthor && (
                    <p className="mt-2 text-sm text-gray-400 text-right">
                      {bottomAuthor}
                    </p>
                  )}
                </div>
              )}

              {/* ✅ ÂNCORA "presskit" exatamente abaixo da bio (na área do botão) */}
              <div id="presskit" className="scroll-mt-24" />

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <motion.a
                  href="https://drive.google.com/drive/folders/1uAH9GudciJm-CYi7QoG7lyd09oqo8x25?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-3 px-6 py-3 text-sm font-semibold border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-white hover:border-red-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGoogleDrive className="text-xl" />
                  <span>Material Presskit</span>
                </motion.a>

                <motion.button
                  ref={langBtnRef}
                  onClick={() => (langOpen ? closeMenu() : openMenu())}
                  className="inline-flex items-center gap-x-2 px-4 py-3 text-xs font-semibold border border-gray-700 bg-black/30 text-gray-200 rounded-lg transition-all duration-300 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGlobe className="text-lg" />
                  <span>{language === 'pt' ? 'Idioma' : 'Language'}</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SoundArchitectureSection isMobile={isMobile} />
    </>
  );
};

About.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  content: PropTypes.object.isRequired,
};

export default About;
