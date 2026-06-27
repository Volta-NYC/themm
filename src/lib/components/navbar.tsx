"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const NAV = [
  { label: "Home",      href: "/" },
  { label: "Our Story", href: "#story" },
  { label: "Services",  href: "#services" },
  { label: "Clients",   href: "#clients" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  function goto(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) {
    if (href.startsWith("#")) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#f0d0d8]"
            : "bg-[#fbe8ec]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <Image
              src="/logo.jpeg"
              alt="THEMM Creative Agency"
              width={52}
              height={68}
              className="object-contain group-hover:opacity-80 transition-opacity duration-200"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV.map(({ label, href }) =>
              href.startsWith("#") ? (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => goto(e, href)}
                  className="hover-line font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c1c1c] hover:text-[#7b1628] transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={label}
                  href={href}
                  className="hover-line font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c1c1c] hover:text-[#7b1628] transition-colors"
                >
                  {label}
                </Link>
              )
            )}
            <button
              onClick={(e) => goto(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#book")}
              className="ml-2 px-7 py-[11px] bg-[#7b1628] text-white font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-[#5c1020] transition-colors duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[6px] p-1"
          >
            <span className={`block w-[22px] h-px bg-[#7b1628] origin-center transition-transform duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#7b1628] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-px bg-[#7b1628] origin-center transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#fbe8ec] ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-6 pb-7 pt-2 flex flex-col gap-5">
            {NAV.map(({ label, href }) =>
              href.startsWith("#") ? (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => goto(e, href)}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c1c1c] hover:text-[#7b1628] transition-colors"
                >
                  {label}
                </a>
              ) : (
                <Link key={label} href={href}
                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#1c1c1c] hover:text-[#7b1628] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              )
            )}
            <button
              onClick={(e) => goto(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#book")}
              className="w-fit px-8 py-3 bg-[#7b1628] text-white font-sans text-[10px] tracking-[0.2em] uppercase"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed nav */}
      <div className="h-[76px]" />
    </>
  )
}
