import React from 'react';
import { motion } from 'framer-motion';
// 1. IMPORTAR A IMAGEM COMO UMA VARIÁVEL
import mainBanner from '../assets/main-banner.png';

const Hero = () => {
  return (
    <motion.section 
      className="w-full h-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <img 
        // 2. USAR A VARIÁVEL DA IMAGEM
        src={mainBanner}
        alt="Banner principal Arch'Angel" 
        className="w-full h-auto object-cover"
      />
    </motion.section>
  );
};

export default Hero;