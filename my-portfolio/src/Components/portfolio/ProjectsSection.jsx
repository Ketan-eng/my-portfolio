import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/Components/ui/card';
import { Badge } from '@/Components/ui/badge';
import { Button } from '@/Components/ui/button';
// ...existing code...
import { ExternalLink, Github, Eye, Video, ShoppingCart } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Face Recognition + Attendance System',
      description: 'Real-time attendance system using advanced facial recognition technology with Python, OpenCV, and machine learning algorithms for accurate identification.',
      icon: Eye,
      color: 'from-blue-500 to-blue-600',
      technologies: ['Python', 'NumPy', 'OpenCV', 'Face Recognition', 'Machine Learning'],
      features: [
        'Real-time face detection and recognition',
        'Automated attendance tracking',
        'High accuracy facial matching',
        'User-friendly interface'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'WebRTC Video Calling Service',
      description: 'Peer-to-peer video calling platform built with .NET and Angular, implementing WebRTC protocols with SignalR for real-time communication.',
      icon: Video,
      color: 'from-purple-500 to-purple-600',
      technologies: ['.NET Core', 'Angular', 'WebRTC', 'SignalR', 'Socket.io', 'SDP', 'STUN/TURN'],
      features: [
        'Peer-to-peer video calling',
        'Real-time signaling with SignalR',
        'Backend signaling flow implementation',
        'Cross-platform compatibility'
      ],
      github: '#',
      demo: '#'
    },
    {
      title: 'Full Stack E-commerce Platform',
      description: 'Modern e-commerce solution built with .NET Core and Angular, focusing on SOLID principles, clean architecture, and feature-separated codebase.',
      icon: ShoppingCart,
      color: 'from-green-500 to-green-600',
      technologies: ['.NET Core', 'Angular', 'Entity Framework', 'SQL Server', 'Clean Architecture'],
      features: [
        'SOLID principles implementation',
        'Scalable, clean architecture',
        'Feature-separated modules',
        'Modern UI/UX design'
      ],
      github: '#',
      demo: '#',
      status: 'In Progress'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 text-blue-400 border-blue-400/30">
            Featured Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Projects & Applications
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Innovative solutions showcasing technical expertise and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      {project.status && (
                        <Badge variant="outline" className="border-orange-500/30 text-orange-300">
                          {project.status}
                        </Badge>
                      )}
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 hover:bg-slate-700 text-slate-300 flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-600 hover:bg-blue-700 text-blue-300 flex-1"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
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