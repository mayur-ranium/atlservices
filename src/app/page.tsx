import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

export const metadata: Metadata = {
  title: `${CLIENT.businessName} — Home Services in ${CLIENT.primaryArea}`,
  description: CLIENT.description,
};

const SAMPLE_REVIEWS = [
  { name: "James R.",  rating: 5, text: "ProFix showed up same day for a burst pipe. Fixed it in under 2 hours. Extremely professional and fair pricing. Will use again.", service: "Plumbing",     date: "2 weeks ago" },
  { name: "Maria S.",  rating: 5, text: "Hired them for a kitchen remodel and couldn't be happier. Finished on time, on budget, and the quality is outstanding.",         service: "Remodeling",   date: "1 month ago" },
  { name: "Derek T.",  rating: 5, text: "AC went out in the middle of summer. They had a tech out within 90 minutes. Up and running the same evening. Lifesavers.",      service: "HVAC",         date: "3 weeks ago" },
  { name: "Angela P.", rating: 5, text: "Cleared out an entire garage worth of junk in 3 hours. Clean, fast, and way cheaper than I expected.",                         service: "Junk Removal", date: "1 week ago"  },
];

const WHY_ITEMS = [
  { icon: "🛡️", title: "Licensed & Insured",    desc: "Every technician is fully licensed and we carry complete liability coverage on all jobs." },
  { icon: "📅", title: "Same-Day Service",       desc: "For most services we can have someone to you the same day you call — often within hours." },
  { icon: "💰", title: "Transparent Pricing",    desc: "We quote before we start. No surprise charges, no hidden fees — ever." },
  { icon: "⭐", title: "Guaranteed Work",        desc: "Not happy? We'll come back and make it right at no charge. Your satisfaction is our standard." },
  { icon: "🚨", title: "24/7 Emergency Line",   desc: "Plumbing or HVAC emergencies don't wait for business hours. Neither do we." },
  { icon: "♻️", title: "Eco-Friendly Disposal", desc: "We sort, donate, and recycle as much as possible on every junk removal and demo job." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-section pb-16">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

          {/* Copy */}
          <div className="max-w-[640px]">
            <span className="eyebrow">📍 Serving {CLIENT.primaryArea}</span>
            <h1 className="font-black text-white leading-[1.1] mb-5" style={{ fontSize: "clamp(2.5rem,5vw,3.75rem)", letterSpacing: "-0.03em" }}>
              Home Services<br />
              <span className="text-accent">You Can Count On.</span>
            </h1>
            <p className="text-[1.2rem] text-white/75 leading-relaxed mb-6">{CLIENT.tagline}</p>

            {/* Trust row */}
            <div className="flex items-center flex-wrap gap-3.5 mb-8">
              <span className="text-white/75 text-sm font-medium">
                <span className="text-accent">★★★★★</span> {CLIENT.rating} ({CLIENT.reviewCount} reviews)
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
              <span className="text-white/75 text-sm font-medium">✅ Licensed &amp; Insured</span>
              <span className="w-1 h-1 rounded-full bg-white/30 inline-block" />
              <span className="text-white/75 text-sm font-medium">🏅 Since {CLIENT.yearFounded}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center mb-6">
              <Link href="/book" className="btn btn-primary btn-lg">📅 Book Online</Link>
              <Link href="/quote" className="btn btn-accent btn-lg">Get a Free Quote</Link>
              <a href={CLIENT.phoneHref} className="text-white/90 text-base font-semibold inline-flex items-center gap-1.5">
                📞 <strong>{CLIENT.phone}</strong>
              </a>
            </div>

            {/* Emergency strip */}
            <Link href="/emergency"
              className="inline-flex items-center gap-2 bg-emergency/15 border border-emergency/30 rounded-md px-4 py-3 text-[#FCA5A5] text-sm">
              🚨 <strong>Need emergency service?</strong> We&apos;re available 24/7 for plumbing &amp; HVAC →
            </Link>
          </div>

          {/* Stats panel: 2-col mobile → 4-col tablet → 2-col desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 shrink-0">
            {[
              { num: `${CLIENT.projectsCompleted.toLocaleString()}+`, label: "Jobs Completed" },
              { num: CLIENT.rating,                                   label: "Google Rating"  },
              { num: `${new Date().getFullYear() - CLIENT.yearFounded}+`, label: "Years in Business" },
              { num: "24/7",                                          label: "Emergency Line" },
            ].map((s) => (
              <div key={s.label}
                className="bg-white/[0.06] border border-white/10 rounded-lg p-6 px-5 flex flex-col items-center gap-1.5 backdrop-blur-[10px]">
                <span className="text-[2rem] font-black text-accent leading-none">{s.num}</span>
                <span className="text-xs font-semibold text-white/55 text-center uppercase tracking-[0.06em]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional, licensed service for every job — big or small. All work is guaranteed.</p>

          <div className="grid grid-cols-1 xs:grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="flex flex-col gap-2.5 bg-white border border-border rounded-lg p-7 transition-[box-shadow,transform] duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <div className="text-[2rem] bg-primary-light rounded-md w-[52px] h-[52px] flex items-center justify-center mb-1">{s.icon}</div>
                <h3 className="text-lg font-bold text-dark">{s.name}</h3>
                <p className="text-sm text-muted leading-[1.55] flex-1">{s.shortDesc}</p>
                <div className="flex items-center gap-3 flex-wrap mt-1">
                  <span className="text-[0.8rem] font-bold text-primary">Starting at {s.startingPrice}</span>
                  {s.emergency && (
                    <span className="text-[0.7rem] font-semibold bg-emergency-bg text-emergency rounded-pill px-2.5 py-0.5">
                      🚨 24/7 Emergency
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-primary mt-auto">View service →</span>
              </Link>
            ))}

            {/* "All services" card */}
            <Link href="/services"
              className="flex flex-col gap-2.5 bg-primary border-none rounded-lg p-7 transition-[box-shadow,transform] duration-200 hover:shadow-md hover:-translate-y-0.5">
              <div className="text-[2rem] bg-white/15 rounded-md w-[52px] h-[52px] flex items-center justify-center mb-1">🔨</div>
              <h3 className="text-lg font-bold text-white">More Services</h3>
              <p className="text-sm text-white/80 leading-[1.55] flex-1">See everything we offer — from electrical to roofing.</p>
              <span className="text-sm font-semibold text-accent mt-auto">Browse all services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Why ProFix</span>
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-8 mt-12">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="text-[2rem]">{item.icon}</div>
                <h3 className="text-base font-bold text-dark">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ───────────────────────────────────────── */}
      <section className="section bg-primary">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="inline-block text-[0.8rem] font-bold tracking-[0.1em] uppercase text-accent mb-3">Free Estimate</span>
            <h2 className="text-[2.25rem] font-extrabold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
              Get a Free Quote in 24 Hours
            </h2>
            <p className="text-white/75 leading-[1.65] mb-5">
              Describe your project and we&apos;ll get back to you with a no-obligation estimate. Most quotes delivered within a few hours during business hours.
            </p>
            <ul className="flex flex-col gap-2 text-white/80 text-[0.9rem]">
              <li>✅ No obligation, no pressure</li>
              <li>✅ Transparent itemized pricing</li>
              <li>✅ Licensed &amp; insured technicians</li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white/[0.07] border border-white/[0.12] rounded-xl p-8 backdrop-blur-[10px]">
            <QuoteFormInline />
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Customer Reviews</span>
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4 max-sm:flex-col max-sm:items-start">
            <div>
              <h2 className="section-title">What Our Customers Say</h2>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-accent text-xl">★★★★★</span>
                <span className="text-[1.75rem] font-black text-dark">{CLIENT.rating}</span>
                <span className="text-sm text-muted">from {CLIENT.reviewCount} Google reviews</span>
              </div>
            </div>
            <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              See all reviews ↗
            </a>
          </div>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {SAMPLE_REVIEWS.map((r, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-6 shadow-sm flex flex-col gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[0.9rem] text-dark">{r.name}</p>
                    <p className="text-xs text-muted">{r.service} · {r.date}</p>
                  </div>
                  <span className="ml-auto w-7 h-7 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-black text-[0.8rem] shrink-0">G</span>
                </div>
                <div className="text-accent text-base">{"★".repeat(r.rating)}</div>
                <p className="text-sm text-muted leading-[1.65] italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container text-center">
          <span className="eyebrow">Coverage</span>
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle mx-auto mb-10">
            We serve {CLIENT.primaryArea} and the surrounding communities. Not sure if we cover your area? Give us a call.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {CLIENT.serviceAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 border-[1.5px] border-border rounded-pill text-sm font-semibold text-text bg-white transition-[border-color,color] duration-150 hover:border-primary hover:text-primary">
                📍 {a.name}, {a.state}
              </Link>
            ))}
          </div>
          <Link href="/areas" className="btn btn-outline mt-8">See full service area map →</Link>
        </div>
      </section>

      {/* ── EMERGENCY CTA ────────────────────────────────────── */}
      <section className="bg-emergency-gradient py-16">
        <div className="container flex justify-between items-center gap-8 flex-wrap max-md:flex-col max-md:items-start">
          <div>
            <h2 className="text-[1.75rem] font-extrabold text-white mb-2" style={{ letterSpacing: "-0.01em" }}>
              🚨 Plumbing emergency? AC out in the heat?
            </h2>
            <p className="text-white/80 text-[0.95rem] leading-relaxed">
              Our emergency team is on call 24 hours a day, 7 days a week. Average response time under 90 minutes.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap shrink-0 max-md:flex-col max-md:w-full">
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg max-md:w-full max-md:justify-center">
              📞 Call Now — {CLIENT.phone}
            </a>
            <Link href="/emergency" className="btn btn-emergency btn-lg max-md:w-full max-md:justify-center">
              Emergency Request Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function QuoteFormInline() {
  return (
    <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="form-label !text-white/85" htmlFor="name">Your Name</label>
          <input className="form-input" id="name" name="name" type="text" placeholder="John Smith" required />
        </div>
        <div className="form-group">
          <label className="form-label !text-white/85" htmlFor="phone">Phone Number</label>
          <input className="form-input" id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label !text-white/85" htmlFor="service">Service Needed</label>
        <select className="form-select" id="service" name="service" required>
          <option value="">Select a service…</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label !text-white/85" htmlFor="message">Tell us about your project</label>
        <textarea className="form-textarea" id="message" name="message"
          placeholder="Briefly describe what you need done, including your address if possible…" required />
      </div>
      <input type="hidden" name="_subject" value="New Quote Request from Website" />
      <button type="submit" className="btn btn-accent btn-lg w-full justify-center">
        Send My Free Quote Request →
      </button>
      <p className="text-xs text-white/55 text-center">
        We respond within a few hours during business hours. No spam, no pressure.
      </p>
    </FormSubmit>
  );
}
