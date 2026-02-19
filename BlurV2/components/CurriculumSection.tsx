'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp } from './AnimatedSection'
import { Check, Circle } from 'lucide-react'

const weeks = [
  {
    num: 1,
    title: 'Build Clarity',
    theme: 'See the bottleneck. Define the destination. Set the targets.',
    tasks: [
      'Founder Vision Exercise — map current state vs. desired state with brutal honesty',
      'Core Process Identification — find the 3–5 processes that actually run your business',
      'Founder Role Redesign — determine exactly what you need to stop doing',
      '90-Day OKRs — set 1–3 measurable objectives with key results',
    ],
    deliverables: [
      'Founder Vision Map (current vs. desired state, documented)',
      'Your 3–5 core processes identified and prioritized',
      'A clear "stop doing" list with a transition plan',
      '90-day OKR set with measurable key results',
      'Your OKR Dashboard — live and tracking from day one',
    ],
  },
  {
    num: 2,
    title: 'Layer in Systems',
    theme: 'Turn the chaos in your head into documented, owned, repeatable systems.',
    tasks: [
      'Founder Clarity Exercise — separate high-value from low-value tasks',
      'Accountability & Org Chart — build a real org chart by process ownership',
      'Process Breakdown — document each core process end to end: Trigger, Steps, Owner, Output',
      'SOP Creation Part 1 — build your first SOPs using AI-first methodology',
      'Live AI Demo — watch AI run actual repeatable SOP steps from a real process',
    ],
    deliverables: [
      'Founder Clarity Matrix (high-value vs. low-value tasks mapped)',
      'Completed accountability chart with clear process ownership',
      'Core processes broken down into documented workflows',
      'First set of AI-ready SOPs',
      'Firsthand experience watching AI execute real process steps',
    ],
  },
  {
    num: 3,
    title: 'Use AI to Multiply',
    theme: 'Bolt AI into your systems. Make every process measurable.',
    tasks: [
      'Team Alignment Session — connect daily work to bigger goals',
      'SOP Creation Part 2 — build SOPs using a live participant\'s real process',
      'Key Results Definition — attach 1–2 measurable key results to every core process',
      'Scorecard Building — build scorecards so you see what\'s working without checking in',
    ],
    deliverables: [
      'Team aligned to company-level goals (not just task lists)',
      'Complete SOP library with AI integration points identified',
      'Key results defined for every core process',
      'Live scorecards feeding into your OKR Dashboard',
      'A system where performance is measured, not guessed at',
    ],
  },
  {
    num: 4,
    title: 'Run and Track',
    theme: 'Stress-test the system. Refine. Hand off. Make it self-sustaining.',
    tasks: [
      'Founder Reset Check — measure hours saved since Week 1',
      'OKR Refinement Rhythm — install weekly & monthly review cadences',
      'Team Issue Resolution — resolve team problems without re-bottlenecking',
      'Handoff Strategies — build protocols for new hires, new clients, new processes',
      'Claude AI Skills & Frameworks — pre-built AI tools for ongoing use',
    ],
    deliverables: [
      'Quantified founder time savings (hours per week reclaimed)',
      'OKR review rhythm installed and documented',
      'Issue resolution framework your team uses without you',
      'Handoff protocols for onboarding, client changes, and team growth',
      'Claude AI skills, dashboards, and frameworks for continued use',
      'Founder Clarity Dashboard',
      'AI-powered SOP writing tool',
    ],
  },
]

export default function CurriculumSection() {
  const [activeWeek, setActiveWeek] = useState(0)

  return (
    <section id="curriculum" className="bg-[#10101A] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <FadeUp>
          <p className="text-[#5271FF] text-sm font-semibold tracking-[0.15em] uppercase text-center mb-4">
            THE CURRICULUM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-4">
            What You Build in 4 Weeks
          </h2>
          <p className="text-[#D8D8E8] text-base sm:text-lg text-center max-w-[680px] mx-auto mb-12 leading-relaxed">
            This is a live bootcamp where you build the operational infrastructure of your business - with guidance, frameworks, and AI tools - in real time.
          </p>
        </FadeUp>

        {/* Tab Navigation */}
        <FadeUp delay={0.1}>
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-4 sm:inline-flex bg-[#0A0A0F] border border-[#1C1C32] rounded-xl p-1.5 gap-1">
              {weeks.map((week, i) => (
                <button
                  key={i}
                  onClick={() => setActiveWeek(i)}
                  className={`relative px-3 sm:px-6 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-250 whitespace-nowrap ${
                    activeWeek === i
                      ? 'text-white'
                      : 'text-[#9090A8] hover:text-[#D8D8E8]'
                  }`}
                >
                  {activeWeek === i && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#5271FF]/20 border border-[#5271FF]/30 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">Week {week.num}</span>
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0A0A0F] border border-[#1C1C32] rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#5271FF]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#5271FF] text-xl font-extrabold">{weeks[activeWeek].num}</span>
              </div>
              <div>
                <h3 className="text-white text-2xl sm:text-[28px] font-bold mb-1">
                  {weeks[activeWeek].title}
                </h3>
                <p className="text-[#9090A8] text-[15px] sm:text-[17px] italic">
                  {weeks[activeWeek].theme}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* What You Do */}
              <div>
                <h4 className="text-[#5271FF] text-sm font-semibold tracking-wider uppercase mb-4">
                  What You Do
                </h4>
                <ul className="space-y-3">
                  {weeks[activeWeek].tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Circle size={7} className="text-[#5271FF] mt-2 flex-shrink-0 fill-[#5271FF]" />
                      <span className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Walk Away With */}
              <div>
                <h4 className="text-[#34D399] text-sm font-semibold tracking-wider uppercase mb-4">
                  What You Walk Away With
                </h4>
                <ul className="space-y-3">
                  {weeks[activeWeek].deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-[#34D399] mt-1 flex-shrink-0" />
                      <span className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Master Deliverables */}
        <FadeUp delay={0.15}>
          <div className="mt-14 bg-[#0C0E1E] border border-[#5271FF]/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_0_40px_rgba(82,113,255,0.15),0_0_80px_rgba(82,113,255,0.08)]">
            <h3 className="text-white text-2xl font-bold text-center mb-8">
              By the End of 4 Weeks, You Will Have Built:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {[
                'A clear Founder Vision Map showing exactly where you are and where you\'re headed',
                'Your 3–5 core business processes identified, documented, and assigned to owners',
                'A complete SOP library built with AI - designed to be used, not shelved',
                'AI workflows running repeatable tasks that used to eat your calendar',
                '90-day OKRs with measurable key results and live scorecards',
                'An OKR Dashboard that shows what\'s working without asking anyone',
                'A Founder Clarity Dashboard that separates CEO-level work from task-level work',
                'An accountability chart where every process has an owner who isn\'t you',
                'Handoff protocols that make hiring and delegation systematic',
                'A documented, measurable, AI-ready operational foundation',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#5271FF] font-bold text-lg min-w-[28px]">{i + 1}.</span>
                  <span className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-14">
            <a
              href="#apply"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] hover:-translate-y-0.5 transition-all duration-250"
            >
              Yes — I Want to Build This
            </a>
            <p className="text-[#9090A8] text-sm mt-4">15 spots per cohort. Application takes 2 minutes.</p>
            <p className="text-[#606080] text-xs mt-1">14-day guarantee: Build the systems or get a full refund.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
