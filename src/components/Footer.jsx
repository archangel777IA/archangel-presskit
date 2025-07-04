import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-16 mt-16 flex flex-col items-center justify-center space-y-8">
      {/* 1. Imagem alterada para a logo principal */}
      <img 
        src="/images/archangel-logo-white.png" 
        alt="Logo Arch'Angel" 
        // 2. Ajuste no tamanho para não ficar muito grande
        className="w-48 h-auto opacity-60" 
      />
      
      {/* Texto de direitos autorais (sem alteração) */}
      <p className="text-xs text-gray-500">
        © {new Date().getFullYear()} ARCH'ANGEL. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;