'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from './AnimatedSection'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'I don\'t have time for a 4-week program. I\'m already drowning.',
    answer: 'That\'s exactly why you need this.\n\nYou don\'t have time because you don\'t have systems. And you don\'t have systems because you don\'t have time to build them. That\'s the loop you\'re stuck in.\n\nBlurOps is designed specifically for founders deep in the weeds. The live sessions are structured and efficient. The AI tools cut the manual work dramatically.\n\nYou invest 4 weeks now to save over 1,000 hours per year.',
  },
  {
    question: 'My business is different. Will a generic framework work?',
    answer: 'The specific processes are different.\n\nThe structural problems are the same - everything runs through you, nothing is documented, delegation fails because there\'s nothing to delegate to. BlurOps works at the structural level. You apply the BLUR framework to your specific processes, your specific team, and your specific business.\n\nYou\'re not following a cookie-cutter template.',
  },
  {
    question: 'What happens after the 4 weeks?',
    answer: 'You walk away with permanent ownership of everything you build: SOPs, dashboards, OKR frameworks, AI tools, scorecards, handoff protocols.\n\nNo monthly subscription. No expiring access.\n\nYou also leave with the OKR refinement rhythm - a built-in weekly and monthly review cadence that keeps the system alive long-term.',
  },
  {
    question: 'What results should I realistically expect?',
    answer: 'By the end of 4 weeks: your 3–5 core processes documented with AI-ready SOPs, a live OKR dashboard, and an accountability chart.\n\nWithin the first month after: most founders report reclaiming 15–20 hours per week.\nWithin the first quarter: the documented systems enable 2–3 more clients without proportionally increasing your workload.\n\nThat\'s $30K–$100K+ in additional revenue capacity.',
  },
  {
    question: '$1,599 is a lot of money. How do I justify this investment?',
    answer: '$1,599 is a lot less than the alternatives.\n\nEOS implementation runs $36K/year.\nMasterminds cost $10K–$25K annually.\nAn OBM runs $3K–$8K per month - and still needs systems to manage.\n\nBlurOps is $1,599 once, for infrastructure you keep and use for years. If the bottleneck costs you 15–25 hours per week on low-value work and $100K+ per year in unrealized revenue, then $1,599 pays for itself in the first month.',
  },
  {
    question: 'I\'ve tried building systems before. Nothing stuck.',
    answer: 'Here\'s why those attempts failed: they gave you pieces without the full structure.\n\nA PM tool without documented processes is shelfware.\nA Loom SOP without an owner, scorecard, and review rhythm is a video nobody watches after week two.\n\nBlurOps gives you the complete stack - documentation, ownership, measurement, AI integration, and the accountability rhythm that makes it self-sustaining.',
  },
  {
    question: 'I\'m not technical. Am I going to be lost?',
    answer: 'Not even a little bit.\n\nYou don\'t need to know how to code, build automations, or write complex prompts.\n\nWe show you exactly where AI fits into your specific processes - and we demonstrate it live. The AI tools we provide are designed for non-technical founders who just want things to work. If you can write an email and follow a checklist, you can use these tools.',
  },
]

function FAQItem({ question, answer, isOpen, toggle }: {
  question: string; answer: string; isOpen: boolean; toggle: () => void
}) {
  return (
    <div className="border-b border-[#1C1C32]">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className={`text-base sm:text-lg font-semibold pr-4 transition-colors ${
          isOpen ? 'text-[#5271FF]' : 'text-[#D8D8E8] group-hover:text-white'
        }`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-[#5271FF]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed pb-6 max-w-[720px] whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#0A0A0F] py-16 sm:py-24">
      <div className="max-w-[800px] mx-auto px-6 md:px-10">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-12">
            Got Questions? We know the answers
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
