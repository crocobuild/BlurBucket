'use client'

import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { ArrowRight, X, Check } from 'lucide-react'

const comparisons = [
  {
    before: 'You are the bottleneck for every decision',
    after: 'Your team owns processes end to end',
  },
  {
    before: 'SOPs live in your head or in outdated Loom videos',
    after: 'Documented, AI-ready SOPs your team actually uses',
  },
  {
    before: 'No way to measure what\'s working',
    after: 'OKR dashboard with key results for every process',
  },
  {
    before: '"Taking a day off" means catching up for two',
    after: 'Your business runs the same whether you\'re there or not',
  },
  {
    before: 'Revenue growth = more hours from you',
    after: 'Revenue growth = better systems, not more of your time',
  },
]

export default function TransformationSection() {
  return (
    <section className="bg-[#10101A] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        {/* Dream Outcome */}
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-12">
            What If Your Business{' '}
            <span className="text-[#5271FF]">Actually Ran Without You?</span>
          </h2>
        </FadeUp>

        {/* Before / After Cards */}
        <div className="hidden md:block">
          <StaggerContainer className="space-y-0">
            {/* Header Row */}
            <div className="grid grid-cols-[1fr_48px_1fr] gap-0 mb-3">
              <div className="bg-[#181828] rounded-t-xl px-6 py-3">
                <span className="text-[#F87171] text-sm font-bold uppercase tracking-wider">Before BlurOps</span>
              </div>
              <div />
              <div className="bg-[#181828] rounded-t-xl px-6 py-3">
                <span className="text-[#34D399] text-sm font-bold uppercase tracking-wider">After BlurOps</span>
              </div>
            </div>
            {comparisons.map((item, i) => (
              <StaggerItem key={i}>
                <div className="grid grid-cols-[1fr_48px_1fr] gap-0 items-stretch">
                  <div className={`bg-[#0A0A0F] border border-[#1C1C32] px-6 py-4 flex items-center gap-3 ${i === comparisons.length - 1 ? 'rounded-bl-xl' : ''}`}>
                    <X size={16} className="text-[#F87171] flex-shrink-0" />
                    <span className="text-[#D8D8E8] text-[15px] sm:text-[17px]">{item.before}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight size={18} className="text-[#5271FF]" />
                  </div>
                  <div className={`bg-[#0A0A0F] border border-[#1C1C32] px-6 py-4 flex items-center gap-3 ${i === comparisons.length - 1 ? 'rounded-br-xl' : ''}`}>
                    <Check size={16} className="text-[#34D399] flex-shrink-0" />
                    <span className="text-[#D8D8E8] text-[15px] sm:text-[17px]">{item.after}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-4">
          <StaggerContainer className="space-y-4">
            {comparisons.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#0A0A0F] border border-[#1C1C32] rounded-xl overflow-hidden">
                  <div className="border-l-[3px] border-[#F87171] px-5 py-3.5 flex items-start gap-2.5">
                    <X size={15} className="text-[#F87171] flex-shrink-0 mt-0.5" />
                    <span className="text-[#D8D8E8] text-[15px]">{item.before}</span>
                  </div>
                  <div className="border-l-[3px] border-[#34D399] px-5 py-3.5 flex items-start gap-2.5 bg-[#34D399]/[0.03]">
                    <Check size={15} className="text-[#34D399] flex-shrink-0 mt-0.5" />
                    <span className="text-[#D8D8E8] text-[15px]">{item.after}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom note */}
        <FadeUp delay={0.2}>
          <p className="text-center text-[#D8D8E8] text-lg sm:text-xl mt-12 max-w-[700px] mx-auto leading-relaxed">
            That&apos;s not a fantasy. That&apos;s a{' '}
            <span className="text-white font-semibold">documented, structured, measurable outcome</span>.
            <br />
            Built in just 4 weeks.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
