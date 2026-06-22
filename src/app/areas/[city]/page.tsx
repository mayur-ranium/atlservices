import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

type Props = { params: { city: string } };

export function generateStaticParams() {
  return CLIENT.serviceAreas.map((a) => ({ city: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const area = CLIENT.serviceAreas.find((a) => a.slug === params.city);
  if (!area) return {};
  return {
    title: `Home Services in ${area.name}, ${area.state} — ${CLIENT.businessName}`,
    description: `${CLIENT.businessName} provides junk removal, remodeling, plumbing, and HVAC in ${area.name}, ${area.state}. Licensed, insured — same-day service available. Call ${CLIENT.phone}.`,
  };
}

// Static per-city blurbs — add one entry per serviceArea slug.
// The fallback covers any city without a custom blurb.
const CITY_BLURBS: Record<string, string> = {
  "sample-city":   "Sample City is our home base — our main office and warehouse are located here. We provide the fastest response times and have our largest crew stationed in town.",
  "westview":      "Westview is one of our busiest service areas. We have multiple crews serving Westview daily for everything from quick plumbing fixes to full kitchen remodels.",
  "lakeside":      "Lakeside's waterfront properties often need specialized plumbing and HVAC work. Our licensed techs are familiar with the unique requirements of lakeside homes.",
  "north-heights": "North Heights is a growing community and we've been there since day one. From new construction punch-outs to full estate cleanouts, we handle it all.",
  "riverside":     "Riverside residents trust us for fast same-day service. Our technicians know the neighborhoods well and are on call 24/7 for plumbing and HVAC emergencies.",
};

const AREA_REVIEWS: Record<string, { name: string; text: string; service: string }[]> = {
  "sample-city":   [
    { name: "James R.",  text: "Called at 8 am about a burst pipe. They were at my door by 9:30. Fixed in under 2 hours. Lifesavers.", service: "Plumbing" },
    { name: "Sandra M.", text: "Used them for a full garage cleanout. Fast, clean, and way cheaper than I expected.", service: "Junk Removal" },
  ],
  "westview":      [
    { name: "Derek T.",  text: "AC died on a Friday afternoon. ProFix was here by 6 pm and had it running before dinner.", service: "HVAC" },
    { name: "Laura K.",  text: "Entire kitchen remodel — finished on time, on budget. Highly recommend.", service: "Remodeling" },
  ],
  "lakeside":      [
    { name: "Mike B.",   text: "Had a sewage backup on a holiday weekend. They answered immediately and were here fast.", service: "Plumbing" },
    { name: "Carla P.",  text: "New HVAC system installed in one day. Professional and very tidy.", service: "HVAC" },
  ],
  "north-heights": [
    { name: "Tom G.",    text: "Cleared out my entire basement in one morning. Great crew, great price.", service: "Junk Removal" },
    { name: "Diana L.",  text: "Master bath renovation exceeded my expectations. Would use again in a heartbeat.", service: "Remodeling" },
  ],
  "riverside":     [
    { name: "Greg H.",   text: "Quick and professional. Fixed my water heater same day — can't ask for more.", service: "Plumbing" },
    { name: "Pam W.",    text: "Had them out for AC maintenance before summer. Great service, honest pricing.", service: "HVAC" },
  ],
};

export default function CityPage({ params }: Props) {
  const area = CLIENT.serviceAreas.find((a) => a.slug === params.city);
  if (!area) notFound();

  const blurb   = CITY_BLURBS[area.slug]  ?? `We provide full home service coverage in ${area.name}, ${area.state}. All four services are available with same-day scheduling.`;
  const reviews = AREA_REVIEWS[area.slug] ?? [];

  const otherAreas = CLIENT.serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <Link href="/areas" className="text-white/50 hover:text-white/80 transition-colors">Service Areas</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">{area.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

            {/* Copy */}
            <div>
              <span className="eyebrow">📍 {area.name}, {area.state}</span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
                Home Services in<br />
                <span className="text-accent">{area.name}</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                {blurb}
              </p>

              {/* Trust row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60 mb-8">
                <span>✅ Licensed &amp; insured in {area.state}</span>
                <span>✅ Same-day service available</span>
                <span>✅ 24/7 emergency line</span>
                <span>✅ No travel fee</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/book" className="btn btn-primary btn-lg">📅 Book a Service</Link>
                <Link href="/quote" className="btn btn-accent btn-lg">Get a Free Quote</Link>
                <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 {CLIENT.phone}</a>
              </div>
            </div>

            {/* Quick contact card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <p className="font-black text-dark text-lg mb-1">Call Us Now</p>
              <p className="text-muted text-sm mb-5">Talk to a real person — no phone trees.</p>
              <a href={CLIENT.phoneHref}
                className="flex items-center justify-center gap-2 bg-primary text-white font-black
                           text-xl rounded-lg py-4 mb-4 hover:-translate-y-0.5 transition-transform">
                📞 {CLIENT.phone}
              </a>
              <p className="text-xs text-muted text-center mb-4">{CLIENT.hours.regular}</p>
              <div className="border-t border-border pt-4 flex flex-col gap-2">
                <Link href="/quote" className="btn btn-outline btn-sm w-full justify-center">Get a Free Quote</Link>
                <Link href="/book" className="btn btn-outline btn-sm w-full justify-center">Book Online</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES IN THIS AREA ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What We Offer in {area.name}</span>
          <h2 className="section-title">Services Available Here</h2>
          <p className="section-subtitle mb-10">
            Every service is available in {area.name}, {area.state} with the same pricing and quality guarantee.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-3 p-5 bg-white border border-border rounded-lg
                           hover:border-primary/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="font-bold text-dark text-sm">{s.name}</p>
                    {s.emergency && (
                      <span className="badge badge-emergency text-[0.6rem]">24/7</span>
                    )}
                  </div>
                  <p className="text-muted text-xs leading-relaxed mb-2">{s.shortDesc}</p>
                  <p className="text-primary text-xs font-bold">From {s.startingPrice}</p>
                </div>
                <span className="text-primary text-xs font-semibold group-hover:underline">View service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL REVIEWS ─────────────────────────────────────── */}
      {reviews.length > 0 && (
        <section className="section bg-surface">
          <div className="container">
            <span className="eyebrow">Customer Reviews</span>
            <h2 className="section-title">What {area.name} Customers Say</h2>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">
              {reviews.map((r, i) => (
                <div key={i} className="p-6 bg-white border border-border rounded-lg shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center
                                    font-bold text-base shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{r.name}</p>
                      <p className="text-xs text-muted">{r.service} · {area.name}, {area.state}</p>
                    </div>
                    <span className="ml-auto w-7 h-7 rounded-full bg-[#4285F4] text-white flex items-center
                                     justify-center font-black text-xs shrink-0">G</span>
                  </div>
                  <div className="text-accent text-base">★★★★★</div>
                  <p className="text-sm text-muted leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline">
                See all reviews on Google ↗
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── EMERGENCY CTA ─────────────────────────────────────── */}
      <section className="bg-emergency-gradient py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              🚨 Emergency in {area.name}?
            </h2>
            <p className="text-white/75 text-sm">
              24/7 plumbing &amp; HVAC emergency response — average arrival under 90 minutes.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 Call {CLIENT.phone}</a>
            <Link href="/emergency" className="btn btn-emergency btn-lg">Emergency Services →</Link>
          </div>
        </div>
      </section>

      {/* ── OTHER AREAS ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">More Locations</span>
          <h2 className="section-title">Other Areas We Serve</h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/areas/${a.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 border-[1.5px] border-border
                           rounded-pill text-sm font-semibold text-text bg-white
                           hover:border-primary hover:text-primary transition-colors duration-150"
              >
                📍 {a.name}, {a.state}
              </Link>
            ))}
            <Link href="/areas" className="inline-flex items-center gap-2 px-4 py-2.5 border-[1.5px]
                         border-border rounded-pill text-sm font-semibold text-muted
                         hover:border-primary hover:text-primary transition-colors duration-150 bg-surface">
              View all areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
