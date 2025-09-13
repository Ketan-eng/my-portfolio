import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...
import { Calendar, MapPin, Building } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'MagnIntel',
      role: 'Software Developer',
      period: 'Nov 2024 – Feb 2025',
      location: 'Kurukshetra, Haryana (Remote)',
      description: 'Developed scalable slot booking systems and real estate platforms for Australian clients',
      achievements: [
        'Implemented seamless slot booking system using ASP.NET Core and Web API',
        'Worked on real estate platform following SOLID principles and Repository Pattern',
        'Built responsive UI using jQuery and AJAX for hybrid web applications',
        'Optimized SQL queries for enhanced database performance and low-latency interactions',
        'Utilized Azure Blob Storage for efficient file management'
      ],
      technologies: ['ASP.NET Core', 'Web API', 'SQL Server', 'jQuery', 'AJAX', 'Azure Blob Storage']
    },
    {
      company: 'Vertscend Automation',
      role: 'Associate Software Developer',
      period: 'Nov 2023 – Nov 2024',
      location: 'Chandigarh',
      description: 'Designed enterprise dashboards and integrated APIs for major industrial clients',
      achievements: [
        'Built JSW Power dashboards with Chart.js for real-time energy analytics',
        'Developed UI for ABB Construction project using Syncfusion components',
        'Integrated Scully API for Honeywell\'s live monitoring and RFID systems',
        'Participated in Agile sprints maintaining deployment-ready codebase',
        'Optimized SQL joins for improved dashboard performance'
      ],
      technologies: ['Chart.js', 'Syncfusion', 'SQL', 'RFID Integration', 'Agile', 'RESTful APIs']
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-400 border-blue-400/30">
            Professional Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building enterprise solutions and contributing to innovative projects across diverse industries
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-2">
                        <Building className="w-4 h-4" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-blue-500/30 text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}