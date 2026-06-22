import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CLIENT, SERVICES, SERVICE_FAQS } from "@/lib/client-config";
import { SERVICE_DETAILS } from "@/lib/services-data";
import FAQAccordion from "@/components/ui/FAQAccordion";
import QuoteFormSection from "@/components/sections/QuoteFormSection";

type Props = { params: { slug: string } };

// Statically generate a page for every service slug
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.name} in ${CLIENT.primaryArea} — ${CLIENT.businessName}`,
    description: `${svc.shortDesc} Starting at ${svc.startingPrice}. Licensed, insured. Same-day available. Call or book online.`,
  };
}

export default function ServicePage({ params }: Props) {
  const svc = SERVICES.find((s) => s.slug === params.slug);
  const detail = SERVICE_DETAILS[params.slug];
  const faqs = SERVICE_FAQS[params.slug] ?? [];

  if (!svc || !detail) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== params.slug);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={s.hero}>
        <div className="container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={s.breadcrumb}>
            <Link href="/" style={s.breadcrumbLink}>Home</Link>
            <span style={s.breadcrumbSep}>›</span>
            <Link href="/services" style={s.breadcrumbLink}>Services</Link>
            <span style={s.breadcrumbSep}>›</span>
            <span style={{ color: "rgba(255,255,255,0.6)" }}>{svc.name}</span>
          </nav>

          <div className="service-hero-body" style={s.heroBody}>
            <div style={s.heroCopy}>
              <div style={s.heroIcon}>{svc.icon}</div>
              <h1 style={s.h1}>{svc.name}</h1>
              <p style={s.heroLead}>{detail.longDesc}</p>

              {/* Trust badges */}
              <div style={s.badges}>
                <span className="badge" style={s.badgeItem}>✅ Licensed &amp; Insured</span>
                <span className="badge" style={s.badgeItem}>⭐ {CLIENT.rating} Rating</span>
                <span className="badge" style={s.badgeItem}>🕐 Same-Day Available</span>
                {svc.emergency && (
                  <span className="badge badge-emergency">🚨 24/7 Emergency</span>
                )}
              </div>

              <div style={s.heroCtas}>
                <Link href="/book" className="btn btn-accent btn-lg">📅 Book This Service</Link>
                <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 {CLIENT.phone}</a>
                <Link href="/quote" className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                  Free Quote
                </Link>
              </div>
            </div>

            {/* Starting price card */}
            <div className="service-price-card" style={s.priceCard}>
              <p style={s.priceEyebrow}>Starting at</p>
              <p style={s.priceNum}>{svc.startingPrice}</p>
              <p style={s.priceNote}>{svc.priceNote}</p>
              <div style={s.priceDivider} />
              <p style={s.priceGuarantee}>💯 Price quoted before we start. No surprises.</p>
              <Link href="/quote" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                Get an Exact Quote
              </Link>
              {svc.emergency && (
                <Link href="/emergency" className="btn btn-emergency" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }}>
                  🚨 Emergency Call
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="service-included-grid" style={s.includedGrid}>
            <div>
              <span className="eyebrow">What&apos;s Covered</span>
              <h2 style={s.sectionH2}>What&apos;s Included</h2>
              <ul style={s.includedList}>
                {detail.included.map((item) => (
                  <li key={item} style={s.includedItem}>
                    <span style={s.check}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Good to Know</span>
              <h2 style={s.sectionH2}>Not Included</h2>
              <ul style={s.includedList}>
                {detail.notIncluded.map((item) => (
                  <li key={item} style={s.includedItem}>
                    <span style={{ ...s.check, background: "var(--color-surface)", color: "var(--color-muted)" }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "1rem" }}>
                Not sure if your project qualifies?{" "}
                <a href={CLIENT.phoneHref} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                  Call us
                </a>{" "}
                and we&apos;ll tell you in 60 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. The price you see is what you pay — quoted before we start.
          </p>

          <div style={s.pricingGrid}>
            {detail.pricingTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  ...s.pricingCard,
                  ...(tier.highlight ? s.pricingCardHighlight : {}),
                }}
              >
                {tier.highlight && (
                  <span style={s.popularBadge}>Most Popular</span>
                )}
                <h3 style={{ ...s.tierName, ...(tier.highlight ? { color: "#fff" } : {}) }}>
                  {tier.name}
                </h3>
                <p style={{ ...s.tierPrice, ...(tier.highlight ? { color: "var(--color-accent)" } : {}) }}>
                  {tier.price}
                </p>
                <p style={{ ...s.tierNote, ...(tier.highlight ? { color: "rgba(255,255,255,0.7)" } : {}) }}>
                  {tier.note}
                </p>
                <div style={{ ...s.tierDivider, ...(tier.highlight ? { borderColor: "rgba(255,255,255,0.15)" } : {}) }} />
                <ul style={s.tierList}>
                  {tier.items.map((item) => (
                    <li key={item} style={{ ...s.tierItem, ...(tier.highlight ? { color: "rgba(255,255,255,0.85)" } : {}) }}>
                      <span style={{ color: tier.highlight ? "var(--color-accent)" : "var(--color-primary)" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote"
                  className={`btn ${tier.highlight ? "btn-accent" : "btn-outline"}`}
                  style={{ marginTop: "auto", width: "100%", justifyContent: "center" }}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>

          <p style={s.pricingDisclaimer}>
            * Prices are starting rates. Final cost depends on job size, materials, and complexity.
            You&apos;ll always receive an exact price before work begins.
          </p>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">How It Works</span>
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">Simple, transparent, and stress-free from start to finish.</p>

          <div style={s.processGrid}>
            {detail.process.map((step, i) => (
              <div key={step.step} style={s.processStep}>
                <div style={s.processConnector}>
                  <div style={s.processNumCircle}>{step.step}</div>
                  {i < detail.process.length - 1 && <div style={s.processLine} />}
                </div>
                <div style={s.processContent}>
                  <h3 style={s.processTitle}>{step.title}</h3>
                  <p style={s.processDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY PLACEHOLDER ───────────────────────── */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <span className="eyebrow">Our Work</span>
          <h2 className="section-title">Recent {svc.name} Projects</h2>
          <p className="section-subtitle">Real photos from real jobs — no stock imagery.</p>

          <div style={s.galleryGrid}>
            {detail.galleryAlt.map((alt, i) => (
              <div key={i} style={s.galleryItem}>
                {/* Placeholder — replace with <Image> tags per client */}
                <div style={s.galleryPlaceholder}>
                  <span style={s.galleryIcon}>{svc.icon}</span>
                  <p style={s.galleryLabel}>{alt}</p>
                  <p style={s.galleryHint}>Add photo here</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/gallery" className="btn btn-outline">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="section">
          <div className="container service-faq-grid" style={s.faqContainer}>
            <div>
              <span className="eyebrow">Common Questions</span>
              <h2 className="section-title">FAQ</h2>
              <p style={{ color: "var(--color-muted)", marginBottom: "2rem", lineHeight: 1.6 }}>
                Still have questions?{" "}
                <a href={CLIENT.phoneHref} style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                  Call us
                </a>{" "}
                or{" "}
                <Link href="/contact" style={{ color: "var(--color-primary)", fontWeight: 600 }}>
                  send a message
                </Link>
                .
              </p>
              <FAQAccordion faqs={faqs} />
            </div>

            {/* Sidebar CTA */}
            <div className="service-faq-sidebar" style={s.faqSidebar}>
              <div style={s.faqSidebarCard}>
                <p style={s.faqSidebarTitle}>Ready to get started?</p>
                <p style={s.faqSidebarDesc}>
                  Book online in 60 seconds or give us a call. We&apos;ll confirm your appointment right away.
                </p>
                <Link href="/book" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  📅 Book Online
                </Link>
                <a href={CLIENT.phoneHref} className="btn btn-outline" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }}>
                  📞 {CLIENT.phone}
                </a>
                {svc.emergency && (
                  <Link href="/emergency" className="btn btn-emergency" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }}>
                    🚨 Emergency Line
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── QUOTE FORM ────────────────────────────────────────── */}
      <QuoteFormSection
        preselectedService={svc.name}
        heading={`Get a Free ${svc.name} Quote`}
      />

      {/* ── OTHER SERVICES ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">We Also Offer</span>
          <h2 className="section-title">Other Services</h2>
          <div style={s.otherGrid}>
            {otherServices.map((other) => (
              <Link key={other.slug} href={`/services/${other.slug}`} style={s.otherCard}>
                <span style={s.otherIcon}>{other.icon}</span>
                <div>
                  <p style={s.otherName}>{other.name}</p>
                  <p style={s.otherDesc}>{other.shortDesc}</p>
                </div>
                <span style={{ color: "var(--color-primary)", marginLeft: "auto", flexShrink: 0 }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Styles ──────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  hero: {
    background: "linear-gradient(135deg, var(--color-dark) 0%, #1a2744 100%)",
    padding: "3rem 0 4rem",
  },
  breadcrumb: { display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" },
  breadcrumbLink: { color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none" },
  breadcrumbSep: { color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" },
  heroBody: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "3rem",
    alignItems: "flex-start",
  },
  heroCopy: {},
  heroIcon: {
    fontSize: "2.5rem",
    width: "64px",
    height: "64px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "var(--radius-lg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1.25rem",
  },
  h1: {
    fontSize: "clamp(2rem, 4.5vw, 3rem)",
    fontWeight: 900,
    color: "#fff",
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    marginBottom: "1rem",
  },
  heroLead: {
    fontSize: "1.05rem",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.7,
    marginBottom: "1.5rem",
    maxWidth: "540px",
  },
  badges: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" },
  badgeItem: {
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.85)",
    border: "1px solid rgba(255,255,255,0.15)",
    padding: "0.3rem 0.75rem",
    borderRadius: "var(--radius-pill)",
    fontSize: "0.78rem",
    fontWeight: 600,
  },
  heroCtas: { display: "flex", gap: "0.875rem", flexWrap: "wrap" },
  priceCard: {
    background: "var(--color-white)",
    borderRadius: "var(--radius-xl)",
    padding: "2rem 1.75rem",
    width: "240px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    boxShadow: "var(--shadow-xl)",
  },
  priceEyebrow: { fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)" },
  priceNum: { fontSize: "2rem", fontWeight: 900, color: "var(--color-primary)", lineHeight: 1 },
  priceNote: { fontSize: "0.8rem", color: "var(--color-muted)" },
  priceDivider: { height: "1px", background: "var(--color-border)", margin: "0.5rem 0" },
  priceGuarantee: { fontSize: "0.8rem", color: "var(--color-muted)", lineHeight: 1.5 },

  includedGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
  },
  sectionH2: { fontSize: "1.5rem", fontWeight: 800, color: "var(--color-dark)", marginBottom: "1.5rem", marginTop: "0.5rem" },
  includedList: { display: "flex", flexDirection: "column", gap: "0.875rem" },
  includedItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    fontSize: "0.9rem",
    color: "var(--color-text)",
    lineHeight: 1.55,
  },
  check: {
    flexShrink: 0,
    width: "22px",
    height: "22px",
    background: "#DCFCE7",
    color: "#166534",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.7rem",
    fontWeight: 700,
    marginTop: "1px",
  },

  pricingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1.25rem",
  },
  pricingCard: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",
    background: "var(--color-white)",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    padding: "1.75rem",
    boxShadow: "var(--shadow-sm)",
  },
  pricingCardHighlight: {
    background: "var(--color-primary)",
    border: "none",
    boxShadow: "var(--shadow-lg)",
    transform: "scale(1.02)",
  },
  popularBadge: {
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "var(--color-accent)",
    color: "var(--color-dark)",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "0.25rem 0.875rem",
    borderRadius: "var(--radius-pill)",
    whiteSpace: "nowrap",
  },
  tierName: { fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)", marginTop: "0.5rem" },
  tierPrice: { fontSize: "1.5rem", fontWeight: 900, color: "var(--color-primary)" },
  tierNote: { fontSize: "0.8rem", color: "var(--color-muted)" },
  tierDivider: { height: "1px", borderTop: "1px solid var(--color-border)", margin: "0.5rem 0" },
  tierList: { display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 },
  tierItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    fontSize: "0.85rem",
    color: "var(--color-muted)",
    lineHeight: 1.5,
  },
  pricingDisclaimer: {
    fontSize: "0.8rem",
    color: "var(--color-muted)",
    textAlign: "center",
    marginTop: "2rem",
    fontStyle: "italic",
  },

  processGrid: { display: "flex", flexDirection: "column", gap: "0" },
  processStep: { display: "flex", gap: "1.5rem", alignItems: "flex-start" },
  processConnector: { display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 },
  processNumCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "var(--color-primary)",
    color: "#fff",
    fontWeight: 900,
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  processLine: {
    width: "2px",
    flex: 1,
    minHeight: "40px",
    background: "var(--color-border)",
    margin: "8px 0",
  },
  processContent: { paddingBottom: "2rem" },
  processTitle: { fontSize: "1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.375rem", marginTop: "0.75rem" },
  processDesc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 },

  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
  galleryItem: { borderRadius: "var(--radius-lg)", overflow: "hidden" },
  galleryPlaceholder: {
    aspectRatio: "4/3",
    background: "var(--color-border)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    padding: "1rem",
  },
  galleryIcon: { fontSize: "2rem" },
  galleryLabel: { fontSize: "0.8rem", color: "var(--color-muted)", textAlign: "center", fontWeight: 500 },
  galleryHint: { fontSize: "0.7rem", color: "var(--color-border)", textAlign: "center" },

  faqContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 300px",
    gap: "4rem",
    alignItems: "flex-start",
  },
  faqSidebar: { position: "sticky", top: "calc(var(--header-h) + 2rem)" },
  faqSidebarCard: {
    background: "var(--color-surface)",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-xl)",
    padding: "1.75rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  faqSidebarTitle: { fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)" },
  faqSidebarDesc: { fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6 },

  otherGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1rem",
    marginTop: "2rem",
  },
  otherCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1.25rem 1.5rem",
    background: "var(--color-white)",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    textDecoration: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: "var(--shadow-sm)",
  },
  otherIcon: { fontSize: "1.5rem", flexShrink: 0 },
  otherName: { fontWeight: 700, fontSize: "0.95rem", color: "var(--color-dark)" },
  otherDesc: { fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "2px" },
};
