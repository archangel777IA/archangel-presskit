import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="w-full h-auto" // Alterado de w-screen para w-full para melhor compatibilidade
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <img 
        src="/images/main-banner.png"
        alt="Banner principal Arch'Angel" 
        className="w-full h-auto object-cover"
      />
    </motion.section>
  );
};

export default Hero;