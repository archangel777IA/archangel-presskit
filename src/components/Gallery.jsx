import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <motion.section 
      id="gallery" 
      className="w-full max-w-4xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
        Galeria do Artista
      </h2>

      <motion.div
        // =========================================================
        // A ÚNICA ALTERAÇÃO ESTÁ NESTA LINHA: PADDING AUMENTADO
        // =========================================================
        className="relative w-full p-16 border border-gray-800 rounded-2xl bg-psy-texture bg-cover bg-center overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
            "0 0 30px 5px rgba(185, 28, 28, 0.4)",
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
          ],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/box-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-transparent z-10"></div>
        
        <div className="relative z-20">
          <img 
            src="/images/performance-photo.jpg" 
            alt="Arch'Angel performance ao vivo"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Gallery;