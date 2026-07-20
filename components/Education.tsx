'use client'

import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-900">
              Bachelor of Science in Computer Software Engineering
            </h3>
            <p className="text-lg text-slate-600">University of South Carolina</p>
            <p className="text-slate-500">May 2019</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


