import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-16 flex flex-col items-center justify-center space-y-8 px-4">
      <img 
        src="/archangel-symbol.png" 
        alt="Símbolo Arch'Angel" 
        // =========================================================
        // TAMANHO AUMENTADO PARA DESKTOPS
        // =========================================================
        className="w-20 md:w-40 h-auto opacity-60" // O tamanho para desktop (md:) foi aumentado
      />
      
      <p className="text-xs text-center text-gray-500">
        © {new Date().getFullYear()} ARCH'ANGEL. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;