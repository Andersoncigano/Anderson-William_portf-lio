import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'motion/react';

const Experience: React.FC = () => {
  return (
    <section id="section-experience" className="py-24 px-6 bg-brand-white text-brand-black scroll-mt-28 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-display font-bold uppercase tracking-tighter mb-14 bg-brand-black text-brand-white px-5 py-1.5 inline-block border-2 border-brand-black transition-all duration-500 hover:invert hover:tracking-widest cursor-default"
        >
          Experiências
        </motion.h3>

        <div className="space-y-14">
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-10 group transition-all duration-500 ease-out relative p-8 -mx-8 rounded-2xl cursor-default border border-transparent hover:bg-brand-black hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-brand-black group-hover:bg-brand-white rounded-r-full scale-y-0 group-hover:scale-y-100 transition-all duration-500 origin-center"></div>

              <div className="md:col-span-3 text-xs font-bold text-gray-500 transition-colors duration-300 group-hover:text-brand-white group-hover:translate-x-2">
                {exp.year}
              </div>
              
              <div className="md:col-span-9 group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="text-lg font-display font-bold uppercase mb-1.5 group-hover:tracking-wide transition-all duration-300 group-hover:text-brand-white">
                  {exp.company}
                </h4>
                
                {exp.role && (
                  <div className="text-[10px] uppercase tracking-widest font-semibold mb-4 text-gray-600 transition-colors duration-300 group-hover:text-gray-300">
                    {exp.role}
                  </div>
                )}
                
                <ul className="space-y-2 text-[11px] text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 mt-1.5 block w-1 h-1 bg-brand-black rounded-full shrink-0 transition-all duration-300 group-hover:bg-brand-white group-hover:scale-150"></span>
                      {desc}
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

export default Experience;