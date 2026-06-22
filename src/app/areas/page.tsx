import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `Service Areas — ${CLIENT.businessName}`,
  description: `${CLIENT.businessName} serves ${CLIENT.serviceAreas.map((a) => `${a.name}, ${a.state}`).join("; ")} and surrounding communities. Licensed, insured, same-day service available.`,
};

const COVERAGE_FEATURES = [
  { icon: "📅", title: "Same-Day Service", desc: "For most services we can schedule same-day or next-day visits across all areas." },
  { icon: "⚡", title: "Fast Response", desc: "Local crews staged throughout the service area — no long drives, no delays." },
  { icon: "🚨", title: "24/7 Emergency", desc: "Emergency plumbing and HVAC response available in every city we serve." },
  { icon: "💰", title: "Local Pricing", desc: "No travel surcharges. Same flat-rate transparent pricing everywhere we work." },
];

export default function AreasPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Service Areas</span>
          </nav>

          <span className="eyebrow">Where We Work</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Areas We Serve
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">
            {CLIENT.businessName} serves {CLIENT.primaryArea} and {CLIENT.serviceAreas.length - 1} surrounding
            communities. Licensed technicians, same-day service, no travel fees.
          </p>

          {/* City pills */}
          <div className="flex flex-wrap gap-3">
            {CLIENT.serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20
                           border border-white/20 text-white font-semibold text-sm
                           px-4 py-2 rounded-pill transition-colors duration-150"
              >
                📍 {area.name}, {area.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE FEATURES ─────────────────────────────────── */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COVERAGE_FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-xl shrink-0">
                  {f.icon}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{f.title}</p>
                  <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITY CARDS GRID ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Coverage</span>
          <h2 className="section-title">Cities &amp; Communities</h2>
          <p className="section-subtitle mb-10">
            Click any city to see available services, response times, and local contact details.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLIENT.serviceAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group flex flex-col gap-4 p-6 bg-white border border-border rounded-xl
                           shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Map placeholder */}
                <div className="aspect-[16/7] bg-gradient-to-br from-blue-50 to-indigo-100
                                rounded-lg flex items-center justify-center border border-blue-100 relative overflow-hidden">
                  <span className="text-4xl opacity-30">🗺️</span>
                  <span className="absolute bottom-2 right-3 text-[0.65rem] font-bold uppercase
                                   tracking-widest text-muted/50">Map placeholder</span>
                  {i === 0 && (
                    <span className="absolute top-2 left-2 bg-primary text-white text-[0.65rem]
                                     font-bold uppercase tracking-widest px-2 py-1 rounded-pill">
                      Primary Area
                    </span>
                  )}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-black text-dark text-lg">
                      {area.name}, <span className="text-muted font-semibold text-base">{area.state}</span>
                    </h3>
                    <span className="text-primary text-lg group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed mb-4">
                    Full service coverage in {area.name} — all {SERVICES.length} services available with same-day scheduling.
                  </p>

                  {/* Service icons */}
                  <div className="flex gap-2 flex-wrap">
                    {SERVICES.map((s) => (
                      <span key={s.slug} className="text-lg" title={s.name}>{s.icon}</span>
                    ))}
                    {SERVICES.some((s) => s.emergency) && (
                      <span className="badge badge-emergency ml-auto">🚨 24/7</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES WE OFFER ─────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Services Available in Every Area</h2>
          <p className="section-subtitle mb-10">Every service is available across our entire service area.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.slug} className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg">
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{s.name}</p>
                  <p className="text-muted text-xs leading-relaxed mb-3">{s.shortDesc}</p>
                  <Link href={`/services/${s.slug}`} className="text-primary text-xs font-semibold hover:underline">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT IN YOUR AREA ──────────────────────────────────── */}
      <section className="section">
        <div className="container max-w-2xl text-center">
          <span className="text-3xl mb-4 block">📍</span>
          <h2 className="text-2xl font-extrabold text-dark mb-3" style={{ letterSpacing: "-0.02em" }}>
            Don&apos;t See Your City?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            We may still be able to help. Give us a call and we&apos;ll let you know if we cover your location —
            we&apos;re always expanding our service area.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={CLIENT.phoneHref} className="btn btn-primary btn-lg">📞 Call {CLIENT.phone}</a>
            <Link href="/contact" className="btn btn-outline btn-lg">Send Us a Message</Link>
          </div>
        </div>
      </section>
    </>
  );
}
