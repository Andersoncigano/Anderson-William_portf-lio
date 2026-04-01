import React from 'react';
import { SERVICES } from '../constants';
import { Fingerprint, TrendingUp, Film, Megaphone } from 'lucide-react';
import { motion } from 'motion/react';

const Services: React.FC = () => {
  const getServiceIcon = (title: string) => {
    const iconClass = "w-6 h-6 transition-colors duration-500 group-hover:text-brand-white text-brand-black";
    if (title.toLowerCase().includes("branding")) return <Fingerprint className={iconClass} />;
    if (title.toLowerCase().includes("social")) return <TrendingUp className={iconClass} />;
    if (title.toLowerCase().includes("motion")) return <Film className={iconClass} />;
    if (title.toLowerCase().includes("publicidade")) return <Megaphone className={iconClass} />;
    return null;
  };

  return (
    <section 
      id="section-services" 
      className="py-24 px-6 bg-brand-white text-brand-black scroll-mt-28 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-display font-bold uppercase tracking-tighter mb-14 bg-brand-black text-brand-white px-5 py-1.5 inline-block border-2 border-brand-black transition-all duration-300 hover:bg-brand-white hover:text-brand-black hover:tracking-widest cursor-default">
            Serviços
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full p-10 -mx-8 rounded-2xl transition-all duration-500 ease-out border border-transparent hover:bg-brand-black hover:shadow-2xl hover:-translate-y-2 cursor-default"
            >
              
              <div className="flex flex-col gap-4 mb-6">
                 <div className="text-brand-black group-hover:text-brand-white transition-colors duration-500 self-start">
                    {getServiceIcon(service.title)}
                 </div>
                 <h4 className="text-lg font-display font-extrabold uppercase tracking-wide text-brand-black transition-colors duration-500 group-hover:text-brand-white">
                    {service.title}
                 </h4>
              </div>

              <div className="flex flex-col gap-8 flex-grow">
                <p className="text-xs text-gray-600 leading-relaxed text-justify transition-colors duration-500 group-hover:text-brand-white">
                  {service.description}
                </p>
                
                <ul className="space-y-4 mt-auto">
                  {service.tags.map((tag, i) => (
                    <li 
                      key={i} 
                      className="text-[10px] uppercase font-bold text-gray-400 border-b border-gray-200 pb-2 last:border-0 block transition-all duration-500 group-hover:border-white/20 group-hover:text-brand-white"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
