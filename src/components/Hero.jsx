import React from 'react';
import { motion } from 'framer-motion';
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
        src={mainBanner}
        alt="Banner principal Arch'Angel" 
        // A imagem já se comporta de forma responsiva por padrão
        className="w-full h-auto object-cover"
      />
    </motion.section>
  );
};

export default Hero;