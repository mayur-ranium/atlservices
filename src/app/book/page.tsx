import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

export const metadata: Metadata = {
  title: `Book a Service — ${CLIENT.businessName}`,
  description: `Schedule a service appointment with ${CLIENT.businessName}. Choose your service, preferred time, and we'll confirm within hours. Serving ${CLIENT.primaryArea}.`,
};

const TIME_SLOTS = [
  "7:00 am – 9:00 am",
  "9:00 am – 11:00 am",
  "11:00 am – 1:00 pm",
  "1:00 pm – 3:00 pm",
  "3:00 pm – 5:00 pm",
  "5:00 pm – 7:00 pm",
];

const BOOKING_FAQS = [
  { q: "How far in advance do I need to book?", a: "For most services, same-day or next-day appointments are available. Larger remodeling projects may need a few days to properly scope and schedule a crew." },
  { q: "Will you confirm my appointment?", a: "Yes — we'll call or text you within a few hours to confirm your appointment time and give you your technician's name." },
  { q: "What if I need to reschedule?", a: "Just call us at least 2 hours before your appointment and we'll find you a new slot at no charge." },
  { q: "Is there a booking fee?", a: "No booking fee. For some services (HVAC diagnosis, plumbing assessment) a small diagnostic fee applies and is credited toward the repair cost." },
];

const WHAT_TO_EXPECT = [
  { icon: "📅", title: "Pick Your Time", desc: "Choose a 2-hour arrival window that works for you." },
  { icon: "✅", title: "We Confirm", desc: "A team member confirms your appointment within a few hours." },
  { icon: "🔔", title: "Reminder Sent", desc: "We send a reminder the day before with your technician's name." },
  { icon: "🚗", title: "We Arrive On Time", desc: "Your tech arrives in the window, ready to work." },
];

export default function BookPage() {
  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Book a Service</span>
          </nav>

          <span className="eyebrow">Schedule Online</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Book an Appointment
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-xl mb-8">
            Choose your service and preferred time window. We&apos;ll confirm your appointment
            within a few hours — same-day slots available.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
            <span>✅ Same-day appointments available</span>
            <span>✅ 2-hour arrival windows</span>
            <span>✅ Confirmation call within hours</span>
            <span>✅ No booking fee</span>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────── */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_TO_EXPECT.map((step, i) => (
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

      {/* ── BOOKING FORM + SIDEBAR ────────────────────────────── */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* ── FORM ──────────────────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-extrabold text-dark mb-1" style={{ letterSpacing: "-0.02em" }}>
              Appointment Details
            </h2>
            <p className="text-muted text-sm mb-8">
              Fields marked <span className="text-emergency font-bold">*</span> are required.
            </p>

            <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-6">

              {/* ── Contact ──────────────────────────────────── */}
              <fieldset className="flex flex-col gap-4 p-6 border border-border rounded-lg bg-white">
                <legend className="text-sm font-black uppercase tracking-widest text-dark px-1">
                  Your Information
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-fname">
                      First Name <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="b-fname" name="first_name" type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-lname">
                      Last Name <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="b-lname" name="last_name" type="text" placeholder="Smith" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-phone">
                      Phone Number <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="b-phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-email">
                      Email Address <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="b-email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="b-address">
                    Service Address <span className="text-emergency">*</span>
                  </label>
                  <input className="form-input" id="b-address" name="address" type="text"
                    placeholder="123 Main St, Sample City, TX 75001" required />
                </div>
              </fieldset>

              {/* ── Service ──────────────────────────────────── */}
              <fieldset className="flex flex-col gap-4 p-6 border border-border rounded-lg bg-white">
                <legend className="text-sm font-black uppercase tracking-widest text-dark px-1">
                  Service &amp; Scheduling
                </legend>

                <div className="form-group">
                  <label className="form-label" htmlFor="b-service">
                    Service Needed <span className="text-emergency">*</span>
                  </label>
                  <select className="form-select" id="b-service" name="service" defaultValue="" required>
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => (
                      <option key={s.slug} value={s.name}>{s.icon} {s.name}</option>
                    ))}
                    <option value="Not sure — need assessment">Not sure — need assessment</option>
                  </select>
                </div>

                {/* Date preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-date1">
                      Preferred Date <span className="text-emergency">*</span>
                    </label>
                    <input className="form-input" id="b-date1" name="preferred_date" type="date" min={today} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-date2">Alternate Date</label>
                    <input className="form-input" id="b-date2" name="alternate_date" type="date" min={today} />
                  </div>
                </div>

                {/* Time window */}
                <div className="form-group">
                  <label className="form-label" htmlFor="b-time">
                    Preferred Arrival Window <span className="text-emergency">*</span>
                  </label>
                  <select className="form-select" id="b-time" name="time_window" defaultValue="" required>
                    <option value="" disabled>Select a window…</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <p className="text-muted text-xs mt-1">
                    We give a 2-hour window and call 30 minutes before arrival.
                  </p>
                </div>

                {/* Job details */}
                <div className="form-group">
                  <label className="form-label" htmlFor="b-details">
                    Describe the Job <span className="text-emergency">*</span>
                  </label>
                  <textarea
                    className="form-textarea min-h-[120px]"
                    id="b-details"
                    name="message"
                    placeholder="What needs to be done? Include any relevant details — size of job, access notes, specific issues, etc."
                    required
                  />
                </div>

                {/* Special access / notes */}
                <div className="form-group">
                  <label className="form-label" htmlFor="b-notes">Special Access or Notes</label>
                  <input className="form-input" id="b-notes" name="access_notes" type="text"
                    placeholder="Gate code, parking info, pet on premises, etc." />
                </div>
              </fieldset>

              <input type="hidden" name="_subject" value="New Appointment Request from Website" />
              <input type="hidden" name="form_type" value="booking" />

              <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
                Request Appointment →
              </button>

              <div className="p-4 bg-primary-light border border-primary/20 rounded-lg text-sm text-primary">
                <strong>What happens next:</strong> A team member will call to confirm your appointment,
                usually within 2–3 hours during business hours.
              </div>
            </FormSubmit>
          </div>

          {/* ── SIDEBAR ───────────────────────────────────────── */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">

            {/* Call option */}
            <div className="p-5 bg-primary rounded-lg text-center">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                Prefer to call?
              </p>
              <a href={CLIENT.phoneHref}
                className="inline-flex items-center gap-2 text-white font-black text-xl hover:text-accent transition-colors">
                📞 {CLIENT.phone}
              </a>
              <p className="text-white/60 text-xs mt-2">{CLIENT.hours.regular}</p>
            </div>

            {/* Service quick links */}
            <div className="p-5 border border-border rounded-lg bg-white">
              <p className="font-bold text-dark text-sm mb-4">Our Services</p>
              <div className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="flex items-center justify-between gap-3 text-sm text-muted
                               hover:text-primary transition-colors py-1.5 border-b border-border last:border-0"
                  >
                    <span className="flex items-center gap-2">
                      <span>{s.icon}</span>
                      <span className="font-medium">{s.name}</span>
                    </span>
                    <span className="text-xs text-muted shrink-0">from {s.startingPrice}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="p-5 bg-emergency-bg border border-emergency/20 rounded-lg">
              <p className="font-bold text-emergency text-sm mb-2">🚨 Emergency?</p>
              <p className="text-muted text-xs leading-relaxed mb-3">
                Don&apos;t use the booking form for emergencies — call us directly. We&apos;re available 24/7.
              </p>
              <Link href="/emergency" className="btn btn-emergency btn-sm w-full justify-center">
                Emergency Services →
              </Link>
            </div>

            {/* Hours */}
            <div className="p-5 border border-border rounded-lg bg-surface">
              <p className="font-bold text-dark text-sm mb-3">⏰ Business Hours</p>
              <p className="text-muted text-sm">{CLIENT.hours.regular}</p>
              <p className="text-emergency text-sm font-semibold mt-1">{CLIENT.hours.emergency}</p>
            </div>
          </aside>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container max-w-3xl">
          <span className="eyebrow">Booking Questions</span>
          <h2 className="section-title">Common Questions</h2>
          <div className="flex flex-col gap-3 mt-8">
            {BOOKING_FAQS.map((faq, i) => (
              <div key={i} className="p-5 bg-white border border-border rounded-lg">
                <p className="font-bold text-dark text-sm mb-2">{faq.q}</p>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-10 justify-center">
            <Link href="/quote" className="btn btn-outline">Need a Quote First?</Link>
            <Link href="/services" className="btn btn-outline">Browse All Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
