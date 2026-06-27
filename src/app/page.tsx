"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

/* ─────────────────────────────────────────
   Scroll-fade hook
───────────────────────────────────────── */
function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}s`
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

/* ─────────────────────────────────────────
   Smooth scroll helper
───────────────────────────────────────── */
function goto(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
}

/* ─────────────────────────────────────────
   Marquee
───────────────────────────────────────── */
const TICKER =
  "CONTENT CREATION  ·  SOCIAL MEDIA STRATEGY  ·  BRAND CAMPAIGNS  ·  CREATIVE DIRECTION  ·  INFLUENCER PARTNERSHIPS  ·  MEDIA PRODUCTION  ·  "

function Marquee({ bg = "#7b1628", color = "#fbe8ec" }: { bg?: string; color?: string }) {
  return (
    <div className="overflow-hidden py-[14px]" style={{ backgroundColor: bg }}>
      <div className="marquee-track select-none">
        {[TICKER, TICKER].map((t, i) => (
          <span key={i} className="font-sans text-[10px] tracking-[0.35em] uppercase" style={{ color }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Editorial photo grid (placeholder tiles)
───────────────────────────────────────── */
const TILES = [
  { col: "col-span-1", row: "row-span-2", shade: "bg-[#f3d5dc]" },
  { col: "col-span-1", row: "row-span-1", shade: "bg-[#e8c0cc]" },
  { col: "col-span-1", row: "row-span-1", shade: "bg-[#efd0d9]" },
  { col: "col-span-2", row: "row-span-1", shade: "bg-[#f9e4ea]" },
  { col: "col-span-1", row: "row-span-1", shade: "bg-[#e0b4c0]" },
]

function PhotoGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[3px] h-[480px] md:h-[600px]">
      {TILES.map(({ col, row, shade }, i) => (
        <div key={i} className={`${col} ${row} ${shade} img-placeholder relative group overflow-hidden`}>
          <div className="absolute inset-0 bg-[#7b1628]/0 group-hover:bg-[#7b1628]/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────
   Stat pill
───────────────────────────────────────── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center px-6">
      <span className="font-serif italic text-5xl md:text-6xl text-[#7b1628]">{value}</span>
      <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#888]">{label}</span>
    </div>
  )
}

/* ─────────────────────────────────────────
   Service card
───────────────────────────────────────── */
function ServiceCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="service-card px-6 py-8 group cursor-default">
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7b1628] mb-5">{n}</p>
      <h3 className="font-serif italic text-2xl md:text-3xl text-[#1c1c1c] mb-4 leading-snug group-hover:text-[#7b1628] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-[#666] font-light">{body}</p>
      <div className="mt-6 h-px bg-[#7b1628] w-8 group-hover:w-full transition-all duration-500" />
    </div>
  )
}

/* ─────────────────────────────────────────
   Testimonial
───────────────────────────────────────── */
function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="bg-white border border-[#f0d0d8] p-8 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300">
      <span className="font-serif text-5xl text-[#e8c0cc] leading-none select-none">&ldquo;</span>
      <p className="font-serif italic text-lg md:text-xl text-[#1c1c1c] leading-relaxed -mt-3">{quote}</p>
      <div className="pt-4 border-t border-[#f0d0d8]">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#7b1628]">{name}</p>
        <p className="font-sans text-xs tracking-wider text-[#aaa] mt-1">{role}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Instagram grid tile
───────────────────────────────────────── */
const IG_SHADES = [
  "bg-[#f3d5dc]", "bg-[#ebc8d2]", "bg-[#f9e4ea]",
  "bg-[#e8c0cc]", "bg-[#f0cdd6]", "bg-[#e0b4c0]",
]

function InstagramGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-[3px]">
      {IG_SHADES.map((shade, i) => (
        <div key={i} className={`${shade} img-placeholder aspect-square relative group overflow-hidden cursor-pointer`}>
          <div className="absolute inset-0 bg-[#7b1628]/0 group-hover:bg-[#7b1628]/20 transition-colors duration-300 flex items-center justify-center">
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────
   FAQ accordion
───────────────────────────────────────── */
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-[#e8c8d0]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full py-5 flex justify-between items-start text-left gap-4 group"
      >
        <span className="font-serif italic text-lg md:text-xl text-[#1c1c1c] group-hover:text-[#7b1628] transition-colors">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full border border-[#7b1628] text-[#7b1628] flex items-center justify-center text-sm transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0" }}
      >
        <p className="font-sans text-sm leading-loose text-[#666] font-light pb-6 pr-10">{a}</p>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   PAGE
═══════════════════════════════════════════ */
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useFadeIn()
  const statsRef = useFadeIn(0.1)
  const servicesRef = useFadeIn()
  const clientsRef = useFadeIn()
  const igRef = useFadeIn()
  const faqRef = useFadeIn()
  const bookRef = useFadeIn()

  /* Parallax on hero text */
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.25}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════ */}
      <section className="relative bg-[#fbe8ec] min-h-[92vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Soft background blobs */}
        <div className="absolute top-[-120px] right-[-120px] w-80 h-80 rounded-full bg-[#f3c8d4] opacity-50 pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-64 h-64 rounded-full bg-[#ebbcc8] opacity-35 pointer-events-none" />
        <div className="absolute top-1/2 left-[-40px] w-40 h-40 rounded-full bg-[#f9dde4] opacity-40 pointer-events-none" />

        <div ref={heroRef}>
          <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#7b1628] mb-7">
            C.O.M &nbsp;·&nbsp; New York City
          </p>
          <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] text-[#7b1628] leading-[1.02] mb-8">
            <em>Your</em> Story,<br />
            <em>Told</em> Beautifully.
          </h1>
          <p className="font-sans text-sm md:text-[15px] font-light leading-relaxed text-[#5a2835] max-w-sm mx-auto mb-10 tracking-wide">
            A creative media agency built on authentic storytelling, bold visuals, and strategies that move your brand forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => goto("#book")}
              className="px-10 py-[14px] bg-[#7b1628] text-white font-sans text-[10px] tracking-[0.25em] uppercase hover:bg-[#5c1020] transition-colors duration-200"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => goto("#services")}
              className="px-10 py-[14px] border border-[#7b1628] text-[#7b1628] font-sans text-[10px] tracking-[0.25em] uppercase hover:bg-[#7b1628] hover:text-white transition-all duration-200"
            >
              Our Services
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-50">
          <span className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#7b1628]">Scroll</span>
          <div className="w-px h-10 bg-[#7b1628] animate-pulse" />
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════ */}
      <Marquee />

      {/* ══ PHOTO GRID ════════════════════════ */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <PhotoGrid />
      </section>

      {/* ══ OUR STORY ═════════════════════════ */}
      <section id="story" className="py-20 md:py-28 bg-[#fdf6f8]">
        <div ref={storyRef} className="fade-up max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7b1628] mb-5">Our Story</p>
            <h2 className="font-serif italic text-[clamp(2.4rem,5vw,4.5rem)] text-[#1c1c1c] leading-tight mb-8">
              Where Creativity<br />Meets Strategy.
            </h2>
            <p className="font-sans text-sm leading-[2.1] text-[#666] font-light mb-5">
              THEMM Creative Agency was born from a passion for storytelling and a belief that every brand deserves to be seen — boldly, authentically, and beautifully. Founded in New York City, we are a full-service creative media agency dedicated to helping businesses grow through compelling content, intentional strategy, and unforgettable campaigns.
            </p>
            <p className="font-sans text-sm leading-[2.1] text-[#666] font-light mb-10">
              We partner with brands at every stage — from emerging startups to established names — bringing the same care, creativity, and commitment to every project we take on. When you work with THEMM, your vision becomes our mission.
            </p>
            <button
              onClick={() => goto("#services")}
              className="hover-line font-sans text-[10px] tracking-[0.3em] uppercase text-[#7b1628]"
            >
              See What We Do →
            </button>
          </div>

          {/* Image with decorative accents */}
          <div className="relative">
            <div className="img-placeholder w-full h-[440px] md:h-[580px]" />
            {/* Maroon square accent */}
            <div className="absolute -bottom-7 -left-7 w-40 h-40 bg-[#7b1628] hidden md:block -z-[1]" />
            {/* Border square accent */}
            <div className="absolute -top-5 -right-5 w-24 h-24 border-2 border-[#7b1628] hidden md:block -z-[1]" />
            {/* Tag */}
            <div className="absolute bottom-6 right-6 bg-white px-4 py-3 shadow-sm">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#7b1628]">Est. NYC</p>
              <p className="font-serif italic text-lg text-[#1c1c1c] leading-none mt-1">THEMM</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════ */}
      <section className="bg-white py-16 md:py-20 border-y border-[#f0d0d8]">
        <div ref={statsRef} className="fade-up max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#f0d0d8]">
            <Stat value="50+" label="Brands Served" />
            <Stat value="3+"  label="Years in NYC" />
            <Stat value="100%" label="Dedicated" />
            <Stat value="∞"   label="Creative Vision" />
          </div>
        </div>
      </section>

      {/* ══ MARQUEE 2 ═════════════════════════ */}
      <Marquee bg="#fbe8ec" color="#7b1628" />

      {/* ══ SERVICES ══════════════════════════ */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div ref={servicesRef} className="fade-up max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7b1628] mb-5">What We Do</p>
              <h2 className="font-serif italic text-[clamp(2.4rem,5vw,4.5rem)] text-[#1c1c1c] leading-tight">
                Services Built<br />for Bold Brands.
              </h2>
            </div>
            <button
              onClick={() => goto("#book")}
              className="hover-line font-sans text-[10px] tracking-[0.3em] uppercase text-[#7b1628] self-start md:self-auto"
            >
              Get Started →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-[#e8c8d0]">
            <ServiceCard
              n="01"
              title="Content Creation"
              body="From concept to final cut — editorial-quality photo and video that captures your brand essence and stops the scroll."
            />
            <ServiceCard
              n="02"
              title="Social Media Strategy"
              body="Data-driven strategies that build community, drive real engagement, and grow your presence on Instagram, TikTok, and beyond."
            />
            <ServiceCard
              n="03"
              title="Brand Campaigns"
              body="End-to-end campaign management — creative direction, influencer casting, execution, and reporting. All built around your goals."
            />
            <ServiceCard
              n="04"
              title="Creative Direction"
              body="Moodboards, art direction, styling, and production design — every brand touchpoint cohesive, intentional, and unmistakably you."
            />
          </div>
        </div>
      </section>

      {/* ══ CLIENTS ═══════════════════════════ */}
      <section id="clients" className="py-20 md:py-28 bg-[#fdf6f8]">
        <div ref={clientsRef} className="fade-up max-w-7xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7b1628] mb-5">Our Clients</p>
          <h2 className="font-serif italic text-[clamp(2.4rem,5vw,4.5rem)] text-[#1c1c1c] leading-tight mb-4">
            Making Magic<br />is Inevitable&hellip;
          </h2>
          <p className="font-sans text-sm font-light text-[#888] mb-16 max-w-md">
            When you work alongside a team of multi-faceted creatives who care about your brand as much as you do.
          </p>

          {/* Client logo row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[3px] mb-16">
            {["Brand Partner", "Brand Partner", "Brand Partner", "Brand Partner"].map((l, i) => (
              <div key={i} className="img-placeholder h-28 flex items-center justify-center">
                <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#7b1628]/40">{l}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <Testimonial
              quote="Working with THEMM completely transformed our brand's online presence. The content was stunning and the strategy actually worked. Engagement tripled in 60 days."
              name="Client Name"
              role="Founder, Brand"
            />
            <Testimonial
              quote="Manisha and the team are the real deal. They understood our vision immediately and delivered content that felt true to who we are. We couldn't recommend them more."
              name="Client Name"
              role="CEO, Company"
            />
            <Testimonial
              quote="The attention to detail, the creative direction, the communication — everything was flawless. THEMM doesn't just create content, they build brands."
              name="Client Name"
              role="Marketing Director"
            />
          </div>

          {/* Bottom gallery strip */}
          <div className="grid grid-cols-4 gap-[3px]">
            {["bg-[#f3d5dc]", "bg-[#ebc8d2]", "bg-[#f9e4ea]", "bg-[#e8c0cc]"].map((s, i) => (
              <div key={i} className={`${s} img-placeholder h-44 md:h-60`} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM ═════════════════════════ */}
      <section className="py-20 md:py-24 bg-white">
        <div ref={igRef} className="fade-up max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7b1628] mb-4">Follow Along</p>
              <h2 className="font-serif italic text-[clamp(2rem,4vw,3.5rem)] text-[#1c1c1c] leading-tight">
                @themm.nyc
              </h2>
            </div>
            <a
              href="https://www.instagram.com/themm.nyc/"
              target="_blank"
              rel="noreferrer"
              className="hover-line font-sans text-[10px] tracking-[0.3em] uppercase text-[#7b1628] self-start md:self-auto"
            >
              View on Instagram →
            </a>
          </div>
          <InstagramGrid />
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════ */}
      <section className="py-20 md:py-28 bg-[#fdf6f8]">
        <div ref={faqRef} className="fade-up max-w-4xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7b1628] mb-5">FAQs</p>
          <h2 className="font-serif italic text-[clamp(2.2rem,4vw,3.8rem)] text-[#1c1c1c] leading-tight mb-12">
            You Have Questions,<br />We Have Answers.
          </h2>
          <FAQ
            q="How do I get started?"
            a="Start by filling out our inquiry form below. We'll reach out within 48 hours to schedule a discovery call and learn more about your brand, goals, and what kind of support you need."
          />
          <FAQ
            q="What types of brands do you work with?"
            a="We work with brands across fashion, beauty, lifestyle, hospitality, and more. Whether you're a startup looking to launch or an established brand ready to refresh, we'd love to connect."
          />
          <FAQ
            q="What does a typical project look like?"
            a="Every project is custom. We begin with a strategy session, move into creative direction and production, and close with delivery and reporting. Timelines and scope are agreed upon upfront."
          />
          <FAQ
            q="How much do your services cost?"
            a="Pricing is based on the scope, deliverables, and scale of your project. We offer flexible packages for brands at every stage. Reach out and we'll put together a custom proposal."
          />
          <FAQ
            q="Do you offer ongoing retainer services?"
            a="Yes! Many of our clients work with us on a monthly retainer for social media management, content creation, and ongoing strategy. Ask us about our retainer packages."
          />
          <div className="border-t border-[#e8c8d0]" />
        </div>
      </section>

      {/* ══ BOOK NOW ══════════════════════════ */}
      <section id="book" className="py-20 md:py-28 bg-[#7b1628]">
        <div ref={bookRef} className="fade-up max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#f3c8d4] mb-5">
              Let&apos;s Connect
            </p>
            <h2 className="font-serif italic text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-tight mb-6">
              Ready to Tell<br />Your Story?
            </h2>
            <p className="font-sans text-sm font-light text-pink-200 max-w-sm mx-auto leading-relaxed">
              Fill out the form below and we&apos;ll be in touch within 48 hours to schedule your complimentary discovery call.
            </p>
          </div>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {[
              { label: "First Name", type: "text", ph: "Your first name", span: "" },
              { label: "Last Name",  type: "text", ph: "Your last name",  span: "" },
              { label: "Email Address", type: "email", ph: "hello@yourbrand.com", span: "" },
              { label: "Brand / Company", type: "text", ph: "Your brand name", span: "" },
            ].map(({ label, type, ph, span }) => (
              <div key={label} className={`flex flex-col gap-2 ${span}`}>
                <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-200">{label}</label>
                <input
                  type={type}
                  placeholder={ph}
                  className="bg-transparent border-b border-pink-300/60 pb-3 text-white font-sans text-sm placeholder:text-pink-300/40 focus:outline-none focus:border-white transition-colors"
                />
              </div>
            ))}

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-200">Service of Interest</label>
              <select className="bg-transparent border-b border-pink-300/60 pb-3 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                <option value=""          className="bg-[#7b1628] text-white">Select a service…</option>
                <option value="content"   className="bg-[#7b1628] text-white">Content Creation</option>
                <option value="social"    className="bg-[#7b1628] text-white">Social Media Strategy</option>
                <option value="campaign"  className="bg-[#7b1628] text-white">Brand Campaigns</option>
                <option value="creative"  className="bg-[#7b1628] text-white">Creative Direction</option>
                <option value="all"       className="bg-[#7b1628] text-white">Full Service</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-200">Tell Us About Your Brand</label>
              <textarea
                rows={4}
                placeholder="Share your vision, goals, and what you're hoping to achieve…"
                className="bg-transparent border-b border-pink-300/60 pb-3 text-white font-sans text-sm placeholder:text-pink-300/40 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>

            <div className="md:col-span-2 flex justify-center pt-2">
              <button
                type="submit"
                className="px-16 py-4 bg-[#fbe8ec] text-[#7b1628] font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-white transition-colors duration-200"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          {/* Contact row */}
          <div className="mt-16 pt-10 border-t border-[#a03050] flex flex-col md:flex-row items-center justify-center gap-10 text-center">
            {[
              {
                label: "Instagram",
                value: "@themm.nyc",
                href: "https://www.instagram.com/themm.nyc/",
              },
              {
                label: "Email",
                value: "hello@themmcreative.com",
                href: "mailto:hello@themmcreative.com",
              },
              {
                label: "Based In",
                value: "New York City, NY",
                href: null,
              },
            ].map(({ label, value, href }, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-pink-300/80">{label}</p>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                    className="font-serif italic text-xl text-pink-100 hover:text-white transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="font-serif italic text-xl text-pink-100">{value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
