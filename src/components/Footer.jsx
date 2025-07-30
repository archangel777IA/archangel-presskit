import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-16 flex flex-col items-center justify-center space-y-8">
      <img 
        src="/archangel-symbol.png" 
        alt="Símbolo Arch'Angel" 
        // =========================================================
        // TAMANHO ALTERADO AQUI
        // =========================================================
        className="w-77 h-auto opacity-60" // Aumentado de w-24 para w-28
      />
      
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} ARCH'ANGEL. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;