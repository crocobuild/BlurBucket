'use client'

import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Wrench, BarChart3, Zap, RotateCcw } from 'lucide-react'

const highlights = [
  { value: '4 Weeks', label: 'of live sessions' },
  { value: '4 Stages', label: 'of the BLUR framework' },
  { value: '1 Outcome', label: 'a business that runs itself' },
]

const blurSteps = [
  { letter: 'B', title: 'Build', description: 'Build the systems and SOPs that let your agency run without you.', icon: Wrench },
  { letter: 'L', title: 'Leverage', description: 'Leverage automation and AI to eliminate repetitive busywork.', icon: Zap },
  { letter: 'U', title: 'Upgrade', description: 'Upgrade your team structure so every role drives growth.', icon: BarChart3 },
  { letter: 'R', title: 'Repeat', description: 'Repeat the process to scale predictably, month after month.', icon: RotateCcw },
]

export default function FrameworkSection() {
  return (
    <section id="framework" className="bg-[#0A0A0F] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <FadeUp>
          <p className="text-[#5271FF] text-sm font-semibold tracking-[0.15em] uppercase text-center mb-4">
            THE FRAMEWORK
          </p>
          <p className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white text-center max-w-[720px] mx-auto mb-10 leading-tight">
            You need Systems.
            <span className="block mt-3">
              You need the <span className="bg-gradient-to-r from-[#5271FF] to-[#6B87FF] bg-clip-text text-transparent whitespace-nowrap">BLUR Framework.</span>
            </span>
          </p>
        </FadeUp>

        {/* 3 highlight cells */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto items-stretch mb-12">
          {highlights.map((item, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="bg-[#10101A] border border-[#1C1C32] rounded-xl p-5 sm:p-6 text-center hover:border-[#5271FF]/30 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1 whitespace-nowrap">{item.value}</p>
                <p className="text-[#9090A8] text-xs sm:text-sm leading-snug whitespace-nowrap">{item.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-10 max-w-[800px] mx-auto">
            Every Agency Owner Hits This Wall.
            <span className="block mt-3 text-[#5271FF]">We Fix It in 4 Steps.</span>
          </h2>
        </FadeUp>

        <StaggerContainer className="flex flex-col gap-4 max-w-2xl mx-auto">
          {blurSteps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#10101A] border border-[#1C1C32] rounded-xl px-6 py-5 flex items-center gap-5 hover:border-[#5271FF]/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#5271FF]/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-[#5271FF]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">
                    <span className="text-[#5271FF]">{step.letter}</span> — {step.title}
                  </p>
                  <p className="text-[#9090A8] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
