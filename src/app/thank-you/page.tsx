import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `Thank You — ${CLIENT.businessName}`,
  description: `Your message has been received. ${CLIENT.businessName} will be in touch shortly.`,
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  { icon: "📞", title: "We'll Call You", desc: "A team member will call you within a few hours during business hours to confirm details and answer any questions." },
  { icon: "📋", title: "We Review Your Request", desc: "We review every submission carefully so we can give you an accurate, personalized response — not a canned reply." },
  { icon: "✅", title: "You're Confirmed", desc: "Once we've reviewed your request we'll confirm your appointment or send your quote by phone or email." },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ── MAIN CONFIRMATION ─────────────────────────────────── */}
      <section className="bg-hero-gradient py-20 md:py-28">
        <div className="container max-w-2xl text-center">

          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center
                          justify-center text-4xl mx-auto mb-8 animate-pulse">
            ✅
          </div>

          <span className="eyebrow">Received</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Thank You!
          </h1>
          <p className="text-white/80 text-xl leading-relaxed mb-4">
            Your request has been received. We&apos;ll be in touch within a few hours.
          </p>
          <p className="text-white/55 leading-relaxed mb-10">
            Keep an eye on your phone — we&apos;ll call to follow up. If you need to reach us in the
            meantime, call us directly at{" "}
            <a href={CLIENT.phoneHref} className="text-accent font-bold hover:underline">
              {CLIENT.phone}
            </a>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn btn-accent btn-lg">Back to Home</Link>
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 Call Us Now</a>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ─────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <span className="eyebrow">What to Expect</span>
          <h2 className="section-title">What Happens Next</h2>

          <div className="flex flex-col gap-5 mt-8">
            {NEXT_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-5 p-5 bg-white border border-border rounded-lg">
                <div className="w-11 h-11 rounded-full bg-primary-light flex items-center justify-center
                                text-xl shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">
                    <span className="text-muted mr-2">{i + 1}.</span>{step.title}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY REMINDER ────────────────────────────────── */}
      <section className="section-sm">
        <div className="container max-w-2xl">
          <div className="p-5 bg-emergency-bg border border-emergency/20 rounded-lg flex items-start gap-4">
            <span className="text-2xl shrink-0">🚨</span>
            <div>
              <p className="font-bold text-emergency text-sm mb-1">Have an emergency?</p>
              <p className="text-muted text-sm leading-relaxed mb-3">
                If you have an urgent plumbing or HVAC issue, don&apos;t wait — call us directly right now.
                We answer 24/7.
              </p>
              <a href={CLIENT.phoneHref} className="btn btn-emergency btn-sm">
                Call {CLIENT.phone} Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHILE YOU WAIT ────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">While You Wait</span>
          <h2 className="section-title">Explore Our Services</h2>
          <p className="section-subtitle mb-10">
            Learn more about what we offer — or browse our project gallery.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group flex items-center gap-3 p-4 bg-white border border-border rounded-lg
                           hover:border-primary/40 hover:shadow-sm transition-all duration-200">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <p className="font-bold text-dark text-sm group-hover:text-primary transition-colors">
                    {s.name}
                  </p>
                  <p className="text-muted text-xs">From {s.startingPrice}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link href="/gallery" className="btn btn-outline">📸 View Our Work</Link>
            <Link href="/reviews" className="btn btn-outline">⭐ Read Reviews</Link>
            <Link href="/areas" className="btn btn-outline">📍 Service Areas</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO ──────────────────────────────────────── */}
      <section className="section-sm border-t border-border">
        <div className="container max-w-2xl">
          <div className="grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <p className="text-2xl mb-2">📞</p>
              <p className="font-bold text-dark text-sm mb-1">Phone</p>
              <a href={CLIENT.phoneHref} className="text-primary text-sm font-semibold hover:underline">
                {CLIENT.phone}
              </a>
            </div>
            <div className="p-4">
              <p className="text-2xl mb-2">✉️</p>
              <p className="font-bold text-dark text-sm mb-1">Email</p>
              <a href={`mailto:${CLIENT.email}`} className="text-primary text-sm font-semibold hover:underline break-all">
                {CLIENT.email}
              </a>
            </div>
            <div className="p-4">
              <p className="text-2xl mb-2">⏰</p>
              <p className="font-bold text-dark text-sm mb-1">Hours</p>
              <p className="text-muted text-xs leading-relaxed">{CLIENT.hours.regular}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
