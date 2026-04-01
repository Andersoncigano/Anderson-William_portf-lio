import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion, useScroll, useTransform } from 'motion/react';

// --- ÁREA DE EDIÇÃO DA FOTO ---
const USER_IMAGE_URL = "https://i.ibb.co/fGzdkn9M/site-foto.png"; 

const Hero: React.FC = () => {
  const fallbackImage = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop";
  const initialImage = USER_IMAGE_URL || "/profile.png";

  const [imgSrc, setImgSrc] = useState(initialImage);
  const { scrollY } = useScroll();

  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const contentY = useTransform(scrollY, [0, 500], [0, 50]);
  const decorY = useTransform(scrollY, [0, 500], [0, -100]);

  const handleImageError = () => {
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col md:flex-row bg-brand-white overflow-hidden transition-colors duration-300">
      {/* Image Column */}
      <motion.div 
        className="w-full md:w-1/2 h-1/2 md:h-full relative flex flex-col justify-end items-center will-change-transform"
        style={{ y: imageY }}
      >
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={imgSrc} 
          onError={handleImageError}
          alt={PERSONAL_INFO.name} 
          className="w-full h-[90%] object-contain object-bottom grayscale transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-white/20 to-transparent mix-blend-overlay pointer-events-none"></div>
      </motion.div>

      {/* Content Column */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-start p-8 md:pl-0 lg:pl-0 relative">
        <motion.div 
          className="w-full max-w-4xl relative text-left z-10 md:-ml-4 lg:-ml-8 will-change-transform"
          style={{ y: contentY }}
        >
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl text-brand-black font-display font-black leading-[0.85] mb-8 -ml-1 md:-ml-2"
          >
            {PERSONAL_INFO.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.6 }}
            className="h-2 bg-brand-black mb-8"
          ></motion.div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm md:text-xl font-bold text-gray-500 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 pl-1 leading-relaxed"
          >
            Diretor de Arte <br className="hidden md:block" />
            e Inteligência Artificial
          </motion.h2>
        </motion.div>

        <motion.div 
          className="absolute top-10 right-10 w-32 h-32 bg-brand-black/5 rounded-full blur-3xl -z-0 will-change-transform"
          style={{ y: decorY }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;