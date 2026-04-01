import React from 'react';
import { SKILLS } from '../constants';
import { PenTool, Video, Bot } from 'lucide-react';
import { motion } from 'motion/react';

const Skills: React.FC = () => {

  const getSkillIcon = (title: string) => {
    const iconClass = "w-5 h-5 mr-3 transition-colors duration-500 group-hover:text-brand-white text-brand-black";
    
    if (title.toLowerCase().includes("design")) return <PenTool className={iconClass} />;
    if (title.toLowerCase().includes("vídeo")) return <Video className={iconClass} />;
    if (title.toLowerCase().includes("inteligência")) return <Bot className={iconClass} />;
    
    return null;
  };

  return (
    <section id="section-skills" className="py-24 px-6 bg-brand-white text-brand-black scroll-mt-28 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl font-display font-bold uppercase tracking-tighter mb-14 bg-brand-black text-brand-white px-5 py-1.5 inline-block border-2 border-brand-black transition-all duration-300 hover:bg-brand-white hover:text-brand-black hover:tracking-widest cursor-default"
        >
          Conhecimentos
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {SKILLS.map((cat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full p-8 -mx-8 rounded-2xl transition-all duration-500 hover:bg-brand-black hover:shadow-2xl cursor-default"
            >
              <div className="flex items-center mb-6 px-3 py-1.5 self-start rounded-md transition-all duration-500 group-hover:bg-white/10">
                {getSkillIcon(cat.title)}
                <h4 className="text-sm font-display font-extrabold uppercase tracking-wide transition-colors duration-500 group-hover:text-brand-white">
                  {cat.title}
                </h4>
              </div>

              <ul className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="text-xs border-b border-gray-300 pb-2 last:border-0 transition-colors duration-500 group-hover:text-gray-300 group-hover:border-gray-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;