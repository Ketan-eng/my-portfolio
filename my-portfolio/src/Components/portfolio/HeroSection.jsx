import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText, MapPin, Code2 } from 'lucide-react';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...
// ...existing code...


export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-blue-400 border-blue-400/30">
            <Code2 className="w-4 h-4 mr-2" />
            Full Stack Developer
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-blue-300 bg-clip-text text-transparent">
            Ketan Handa
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Crafting scalable solutions with <span className="text-blue-400 font-semibold">.NET Core</span>, 
            building the future one application at a time
          </p>
          
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
            <MapPin className="w-4 h-4" />
            <span>Kurukshetra, Haryana</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Badge variant="outline" className="px-4 py-2 border-blue-500/30 text-blue-300">
            C# & ASP.NET Core
          </Badge>
          <Badge variant="outline" className="px-4 py-2 border-purple-500/30 text-purple-300">
            React & Angular
          </Badge>
          <Badge variant="outline" className="px-4 py-2 border-green-500/30 text-green-300">
            SQL Server
          </Badge>
          <Badge variant="outline" className="px-4 py-2 border-orange-500/30 text-orange-300">
            Docker
          </Badge>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button
            variant="outline"
            className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white px-8 py-3"
            onClick={scrollToAbout}
          >
            View My Work
          </Button>
          <Button
  variant="outline"
  className="bg-blue-600 hover:bg-blue-700 border-blue-500 text-white px-8 py-3"
  asChild
>
  <a href="mailto:ketanhanda17@gmail.com">
    <FileText className="w-2 h-4 mr-2" />
    Send a Mail
  </a>
</Button>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/ketanhanda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ketan-handa-62842b192/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-6 h-6 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
}