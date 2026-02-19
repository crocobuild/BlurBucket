'use client'

import { FadeUp, StaggerContainer, StaggerItem } from './AnimatedSection'
import { Clock, DollarSign, Heart, Building } from 'lucide-react'

const painQuotes = [
  { quote: "Burnout hit me real bad... my brain's cooked.", author: '' },
  { quote: "I run an agency doing around a quarter million a year... however I'm becoming burnt out and it's unfulfilling.", author: '' },
  { quote: "I am the support team, the dev team, and the sales team all at once. I am the bottleneck.", author: '' },
  { quote: "I shut down my agency because I burnt out 5 times in one year, even though we'd made more money and had more staff than ever before.", author: 'Chris Smith' },
  { quote: "I was so stressed I had a severe shingles flare up, gained 15lbs, and couldn't sleep.", author: 'Cara Chace' },
  { quote: "My breaking point was an eight-hour panic attack that ended with me on the phone to A&E, crying and shaking.", author: 'Jamie Love' },
  { quote: "After dealing with customers, employees, and the never ending list of BS, I find myself less and less interested in what I do.", author: '' },
  { quote: "Always feeling overwhelmed. Loneliness. Lack of sleep. Not having a structured day.", author: '' },
]

const costItems = [
  {
    icon: Clock,
    iconColor: 'text-[#F59E0B]',
    iconBg: 'bg-[#F59E0B]/10',
    title: 'Your Time',
    description: <>You&apos;re spending <span className="font-semibold text-white">15–25 hours</span> per week on tasks that should be handled by your team or automated entirely. That&apos;s over <span className="font-semibold text-white">1000+ hours/year</span>.</>,
  },
  {
    icon: DollarSign,
    iconColor: 'text-[#10B981]',
    iconBg: 'bg-[#10B981]/10',
    title: 'Your Revenue',
    description: <>You&apos;re doing <span className="font-semibold text-white">$25/hr</span> work when your time is worth <span className="font-semibold text-white">$500/hr</span>. That gap is costing you <span className="font-semibold text-white">six figures</span> a year.</>,
  },
  {
    icon: Heart,
    iconColor: 'text-[#F87171]',
    iconBg: 'bg-[#F87171]/10',
    title: 'Your Health',
    description: <><span className="font-semibold text-white">69.6%</span> of people in agencies report burnout. <span className="font-semibold text-white">85%</span> believe it&apos;s getting worse. Panic Attack. Lost Time. Broken Sleep.</>,
  },
  {
    icon: Building,
    iconColor: 'text-[#A78BFA]',
    iconBg: 'bg-[#A78BFA]/10',
    title: 'Your Business Value',
    description: <>If your business breaks the moment you step away, you don&apos;t own a business — you own a <span className="font-semibold text-white">job with extra stress</span>.</>,
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-[#0A0A0F] py-16 sm:py-24">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Heading */}
        <FadeUp>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-white max-w-[800px] mx-auto text-center mb-4">
            <span className="block">You Built This Business to Be Free.</span>
            <span className="block text-[#5271FF] mt-6">But you&apos;re stuck working 70+ hour weeks</span>
          </h2>
          <p className="text-[#9090A8] text-center text-base sm:text-lg max-w-[620px] mx-auto mb-12">
            You are not alone. Your problems are real.<br />Hear it from founders in your exact position.
          </p>
        </FadeUp>

        {/* Pain Quotes — horizontal marquee */}
        <div className="overflow-hidden mb-16 -mx-6 md:-mx-10 lg:-mx-16">
          <div className="animate-marquee flex items-stretch">
            {[0, 1].map((copyIdx) => (
              <div key={copyIdx} className="flex items-stretch gap-5 flex-none pr-5">
                {painQuotes.map((item, i) => (
                  <div
                    key={i}
                    className="flex-none w-[240px] sm:w-[300px] lg:w-[380px] bg-[#5271FF]/[0.04] border border-[#5271FF]/25 rounded-2xl p-5 sm:p-6 hover:bg-[#5271FF]/[0.07] hover:border-[#5271FF]/40 transition-all duration-300 flex flex-col"
                  >
                    <p className="text-[#D8D8E8] text-[15px] sm:text-[17px] italic leading-relaxed flex-1">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    {item.author && (
                      <p className="text-[#9090A8] text-sm font-semibold mt-3">— {item.author}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-16" />

        {/* Cost of Inaction */}
        <FadeUp>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-3">
            The Cost of Staying Stuck
          </h3>
          <p className="text-[#9090A8] text-center text-base sm:text-lg max-w-[600px] mx-auto mb-10">
            Here&apos;s what staying in this pattern actually costs you. Not in theory. In real numbers.
          </p>
        </FadeUp>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {costItems.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#10101A] border border-[#1C1C32] rounded-xl p-5 sm:p-6 hover:border-[#2A2A48] transition-all duration-250 h-full">
                  <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center mb-4`}>
                    <item.icon size={20} className={item.iconColor} />
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-[#D8D8E8] text-[14px] sm:text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="text-center mt-14">
            <a
              href="#apply"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-xl shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] hover:-translate-y-0.5 transition-all duration-250"
            >
              Apply for the Next Cohort
            </a>
            <p className="text-[#9090A8] text-sm mt-4">
              Application takes 2 minutes. We&apos;ll confirm fit within 24 hours.
            </p>
            <p className="text-[#606080] text-xs mt-1">
              14-day money-back guarantee — you either build the systems or you pay nothing.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
