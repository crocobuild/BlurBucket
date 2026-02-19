'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0E0E1A] to-[#0A0A0F]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Background glow — increased visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] sm:w-[900px] sm:h-[700px] bg-[#5271FF]/[0.10] rounded-full blur-[130px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] bg-[#6B87FF]/[0.06] rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-content mx-auto px-5 sm:px-8 md:px-10 lg:px-16 text-center pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#5271FF] text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.15em] uppercase mb-8 sm:mb-10"
        >
          A Live bootcamp for <span className="text-white">6-figure agency owners</span> to overcome burnout
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-[1.1] tracking-tight max-w-[900px] mx-auto"
        >
          Stop being your agency&apos;s bottleneck.
          <br />
          <span className="bg-gradient-to-r from-[#5271FF] to-[#6B87FF] bg-clip-text text-transparent">
            Start being the CEO.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-[#D8D8E8] leading-relaxed max-w-[600px] sm:max-w-[680px] mx-auto mt-10 sm:mt-12 px-2 sm:px-0"
        >
          A 4-week live bootcamp where you build the exact processes, accountability frameworks, and AI workflows your agency needs to operate without you.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 sm:mt-14"
        >
          <a
            href="#apply"
            className="group inline-flex items-center gap-2 sm:gap-2.5 bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-base sm:text-lg px-7 sm:px-10 py-3.5 sm:py-4 rounded-xl shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-250"
          >
            Apply Now for the Bootcamp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </motion.div>

        {/* Micro text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="mt-6 sm:mt-7"
        >
          <p className="text-[#9090A8] text-xs sm:text-sm">
            Join founders from agencies doing $200K–$750K/year.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
