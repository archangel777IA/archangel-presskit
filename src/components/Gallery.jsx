import React from 'react';
import { motion } from 'framer-motion';
// 1. IMPORTAR A IMAGEM COMO UMA VARIÁVEL
import artistLive from '../assets/artist-live.jpg';

const Gallery = () => {
  return (
    <motion.section 
      id="gallery" 
      className="w-full max-w-4xl py-10 md:py-16 mx-auto px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
    >
      <h2 className="mb-12 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase">
        EM AÇÃO
      </h2>
      <motion.div
        className="relative w-full p-2 sm:p-3 border border-gray-800 rounded-2xl bg-black/50 overflow-hidden"
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
        <img
          // 2. USAR A VARIÁVEL DA IMAGEM
          src={artistLive}
          alt="Arch'Angel live performance"
          className="w-full h-full object-contain rounded-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default Gallery;