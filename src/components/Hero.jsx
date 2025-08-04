import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="w-full h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* 
        =========================================================
        A CORREÇÃO ESTÁ AQUI.
        Certifique-se de que o nome do seu arquivo na pasta 
        'public/images' é EXATAMENTE 'main-banner.png'.
        Se for '.jpg' ou outro nome, altere a linha abaixo.
        =========================================================
      */}
      <img 
  src="/images/banner.png" // <--- ALTERADO AQUI
  alt="Banner principal Arch'Angel" 
  className="w-full h-auto object-cover"
/>    </motion.section>
  );
};

export default Hero;