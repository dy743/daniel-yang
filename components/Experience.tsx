'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'AI Software Engineer',
    company: 'Artisan AI',
    location: 'New York, United States',
    period: 'Oct 2024 — Present',
    description: [
      'Built and maintained multi-agent automation systems supporting complex task execution and shared contextual memory.',
      'Implemented LLM reasoning pipelines with structured outputs, validation, and fallback handling to improve reliability.',
      'Developed FastAPI backend services integrating vector search, summarization, and classification capabilities.',
      'Created Next.js dashboards for monitoring agent activity, execution flows, and system events.',
      'Improved AI email intelligence features through embedding tuning, retrieval optimization, and summarization improvements.',
      'Worked closely with product and engineering teams to deliver features from design to production.',
    ],
  },
  {
    title: 'Full-Stack AI Engineer',
    company: 'NexaAI',
    location: 'California, United States',
    period: 'Jan 2023 — Sep 2024',
    description: [
      'Designed and implemented RAG systems using FastAPI, Pinecone/Chroma, LangChain, and custom retrieval logic.',
      'Built OCR-to-LLM pipelines using Tesseract, AWS Textract, and GPT models to automate document extraction and classification.',
      'Developed vector indexing pipelines supporting large document collections with low-latency retrieval.',
      'Implemented intelligent automation agents capable of tool usage and multi-document reasoning.',
      'Delivered full-stack features, including Next.js frontends for semantic search, document review, and embedding analysis.',
      'Improved backend performance using async execution, Redis queues, and batched processing.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'GitLab',
    location: 'San Francisco, United States',
    period: 'Aug 2021 — Dec 2022',
    description: [
      'Developed Python automation tools to improve CI reliability and reduce flaky test failures.',
      'Refactored CI configurations and optimized caching and test execution workflows.',
      'Built internal tooling to analyze CI failures, pipeline bottlenecks, and reliability issues.',
      'Collaborated with infrastructure teams to improve runner performance and pipeline stability.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Dell Technologies',
    location: 'Texas, United States',
    period: 'Jun 2019 — Jul 2021',
    description: [
      'Developed backend automation tools and REST APIs using Python and Node.js.',
      'Automated provisioning and configuration workflows for cloud and internal platforms.',
      'Improved monitoring, reliability, and performance of distributed services.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'GitLab',
    location: 'San Francisco, United States',
    period: 'Jun 2018 — Jul 2019',
    description: [
      'Built automation scripts to improve CI test coverage and environment reliability.',
      'Automated setup and teardown workflows, reducing developer setup time.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-8 border-l-2 border-slate-200 last:border-l-0 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full border-2 border-white"></div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <span className="font-semibold text-slate-900">{exp.company}</span>
                    <span className="flex items-center gap-1 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-700 mt-4 ml-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


