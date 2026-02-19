'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 69.6, suffix: '%', label: 'Worldwide burnout rate in marketing agencies', source: 'Forecast.app' },
  { value: 90, suffix: '%', label: 'Of agency owners under 55 sell due to burnout', source: 'IA Magazine' },
  { value: 36, suffix: '%', label: 'Say their agency "runs like a well-oiled machine"', source: '4As/PCI' },
  { value: 5, suffix: '', prefix: '1 in ', label: 'Small agency owners don\'t pay themselves a regular salary', source: 'SAGA Q4 2024' },
]

function AnimatedStat({ value, suffix, prefix, label, source, delay }: {
  value: number; suffix: string; prefix?: string; label: string; source: string; delay: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#10101A] border border-[#1C1C32] rounded-xl p-6 sm:p-8 text-center hover:border-[#2A2A48] transition-colors duration-250"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F87171] leading-tight mb-3">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-[#D8D8E8] text-sm sm:text-[15px] leading-snug mb-2">{label}</p>
      <p className="text-[#606080] text-xs italic">{source}</p>
    </motion.div>
  )
}

export default function TrustBar() {
  return (
    <section className="bg-[#10101A] py-12 sm:py-16 border-y border-[#1C1C32]">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-8 sm:mb-10">
          You are <span className="text-[#F87171]">not</span> alone
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
