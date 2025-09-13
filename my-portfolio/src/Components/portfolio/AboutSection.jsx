import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../Components/ui/card';
import { Badge } from '../../Components/ui/badge';

import { Building2, Users, Zap, Target } from 'lucide-react';

export default function AboutSection() {
 // Debug log

  const highlights = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Developed scalable applications for Honeywell, ABB, JSW Power, and Australian firms'
    },
    {
      icon: Users,
      title: 'Collaborative Developer',
      description: 'Strong experience in Agile environments with cross-functional teams'
    },
    {
      icon: Zap,
      title: 'Performance Focus',
      description: 'Specialized in SQL optimization, query tuning, and system scalability'
    },
    {
      icon: Target,
      title: 'User-Centric Design',
      description: 'Building feature-rich applications with seamless user experiences'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-400 border-blue-400/30">
            About Me - TEST VERSION
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Passionate Full Stack Developer - UPDATED
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            With expertise in C#, ASP.NET Core, and modern web technologies, I create robust, 
            scalable solutions that drive business success. My experience spans enterprise 
            applications, real-time systems, and cutting-edge web platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
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