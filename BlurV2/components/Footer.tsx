'use client'

export default function Footer() {
  return (
    <footer className="bg-[#08080C] border-t border-[#1C1C32] py-10 sm:py-12">
      <div className="max-w-content mx-auto px-6 md:px-10 lg:px-16 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5271FF] to-[#6B87FF] flex items-center justify-center">
            <span className="text-white font-extrabold text-xs">B</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Blur<span className="text-[#5271FF]">Ops</span>
          </span>
        </div>

        <p className="text-[#606080] text-sm mb-6">
          Helping six-figure agency founders build systems that scale without them.
        </p>

        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="#" className="text-[#9090A8] hover:text-white text-sm transition-colors">Terms</a>
          <a href="#" className="text-[#9090A8] hover:text-white text-sm transition-colors">Privacy</a>
          <a href="#" className="text-[#9090A8] hover:text-white text-sm transition-colors">Contact</a>
        </div>

        <p className="text-[#606080] text-xs">
          &copy; {new Date().getFullYear()} BlurOps. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
