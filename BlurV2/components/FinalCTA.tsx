'use client'

import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { ArrowRight, Shield, Users, FileCheck, CheckCircle, Mail, Rocket } from 'lucide-react'

const steps = [
  { icon: FileCheck, label: 'Quick Application', description: '2 minutes. Tell us your agency details.' },
  { icon: Mail, label: 'Fit Confirmation', description: 'Within 24 hours. We review every application.' },
  { icon: CheckCircle, label: 'Secure Your Spot', description: '$2,997 or 3 payments. Guarantee starts day one.' },
  { icon: Users, label: 'Pre-Bootcamp Prep', description: 'Brief worksheet. No fluff. Be ready for day one.' },
  { icon: Rocket, label: 'Week 1 Begins', description: 'Show up. Build your systems. Transform your business.' },
]

export default function FinalCTA() {
  return (
    <section id="apply" className="relative bg-gradient-to-b from-[#10101A] to-[#0A0A0F] py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#5271FF]/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white text-center leading-tight max-w-[800px] mx-auto mb-6">
            Four Weeks From Now, Your Business Looks{' '}
            <span className="text-[#5271FF]">Completely Different.</span>
            <br />Or Nothing Changes.
          </h2>
          <p className="text-[#D8D8E8] text-base sm:text-lg text-center max-w-[640px] mx-auto mb-10 leading-relaxed">
            The only question left is whether you keep paying the bottleneck tax — in time, in health,
            in revenue — or you spend 4 weeks building the infrastructure that ends it for good.
          </p>
        </FadeUp>

        {/* Final testimonial */}
        <FadeUp delay={0.1}>
          <div className="bg-[#10101A] border border-[#1C1C32] border-l-[3px] border-l-[#5271FF] rounded-xl p-6 sm:p-8 max-w-[700px] mx-auto mb-12">
            <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] italic leading-relaxed">
              &ldquo;Before BlurOps, I was seriously considering shutting down my agency. Not because it
              wasn&apos;t profitable — because I physically and mentally couldn&apos;t keep going. Four weeks later,
              I have systems I should have built three years ago, a team that knows exactly what to do
              without me in the room, and AI handling the repeatable tasks I used to lose weekends to.
              For the first time since I started this business, I feel like an actual business owner — not a hostage.&rdquo;
            </p>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.15}>
          <div className="text-center mb-14">
            <a
              href="#apply"
              className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-lg sm:text-xl px-12 py-5 rounded-xl shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] hover:-translate-y-0.5 transition-all duration-250"
            >
              Apply Now — Start Building Your Systems
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[#D8D8E8] text-sm sm:text-base mt-4">
              $1,599 <span className="text-[#9090A8]">· One-time payment</span>
            </p>
            <p className="text-[#9090A8] text-sm mt-1 flex items-center justify-center gap-1.5">
              <Shield size={14} className="text-[#5271FF]" />
              14-day money-back guarantee. You either see the value or you pay nothing.
            </p>
            <p className="text-[#606080] text-xs mt-3">
              Each cohort is limited to 15 founders. When spots fill, the next cohort opens in 4–6 weeks.
            </p>
          </div>
        </FadeUp>

        {/* Application Steps */}
        <FadeUp delay={0.2}>
          <h3 className="text-white text-xl sm:text-2xl font-bold text-center mb-8">
            Here&apos;s What Happens When You Click Apply
          </h3>
        </FadeUp>

        {/* Desktop: Horizontal timeline */}
        <StaggerContainer className="hidden md:flex items-start justify-between max-w-[900px] mx-auto mb-4">
          {steps.map((step, i) => (
            <StaggerItem key={i} className="flex flex-col items-center text-center flex-1 relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-[1px] bg-[#1C1C32]" />
              )}
              <div className="w-10 h-10 rounded-full bg-[#5271FF] flex items-center justify-center mb-3 relative z-10">
                <span className="text-white text-sm font-bold">{i + 1}</span>
              </div>
              <p className="text-white text-sm font-semibold mb-1">{step.label}</p>
              <p className="text-[#9090A8] text-xs max-w-[150px] leading-relaxed">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Mobile: Vertical timeline */}
        <StaggerContainer className="md:hidden space-y-5 max-w-[400px] mx-auto">
          {steps.map((step, i) => (
            <StaggerItem key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#5271FF] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[1px] h-8 bg-[#1C1C32] mt-1" />
                )}
              </div>
              <div className="pt-1">
                <p className="text-white text-sm font-semibold">{step.label}</p>
                <p className="text-[#9090A8] text-xs">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
