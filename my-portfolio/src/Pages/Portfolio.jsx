import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Phone, Github, Linkedin, Code2, ExternalLink, Award, Briefcase, GraduationCap, User, FileText } from 'lucide-react';
import { Card, CardContent } from "@/Components/ui/card";

import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...
// ...existing code...

// Change this in Portfolio.js:
import HeroSection from '../Components/portfolio/HeroSection';
import AboutSection from '../Components/portfolio/AboutSection';
import ExperienceSection from '../Components/portfolio/ExperienceSection';
import SkillsSection from '../Components/portfolio/SkillsSection';
import ProjectsSection from '../Components/portfolio/ProjectsSection';
import CertificateSection from '../Components/portfolio/CertificateSection';
import ContactSection from '../Components/portfolio/ContactSection';
import Navigation from '../Components/portfolio/Navigation';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'certificate', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 opacity-90" />
      <div className="fixed inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      <Navigation activeSection={activeSection} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificateSection />
        <ContactSection />
      </main>
    </div>
  );
}