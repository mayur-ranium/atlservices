import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `Free Quote — ${CLIENT.businessName}`,
  description: `Request a free, no-obligation estimate from ${CLIENT.businessName}. We respond within a few hours. Serving ${CLIENT.primaryArea}.`,
};

const BUDGET_RANGES = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
];

const HOW_IT_WORKS = [
  { icon: "📋", title: "Submit the Form", desc: "Fill out your project details below. Takes about 2 minutes." },
  { icon: "📞", title: "We Review & Call", desc: "A team member reviews your request and calls you — usually within a few hours." },
  { icon: "🔍", title: "On-Site Assessment", desc: "For larger jobs we schedule a free on-site visit to scope the work accurately." },
  { icon: "✅", title: "Receive Your Quote", desc: "You get a clear, itemized quote with no hidden fees. No obligation to book." },
];

const QUOTE_FAQS = [
  { q: "Is the quote really free?", a: "Yes — 100% free, no obligation. We'll give you a detailed estimate and let you decide whether to move forward on your own timeline." },
  { q: "How fast will I hear back?", a: "We aim to respond to all quote requests within a few hours during business hours (Mon–Sat, 7 am – 7 pm). Urgent requests are always prioritized." },
  { q: "Do I need to be home for the quote?", a: "For smaller jobs (junk removal, plumbing repair, HVAC service) we can often quote over the phone. Larger remodeling projects typically need a brief on-site visit." },
  { q: "Can I get quotes for multiple services?", a: "Absolutely. Select multiple services in the form or just describe everything in the project details field and we'll cover it all in one quote." },
];

export default function QuotePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Free Quote</span>
          </nav>

          <span className="eyebrow">No Obligation</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Get a Free Estimate
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">
            Tell us about your project — we&apos;ll send you a clear, itemized quote within hours.
            No pushy sales calls, no obligation.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span>✅ Free — no credit card needed</span>
            <span>✅ Licensed &amp; insured technicians</span>
            <span>✅ Response within a few hours</span>
            <span>✅ Transparent itemized pricing</span>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-xl shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{step.title}</p>
                  <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FORM + SIDEBAR ───────────────────────────────── */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_340px] gap-10 items-start">

          {/* ── FORM ──────────────────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-extrabold text-dark mb-1" style={{ letterSpacing: "-0.02em" }}>
              Project Details
            </h2>
            <p className="text-muted text-sm mb-8">Fields marked <span className="text-emergency font-bold">*</span> are required.</p>

            <form action={CLIENT.formspreeEndpoint} method="POST" className="flex flex-col gap-6">

              {/* ── Contact info ─────────────────────────────── */}
              <fieldset className="flex flex-col gap-4 p-6 border border-border rounded-lg bg-white">
                <legend className="text-sm font-black uppercase tracking-widest text-dark px-1">
                  Your Contact Information
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-fname">
                      First Name <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="q-fname" name="first_name" type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-lname">
                      Last Name <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="q-lname" name="last_name" type="text" placeholder="Smith" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-phone">
                      Phone Number <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="q-phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-email">
                      Email Address <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="q-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-address">
                    Service Address <span className="text-emergency">*</span>
                  </label>
                  <input className="form-input" id="q-address" name="address" type="text"
                    placeholder="123 Main St, Sample City, TX 75001" required />
                </div>
              </fieldset>

              {/* ── Project info ─────────────────────────────── */}
              <fieldset className="flex flex-col gap-4 p-6 border border-border rounded-lg bg-white">
                <legend className="text-sm font-black uppercase tracking-widest text-dark px-1">
                  Project Information
                </legend>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-service">
                    Service Needed <span className="text-emergency">*</span>
                  </label>
                  <select className="form-select" id="q-service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.name}>{s.icon} {s.name}</option>
                    ))}
                    <option value="Multiple services">Multiple services</option>
                    <option value="Other / Not sure">Other / Not sure</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-budget">Approximate Budget</label>
                    <select className="form-select" id="q-budget" name="budget" defaultValue="">
                      <option value="">Prefer not to say</option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="q-timeline">Preferred Start Date</label>
                    <select className="form-select" id="q-timeline" name="timeline" defaultValue="">
                      <option value="">Flexible / Not sure</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="Within a week">Within a week</option>
                      <option value="Within a month">Within a month</option>
                      <option value="1–3 months">1–3 months out</option>
                      <option value="3+ months">3+ months out</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-message">
                    Describe Your Project <span className="text-emergency">*</span>
                  </label>
                  <textarea
                    className="form-textarea min-h-[140px]"
                    id="q-message"
                    name="message"
                    placeholder="Tell us what needs to be done. Include as much detail as you can — size, scope, any existing issues, and anything you'd like us to know before we call."
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="q-how">How did you hear about us?</label>
                  <select className="form-select" id="q-how" name="referral_source" defaultValue="">
                    <option value="">Select one…</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Google Maps">Google Maps</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Nextdoor">Nextdoor</option>
                    <option value="Friend / Family referral">Friend / Family referral</option>
                    <option value="Yelp">Yelp</option>
                    <option value="Previous customer">Previous customer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </fieldset>

              {/* Hidden fields for Formspree */}
              <input type="hidden" name="_subject" value="New Quote Request from Website" />
              <input type="hidden" name="_next" value="/thank-you" />

              <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                Send My Free Quote Request →
              </button>
              <p className="text-xs text-muted text-center">
                By submitting you agree to be contacted about your project. No spam — ever.
              </p>
            </form>
          </div>

          {/* ── SIDEBAR ───────────────────────────────────────── */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">

            {/* Call CTA */}
            <div className="p-5 bg-primary rounded-lg text-center">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">Prefer to call?</p>
              <a href={CLIENT.phoneHref}
                className="inline-flex items-center gap-2 text-white font-black text-xl hover:text-accent transition-colors">
                📞 {CLIENT.phone}
              </a>
              <p className="text-white/60 text-xs mt-2">{CLIENT.hours.regular}</p>
              <p className="text-white/50 text-xs">{CLIENT.hours.emergency}</p>
            </div>

            {/* Trust checklist */}
            <div className="p-5 border border-border rounded-lg bg-white">
              <p className="font-bold text-dark text-sm mb-4">Why Get a Quote from Us?</p>
              <ul className="flex flex-col gap-3 text-sm">
                {[
                  "Licensed & insured in TX",
                  "Same-day service available",
                  "Transparent, itemized pricing",
                  "No hidden fees — ever",
                  "Satisfaction guaranteed",
                  "4.9★ Google rating from 143+ reviews",
                  `Locally owned since ${CLIENT.yearFounded}`,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency callout */}
            <div className="p-5 bg-emergency-bg border border-emergency/20 rounded-lg">
              <p className="font-bold text-emergency text-sm mb-2">🚨 Need emergency service?</p>
              <p className="text-muted text-xs leading-relaxed mb-3">
                Don&apos;t wait for a quote — call us immediately. We&apos;re available 24/7 for plumbing and HVAC emergencies.
              </p>
              <a href={CLIENT.phoneHref} className="btn btn-emergency btn-sm w-full justify-center">
                Call Now — {CLIENT.phone}
              </a>
            </div>

            {/* Service areas */}
            <div className="p-5 border border-border rounded-lg bg-surface">
              <p className="font-bold text-dark text-sm mb-3">📍 Service Areas</p>
              <p className="text-muted text-xs leading-relaxed">
                We serve {CLIENT.primaryArea} and the surrounding communities.
              </p>
              <Link href="/areas" className="text-primary text-xs font-semibold mt-2 inline-block hover:underline">
                See full service area →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <span className="eyebrow">Quote Process</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="flex flex-col gap-3 mt-8">
            {QUOTE_FAQS.map((faq, i) => (
              <div key={i} className="p-5 bg-white border border-border rounded-lg">
                <p className="font-bold text-dark text-sm mb-2">{faq.q}</p>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link href="/services" className="btn btn-outline">Browse All Services</Link>
            <Link href="/gallery" className="btn btn-outline">See Our Work</Link>
            <Link href="/book" className="btn btn-outline">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
