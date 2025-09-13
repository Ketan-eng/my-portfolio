import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...

import { Code2, Database, Shield, Wrench, Users, Lightbulb } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'from-blue-500 to-blue-600',
      skills: ['C#', 'JavaScript', 'Python', 'SQL']
    },
    {
      icon: Wrench,
      title: 'Frameworks & Libraries',
      color: 'from-purple-500 to-purple-600',
      skills: ['ASP.NET Core', 'Entity Framework', 'LINQ', 'Web API', 'jQuery', 'React', 'Angular']
    },
    {
      icon: Database,
      title: 'Technologies',
      color: 'from-green-500 to-green-600',
      skills: ['MS SQL Server', 'Docker', 'RESTful APIs', 'SignalR', 'Azure Blob Storage', 'WebRTC']
    },
    {
      icon: Shield,
      title: 'Security & Auth',
      color: 'from-red-500 to-red-600',
      skills: ['JWT', 'OAuth 2.0', 'Authentication', 'Authorization', 'SSL/TLS', 'XSS Protection']
    },
    {
      icon: Lightbulb,
      title: 'Development Practices',
      color: 'from-orange-500 to-orange-600',
      skills: ['Agile Methodology', 'SOLID Principles', 'MVC Pattern', 'Repository Pattern', 'Git', 'SDLC']
    },
    {
      icon: Users,
      title: 'Soft Skills',
      color: 'from-pink-500 to-pink-600',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Analytical Skills', 'Leadership']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-400 border-blue-400/30">
            Technical Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}