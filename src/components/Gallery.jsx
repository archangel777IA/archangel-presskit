import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    // =========================================================
    // A ALTERAÇÃO ESTÁ NESTA LINHA
    // =========================================================
    // O max-w-4xl (largura máxima) foi alterado para max-w-2xl
    <section id="gallery" className="w-full max-w-2xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto">
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase">Galeria</h2>

      {/* A "CAIXA" com o mesmo estilo e animação das outras */}
      <motion.div
        className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl bg-psy-texture bg-cover bg-center overflow-hidden"
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
        {/* Overlay escuro para consistência */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* A imagem fica aqui dentro, sobre o overlay */}
        <div className="relative z-10">
            <img 
                src="/images/live-performance-1.jpg" // Nome do seu novo arquivo de imagem
                alt="Arch'Angel tocando ao vivo"
                className="w-full h-auto rounded-lg object-cover" // Estilos para a imagem
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;