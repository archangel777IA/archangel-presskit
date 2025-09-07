import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGoogleDrive, FaGlobe } from 'react-icons/fa';
import PropTypes from 'prop-types';

const WavingFlag = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return ( <motion.span ref={ref} className="inline-block" animate={isInView ? { rotateY: [0, 360] } : { rotateY: 0 }} transition={{ duration: 1.5, ease: "easeInOut", repeat: isInView ? Infinity : 0, repeatType: "loop", repeatDelay: 3.5 }}>🇧🇷</motion.span> );
};

const QuoteSection = ({ quote, author }) => (
  <motion.div className="w-full max-w-4xl text-center my-16 md:my-24 px-4 mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5 }} key={author}>
    <blockquote className="text-xl md:text-2xl font-light italic text-gray-300 leading-relaxed">{quote}</blockquote>
    <cite className="block text-right text-sm text-gray-500 mt-4 not-italic max-w-2xl mx-auto">{author}</cite>
  </motion.div>
);

QuoteSection.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

const About = ({ isMobile, language, setLanguage, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <motion.section 
        id="about" 
        ref={ref}
        className="w-full max-w-6xl py-20 my-16 mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          <div className="md:w-2/5 flex-shrink-0">
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-artist-photo bg-cover bg-center bg-no-repeat rounded-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-red-900/40 rounded-lg pointer-events-none"></div>
              <div className="absolute inset-0 rounded-lg shadow-[inset_0_0px_50px_rgba(0,0,0,0.8)]"></div>
            </div>
          </div>
          <motion.div 
              className="md:w-3/5 relative p-8 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
              animate={!isMobile && isInView ? { boxShadow: [ "0 0 15px 0px rgba(185, 28, 28, 0.2)", "0 0 30px 5px rgba(185, 28, 28, 0.4)", "0 0 15px 0px rgba(185, 28, 28, 0.2)", ], } : { boxShadow: "0 0 15px 0px rgba(185, 28, 28, 0.2)" }}
              transition={{ duration: 2.2, repeat: isInView ? Infinity : 0, ease: "easeInOut", }}
          >
              {!isMobile ? (
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                  <source src="/box-background.mp4" type="video/mp4" />
                </video>
              ) : (
                <div className="absolute inset-0 bg-psy-texture bg-cover bg-center z-0"></div>
              )}
              
              <div className="absolute inset-0 bg-black/60 rounded-2xl z-10"></div>
              <div className="relative z-20 text-left flex flex-col flex-grow">
                <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-wider uppercase font-elegance">
                  {content.about.title} <WavingFlag />
                </h2>
                <div className="space-y-6 font-bold text-red-200 text-base md:text-lg leading-relaxed flex-grow" style={{ textShadow: '0 0 8px rgba(254, 202, 202, 0.5)' }} dangerouslySetInnerHTML={{ __html: `<p>${content.about.p1}</p><p>${content.about.p2}</p><p>${content.about.p3}</p>` }}></div>
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

      <QuoteSection quote={content.quote.text} author={content.quote.author} />
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