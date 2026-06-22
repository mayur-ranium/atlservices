import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, EMERGENCY_TYPES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

export const metadata: Metadata = {
  title: `Emergency Home Services — ${CLIENT.businessName}`,
  description: `24/7 emergency plumbing, HVAC, and repair service in ${CLIENT.primaryArea}. Average response under 90 minutes. Call ${CLIENT.phone} now.`,
};

export default function EmergencyPage() {
  return (
    <>
      {/* ── URGENT HERO ───────────────────────────────────────── */}
      <section className="bg-emergency-gradient py-16 md:py-20">
        <div className="container">

          {/* Alert bar */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-4 py-2 mb-8">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-sm font-bold tracking-wide uppercase">
              Emergency Line Active — We Answer 24/7
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

            {/* Left — copy */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
                Emergency Home<br />
                <span className="text-accent">Service. Now.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Burst pipe, no heat, AC failure, electrical issue — we have licensed technicians
                on call around the clock. Average response time under 90 minutes.
              </p>

              {/* Call CTA — biggest element on the page */}
              <a
                href={CLIENT.phoneHref}
                className="inline-flex items-center gap-3 bg-white text-emergency font-black text-2xl md:text-3xl
                           px-8 py-5 rounded-xl shadow-2xl hover:-translate-y-1 transition-transform duration-200 mb-6"
              >
                <span className="text-3xl">📞</span>
                {CLIENT.phone}
              </a>

              <p className="text-white/60 text-sm mb-10">
                Tap to call instantly. No hold music, no phone tree — a real person answers.
              </p>

              {/* Emergency type quick links */}
              <div className="flex flex-wrap gap-3">
                {EMERGENCY_TYPES.map((e) => (
                  <Link
                    key={e.slug}
                    href={`/emergency/${e.slug}`}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                               border border-white/20 text-white font-semibold text-sm
                               px-4 py-2.5 rounded-lg transition-colors duration-150"
                  >
                    {e.icon} {e.name} →
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20
                             border border-white/20 text-white font-semibold text-sm
                             px-4 py-2.5 rounded-lg transition-colors duration-150"
                >
                  ✉️ Send a Message →
                </Link>
              </div>
            </div>

            {/* Right — fast form */}
            <div className="bg-white rounded-2xl p-7 shadow-2xl">
              <p className="text-dark font-black text-xl mb-1">Request Emergency Help</p>
              <p className="text-muted text-sm mb-6">
                Fill this out and we&apos;ll call you back within minutes.
              </p>

              <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="em-name">Your Name</label>
                  <input
                    className="form-input"
                    id="em-name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="em-phone">Phone Number</label>
                  <input
                    className="form-input border-emergency focus:border-emergency focus:shadow-[0_0_0_3px_rgba(220,38,38,0.1)]"
                    id="em-phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="em-issue">What&apos;s the issue?</label>
                  <select className="form-select" id="em-issue" name="issue" required defaultValue="">
                    <option value="" disabled>Select issue type…</option>
                    {EMERGENCY_TYPES.map((e) => (
                      <option key={e.slug} value={e.name}>{e.icon} {e.name}</option>
                    ))}
                    <option value="Other urgent issue">Other urgent issue</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="em-detail">Brief description</label>
                  <textarea
                    className="form-textarea min-h-[80px]"
                    id="em-detail"
                    name="message"
                    placeholder="Describe what's happening — address, severity, anything relevant…"
                    required
                  />
                </div>

                <input type="hidden" name="_subject" value="🚨 EMERGENCY SERVICE REQUEST" />

                <button
                  type="submit"
                  className="btn btn-emergency btn-lg w-full justify-center text-base font-black"
                >
                  🚨 Send Emergency Request
                </button>
                <p className="text-xs text-muted text-center">
                  For the fastest response, call us directly at{" "}
                  <a href={CLIENT.phoneHref} className="text-emergency font-bold">
                    {CLIENT.phone}
                  </a>
                </p>
              </FormSubmit>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSE PROMISE ──────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <span className="eyebrow">Our Commitment</span>
            <h2 className="section-title">What to Expect</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESPONSE_STEPS.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 p-6">
                <div className="w-14 h-14 rounded-full bg-emergency-bg flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <div>
                  <p className="font-bold text-dark mb-1">{step.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY SERVICES LIST ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Emergency Coverage</span>
          <h2 className="section-title">Emergency Services We Cover</h2>
          <p className="section-subtitle">
            Available 24 hours a day, 7 days a week — including holidays.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EMERGENCY_SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="flex gap-4 p-5 border border-border rounded-lg bg-white hover:border-emergency/40 hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{svc.icon}</span>
                <div>
                  <p className="font-bold text-dark text-sm mb-1">{svc.title}</p>
                  <p className="text-muted text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE STRIP ───────────────────────────────────── */}
      <section className="bg-dark py-14">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {GUARANTEES.map((g) => (
              <div key={g.label} className="flex flex-col items-center gap-3">
                <span className="text-4xl font-black text-accent">{g.value}</span>
                <p className="text-white font-bold text-sm">{g.label}</p>
                <p className="text-white/50 text-xs leading-relaxed">{g.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title mb-4">Don&apos;t wait — call us now</h2>
          <p className="text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Every minute counts in an emergency. Our team is standing by.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={CLIENT.phoneHref} className="btn btn-emergency btn-lg">
              📞 Call {CLIENT.phone}
            </a>
            <Link href="/services" className="btn btn-outline btn-lg">
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Static data ─────────────────────────────────────────────────
const RESPONSE_STEPS = [
  { icon: "📞", title: "You Call or Submit", desc: "Call us directly or fill the form above. We pick up immediately." },
  { icon: "⚡", title: "Dispatched in Minutes", desc: "An on-call technician is dispatched to your location right away." },
  { icon: "🚗", title: "Arrive in Under 90 Min", desc: "Our target response time is 90 minutes or less, anywhere in our service area." },
  { icon: "🔧", title: "Problem Solved", desc: "We diagnose and fix the issue on the spot whenever possible — same visit." },
];

const EMERGENCY_SERVICES = [
  { icon: "🚿", title: "Burst or Leaking Pipes", desc: "Water pouring from a burst pipe can cause thousands in damage. We stop it fast." },
  { icon: "🚽", title: "Sewage Backup", desc: "A sewage backup is a health hazard. We clear blockages and restore flow immediately." },
  { icon: "🚱", title: "No Hot Water", desc: "Water heater failure leaves you without hot water. We repair or replace same-day." },
  { icon: "❄️", title: "AC Failure (Heat Emergency)", desc: "In extreme heat, AC failure is dangerous. We get your cooling system running again." },
  { icon: "🔥", title: "Heating System Down", desc: "No heat in winter is an emergency. We restore your furnace or heat pump fast." },
  { icon: "💨", title: "Gas Smell / HVAC Odor", desc: "Strange odors from your HVAC system can signal a serious issue. Call immediately." },
];

const GUARANTEES = [
  { value: "< 90 min", label: "Average Response Time", note: "We aim to be at your door in under 90 minutes anywhere in our service area" },
  { value: "24 / 7", label: "Always Available", note: "Nights, weekends, and holidays — our emergency line is always staffed" },
  { value: "Fixed Price", label: "No Surprise Bills", note: "We quote the job before starting. Emergency calls don't mean emergency pricing" },
];
