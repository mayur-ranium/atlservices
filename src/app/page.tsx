import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `${CLIENT.businessName} — Home Services in ${CLIENT.primaryArea}`,
  description: CLIENT.description,
};

// ─── Static review data (replace with Google Places API live data) ──────────
const SAMPLE_REVIEWS = [
  { name: "James R.", rating: 5, text: "ProFix showed up same day for a burst pipe. Fixed it in under 2 hours. Extremely professional and fair pricing. Will use again.", service: "Plumbing", date: "2 weeks ago" },
  { name: "Maria S.", rating: 5, text: "Hired them for a kitchen remodel and couldn't be happier. Finished on time, on budget, and the quality is outstanding.", service: "Remodeling", date: "1 month ago" },
  { name: "Derek T.", rating: 5, text: "AC went out in the middle of summer. They had a tech out within 90 minutes. Up and running the same evening. Lifesavers.", service: "HVAC", date: "3 weeks ago" },
  { name: "Angela P.", rating: 5, text: "Cleared out an entire garage worth of junk in 3 hours. Clean, fast, and way cheaper than I expected.", service: "Junk Removal", date: "1 week ago" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section style={heroStyles.section}>
        <div className="container hero-inner">
          <div style={heroStyles.content}>
            <span className="eyebrow">📍 Serving {CLIENT.primaryArea}</span>
            <h1 style={heroStyles.h1}>
              Home Services<br />
              <span style={{ color: "var(--color-accent)" }}>You Can Count On.</span>
            </h1>
            <p style={heroStyles.lead}>{CLIENT.tagline}</p>

            {/* Trust row */}
            <div className="hero-trust-row">
              <span style={heroStyles.trustItem}>
                <span style={{ color: "var(--color-accent)" }}>★★★★★</span> {CLIENT.rating} ({CLIENT.reviewCount} reviews)
              </span>
              <span style={heroStyles.trustDot} />
              <span style={heroStyles.trustItem}>✅ Licensed &amp; Insured</span>
              <span style={heroStyles.trustDot} />
              <span style={heroStyles.trustItem}>🏅 Since {CLIENT.yearFounded}</span>
            </div>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link href="/book" className="btn btn-primary btn-lg">📅 Book Online</Link>
              <Link href="/quote" className="btn btn-accent btn-lg">Get a Free Quote</Link>
              <a href={CLIENT.phoneHref} style={heroStyles.phoneLink}>
                📞 <strong>{CLIENT.phone}</strong>
              </a>
            </div>

            {/* Emergency strip */}
            <Link href="/emergency" style={heroStyles.emergency}>
              🚨 <strong>Need emergency service?</strong> We&apos;re available 24/7 for plumbing &amp; HVAC →
            </Link>
          </div>

          {/* Hero stats panel */}
          <div className="hero-stats-panel">
            <div style={heroStyles.statCard}>
              <span style={heroStyles.statNum}>{CLIENT.projectsCompleted.toLocaleString()}+</span>
              <span style={heroStyles.statLabel}>Jobs Completed</span>
            </div>
            <div style={heroStyles.statCard}>
              <span style={heroStyles.statNum}>{CLIENT.rating}</span>
              <span style={heroStyles.statLabel}>Google Rating</span>
            </div>
            <div style={heroStyles.statCard}>
              <span style={heroStyles.statNum}>{new Date().getFullYear() - CLIENT.yearFounded}+</span>
              <span style={heroStyles.statLabel}>Years in Business</span>
            </div>
            <div style={heroStyles.statCard}>
              <span style={heroStyles.statNum}>24/7</span>
              <span style={heroStyles.statLabel}>Emergency Line</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Professional, licensed service for every job — big or small. All work is guaranteed.</p>

          <div className="services-grid">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={gridStyles.card}>
                <div style={gridStyles.icon}>{s.icon}</div>
                <h3 style={gridStyles.name}>{s.name}</h3>
                <p style={gridStyles.desc}>{s.shortDesc}</p>
                <div style={gridStyles.footer}>
                  <span style={gridStyles.price}>Starting at {s.startingPrice}</span>
                  {s.emergency && <span style={gridStyles.badge}>🚨 24/7 Emergency</span>}
                </div>
                <span style={gridStyles.cta}>View service →</span>
              </Link>
            ))}

            {/* "All services" card */}
            <Link href="/services" style={{ ...gridStyles.card, background: "var(--color-primary)", border: "none" }}>
              <div style={{ ...gridStyles.icon, background: "rgba(255,255,255,0.15)" }}>🔨</div>
              <h3 style={{ ...gridStyles.name, color: "#fff" }}>More Services</h3>
              <p style={{ ...gridStyles.desc, color: "rgba(255,255,255,0.8)" }}>
                See everything we offer — from electrical to roofing.
              </p>
              <span style={{ ...gridStyles.cta, color: "var(--color-accent)" }}>Browse all services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Why ProFix</span>
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="why-grid">
            {WHY_ITEMS.map((item) => (
              <div key={item.title} style={whyStyles.item}>
                <div style={whyStyles.icon}>{item.icon}</div>
                <h3 style={whyStyles.title}>{item.title}</h3>
                <p style={whyStyles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-primary)" }}>
        <div className="container quote-inner">
          <div style={quoteStyles.copy}>
            <span style={{ ...quoteStyles.eyebrow }}>Free Estimate</span>
            <h2 style={quoteStyles.h2}>Get a Free Quote in 24 Hours</h2>
            <p style={quoteStyles.lead}>
              Describe your project and we&apos;ll get back to you with a no-obligation estimate. Most quotes delivered within a few hours during business hours.
            </p>
            <ul style={quoteStyles.bullets}>
              <li>✅ No obligation, no pressure</li>
              <li>✅ Transparent itemized pricing</li>
              <li>✅ Licensed &amp; insured technicians</li>
            </ul>
          </div>
          <div style={quoteStyles.form}>
            <QuoteFormInline />
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Customer Reviews</span>
          <div className="reviews-header">
            <div>
              <h2 className="section-title">What Our Customers Say</h2>
              <div style={reviewStyles.aggregate}>
                <span style={reviewStyles.stars}>★★★★★</span>
                <span style={reviewStyles.rating}>{CLIENT.rating}</span>
                <span style={reviewStyles.count}>from {CLIENT.reviewCount} Google reviews</span>
              </div>
            </div>
            <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              See all reviews ↗
            </a>
          </div>

          <div style={reviewStyles.grid}>
            {SAMPLE_REVIEWS.map((r, i) => (
              <div key={i} style={reviewStyles.card}>
                <div style={reviewStyles.cardHeader}>
                  <div style={reviewStyles.avatar}>{r.name[0]}</div>
                  <div>
                    <p style={reviewStyles.reviewer}>{r.name}</p>
                    <p style={reviewStyles.meta}>{r.service} · {r.date}</p>
                  </div>
                  <span style={reviewStyles.googleBadge}>G</span>
                </div>
                <div style={reviewStyles.cardStars}>{"★".repeat(r.rating)}</div>
                <p style={reviewStyles.reviewText}>&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ─────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Coverage</span>
          <h2 className="section-title">Areas We Serve</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
            We serve {CLIENT.primaryArea} and the surrounding communities. Not sure if we cover your area? Give us a call.
          </p>
          <div className="areas-pills">
            {CLIENT.serviceAreas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} style={areasStyles.pill}>
                📍 {a.name}, {a.state}
              </Link>
            ))}
          </div>
          <Link href="/areas" className="btn btn-outline" style={{ marginTop: "2rem" }}>
            See full service area map →
          </Link>
        </div>
      </section>

      {/* ── EMERGENCY CTA ─────────────────────────────────────── */}
      <section style={emergencyStyles.section}>
        <div className="container emergency-inner">
          <div>
            <h2 style={emergencyStyles.h2}>🚨 Plumbing emergency? AC out in the heat?</h2>
            <p style={emergencyStyles.sub}>
              Our emergency team is on call 24 hours a day, 7 days a week. Average response time under 90 minutes.
            </p>
          </div>
          <div className="emergency-actions">
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 Call Now — {CLIENT.phone}</a>
            <Link href="/emergency" className="btn btn-emergency btn-lg">Emergency Request Form</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Inline quote form component ────────────────────────────────
function QuoteFormInline() {
  return (
    <form
      action={CLIENT.formspreeEndpoint}
      method="POST"
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <div className="quote-form-grid">
        <div className="form-group">
          <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="name">Your Name</label>
          <input className="form-input" id="name" name="name" type="text" placeholder="John Smith" required />
        </div>
        <div className="form-group">
          <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="phone">Phone Number</label>
          <input className="form-input" id="phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="service">Service Needed</label>
        <select className="form-select" id="service" name="service" required>
          <option value="">Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
          <option value="Other">Other / Not sure</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="message">Tell us about your project</label>
        <textarea className="form-textarea" id="message" name="message" placeholder="Briefly describe what you need done, including your address if possible…" required />
      </div>
      <input type="hidden" name="_subject" value="New Quote Request from Website" />
      <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%", justifyContent: "center" }}>
        Send My Free Quote Request →
      </button>
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", textAlign: "center" }}>
        We respond within a few hours during business hours. No spam, no pressure.
      </p>
    </form>
  );
}

// ─── Data ────────────────────────────────────────────────────────
const WHY_ITEMS = [
  { icon: "🛡️", title: "Licensed & Insured", desc: "Every technician is fully licensed and we carry complete liability coverage on all jobs." },
  { icon: "📅", title: "Same-Day Service", desc: "For most services we can have someone to you the same day you call — often within hours." },
  { icon: "💰", title: "Transparent Pricing", desc: "We quote before we start. No surprise charges, no hidden fees — ever." },
  { icon: "⭐", title: "Guaranteed Work", desc: "Not happy? We'll come back and make it right at no charge. Your satisfaction is our standard." },
  { icon: "🚨", title: "24/7 Emergency Line", desc: "Plumbing or HVAC emergencies don't wait for business hours. Neither do we." },
  { icon: "♻️", title: "Eco-Friendly Disposal", desc: "We sort, donate, and recycle as much as possible on every junk removal and demo job." },
];

// ─── Styles ──────────────────────────────────────────────────────
const heroStyles: Record<string, React.CSSProperties> = {
  section: {
    background: "linear-gradient(135deg, var(--color-dark) 0%, #1a2744 100%)",
    padding: "5rem 0 4rem",
  },
  inner: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "4rem",
    alignItems: "center",
  },
  content: { maxWidth: "640px" },
  h1: {
    fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.1,
    marginBottom: "1.25rem",
    letterSpacing: "-0.03em",
  },
  lead: {
    fontSize: "1.2rem",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.6,
    marginBottom: "1.5rem",
  },
  trustRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.875rem",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  trustItem: { color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", fontWeight: 500 },
  trustDot: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.3)",
    display: "inline-block",
  },
  ctas: { display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap", marginBottom: "1.5rem" },
  phoneLink: {
    color: "rgba(255,255,255,0.9)",
    fontSize: "1rem",
    fontWeight: 600,
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
  },
  emergency: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "rgba(220,38,38,0.15)",
    border: "1px solid rgba(220,38,38,0.3)",
    borderRadius: "var(--radius-md)",
    padding: "0.75rem 1rem",
    color: "#FCA5A5",
    fontSize: "0.875rem",
    textDecoration: "none",
  },
  statsPanel: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    flexShrink: 0,
  },
  statCard: {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "var(--radius-lg)",
    padding: "1.5rem 1.25rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.375rem",
    backdropFilter: "blur(10px)",
  },
  statNum: { fontSize: "2rem", fontWeight: 900, color: "var(--color-accent)", lineHeight: 1 },
  statLabel: { fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.55)", textAlign: "center" as const, textTransform: "uppercase" as const, letterSpacing: "0.06em" },
};

const gridStyles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",
    background: "var(--color-white)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.75rem",
    textDecoration: "none",
    transition: "box-shadow 0.2s, transform 0.2s",
    boxShadow: "var(--shadow-sm)",
  },
  icon: {
    fontSize: "2rem",
    background: "var(--color-primary-light)",
    borderRadius: "var(--radius-md)",
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.25rem",
  },
  name: { fontSize: "1.125rem", fontWeight: 700, color: "var(--color-dark)" },
  desc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.55, flex: 1 },
  footer: { display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.25rem" },
  price: { fontSize: "0.8rem", fontWeight: 700, color: "var(--color-primary)" },
  badge: { fontSize: "0.7rem", fontWeight: 600, background: "var(--color-emergency-bg)", color: "var(--color-emergency)", borderRadius: "var(--radius-pill)", padding: "0.2rem 0.6rem" },
  cta: { fontSize: "0.875rem", fontWeight: 600, color: "var(--color-primary)", marginTop: "auto" },
};

const whyStyles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  item: { display: "flex", flexDirection: "column", gap: "0.75rem" },
  icon: { fontSize: "2rem" },
  title: { fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)" },
  desc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 },
};

const quoteStyles: Record<string, React.CSSProperties> = {
  inner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  copy: {},
  eyebrow: {
    display: "inline-block",
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    marginBottom: "0.75rem",
  },
  h2: { fontSize: "2.25rem", fontWeight: 800, color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" },
  lead: { color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: "1.25rem" },
  bullets: { display: "flex", flexDirection: "column", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" },
  form: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "var(--radius-xl)",
    padding: "2rem",
    backdropFilter: "blur(10px)",
  },
};

const reviewStyles: Record<string, React.CSSProperties> = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "2.5rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  aggregate: { display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.75rem" },
  stars: { color: "var(--color-accent)", fontSize: "1.25rem" },
  rating: { fontSize: "1.75rem", fontWeight: 900, color: "var(--color-dark)" },
  count: { fontSize: "0.875rem", color: "var(--color-muted)" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    background: "var(--color-white)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.5rem",
    boxShadow: "var(--shadow-sm)",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  cardHeader: { display: "flex", alignItems: "center", gap: "0.875rem" },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "var(--color-primary)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "1rem",
    flexShrink: 0,
  },
  reviewer: { fontWeight: 700, fontSize: "0.9rem", color: "var(--color-dark)" },
  meta: { fontSize: "0.75rem", color: "var(--color-muted)" },
  googleBadge: {
    marginLeft: "auto",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#4285F4",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: "0.8rem",
    flexShrink: 0,
  },
  cardStars: { color: "var(--color-accent)", fontSize: "1rem" },
  reviewText: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.65, fontStyle: "italic" },
};

const areasStyles: Record<string, React.CSSProperties> = {
  pills: { display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" },
  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.375rem",
    padding: "0.625rem 1.125rem",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "var(--color-text)",
    textDecoration: "none",
    background: "var(--color-white)",
    transition: "border-color 0.15s, color 0.15s",
  },
};

const emergencyStyles: Record<string, React.CSSProperties> = {
  section: {
    background: "linear-gradient(135deg, #7F1D1D 0%, #991B1B 100%)",
    padding: "4rem 0",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  h2: { fontSize: "1.75rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem", letterSpacing: "-0.01em" },
  sub: { color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.6 },
  actions: { display: "flex", gap: "1rem", flexWrap: "wrap", flexShrink: 0 },
};
