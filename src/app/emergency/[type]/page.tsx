import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CLIENT, EMERGENCY_TYPES, SERVICES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

type Props = { params: { type: string } };

const EMERGENCY_CONTENT: Record<string, {
  heading: string;
  lead: string;
  signs: string[];
  doNow: string[];
  faqs: { q: string; a: string }[];
}> = {
  plumbing: {
    heading: "Emergency Plumbing Service",
    lead:
      "Burst pipes, severe leaks, sewage backups, and no hot water are all plumbing emergencies we handle 24/7. Don't let water damage spread — call us now.",
    signs: [
      "Water actively flowing from a pipe or fixture",
      "Sewage smell or backed-up toilets / drains",
      "No hot water (especially in winter)",
      "Sudden drop in water pressure throughout the home",
      "Ceiling or wall stains that are growing quickly",
      "Flooding in basement or crawl space",
    ],
    doNow: [
      "Turn off the main water shut-off valve to stop flow",
      "Turn off the water heater if the tank is leaking",
      "Move valuables and electronics away from wet areas",
      "Do not use electrical appliances near standing water",
      "Call us immediately — every minute reduces damage",
    ],
    faqs: [
      { q: "How fast can you get here for a plumbing emergency?", a: "Our target response time is under 90 minutes anywhere in our service area. For major leaks and flooding we prioritize accordingly." },
      { q: "Do you charge extra for after-hours emergency calls?", a: "We charge a flat emergency dispatch fee for after-hours calls, which is disclosed upfront before any work begins. No surprise billing." },
      { q: "Where is the main water shut-off in my home?", a: "It's usually near where the main supply line enters the house — often in the basement, crawl space, utility room, or outside near the foundation. When in doubt, call us and we'll walk you through it." },
      { q: "Can you fix a burst pipe the same visit?", a: "In most cases, yes. Our trucks carry common pipe materials and fittings. Complex repairs may require a follow-up, but we'll stop the leak and make it safe on the first visit." },
    ],
  },
  hvac: {
    heading: "Emergency HVAC Service",
    lead:
      "AC failure in extreme heat or a furnace going down in winter are health and safety emergencies. We have HVAC technicians on call 24/7 to get your system running again.",
    signs: [
      "No cool air when the AC is running (especially above 95°F outside)",
      "No heat when the furnace or heat pump is running (below 35°F outside)",
      "Gas smell near your furnace — leave the home immediately and call",
      "HVAC system making loud banging, grinding, or screeching noises",
      "Carbon monoxide alarm triggered near your heating system",
      "System running non-stop but not reaching temperature",
    ],
    doNow: [
      "If you smell gas — leave the house immediately and call 911, then us",
      "If CO alarm goes off — evacuate immediately and call 911",
      "For AC failure in extreme heat — move to a cooler area or neighbor",
      "Check and replace your air filter if it's been over 3 months",
      "Check the circuit breaker — sometimes a tripped breaker is the cause",
    ],
    faqs: [
      { q: "My AC stopped working — is it an emergency in summer?", a: "In temperatures above 95°F, especially for elderly residents, children, or people with medical conditions, yes — AC failure is a health emergency. We prioritize these calls." },
      { q: "My furnace went out at night — can you come right now?", a: "Yes. Our emergency technicians are available overnight. Call the emergency line and we dispatch immediately." },
      { q: "I smell something burning from my vents — what do I do?", a: "Turn off the system at the thermostat and call us immediately. A burning smell can indicate an electrical issue, debris in the system, or a motor burning out — all require prompt attention." },
      { q: "Can you repair my system the same night?", a: "Many HVAC repairs are completed same-visit — capacitors, contactors, refrigerant recharge, and thermostat issues are common same-night fixes. Major component failures may require a next-day part order." },
    ],
  },
};

export function generateStaticParams() {
  return EMERGENCY_TYPES.map((e) => ({ type: e.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const content = EMERGENCY_CONTENT[params.type];
  if (!content) return {};
  const eType = EMERGENCY_TYPES.find((e) => e.slug === params.type);
  return {
    title: `${content.heading} in ${CLIENT.primaryArea} — ${CLIENT.businessName}`,
    description: `24/7 ${eType?.name ?? "emergency"} service in ${CLIENT.primaryArea}. Response in under 90 minutes. Call ${CLIENT.phone} now.`,
  };
}

export default function EmergencyTypePage({ params }: Props) {
  const content = EMERGENCY_CONTENT[params.type];
  const eType = EMERGENCY_TYPES.find((e) => e.slug === params.type);

  if (!content || !eType) notFound();

  const relatedService = SERVICES.find((s) => s.slug === eType.service);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-emergency-gradient py-14 md:py-20">
        <div className="container">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <Link href="/emergency" className="text-white/50 hover:text-white/80 transition-colors">Emergency</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">{eType.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-10 items-start">

            {/* Copy */}
            <div>
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-4 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse inline-block" />
                <span className="text-white text-sm font-bold">Available Now — 24/7</span>
              </div>

              <div className="text-4xl mb-4">{eType.icon}</div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
                {content.heading}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
                {content.lead}
              </p>

              {/* Big call button */}
              <a
                href={CLIENT.phoneHref}
                className="inline-flex items-center gap-3 bg-white text-emergency font-black
                           text-2xl md:text-3xl px-8 py-5 rounded-xl shadow-2xl
                           hover:-translate-y-1 transition-transform duration-200 mb-4"
              >
                <span className="text-3xl">📞</span>
                {CLIENT.phone}
              </a>
              <p className="text-white/60 text-sm">Tap to call — a real person answers immediately</p>
            </div>

            {/* Fast form */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <p className="text-dark font-black text-lg mb-1">Request Help Now</p>
              <p className="text-muted text-sm mb-5">We&apos;ll call you back within minutes.</p>

              <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="et-name">Your Name</label>
                  <input className="form-input" id="et-name" name="name" type="text" placeholder="John Smith" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="et-phone">Phone Number</label>
                  <input
                    className="form-input border-emergency focus:border-emergency"
                    id="et-phone" name="phone" type="tel"
                    placeholder="(555) 000-0000" required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="et-address">Service Address</label>
                  <input className="form-input" id="et-address" name="address" type="text" placeholder="123 Main St, City" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="et-detail">What&apos;s happening?</label>
                  <textarea className="form-textarea min-h-[80px]" id="et-detail" name="message"
                    placeholder="Describe the issue briefly…" required />
                </div>
                <input type="hidden" name="_subject" value={`🚨 Emergency: ${eType.name}`} />
                <input type="hidden" name="service_type" value={eType.name} />

                <button type="submit" className="btn btn-emergency w-full justify-center font-black">
                  🚨 Send Emergency Request
                </button>
              </FormSubmit>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNS YOU HAVE AN EMERGENCY ───────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <span className="eyebrow text-emergency">Warning Signs</span>
              <h2 className="text-2xl font-extrabold text-dark mb-6" style={{ letterSpacing: "-0.02em" }}>
                Signs You Have an Emergency
              </h2>
              <ul className="flex flex-col gap-3">
                {content.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 text-sm text-text leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emergency-bg text-emergency flex items-center justify-center
                                     text-xs font-black flex-shrink-0 mt-0.5">!</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow">While You Wait</span>
              <h2 className="text-2xl font-extrabold text-dark mb-6" style={{ letterSpacing: "-0.02em" }}>
                What to Do Right Now
              </h2>
              <ul className="flex flex-col gap-3">
                {content.doNow.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center
                                     text-white text-xs font-black flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>

              {/* Response promise box */}
              <div className="mt-8 p-5 bg-surface rounded-lg border border-border">
                <p className="font-bold text-dark text-sm mb-3">Our Emergency Promise</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xl font-black text-emergency">90 min</p>
                    <p className="text-muted text-xs mt-1">Response target</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-emergency">24/7</p>
                    <p className="text-muted text-xs mt-1">Always available</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-emergency">Fixed</p>
                    <p className="text-muted text-xs mt-1">Price upfront</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <span className="eyebrow">Common Questions</span>
          <h2 className="section-title">FAQ</h2>
          <div className="flex flex-col gap-3 mt-8">
            {content.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-5">
                <p className="font-bold text-dark text-sm mb-2">{faq.q}</p>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICE + OTHER EMERGENCY ─────────────────── */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Link to full service page */}
            {relatedService && (
              <div className="p-6 border border-border rounded-lg bg-white">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3">Related Service</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{relatedService.icon}</span>
                  <p className="font-bold text-dark">{relatedService.name}</p>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{relatedService.shortDesc}</p>
                <Link href={`/services/${relatedService.slug}`} className="btn btn-outline btn-sm">
                  View Full Service Page →
                </Link>
              </div>
            )}

            {/* Other emergency types */}
            <div className="p-6 border border-emergency/30 bg-emergency-bg rounded-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-emergency mb-3">Other Emergencies</p>
              <div className="flex flex-col gap-3">
                {EMERGENCY_TYPES.filter((e) => e.slug !== params.type).map((e) => (
                  <Link
                    key={e.slug}
                    href={`/emergency/${e.slug}`}
                    className="flex items-center gap-3 text-sm font-semibold text-dark hover:text-emergency transition-colors"
                  >
                    <span>{e.icon}</span> {e.name} →
                  </Link>
                ))}
                <Link
                  href="/emergency"
                  className="flex items-center gap-2 text-sm font-semibold text-dark hover:text-emergency transition-colors"
                >
                  🚨 All Emergency Services →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="bg-dark py-14">
        <div className="container text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-4">Ready to help right now</p>
          <a
            href={CLIENT.phoneHref}
            className="inline-flex items-center gap-3 bg-emergency text-white font-black
                       text-xl md:text-2xl px-8 py-5 rounded-xl shadow-xl
                       hover:-translate-y-1 transition-transform duration-200"
          >
            📞 Call {CLIENT.phone}
          </a>
          <p className="text-white/40 text-sm mt-4">
            Or <Link href="/emergency" className="text-white/60 underline">submit the emergency form</Link>
          </p>
        </div>
      </section>
    </>
  );
}
