import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

import galleryImg1 from '/images/gallery-1.jpg';
import galleryImg3 from '/images/gallery-3.png';
import galleryImg4 from '/images/gallery-4.png';

const Gallery = ({ isMobile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const images = [galleryImg1, galleryImg3, galleryImg4];
  const videoSrc = '/videos/performance.mp4';

  return (
    <motion.section 
      id="gallery" 
      ref={ref}
      // Aumentamos o max-w- para a galeria ocupar mais espaço
      className="w-full max-w-6xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
        Galeria do Artista
      </h2>

      <motion.div
        className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl overflow-hidden"
        animate={!isMobile ? {
          boxShadow: [
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
            "0 0 30px 5px rgba(185, 28, 28, 0.4)",
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
          ],
        } : { boxShadow: "0 0 15px 0px rgba(185, 28, 28, 0.2)" }}
        transition={{
          duration: 2.2,
          repeat: isInView ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {!isMobile ? (
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/box-background.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="absolute inset-0 bg-psy-texture bg-cover bg-center z-0"></div>
        )}
        
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        
        <div className="relative z-20 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img 
                  src={src} 
                  alt={`Imagem da galeria do artista ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* A ALTERAÇÃO ESTÁ NA TAG DE VÍDEO ABAIXO */}
          {/* ========================================================= */}
          <div className="w-full aspect-video overflow-hidden rounded-lg bg-black">
            <video 
              // Atributo 'controls' adicionado
              controls
              // loop e muted removidos para dar controle ao usuário
              playsInline 
              src={videoSrc} 
              // object-contain garante que o vídeo inteiro seja visível
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

Gallery.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Gallery;