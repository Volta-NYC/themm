"use client"

import { useEffect, useRef, useState } from "react"

/* ─── Scroll-fade hook ─── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          obs.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ─── Marquee banner ─── */
const MARQUEE_TEXT =
  "CONTENT CREATION  ·  SOCIAL MEDIA STRATEGY  ·  BRAND CAMPAIGNS  ·  CREATIVE DIRECTION  ·  INFLUENCER PARTNERSHIPS  ·  MEDIA PRODUCTION  ·  "

function MarqueeBanner({ bg = "#7B1628", color = "#FBE8EC" }: { bg?: string; color?: string }) {
  const text = MARQUEE_TEXT.repeat(4)
  return (
    <div className="overflow-hidden py-4" style={{ backgroundColor: bg }}>
      <div className="marquee-track whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <span key={i} className="font-sans text-xs tracking-[0.3em] uppercase" style={{ color }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Photo grid with blush placeholders ─── */
function PhotoGrid() {
  const cells = [
    { span: "row-span-2", shade: "bg-[#F3D5DC]" },
    { span: "row-span-1", shade: "bg-[#E8C0CC]" },
    { span: "row-span-1", shade: "bg-[#F9E4EA]" },
    { span: "row-span-2", shade: "bg-[#EBC8D2]" },
    { span: "row-span-1", shade: "bg-[#F3D5DC]" },
    { span: "row-span-1", shade: "bg-[#E0B4C0]" },
  ]
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 h-[520px] md:h-[640px]">
      {cells.map(({ span, shade }, i) => (
        <div
          key={i}
          className={`${shade} ${span} img-placeholder flex items-center justify-center`}
        >
          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#7B1628]/40">Portfolio</span>
        </div>
      ))}
    </div>
  )
}

/* ─── Service card ─── */
function ServiceCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="service-card px-6 py-8 group cursor-default">
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#7B1628] mb-4">{number}</p>
      <h3 className="font-serif text-2xl md:text-3xl italic text-[#1C1C1C] mb-4 leading-snug group-hover:text-[#7B1628] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-sans text-sm leading-relaxed text-[#555] font-light">{description}</p>
      <div className="mt-6 w-8 h-px bg-[#7B1628] group-hover:w-full transition-all duration-500" />
    </div>
  )
}

/* ─── Testimonial card ─── */
function TestimonialCard({ quote, client, role }: { quote: string; client: string; role: string }) {
  return (
    <div className="bg-white border border-[#F0D0D8] p-8 md:p-10 flex flex-col gap-6">
      <span className="font-serif text-5xl text-[#E0B4C0] leading-none">&ldquo;</span>
      <p className="font-serif text-lg md:text-xl italic text-[#1C1C1C] leading-relaxed -mt-4">{quote}</p>
      <div className="pt-4 border-t border-[#F0D0D8]">
        <p className="font-sans text-sm font-semibold tracking-widest uppercase text-[#7B1628]">{client}</p>
        <p className="font-sans text-xs tracking-wider text-[#888] mt-1">{role}</p>
      </div>
    </div>
  )
}

/* ─── FAQ accordion item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-[#E8C8D0] py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left group"
      >
        <span className="font-serif text-lg md:text-xl italic text-[#1C1C1C] group-hover:text-[#7B1628] transition-colors">
          {q}
        </span>
        <span
          className="font-sans text-[#7B1628] text-xl ml-4 flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="font-sans text-sm leading-relaxed text-[#555] font-light mt-4 pr-8">{a}</p>
      </div>
    </div>
  )
}

/* ─── Smooth scroll helper ─── */
function scrollTo(id: string, e?: React.MouseEvent) {
  e?.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
}

/* ═══════════════════════════════════════
   PAGE
══════════════════════════════════════ */
export default function HomePage() {
  const storyRef = useFadeIn()
  const servicesRef = useFadeIn()
  const clientsRef = useFadeIn()
  const faqRef = useFadeIn()
  const bookRef = useFadeIn()

  return (
    <div className="overflow-x-hidden">

      {/* ────────────── HERO ────────────── */}
      <section className="relative bg-[#FBE8EC] min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-100px] right-[-100px] w-72 h-72 rounded-full bg-[#F3D0DA] opacity-40 pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-56 h-56 rounded-full bg-[#EBC0CC] opacity-30 pointer-events-none" />

        <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#7B1628] mb-6">
          C.O.M · New York City
        </p>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] text-[#7B1628] leading-[1.02] mb-8">
          <em>Your</em> Story,<br />
          <em>Told</em> Beautifully.
        </h1>

        <p className="font-sans text-sm md:text-base font-light leading-relaxed text-[#4A2030] max-w-md mb-10 tracking-wide">
          A creative media agency built on authentic storytelling, bold visuals, and strategies that move your brand forward.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={(e) => scrollTo("#book", e as unknown as React.MouseEvent)}
            className="px-10 py-4 bg-[#7B1628] text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#5C1020] transition-colors duration-200 cursor-pointer"
          >
            Book a Consultation
          </button>
          <button
            onClick={(e) => scrollTo("#services", e as unknown as React.MouseEvent)}
            className="px-10 py-4 border border-[#7B1628] text-[#7B1628] font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#7B1628] hover:text-white transition-all duration-200 cursor-pointer"
          >
            Our Services
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#7B1628]">Scroll</span>
          <div className="w-px h-12 bg-[#7B1628] animate-pulse" />
        </div>
      </section>

      {/* ────────────── MARQUEE 1 ────────────── */}
      <MarqueeBanner />

      {/* ────────────── PHOTO GRID ────────────── */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <PhotoGrid />
      </section>

      {/* ────────────── OUR STORY ────────────── */}
      <section id="story" className="py-20 md:py-28 bg-[#FDF6F8]">
        <div ref={storyRef} className="fade-section max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#7B1628] mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-[#1C1C1C] leading-tight mb-8">
              Where Creativity<br />Meets Strategy.
            </h2>
            <p className="font-sans text-sm leading-[2] text-[#555] font-light mb-6">
              THEMM Creative Agency was born from a passion for storytelling and a belief that every brand deserves to be seen — boldly, authentically, and beautifully. Founded in New York City, we are a full-service creative media agency dedicated to helping businesses grow through compelling content, intentional strategy, and unforgettable campaigns.
            </p>
            <p className="font-sans text-sm leading-[2] text-[#555] font-light mb-10">
              We partner with brands at every stage — from emerging startups to established names — bringing the same level of care, creativity, and commitment to every project we take on. When you work with THEMM, your vision becomes our mission.
            </p>
            <button
              onClick={() => scrollTo("#services")}
              className="font-sans text-xs tracking-[0.25em] uppercase text-[#7B1628] border-b border-[#7B1628] pb-1 hover:opacity-60 transition-opacity cursor-pointer bg-transparent"
            >
              See What We Do →
            </button>
          </div>

          {/* Image placeholder with decorative accents */}
          <div className="relative">
            <div className="img-placeholder w-full h-[420px] md:h-[560px]" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#7B1628] hidden md:block" />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#7B1628] hidden md:block" />
          </div>
        </div>
      </section>

      {/* ────────────── MARQUEE 2 ────────────── */}
      <MarqueeBanner bg="#FBE8EC" color="#7B1628" />

      {/* ────────────── SERVICES ────────────── */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div ref={servicesRef} className="fade-section max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#7B1628] mb-4">What We Do</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-[#1C1C1C] leading-tight">
                Services Built<br />for Bold Brands.
              </h2>
            </div>
            <button
              onClick={() => scrollTo("#book")}
              className="font-sans text-xs tracking-[0.25em] uppercase text-[#7B1628] border-b border-[#7B1628] pb-1 hover:opacity-60 transition-opacity self-start md:self-auto cursor-pointer bg-transparent"
            >
              Get Started →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-[#E8C8D0]">
            <ServiceCard
              number="01"
              title="Content Creation"
              description="From concept to final cut — we produce photo and video content that captures your brand's essence and stops the scroll. Editorial-quality visuals tailored to your story."
            />
            <ServiceCard
              number="02"
              title="Social Media Strategy"
              description="We craft data-driven social strategies that build community, drive engagement, and grow your presence across Instagram, TikTok, and beyond."
            />
            <ServiceCard
              number="03"
              title="Brand Campaigns"
              description="End-to-end campaign management — from creative direction and influencer casting to execution and reporting. Every campaign is built around your goals."
            />
            <ServiceCard
              number="04"
              title="Creative Direction"
              description="Moodboards, art direction, styling, and production design that ensures every brand touchpoint feels cohesive, intentional, and unmistakably you."
            />
          </div>
        </div>
      </section>

      {/* ────────────── CLIENTS ────────────── */}
      <section id="clients" className="py-20 md:py-28 bg-[#FDF6F8]">
        <div ref={clientsRef} className="fade-section max-w-7xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#7B1628] mb-4">Our Clients</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-[#1C1C1C] leading-tight mb-4">
            Making Magic is<br />Inevitable&hellip;
          </h2>
          <p className="font-sans text-sm font-light text-[#555] mb-16 max-w-lg">
            When you work alongside a team of multi-faceted creatives who care about your brand as much as you do.
          </p>

          {/* Client logo placeholders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-16">
            {["Brand Partner", "Brand Partner", "Brand Partner", "Brand Partner"].map((label, i) => (
              <div key={i} className="img-placeholder h-28 flex items-center justify-center">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#7B1628]/40">{label}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Working with THEMM completely transformed our brand's online presence. The content was stunning and the strategy actually worked. Our engagement tripled in 60 days."
              client="Client Name"
              role="Founder, Brand"
            />
            <TestimonialCard
              quote="Manisha and the team are the real deal. They understood our vision immediately and delivered content that felt true to who we are. We couldn't recommend them more."
              client="Client Name"
              role="CEO, Company"
            />
            <TestimonialCard
              quote="The attention to detail, the creative direction, the communication — everything was flawless. THEMM doesn't just create content, they build brands."
              client="Client Name"
              role="Marketing Director"
            />
          </div>

          {/* Bottom gallery */}
          <div className="grid grid-cols-4 gap-1 mt-10">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="img-placeholder h-48 md:h-64" />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => scrollTo("#book")}
              className="font-sans text-xs tracking-[0.25em] uppercase text-[#7B1628] border-b border-[#7B1628] pb-1 hover:opacity-60 transition-opacity cursor-pointer bg-transparent"
            >
              Explore Case Studies →
            </button>
          </div>
        </div>
      </section>

      {/* ────────────── FAQ ────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div ref={faqRef} className="fade-section max-w-4xl mx-auto px-6">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#7B1628] mb-4">FAQs</p>
          <h2 className="font-serif text-4xl md:text-5xl italic text-[#1C1C1C] leading-tight mb-12">
            You Have Questions,<br />We Have Answers.
          </h2>
          <FAQItem
            q="How do I get started?"
            a="Start by filling out our inquiry form below. We'll reach out within 48 hours to schedule a discovery call and learn more about your brand, goals, and what kind of support you need."
          />
          <FAQItem
            q="What types of brands do you work with?"
            a="We work with brands across fashion, beauty, lifestyle, hospitality, and more. Whether you're a startup looking to launch or an established brand ready to refresh, we'd love to connect."
          />
          <FAQItem
            q="What does a typical project look like?"
            a="Every project is custom to your needs. We begin with a strategy session, move into creative direction and production, and close with delivery and reporting. Timelines and scope are agreed upon upfront."
          />
          <FAQItem
            q="How much do your services cost?"
            a="Pricing is based on the scope, deliverables, and scale of your project. We offer flexible packages for brands at every stage. Reach out and we'll put together a custom proposal."
          />
          <FAQItem
            q="Do you offer ongoing retainer services?"
            a="Yes! Many of our clients work with us on a monthly retainer for social media management, content creation, and ongoing strategy. Ask us about our retainer packages."
          />
          <div className="border-t border-[#E8C8D0]" />
        </div>
      </section>

      {/* ────────────── BOOK NOW ────────────── */}
      <section id="book" className="py-20 md:py-28 bg-[#7B1628]">
        <div ref={bookRef} className="fade-section max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-[#F3D0DA] mb-4">Let&apos;s Connect</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic text-white leading-tight mb-6">
              Ready to Tell<br />Your Story?
            </h2>
            <p className="font-sans text-sm font-light text-pink-200 max-w-md mx-auto">
              Fill out the form below and we&apos;ll be in touch within 48 hours to schedule your complimentary discovery call.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">First Name</label>
              <input
                type="text"
                placeholder="Your first name"
                className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm placeholder:text-pink-300/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">Last Name</label>
              <input
                type="text"
                placeholder="Your last name"
                className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm placeholder:text-pink-300/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">Email Address</label>
              <input
                type="email"
                placeholder="hello@yourbrand.com"
                className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm placeholder:text-pink-300/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">Brand / Company Name</label>
              <input
                type="text"
                placeholder="Your brand"
                className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm placeholder:text-pink-300/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">Service of Interest</label>
              <select className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[#7B1628]">Select a service…</option>
                <option value="content" className="bg-[#7B1628]">Content Creation</option>
                <option value="social" className="bg-[#7B1628]">Social Media Strategy</option>
                <option value="campaign" className="bg-[#7B1628]">Brand Campaigns</option>
                <option value="creative" className="bg-[#7B1628]">Creative Direction</option>
                <option value="all" className="bg-[#7B1628]">Full Service</option>
              </select>
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-200">Tell Us About Your Brand</label>
              <textarea
                rows={4}
                placeholder="Share your vision, goals, and what you're hoping to achieve…"
                className="bg-transparent border-b border-pink-300 pb-3 text-white font-sans text-sm placeholder:text-pink-300/50 focus:outline-none focus:border-white transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="px-14 py-4 bg-[#FBE8EC] text-[#7B1628] font-sans text-xs tracking-[0.25em] uppercase hover:bg-white transition-colors duration-200 cursor-pointer"
              >
                Submit Inquiry
              </button>
            </div>
          </form>

          {/* Contact info row */}
          <div className="mt-14 pt-10 border-t border-[#A03050] flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-300 mb-1">Instagram</p>
              <a
                href="https://www.instagram.com/themm.nyc/"
                target="_blank"
                rel="noreferrer"
                className="font-serif italic text-lg text-pink-100 hover:text-white transition-colors"
              >
                @themm.nyc
              </a>
            </div>
            <div className="hidden md:block w-px h-8 bg-[#A03050]" />
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-300 mb-1">Email</p>
              <a
                href="mailto:hello@themmcreative.com"
                className="font-serif italic text-lg text-pink-100 hover:text-white transition-colors"
              >
                hello@themmcreative.com
              </a>
            </div>
            <div className="hidden md:block w-px h-8 bg-[#A03050]" />
            <div>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-pink-300 mb-1">Based In</p>
              <p className="font-serif italic text-lg text-pink-100">New York City, NY</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
