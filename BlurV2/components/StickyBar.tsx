'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield } from 'lucide-react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      setVisible(scrollPercent > 0.15 && scrollPercent < 0.95)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: Bottom bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-[#1C1C32] px-4 py-3"
          >
            <a
              href="#apply"
              className="block w-full bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-base text-center py-3.5 rounded-lg shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] transition-all duration-250"
            >
              Apply Now
            </a>
            <p className="text-[#9090A8] text-[11px] text-center mt-1.5 flex items-center justify-center gap-1">
              <Shield size={10} className="text-[#5271FF]" />
              $1,599 · 14-Day Guarantee
            </p>
          </motion.div>

          {/* Desktop: Top bar (below nav) */}
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-[72px] left-0 right-0 z-40 hidden md:block bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1C1C32]"
          >
            <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between py-2.5">
              <p className="text-[#D8D8E8] text-sm">
                <span className="text-white font-semibold">BlurOps</span> — Remove yourself as the bottleneck in 4 weeks
              </p>
              <a
                href="#apply"
                className="bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white font-semibold text-sm px-5 py-2 rounded-lg shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] transition-all duration-250 hover:-translate-y-0.5"
              >
                Apply Now — 15 Spots Left
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
