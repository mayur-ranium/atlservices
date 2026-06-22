import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Emergency banner */}
      <div style={styles.emergencyBanner}>
        <div className="container footer-emergency-inner">
          <div>
            <p style={styles.emergencyTitle}>🚨 Need emergency service right now?</p>
            <p style={styles.emergencyNote}>Available 24/7 for plumbing, HVAC, and electrical emergencies.</p>
          </div>
          <div className="footer-emergency-actions" style={styles.emergencyActions}>
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">
              📞 Call {CLIENT.phone}
            </a>
            <Link href="/emergency" className="btn btn-emergency btn-lg">
              Emergency Request
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={styles.main}>
        <div className="container">
          <div className="footer-grid">
            {/* Brand column */}
            <div style={styles.brandCol}>
              <Link href="/" style={styles.logoLink}>
                <span style={{ fontSize: "1.5rem" }}>⚡</span>
                <span style={styles.logoText}>{CLIENT.businessName}</span>
              </Link>
              <p style={styles.brandDesc}>{CLIENT.description}</p>
              <div style={styles.trustItems}>
                <span style={styles.trustItem}>✅ Licensed &amp; Insured</span>
                <span style={styles.trustItem}>⭐ {CLIENT.rating} ({CLIENT.reviewCount} reviews)</span>
                <span style={styles.trustItem}>🏅 Since {CLIENT.yearFounded}</span>
              </div>
              <div style={styles.social}>
                <a href={CLIENT.facebookUrl} style={styles.socialLink} aria-label="Facebook" target="_blank" rel="noopener noreferrer">f</a>
                <a href={CLIENT.instagramUrl} style={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">in</a>
                <a href={CLIENT.googleBusinessUrl} style={styles.socialLink} aria-label="Google Business" target="_blank" rel="noopener noreferrer">G</a>
              </div>
            </div>

            {/* Services column */}
            <div>
              <p style={styles.colTitle}>Services</p>
              <ul style={styles.linkList}>
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} style={styles.footerLink}>{s.name}</Link>
                  </li>
                ))}
                <li><Link href="/services" style={styles.footerLink}>All Services →</Link></li>
              </ul>
            </div>

            {/* Quick links column */}
            <div>
              <p style={styles.colTitle}>Company</p>
              <ul style={styles.linkList}>
                <li><Link href="/about" style={styles.footerLink}>About Us</Link></li>
                <li><Link href="/gallery" style={styles.footerLink}>Project Gallery</Link></li>
                <li><Link href="/reviews" style={styles.footerLink}>Reviews</Link></li>
                <li><Link href="/areas" style={styles.footerLink}>Service Areas</Link></li>
                <li><Link href="/blog" style={styles.footerLink}>Blog</Link></li>
                <li><Link href="/contact" style={styles.footerLink}>Contact</Link></li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <p style={styles.colTitle}>Contact</p>
              <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                  <span>📞</span>
                  <a href={CLIENT.phoneHref} style={{ ...styles.footerLink, fontWeight: 700 }}>{CLIENT.phone}</a>
                </li>
                <li style={styles.contactItem}>
                  <span>✉️</span>
                  <a href={`mailto:${CLIENT.email}`} style={styles.footerLink}>{CLIENT.email}</a>
                </li>
                <li style={styles.contactItem}>
                  <span>📍</span>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>{CLIENT.address.full}</span>
                </li>
                <li style={styles.contactItem}>
                  <span>🕐</span>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem" }}>{CLIENT.hours.regular}</p>
                    <p style={{ color: "var(--color-accent)", fontSize: "0.875rem", fontWeight: 600 }}>{CLIENT.hours.emergency}</p>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/book" className="btn btn-accent btn-sm">Book Online</Link>
                <Link href="/quote" className="btn btn-outline btn-sm" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--color-white)" }}>Free Quote</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom" style={styles.bottom}>
            <p style={styles.copyright}>© {year} {CLIENT.legalName}. All rights reserved.</p>
            <div style={styles.legalLinks}>
              <Link href="/privacy" style={styles.legalLink}>Privacy Policy</Link>
              <Link href="/terms" style={styles.legalLink}>Terms of Service</Link>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>{CLIENT.licenseNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: { background: "var(--color-dark)" },
  emergencyBanner: {
    background: "linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)",
    padding: "2rem 0",
  },
  emergencyInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  },
  emergencyTitle: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "1.25rem",
    marginBottom: "0.25rem",
  },
  emergencyNote: { color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" },
  emergencyActions: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
  main: { padding: "4rem 0 2rem" },
  grid: { marginBottom: "3rem" }, // layout handled by .footer-grid in responsive.css
  brandCol: {},
  logoLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1rem",
    textDecoration: "none",
  },
  logoText: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "1.1rem",
    letterSpacing: "-0.02em",
  },
  brandDesc: {
    color: "rgba(255,255,255,0.55)",
    fontSize: "0.875rem",
    lineHeight: 1.65,
    marginBottom: "1rem",
  },
  trustItems: { display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1.25rem" },
  trustItem: { color: "rgba(255,255,255,0.7)", fontSize: "0.8rem" },
  social: { display: "flex", gap: "0.625rem" },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "var(--radius-md)",
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.7)",
    fontWeight: 700,
    fontSize: "0.85rem",
    textDecoration: "none",
    transition: "background 0.15s",
  },
  colTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  linkList: { display: "flex", flexDirection: "column", gap: "0.625rem" },
  footerLink: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.875rem",
    textDecoration: "none",
    transition: "color 0.15s",
  },
  contactList: { display: "flex", flexDirection: "column", gap: "0.875rem" },
  contactItem: {
    display: "flex",
    gap: "0.625rem",
    alignItems: "flex-start",
    fontSize: "0.875rem",
  },
  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    paddingTop: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  copyright: { color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" },
  legalLinks: { display: "flex", gap: "1.5rem", alignItems: "center" },
  legalLink: { color: "rgba(255,255,255,0.4)", fontSize: "0.8rem", textDecoration: "none" },
};
