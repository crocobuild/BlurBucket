'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import TransformationSection from '@/components/TransformationSection'
import FrameworkSection from '@/components/FrameworkSection'
import CurriculumSection from '@/components/CurriculumSection'
import SocialProofSection from '@/components/SocialProofSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F]">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <TransformationSection />
      <FrameworkSection />
      <CurriculumSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyBar />
    </main>
  )
}
