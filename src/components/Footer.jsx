import React from 'react';
import { motion } from 'framer-motion';
import archangelSymbol from '../assets/archangel-symbol.png';

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-4 flex flex-col items-center justify-center space-y-8 px-4">
      
      <motion.div 
        className="w-full max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <blockquote className="text-lg md:text-xl font-light italic text-gray-400 leading-relaxed">
          "A música tem o poder de unir, e portanto, de mudar toda uma nação que ainda vive na ilusão da separação"
        </blockquote>
        <cite className="block text-right text-xs text-gray-600 mt-3 not-italic">
          - Ícaro Archanjo de Lima
        </cite>
      </motion.div>

      <div className="pt-16 flex flex-col items-center space-y-8">
        {/* ========================================================= */}
        {/* A ÚNICA ALTERAÇÃO ESTÁ NESTA LINHA */}
        {/* ========================================================= */}
        <img 
          src={archangelSymbol}
          alt="Símbolo Arch'Angel" 
          // Tamanho aumentado de w-28 para w-40 (~40% maior)
          className="w-40 opacity-50" 
        />
        
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} ARCH'ANGEL. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;