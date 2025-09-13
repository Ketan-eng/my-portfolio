import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...

import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

export default function CertificateSection() {
  const certificate = [
    {
      title: 'SOLID Principles',
      issuer: 'Scaler Academy',
      date: 'May 2025',
      description: 'Advanced understanding of SOLID design principles for building maintainable and scalable software architectures.',
      color: 'from-blue-500 to-blue-600',
      link: '#'
    },
    {
      title: 'NoSQL (MongoDB)',
      issuer: 'MongoDB University',
      date: 'Jan 2019',
      description: 'Comprehensive knowledge of NoSQL database design, MongoDB operations, and document-based data modeling.',
      color: 'from-green-500 to-green-600',
      link: '#'
    },
    {
      title: 'SQL & Relational Databases',
      issuer: 'IBM',
      date: 'May 2018',
      description: 'Foundation in relational database design, SQL query optimization, and database management principles.',
      color: 'from-purple-500 to-purple-600',
      link: '#'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'IBM',
      date: 'June 2018',
      description: 'Understanding of data science fundamentals, statistical analysis, and data-driven decision making.',
      color: 'from-orange-500 to-orange-600',
      link: '#'
    }
  ];

  return (
    <section id="certificate" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-400 border-blue-400/30">
            Professional Growth
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Certificates & Education
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Continuous learning and professional development through industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {certificate.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-600 hover:bg-blue-700 text-blue-300"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  
                  <div className="flex items-center gap-4 text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span className="text-sm">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold text-white">BTech Computer Science & Engineering</h4>
                  <p className="text-blue-300">Lovely Professional University • 2019-2023</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">12th Grade (PCM)</h4>
                  <p className="text-purple-300">Wisdom World School • 2018-2019</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}