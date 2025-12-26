'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Reclaim.ai - AI Task Manager',
    year: '2024',
    description:
      'AI-powered task management platform that auto-schedules tasks directly to your calendar. Features smart due date scheduling, flexible priority levels, auto-rescheduling for conflicts, and integrations with 6+ project management tools. Used by 550,000+ people across 65,000 companies.',
    tags: ['AI', 'Task Management', 'Calendar Sync', 'Productivity', 'SaaS'],
    gradient: 'from-violet-500 to-purple-500',
    image: '/projects/ragflow.png',
    demoLink: 'https://reclaim.ai/features/tasks',
    githubLink: null,
  },
  {
    title: 'AgentGPT - AI Agent Platform',
    year: '2024',
    description:
      'Browser-based AI agent creation platform that allows users to define and deploy autonomous AI agents. Create agents by specifying goals and names, with built-in templates for research, travel planning, and study assistance. Features agent orchestration, tool integration, and web scraping capabilities.',
    tags: ['AI Agents', 'Autonomous Agents', 'LLM', 'Web Scraping', 'AgentGPT'],
    gradient: 'from-blue-500 to-indigo-500',
    image: '/projects/agentgpt.png',
    demoLink: 'https://agentgpt.reworkd.ai/',
    githubLink: null,
  },
  {
    title: 'Reclaim.ai Tasks - Smart Task Scheduling',
    year: '2024',
    description:
      'AI-powered task scheduling system that automatically blocks time for tasks on your calendar. Features include smart due date scheduling, flexible priority levels, auto-rescheduling for conflicts, and integrations with Asana, ClickUp, Todoist, Jira, Linear, and Google Tasks. Helps users gain 7.6 more productive hours per week.',
    tags: ['AI Scheduling', 'Task Automation', 'Calendar Integration', 'Productivity', 'Time Management'],
    gradient: 'from-emerald-500 to-teal-500',
    image: '/projects/reclaim-tasks.png',
    demoLink: 'https://reclaim.ai/features/tasks',
    githubLink: null,
  },
  {
    title: 'CheatLayer - AI Automation Platform',
    year: '2024',
    description:
      'Deploy swarms of cloud marketing agents that automate A/B testing, copywriting, and content creation. Built on Project Atlas framework, enabling unlimited complexity automations in simple language. Features autonomous lead generation, sales agents, and marketing automation with 50-500x better CPM than traditional ads. Used by 10,000+ users from top entities.',
    tags: ['AI Automation', 'Marketing Agents', 'RPA', 'Natural Language', 'Project Atlas'],
    gradient: 'from-rose-500 to-pink-500',
    image: '/projects/cheatlayer.png',
    demoLink: 'https://cheatlayer.com/',
    githubLink: null,
  },
  {
    title: 'Gumloop - AI Automation Platform',
    year: '2024',
    description:
      'The AI automation platform built for everyone. Drag-and-drop interface to automate workflows with 120+ native integrations. Features AI-enhanced decision making, visual builder, and prompt-to-create functionality. Trusted by Instacart, Webflow, and Shopify. Enterprise-ready with SOC 2, GDPR compliance, and virtual private cloud deployments.',
    tags: ['AI Automation', 'Workflow Builder', 'No-Code', 'Integrations', 'Enterprise'],
    gradient: 'from-cyan-500 to-blue-500',
    image: '/projects/gumloop.png',
    demoLink: 'https://www.gumloop.com/',
    githubLink: null,
  },
  {
    title: 'Agentic - AI-Powered Blogging Platform',
    year: '2024',
    description:
      'AI-powered blogging platform that automates high-quality blog generation with AI agents. A team of AI agents researches topics, compresses information, and composes SEO-optimized blog posts. Features AI-assisted writing, fully-featured text editor, and automatic image generation. Can increase profits by up to 50% with improved SEO and more leads.',
    tags: ['AI Blogging', 'Content Generation', 'SEO', 'AI Agents', 'Content Strategy'],
    gradient: 'from-lime-500 to-green-500',
    image: '/projects/agentic.png',
    demoLink: 'https://www.beagentic.com/',
    githubLink: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                  )}
                  <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${project.gradient}`}></div>
                  {/* Overlay with links */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-2 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Play size={16} />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors flex-1">
                      {project.title}
                    </h3>
                    <span className="text-sm text-slate-500 font-mono ml-2">{project.year}</span>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Links at bottom */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 font-medium"
                      >
                        <Github size={14} />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


