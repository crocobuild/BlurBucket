'use client'

import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Quote } from 'lucide-react'

const founderQuotes = [
  {
    quote: "I shut down my agency because I burnt out 5 times in one year, even though we'd made more money and had more staff than ever before.",
    name: 'Chris Smith',
    title: 'Agency Founder',
  },
  {
    quote: "Every mistake traced back to a lack of deliberate structure.",
    name: 'Damian Papworth',
    title: 'Founder, Ocean Feather ($500K revenue)',
  },
  {
    quote: "I was so stressed I had a severe shingles flare up, gained 15lbs, and couldn't sleep.",
    name: 'Cara Chace',
    title: 'Agency Owner',
  },
  {
    quote: "My breaking point was an eight-hour panic attack that ended with me on the phone to A&E, crying and shaking.",
    name: 'Jamie Love',
    title: 'Agency Owner',
  },
]

const testimonials = [
  {
    quote: "Before BlurOps, I was working 55-hour weeks and my team couldn't make a single decision without pinging me first. After four weeks, we had documented SOPs for every core process, an OKR dashboard I actually check every Monday, and AI handling our client onboarding steps. I cut 18 hours off my weekly workload in the first month.",
    name: 'Marketing Agency Founder',
    detail: '$300K–$400K revenue · 4-5 person team',
  },
  {
    quote: "I tried EOS. I tried hiring an OBM. I tried building systems myself on weekends. Nothing stuck because I was always the one holding it all together. BlurOps was different — we built everything live, using my actual processes, and now my team runs the delivery side without me. Last month I took a full week off for the first time in four years.",
    name: 'Web Development Agency Founder',
    detail: '$500K–$600K revenue · 7-8 person team',
  },
  {
    quote: "I was the classic case — doing everything, documenting nothing. After BlurOps, I have 5 core processes documented with AI running the repeatable parts. My newest hire onboarded in 3 days instead of 3 weeks. The framework actually works.",
    name: 'SEO Consultancy Founder',
    detail: '$200K–$250K revenue · 3 person team',
  },
]

export default function SocialProofSection() {
  return (
    <section className="bg-[#0A0A0F] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white text-center leading-tight mb-4">
            This Isn&apos;t a You Problem.{' '}
            <span className="text-[#5271FF]">It&apos;s an Industry Problem.</span>
          </h2>
          <p className="text-[#9090A8] text-center text-base sm:text-lg max-w-[600px] mx-auto mb-14">
            Real words from founders who lived it.
          </p>
        </FadeUp>

        {/* Founder Quotes Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
          {founderQuotes.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#10101A] border border-[#1C1C32] rounded-xl p-6 sm:p-7 hover:border-[#2A2A48] transition-colors h-full flex flex-col">
                <Quote size={28} className="text-[#5271FF] opacity-25 mb-3" />
                <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] italic leading-relaxed flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-[#1C1C32]">
                  <p className="text-white text-sm font-semibold">{item.name}</p>
                  <p className="text-[#9090A8] text-xs">{item.title}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Testimonials */}
        <FadeUp>
          <p className="text-[#5271FF] text-sm font-semibold tracking-[0.15em] uppercase text-center mb-8">
            RESULTS FROM <span className="text-white">AGENCY OWNERS</span> LIKE YOU
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-5">
          {testimonials.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-[#10101A] border border-[#5271FF]/30 rounded-xl p-6 sm:p-8 shadow-[0_0_30px_rgba(82,113,255,0.12),0_0_60px_rgba(82,113,255,0.06)] hover:shadow-[0_0_40px_rgba(82,113,255,0.18),0_0_80px_rgba(82,113,255,0.1)] transition-shadow">
                <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] italic leading-relaxed mb-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5271FF]/15 flex items-center justify-center">
                    <span className="text-[#5271FF] text-sm font-bold">{item.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.name}</p>
                    <p className="text-[#9090A8] text-xs">{item.detail}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
