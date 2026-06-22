import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

export const metadata: Metadata = {
  title: `All Services — ${CLIENT.businessName}`,
  description: `Professional home services in ${CLIENT.primaryArea}: junk removal, remodeling, plumbing, HVAC, and more. Licensed, insured, same-day available.`,
};

const TRUST_STATS = [
  { num: `${CLIENT.projectsCompleted.toLocaleString()}+`, label: "Jobs completed" },
  { num: `${CLIENT.rating}★`, label: "Google rating" },
  { num: `${new Date().getFullYear() - CLIENT.yearFounded}+`, label: "Years in business" },
  { num: "24/7", label: "Emergency line" },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section style={s.hero}>
        <div className="container" style={s.heroInner}>
          <div style={s.heroCopy}>
            <span className="eyebrow" style={{ color: "var(--color-accent)" }}>
              Licensed &amp; Insured · {CLIENT.primaryArea}
            </span>
            <h1 style={s.h1}>All Home Services</h1>
            <p style={s.heroLead}>
              One company for every job on your list. All work is guaranteed, pricing is
              transparent, and our team is background-checked and fully licensed.
            </p>
            <div style={s.heroCtas}>
              <Link href="/book" className="btn btn-accent btn-lg">📅 Book a Service</Link>
              <Link href="/quote" className="btn btn-white btn-lg">Get a Free Quote</Link>
              <Link href="/emergency" className="btn btn-emergency btn-lg">🚨 Emergency</Link>
            </div>
          </div>

          <div className="services-hub-stats" style={s.statsRow}>
            {TRUST_STATS.map((t) => (
              <div key={t.label} style={s.statCard}>
                <span style={s.statNum}>{t.num}</span>
                <span style={s.statLabel}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Click any service to see full details, pricing, FAQs, and to book or get a quote.
          </p>

          <div style={s.cardsGrid}>
            {SERVICES.map((svc, i) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} style={s.serviceCard}>
                {/* Number */}
                <span style={s.cardNum}>0{i + 1}</span>

                {/* Icon + name */}
                <div style={s.cardTop}>
                  <div style={s.cardIcon}>{svc.icon}</div>
                  <div>
                    <h3 style={s.cardName}>{svc.name}</h3>
                    {svc.emergency && (
                      <span className="badge badge-emergency" style={{ marginTop: "4px" }}>
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                </div>

                <p style={s.cardDesc}>{svc.shortDesc}</p>

                {/* Price */}
                <div style={s.cardPrice}>
                  <span style={s.priceLabel}>Starting at</span>
                  <span style={s.priceNum}>{svc.startingPrice}</span>
                  <span style={s.priceNote}>{svc.priceNote}</span>
                </div>

                {/* CTA arrow */}
                <div style={s.cardCta}>
                  <span>View details, pricing &amp; FAQs</span>
                  <span style={s.arrow}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <span className="eyebrow">Simple Process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">From first contact to job complete — here&apos;s what to expect.</p>

          <div style={s.processGrid}>
            {HOW_IT_WORKS.map((step) => (
              <div key={step.num} style={s.processStep}>
                <div style={s.processNum}>{step.num}</div>
                <h3 style={s.processTitle}>{step.title}</h3>
                <p style={s.processDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ───────────────────────────────────── */}
      <section style={s.emergency}>
        <div className="container emergency-inner">
          <div>
            <h2 style={s.emergencyH2}>🚨 Need urgent help right now?</h2>
            <p style={s.emergencySub}>
              Burst pipe, no heat, AC failure — our emergency team responds in under 90 minutes, any time of day.
            </p>
          </div>
          <div className="emergency-actions">
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">
              📞 {CLIENT.phone}
            </a>
            <Link href="/emergency" className="btn btn-emergency btn-lg">
              Emergency Request
            </Link>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Our Promise</span>
          <h2 className="section-title">Every Job. Guaranteed.</h2>
          <div style={s.guaranteeGrid}>
            {GUARANTEES.map((g) => (
              <div key={g.title} style={s.guaranteeCard}>
                <span style={s.guaranteeIcon}>{g.icon}</span>
                <h3 style={s.guaranteeTitle}>{g.title}</h3>
                <p style={s.guaranteeDesc}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <QuoteFormSection heading="Tell Us What You Need — We'll Handle the Rest" />
    </>
  );
}

// ─── Data ────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  { num: "01", title: "Book or Call", desc: "Schedule online in 60 seconds or call us directly. We confirm your appointment window immediately." },
  { num: "02", title: "We Show Up On Time", desc: "Our team arrives in the scheduled window. If we're running late, we call ahead — always." },
  { num: "03", title: "Upfront Price", desc: "We assess the job and give you a fixed price before starting. No surprise bills." },
  { num: "04", title: "Quality Work, Guaranteed", desc: "We complete the job to your satisfaction. If something isn't right, we come back and fix it." },
];

const GUARANTEES = [
  { icon: "🛡️", title: "1-Year Workmanship Warranty", desc: "All labor is backed by a 12-month guarantee. If a repair fails, we fix it at no charge." },
  { icon: "💰", title: "Price-Lock Promise", desc: "The price we quote is the price you pay. No add-ons, no change orders without your approval." },
  { icon: "🕐", title: "On-Time Arrival", desc: "We give you a 2-hour arrival window and call if anything changes. Your time matters." },
  { icon: "🏆", title: "Satisfaction Guarantee", desc: "Not satisfied with the result? We come back and make it right before you pay the final invoice." },
  { icon: "✅", title: "Licensed & Insured", desc: "Every technician is background-checked, licensed in their trade, and covered by our liability policy." },
  { icon: "♻️", title: "Eco-Responsible Disposal", desc: "We sort, donate, and recycle what we can. We don't just dump — we do it responsibly." },
];

// ─── Styles ──────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, var(--color-dark) 0%, #1a2744 100%)",
    padding: "4.5rem 0 3.5rem",
  },
  heroInner: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  },
  heroCopy: { maxWidth: "680px" },
  h1: {
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
    fontWeight: 900,
    color: "#fff",
    marginBottom: "1rem",
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
  },
  heroLead: {
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.65,
    marginBottom: "2rem",
    maxWidth: "560px",
  },
  heroCtas: { display: "flex", gap: "0.875rem", flexWrap: "wrap" },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
    maxWidth: "600px",
  },
  statCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "var(--radius-lg)",
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
    textAlign: "center",
  },
  statNum: { fontSize: "1.5rem", fontWeight: 900, color: "var(--color-accent)", lineHeight: 1 },
  statLabel: { fontSize: "0.7rem", fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  serviceCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    background: "var(--color-white)",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.75rem",
    textDecoration: "none",
    transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
    boxShadow: "var(--shadow-sm)",
    overflow: "hidden",
  },
  cardNum: {
    position: "absolute",
    top: "1.25rem",
    right: "1.25rem",
    fontSize: "2rem",
    fontWeight: 900,
    color: "var(--color-border)",
    lineHeight: 1,
  },
  cardTop: { display: "flex", alignItems: "flex-start", gap: "1rem" },
  cardIcon: {
    fontSize: "1.75rem",
    width: "52px",
    height: "52px",
    background: "var(--color-primary-light)",
    borderRadius: "var(--radius-md)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardName: { fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)" },
  cardDesc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6, flex: 1 },
  cardPrice: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    padding: "0.875rem 1rem",
    background: "var(--color-surface)",
    borderRadius: "var(--radius-md)",
    borderLeft: "3px solid var(--color-primary)",
  },
  priceLabel: { fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-muted)" },
  priceNum: { fontSize: "1.25rem", fontWeight: 800, color: "var(--color-primary)" },
  priceNote: { fontSize: "0.75rem", color: "var(--color-muted)" },
  cardCta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "var(--color-primary)",
    marginTop: "auto",
  },
  arrow: { fontSize: "1.1rem", transition: "transform 0.2s" },

  processGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "2rem",
    marginTop: "2.5rem",
  },
  processStep: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  processNum: {
    width: "48px",
    height: "48px",
    borderRadius: "var(--radius-md)",
    background: "var(--color-primary)",
    color: "#fff",
    fontWeight: 900,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  processTitle: { fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)" },
  processDesc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 },

  emergency: {
    background: "linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)",
    padding: "3.5rem 0",
  },
  emergencyH2: { fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", letterSpacing: "-0.01em" },
  emergencySub: { color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 },

  guaranteeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginTop: "3rem",
  },
  guaranteeCard: {
    padding: "1.5rem",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",
  },
  guaranteeIcon: { fontSize: "1.75rem" },
  guaranteeTitle: { fontSize: "0.95rem", fontWeight: 700, color: "var(--color-dark)" },
  guaranteeDesc: { fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6 },
};
