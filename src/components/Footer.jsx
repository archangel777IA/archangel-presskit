import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import archangelSymbol from '../assets/archangel-symbol.png';

const Footer = () => {
  const whatsappLink =
    'https://wa.me/5511997429410?text=Se%20voce%20quer%20aprender%20producao%20musical%20do%20zero%2C%20quero%20mais%20informacoes';

  return (
    <footer className="w-full py-16 mt-4 flex flex-col items-center justify-center space-y-8 px-4">
      {/* CAIXA FINAL (AGORA NO FINAL DA PÁGINA, ANTES DA LOGO DO RODAPÉ) */}
      <section className="w-full max-w-6xl mx-auto">
        <div className="relative w-full p-10 sm:p-12 border border-gray-800 rounded-2xl overflow-hidden">
          {/* VIDEO DE FUNDO DESSA CAIXA (vermelhopsicodelico.mp4) */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/vermelhopsicodelico.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/55 z-10"></div>

          <div className="relative z-20 text-center max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
              Seguindo fielmente o caminho da expressão real através da MÚSICA, Arch&apos;Angel vem conquistando seu espaço,
              com passos firmes, participando de projetos colaborativos como a Legatus coletivo, Square Garden festival,
              e entre outros.
              <br /><br />
              Além de dar aulas voluntárias de produção musical para amigos e conhecidos que também tem o sonho de expressar
              a sua luz através da música.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 w-full max-w-3xl px-6 py-4 border border-green-500 rounded-xl text-white font-semibold text-base sm:text-lg bg-black/25"
              style={{ boxShadow: '0 0 22px rgba(34,197,94,0.45)' }}
            >
              <FaWhatsapp size={22} />
              Se você quer aprender produção musical do zero, clique aqui
            </a>
          </div>
        </div>
      </section>

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
        <img
          src={archangelSymbol}
          alt="Símbolo Arch'Angel"
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
