'use client'

import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Check, Shield, ArrowRight, X } from 'lucide-react'

const valueItems = [
  { name: '4 weeks of live bootcamp sessions with expert facilitation', value: '$4,000' },
  { name: 'Founder Vision Exercise + Current vs. Desired State Map', value: '$500' },
{ name: '90-Day OKR Setting with Key Results', value: '$750' },
  { name: 'OKR Dashboard (yours permanently)', value: '$1,500' },
  { name: 'Full SOP Library built with AI-first methodology', value: '$3,000' },
  { name: 'Live AI Demo — watch AI run your SOP steps', value: '$1,000' },
{ name: 'Key Results + Scorecards for every process', value: '$1,000' },
{ name: 'Claude AI Skills + Pre-built Frameworks', value: '$1,500' },
  { name: 'Founder Clarity Dashboard', value: '$1,000' },
  { name: 'AI-Powered SOP Writing Tool', value: '$1,000' },
]

const competitors = [
  { name: 'High-Level Mastermind', price: '$10K–$25K/year', issue: 'Great conversations, no systems built' },
  { name: 'Online Business Manager', price: '$3K–$8K/month', issue: 'Manages chaos without infrastructure' },
  { name: 'Custom SOP Consultant', price: '$5K–$15K/project', issue: 'Built for you, not with you' },
  { name: 'EOS Implementation', price: '$36K+/year', issue: 'Too long, too expensive, not AI-ready' },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#10101A] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <FadeUp>
          <p className="text-[#5271FF] text-sm font-semibold tracking-[0.15em] uppercase text-center mb-4">
            INVESTMENT
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-14">
            Everything You Get Inside BlurOps
          </h2>
        </FadeUp>

        {/* Value Stack */}
        <FadeUp delay={0.1}>
          <div className="bg-[#0A0A0F] border border-[#1C1C32] rounded-2xl overflow-hidden mb-10">
            {valueItems.map((item, i) => (
              <div
                key={i}
                className={`flex items-center justify-between px-5 sm:px-7 py-3.5 ${
                  i % 2 === 0 ? 'bg-[#0A0A0F]' : 'bg-[#10101A]'
                } ${i < valueItems.length - 1 ? 'border-b border-[#1C1C32]' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <Check size={15} className="text-[#5271FF] flex-shrink-0" />
                  <span className="text-[#D8D8E8] text-sm sm:text-[15px]">{item.name}</span>
                </div>
                <span className="text-[#9090A8] text-sm font-medium ml-4 whitespace-nowrap">{item.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 sm:px-7 py-4 bg-[#5271FF]/[0.06] border-t border-[#5271FF]/20">
              <span className="text-white font-bold text-base sm:text-lg">Total Value</span>
              <span className="text-[#5271FF] font-extrabold text-xl sm:text-2xl">$17,500</span>
            </div>
          </div>
        </FadeUp>

        {/* Pricing Card */}
        <FadeUp delay={0.15}>
          <div className="max-w-[540px] mx-auto bg-[#0A0A0F] border-2 border-[#5271FF] rounded-2xl p-8 sm:p-10 text-center shadow-[0_0_60px_rgba(82,113,255,0.15)] mb-14">
            <p className="text-[#9090A8] text-sm mb-1">Your investment today</p>
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-white text-5xl sm:text-6xl font-extrabold">$1,599</span>
            </div>
            <p className="text-[#9090A8] text-sm mb-6">
              Introductory price — increases to $3,499 next batch
            </p>
            <a
              href="#apply"
              className="group w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] hover:-translate-y-0.5 transition-all duration-250"
            >
              Apply Now — Risk Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-1.5 mt-4 text-[#9090A8] text-sm">
              <Shield size={14} className="text-[#5271FF]" />
              14-day money-back guarantee
            </div>
          </div>
        </FadeUp>

        {/* Competitor Comparison */}
        <FadeUp>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            See How BlurOps Compares
          </h3>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {competitors.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#0A0A0F] border border-[#1C1C32] rounded-xl p-5 sm:p-6 hover:border-[#2A2A48] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <X size={15} className="text-[#F87171]" />
                  <h4 className="text-white text-base font-semibold">{item.name}</h4>
                </div>
                <p className="text-[#F87171] text-sm font-medium line-through mb-1">{item.price}</p>
                <p className="text-[#9090A8] text-sm">{item.issue}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ROI Math */}
        <FadeUp>
          <div className="bg-[#5271FF]/[0.05] border border-[#5271FF]/20 rounded-2xl p-6 sm:p-8 lg:p-10 text-center mb-14">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-5">The Math is Straightforward</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[640px] mx-auto mb-6">
              <div>
                <p className="text-[#5271FF] text-3xl sm:text-4xl font-extrabold">$52K+</p>
                <p className="text-[#D8D8E8] text-sm mt-1">in recovered founder time per year</p>
              </div>
              <div>
                <p className="text-[#34D399] text-3xl sm:text-4xl font-extrabold">$30K–$100K+</p>
                <p className="text-[#D8D8E8] text-sm mt-1">in scalable revenue unlocked</p>
              </div>
            </div>
            <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed max-w-[560px] mx-auto">
              <span className="text-white font-semibold">$1,599</span> to recover $50K+ in founder time and
              unlock $30K–$100K+ in scalable revenue.
              That&apos;s the highest-ROI investment you&apos;ll make this year.
            </p>
          </div>
        </FadeUp>

        {/* Guarantee */}
        <FadeUp>
          <div className="bg-[#5271FF]/[0.04] border border-[#5271FF]/15 rounded-2xl p-6 sm:p-8 text-center max-w-[700px] mx-auto">
            <Shield size={32} className="text-[#5271FF] mx-auto mb-4" />
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
              The BlurOps 14-Day Guarantee
            </h3>
            <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] leading-relaxed">
              Go through the program, build the systems, and if you don&apos;t feel like it was worth every
              cent in 2 weeks — you get a full refund.
              <br /><br />
              No hoops. No awkward conversations.
              <br />
              14 days. Full refund. Zero risk to you.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
