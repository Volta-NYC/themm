import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#7b1628] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Image src="/logo.jpeg" alt="THEMM Creative Agency" width={60} height={77} className="object-contain opacity-90" />
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-pink-200 leading-loose mt-1">
            A Creative Media Agency<br />Based in New York City
          </p>
          <a
            href="https://www.instagram.com/themm.nyc/"
            target="_blank"
            rel="noreferrer"
            className="font-serif italic text-pink-100 hover:text-white transition-colors text-lg"
          >
            @themm.nyc
          </a>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-300 mb-2">Navigate</p>
          {[
            { label: "Home",      href: "/" },
            { label: "Our Story", href: "#story" },
            { label: "Services",  href: "#services" },
            { label: "Clients",   href: "#clients" },
            { label: "Book Now",  href: "#book" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="font-sans text-sm text-pink-100 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-300 mb-2">Get in Touch</p>
          <a href="mailto:hello@themmcreative.com" className="font-sans text-sm text-pink-100 hover:text-white transition-colors">
            hello@themmcreative.com
          </a>
          <p className="font-sans text-sm text-pink-100">New York City, NY</p>
          <a
            href="#book"
            className="mt-4 w-fit px-8 py-3 border border-pink-300 text-pink-100 font-sans text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#7b1628] transition-all duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>

      <div className="border-t border-[#a03050]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-pink-200">
            © {new Date().getFullYear()} THEMM Creative Agency. All rights reserved.
          </p>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-[10px] tracking-[0.15em] uppercase text-pink-300 hover:text-white transition-colors"
          >
            Website by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}
