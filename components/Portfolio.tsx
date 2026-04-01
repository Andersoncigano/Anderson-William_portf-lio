import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';
import { motion } from 'motion/react';

const Portfolio: React.FC = () => {
  return (
    <section id="section-portfolio" className="py-24 px-6 bg-brand-black text-brand-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-14 border-b border-white/20 pb-5"
        >
          <h3 className="text-2xl font-display font-bold uppercase tracking-tighter">
            Trabalhos Selecionados
          </h3>
          <motion.a 
            href="https://www.behance.net/andersonnh" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ x: 5 }}
            className="hidden md:flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            Ver Behance <ExternalLink size={14} />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a 
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/5] overflow-hidden bg-gray-900 block rounded-lg"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em] mb-2"
                  >
                    {item.category}
                  </motion.span>
                  <motion.h4 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="text-lg font-display font-bold uppercase leading-tight"
                  >
                    {item.title}
                  </motion.h4>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center md:hidden"
        >
           <a 
            href="https://www.behance.net/andersonnh" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
          >
            Ver Behance Completo <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;