"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#clients" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm" : "bg-[#FBE8EC]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="THEMM Creative Agency"
              width={56}
              height={72}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="hover-underline font-sans text-xs tracking-[0.15em] uppercase text-[#1C1C1C] hover:text-[#7B1628] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => handleNav(e, "#book")}
              className="ml-4 px-6 py-2.5 bg-[#7B1628] text-white font-sans text-xs tracking-[0.15em] uppercase hover:bg-[#5C1020] transition-colors duration-200"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-[#7B1628] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#7B1628] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-[#7B1628] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          } bg-[#FBE8EC]`}
        >
          <div className="px-6 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="font-sans text-xs tracking-[0.15em] uppercase text-[#1C1C1C] hover:text-[#7B1628] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={(e) => handleNav(e, "#book")}
              className="w-fit px-6 py-2.5 bg-[#7B1628] text-white font-sans text-xs tracking-[0.15em] uppercase"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[82px]" />
    </>
  )
}
