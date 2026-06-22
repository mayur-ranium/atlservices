import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

export const metadata: Metadata = {
  title: `Contact Us — ${CLIENT.businessName}`,
  description: `Get in touch with ${CLIENT.businessName}. Call ${CLIENT.phone}, email ${CLIENT.email}, or fill out our contact form. Serving ${CLIENT.primaryArea}.`,
};

const CONTACT_REASONS = [
  { value: "general",   label: "General Question" },
  { value: "quote",     label: "Request a Quote" },
  { value: "booking",   label: "Schedule an Appointment" },
  { value: "complaint", label: "Feedback / Complaint" },
  { value: "other",     label: "Other" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Contact</span>
          </nav>

          <span className="eyebrow">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl">
            Questions, quotes, or just want to talk through a project? We respond within a few hours
            during business hours — or call us directly for the fastest response.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ─────────────────────────────────────── */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Phone */}
            <a href={CLIENT.phoneHref}
              className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg
                         hover:border-primary/40 hover:shadow-md transition-all duration-200 group">
              <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center text-xl">📞</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Call Us</p>
                <p className="font-black text-dark text-base group-hover:text-primary transition-colors">{CLIENT.phone}</p>
                <p className="text-muted text-xs mt-1">{CLIENT.hours.regular}</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${CLIENT.email}`}
              className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg
                         hover:border-primary/40 hover:shadow-md transition-all duration-200 group">
              <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center text-xl">✉️</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Email Us</p>
                <p className="font-bold text-dark text-sm group-hover:text-primary transition-colors break-all">{CLIENT.email}</p>
                <p className="text-muted text-xs mt-1">Reply within a few hours</p>
              </div>
            </a>

            {/* Address */}
            <div className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg">
              <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center text-xl">📍</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">Our Location</p>
                <p className="font-bold text-dark text-sm leading-snug">{CLIENT.address.street}</p>
                <p className="text-muted text-xs mt-0.5">{CLIENT.address.city}, {CLIENT.address.state} {CLIENT.address.zip}</p>
              </div>
            </div>

            {/* Emergency */}
            <Link href="/emergency"
              className="flex flex-col gap-3 p-5 bg-emergency-bg border border-emergency/20 rounded-lg
                         hover:border-emergency/50 hover:shadow-md transition-all duration-200">
              <div className="w-11 h-11 rounded-full bg-emergency/10 flex items-center justify-center text-xl">🚨</div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emergency mb-1">Emergency</p>
                <p className="font-black text-dark text-base">{CLIENT.phone}</p>
                <p className="text-muted text-xs mt-1">{CLIENT.hours.emergency}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ────────────────────────────────────────── */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* ── FORM ──────────────────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-extrabold text-dark mb-1" style={{ letterSpacing: "-0.02em" }}>
              Send Us a Message
            </h2>
            <p className="text-muted text-sm mb-8">
              We read every message and respond within a few hours during business hours.
            </p>

            <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-fname">First Name <span className="text-emergency">*</span></label>
                  <input className="form-input" id="c-fname" name="first_name" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-lname">Last Name <span className="text-emergency">*</span></label>
                  <input className="form-input" id="c-lname" name="last_name" type="text" placeholder="Smith" required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="c-phone">Phone Number</label>
                  <input className="form-input" id="c-phone" name="phone" type="tel" placeholder="(555) 000-0000" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="c-email">Email Address <span className="text-emergency">*</span></label>
                  <input className="form-input" id="c-email" name="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-reason">Reason for Contact</label>
                <select className="form-select" id="c-reason" name="reason" defaultValue="">
                  <option value="">Select one…</option>
                  {CONTACT_REASONS.map((r) => (
                    <option key={r.value} value={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-service">Related Service (optional)</label>
                <select className="form-select" id="c-service" name="service" defaultValue="">
                  <option value="">Not service-related</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>{s.icon} {s.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="c-message">Message <span className="text-emergency">*</span></label>
                <textarea
                  className="form-textarea min-h-[140px]"
                  id="c-message"
                  name="message"
                  placeholder="How can we help you? Include as much detail as you'd like."
                  required
                />
              </div>

              <input type="hidden" name="_subject" value="New Contact Form Message" />

              <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                Send Message →
              </button>
              <p className="text-xs text-muted text-center">
                We respond within a few hours during business hours. No spam — ever.
              </p>
            </FormSubmit>
          </div>

          {/* ── SIDEBAR ───────────────────────────────────────── */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              {/*
                Replace this div with a real Google Maps embed:
                <iframe
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_PARAMS"
                  width="100%" height="280" style={{border:0}} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              */}
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-indigo-100
                              flex flex-col items-center justify-center gap-3 text-center p-6">
                <span className="text-5xl opacity-30">🗺️</span>
                <p className="text-xs font-bold uppercase tracking-widest text-muted/60">Map placeholder</p>
                <p className="text-muted text-xs leading-relaxed max-w-[200px]">
                  Replace with a Google Maps embed in {`contact/page.tsx`}
                </p>
              </div>

              {/* Address strip below map */}
              <div className="p-4 bg-white border-t border-border">
                <p className="font-bold text-dark text-sm">{CLIENT.businessName}</p>
                <p className="text-muted text-xs mt-0.5">{CLIENT.address.full}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CLIENT.address.full)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="text-primary text-xs font-semibold hover:underline mt-2 inline-block"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div className="p-5 border border-border rounded-lg bg-white">
              <p className="font-bold text-dark text-sm mb-4">⏰ Business Hours</p>
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Regular service</span>
                  <span className="font-semibold text-dark text-xs text-right">{CLIENT.hours.regular}</span>
                </div>
                <div className="flex justify-between items-center border-t border-border pt-2 mt-1">
                  <span className="text-emergency font-semibold text-sm">Emergency line</span>
                  <span className="font-black text-emergency text-xs">24 / 7</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-5 border border-border rounded-lg bg-white">
              <p className="font-bold text-dark text-sm mb-4">🔗 Find Us Online</p>
              <div className="flex flex-col gap-3">
                {CLIENT.googleBusinessUrl && (
                  <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors">
                    <span className="w-7 h-7 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-black text-xs shrink-0">G</span>
                    Google Business Profile
                  </a>
                )}
                {CLIENT.facebookUrl && (
                  <a href={CLIENT.facebookUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors">
                    <span className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs shrink-0 font-bold">f</span>
                    Facebook
                  </a>
                )}
                {CLIENT.instagramUrl && (
                  <a href={CLIENT.instagramUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors">
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500
                                     text-white flex items-center justify-center text-xs shrink-0">📷</span>
                    Instagram
                  </a>
                )}
              </div>
            </div>

            {/* Emergency redirect */}
            <div className="p-5 bg-emergency-bg border border-emergency/20 rounded-lg">
              <p className="font-bold text-emergency text-sm mb-2">🚨 Need emergency service?</p>
              <p className="text-muted text-xs leading-relaxed mb-3">
                Don&apos;t use the contact form for emergencies — call us directly right now.
              </p>
              <a href={CLIENT.phoneHref} className="btn btn-emergency btn-sm w-full justify-center">
                Call {CLIENT.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── QUICK LINKS ───────────────────────────────────────── */}
      <section className="section-sm bg-surface border-t border-border">
        <div className="container">
          <p className="text-center text-muted text-sm font-semibold uppercase tracking-widest mb-6">
            Or jump straight to
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/quote" className="btn btn-outline">📋 Free Quote</Link>
            <Link href="/book" className="btn btn-outline">📅 Book Appointment</Link>
            <Link href="/services" className="btn btn-outline">🔨 All Services</Link>
            <Link href="/areas" className="btn btn-outline">📍 Service Areas</Link>
            <Link href="/about" className="btn btn-outline">🏠 About Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
