import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#7B1628] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.jpeg"
            alt="THEMM Creative Agency"
            width={64}
            height={82}
            className="object-contain opacity-90"
          />
          <p className="font-sans text-xs tracking-[0.12em] uppercase text-pink-200 leading-relaxed mt-2">
            A Creative Media Agency<br />Based in New York City
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-pink-300 mb-2">Navigate</p>
          {[
            { label: "Home", href: "/" },
            { label: "Our Story", href: "#story" },
            { label: "Services", href: "#services" },
            { label: "Clients", href: "#clients" },
            { label: "Book Now", href: "#book" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-pink-100 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-pink-300 mb-2">Connect</p>
          <a
            href="https://www.instagram.com/themm.nyc/"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-sm text-pink-100 hover:text-white transition-colors"
          >
            @themm.nyc
          </a>
          <a
            href="mailto:hello@themmcreative.com"
            className="font-sans text-sm text-pink-100 hover:text-white transition-colors"
          >
            hello@themmcreative.com
          </a>
          <p className="font-sans text-sm text-pink-100">New York City, NY</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#A03050]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans text-xs text-pink-200 tracking-widest uppercase">
            © {new Date().getFullYear()} THEMM Creative Agency. All rights reserved.
          </p>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="font-sans text-xs text-pink-300 hover:text-white transition-colors tracking-widest uppercase"
          >
            Website by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}
