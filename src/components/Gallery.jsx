import React from 'react';
import { motion } from 'framer-motion';

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
      {/* Caixa animada */}
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
        {/* ========================================================= */}
        {/* ALTERAÇÕES APLICADAS AQUI */}
        {/* ========================================================= */}
        
        {/* O overlay escuro foi REMOVIDO. */}

        {/* A imagem agora é um elemento <img> dentro da caixa. */}
        <img
          src="/images/artist-live.jpg"
          alt="Arch'Angel live performance"
          // bg-contain garante que a imagem inteira apareça, sem cortes.
          // rounded-lg para manter a estética.
          className="w-full h-full object-contain rounded-lg"
        />

      </motion.div>
    </motion.section>
  );
};

export default Gallery;