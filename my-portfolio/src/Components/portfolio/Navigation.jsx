import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Code2, FolderOpen, Award, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'certificate', label: 'Certificate', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navigation({ activeSection }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="flex flex-col space-y-4 bg-slate-800/80 backdrop-blur-lg rounded-2xl p-3 border border-slate-700/50">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`p-3 rounded-xl transition-all duration-300 group relative ${
                activeSection === item.id 
                  ? 'bg-blue-500 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconComponent className="w-5 h-5" />
              <div className="absolute left-full ml-3 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {item.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}