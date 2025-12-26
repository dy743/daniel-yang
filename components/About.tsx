'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-8">About</h2>
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              I'm a Full-Stack AI Engineer with over 7 years of experience building and shipping
              production AI-powered applications. My work spans LLM-based systems, retrieval-augmented
              generation (RAG) pipelines, and intelligent automation workflows.
            </p>
            <p>
              I have a strong background in Python, FastAPI, React/Next.js, and cloud-based services,
              with experience delivering end-to-end features from backend architecture to frontend user
              interfaces. I've proven my ability to build reliable, scalable systems in both startup and
              enterprise environments.
            </p>
            <p>
              Currently, I'm focused on building multi-agent automation systems and improving AI
              reliability through structured outputs, validation, and intelligent retrieval mechanisms.
              I enjoy working at the intersection of AI research and practical engineering, turning
              cutting-edge technology into production-ready solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


