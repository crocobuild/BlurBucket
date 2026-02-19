'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'How It Works', href: '#framework' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0F]/90 backdrop-blur-xl shadow-[0_1px_0_rgba(28,28,50,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[72px] md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5271FF] to-[#6B87FF] flex items-center justify-center">
            <span className="text-white font-extrabold text-sm">B</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Blur<span className="text-[#5271FF]">Ops</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#9090A8] hover:text-white text-[15px] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] transition-all duration-250 hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1C1C32] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#D8D8E8] hover:text-white text-lg font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#apply"
                onClick={() => setMobileOpen(false)}
                className="bg-gradient-to-r from-[#5271FF] to-[#6B87FF] text-white text-center font-semibold px-6 py-3 rounded-lg mt-2 shadow-[0_0_55px_rgba(82,113,255,0.5),0_0_20px_rgba(82,113,255,0.3)] hover:shadow-[0_0_80px_rgba(82,113,255,0.7),0_0_30px_rgba(82,113,255,0.4)] transition-all duration-250"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
