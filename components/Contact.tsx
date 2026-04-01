import React from 'react';
import { Mail, Linkedin, Github, Phone, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'motion/react';

const Contact: React.FC = () => {
  return (
    <section id="section-contact" className="py-24 px-6 bg-brand-white text-brand-black scroll-mt-28 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-xl font-display font-bold uppercase tracking-tighter mb-10 bg-brand-black text-brand-white px-5 py-1.5 inline-block border-2 border-brand-black transition-all duration-300 hover:bg-brand-white hover:text-brand-black hover:tracking-widest cursor-default"
        >
          Vamos Conversar?
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-gray-600 mb-10 max-w-2xl mx-auto transition-all duration-300 transform hover:scale-105 hover:text-brand-black cursor-default"
        >
          Estou disponível para novos projetos e colaborações.
        </motion.p>

        <motion.a 
          href={`mailto:${PERSONAL_INFO.email}`}
          whileHover={{ scale: 1.05, letterSpacing: "0.1em" }}
          className="inline-flex items-center gap-3 text-lg md:text-2xl font-display font-bold transition-all duration-300 mb-8"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
          {PERSONAL_INFO.email}
        </motion.a>

        <motion.a 
          href={PERSONAL_INFO.resume}
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: "#050505", color: "#F9FAFB" }}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200 px-6 py-3 rounded-full transition-all duration-300 mb-16"
          aria-label="Download Curriculum Vitae"
        >
          Download CV
          <Download className="w-3 h-3" />
        </motion.a>

        <div className="flex justify-center gap-8 md:gap-12">
          <SocialLink 
            href="https://www.linkedin.com/in/anderson-w-28a010a8/" 
            icon={<Linkedin size={24} />} 
            label="LinkedIn" 
            color="hover:text-[#0077b5]"
          />
          <SocialLink 
            href="https://api.whatsapp.com/send?phone=5551993171197&text=Anderson" 
            icon={<Phone size={24} />} 
            label="WhatsApp" 
            color="hover:text-[#25D366]"
          />
          <SocialLink 
            href="#" 
            icon={<Github size={24} />} 
            label="Github" 
            color="hover:text-brand-black"
          />
          <SocialLink 
            href="https://www.behance.net/andersonnh" 
            icon={<span className="font-bold text-lg">Be</span>} 
            label="Behance" 
            color="hover:text-[#1769ff]"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-[10px] text-gray-400 uppercase font-bold tracking-widest"
        >
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos os direitos reservados.
        </motion.div>
      </div>
    </section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label, color }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -5 }}
    className={`flex flex-col items-center gap-3 group transition-colors duration-300 ${color}`}
    aria-label={label}
  >
    <div className="p-4 rounded-full bg-gray-100 group-hover:bg-brand-white group-hover:shadow-xl transition-all duration-300">
      {icon}
    </div>
    <span className="text-[9px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </motion.a>
);

export default Contact;