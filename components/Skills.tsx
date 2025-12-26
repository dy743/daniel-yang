'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'AI & LLM',
    skills: [
      'RAG',
      'LLM-powered applications',
      'Multi-agent workflows',
      'Vector search and embeddings',
      'Re-ranking and context selection',
      'Structured outputs and validation',
      'Document intelligence',
      'Summarization and classification',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    skills: [
      'Python',
      'FastAPI',
      'Node.js',
      'REST API design',
      'Redis and background queues',
      'Async and batch processing',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Real-time streaming (SSE, WebSockets)',
      'Internal dashboards and tools',
      'Data visualization',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Infrastructure',
    skills: [
      'AWS',
      'CI/CD pipelines',
      'Performance optimization',
      'Scalable microservices',
    ],
    color: 'from-orange-500 to-red-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3
                  className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


