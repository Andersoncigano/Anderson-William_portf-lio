import React from 'react';
import { EDUCATION, COURSES } from '../constants';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const Education: React.FC = () => {
  return (
    <section id="section-education" className="py-24 px-6 bg-brand-white text-brand-black border-t border-brand-black/5 scroll-mt-28 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-black/5 rounded-full blur-[120px] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-black/5 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header da Seção */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-left"
        >
             <h3 className="text-xl font-display font-bold uppercase tracking-tighter mb-6 bg-brand-black text-brand-white px-6 py-2 inline-block border-2 border-brand-black transition-all duration-300 hover:bg-brand-white hover:text-brand-black hover:tracking-widest cursor-default">
            Formação & Conhecimento
          </h3>
        </motion.div>

        <div className="flex flex-col gap-24">
          
          {/* Seção 1: Timeline Acadêmica */}
          <div className="relative">
            <div className="flex justify-center mb-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 text-brand-black/90 group cursor-default px-6 py-2 rounded-full transition-all duration-500 hover:bg-brand-black/10 border border-transparent hover:border-brand-black/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
              >
                <GraduationCap className="w-5 h-5 transition-transform duration-500 ease-out group-hover:-rotate-12 group-hover:scale-110 group-hover:text-brand-black" />
                <h4 className="relative text-lg font-display font-bold uppercase tracking-widest transition-all duration-500 ease-out group-hover:tracking-[0.3em] group-hover:text-brand-black">
                  Acadêmico
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-brand-black to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-3/4"></span>
                </h4>
              </motion.div>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="hidden md:block absolute top-[15px] left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-brand-black/20 to-transparent"></div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 relative">
                {EDUCATION.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center text-center group w-full md:w-1/3 relative"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-white border-2 border-brand-black/20 group-hover:border-brand-black group-hover:bg-brand-black transition-all duration-500 z-10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.1)] mb-6">
                        <div className="w-2 h-2 rounded-full bg-brand-black group-hover:bg-brand-white transition-colors duration-500"></div>
                    </div>
                    
                    <div className="transition-all duration-500 group-hover:-translate-y-2">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold bg-brand-black/5 border border-brand-black/10 text-gray-600 mb-3 group-hover:bg-brand-black group-hover:text-brand-white transition-colors">
                        {edu.year}
                      </span>
                      <h5 className="text-xl font-display font-bold text-brand-black mb-1.5 leading-tight group-hover:text-gray-800">
                        {edu.course}
                      </h5>
                      <p className="text-sm text-gray-500 uppercase tracking-widest group-hover:text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-black/10 to-transparent"></div>

          {/* Seção 2: Grid de Cursos */}
          <div>
             <div className="flex justify-center mb-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 text-brand-black/90 group cursor-default px-6 py-2 rounded-full transition-all duration-500 hover:bg-brand-black/10 border border-transparent hover:border-brand-black/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)]"
                >
                    <Award className="w-5 h-5 transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110 group-hover:text-brand-black" />
                    <h4 className="relative text-lg font-display font-bold uppercase tracking-widest transition-all duration-500 ease-out group-hover:tracking-[0.3em] group-hover:text-brand-black">
                      Especializações
                      <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-brand-black to-transparent transition-all duration-500 ease-out -translate-x-1/2 group-hover:w-3/4"></span>
                    </h4>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center">
              {COURSES.map((course, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-brand-black/5 border border-brand-black/10 p-6 rounded-xl hover:bg-brand-black/10 hover:border-brand-black/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-brand-white/40 rounded-lg text-gray-600 group-hover:text-brand-black transition-colors">
                        <Award size={18} />
                    </div>
                    <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1.5 group-hover:text-gray-700 bg-brand-white/20 px-2 py-1 rounded">
                      <Calendar size={12} />
                      {course.year}
                    </span>
                  </div>
                  
                  <h5 className="text-base font-display font-bold text-gray-800 mb-1.5 leading-snug group-hover:text-brand-black">
                    {course.name}
                  </h5>
                  
                  {course.provider && (
                    <p className="text-[11px] text-gray-500 mt-3 pt-3 border-t border-brand-black/5 group-hover:border-brand-black/10 group-hover:text-gray-600 transition-colors uppercase tracking-wide">
                      {course.provider}
                    </p>
                  )}
                </motion.div>
              ))}
              
              <motion.a 
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-brand-black/10 hover:border-brand-black/40 hover:bg-brand-black/5 transition-all duration-300 cursor-pointer text-center h-full min-h-[140px]"
              >
                <span className="text-sm font-semibold text-gray-500 group-hover:text-brand-black mb-2 transition-colors">Ver todos certificados</span>
                <span className="text-[10px] text-gray-400 group-hover:text-gray-600 uppercase tracking-widest transition-colors">no LinkedIn</span>
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
