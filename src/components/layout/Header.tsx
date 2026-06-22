"use client";
import { useState } from "react";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={styles.header}>
        <div className="container" style={styles.inner}>
          {/* Logo */}
          <Link href="/" style={styles.logo}>
            <span style={styles.logoIcon}>⚡</span>
            <div>
              <span style={styles.logoName}>{CLIENT.businessName}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="desktop-nav" style={styles.desktopNav} aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={styles.navLink}>
                {l.label}
              </Link>
            ))}
            <Link href="/emergency" className="btn btn-emergency btn-sm">
              🚨 Emergency
            </Link>
            <a href={CLIENT.phoneHref} style={styles.phoneBtn}>
              📞 {CLIENT.phone}
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="mobile-controls" style={styles.mobileControls}>
            <a href={CLIENT.phoneHref} className="btn btn-primary btn-sm" aria-label="Call us">
              📞 Call
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburger}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div style={styles.drawer} role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div style={styles.drawerInner}>
              <p style={styles.drawerLabel}>Services</p>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  style={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.icon} {s.name}
                </Link>
              ))}
              <div style={styles.drawerDivider} />
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={styles.drawerLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <div style={styles.drawerDivider} />
              <Link href="/emergency" className="btn btn-emergency" style={{ width: "100%", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
                🚨 Emergency Service
              </Link>
              <Link href="/book" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }} onClick={() => setMenuOpen(false)}>
                Book Online
              </Link>
              <Link href="/quote" className="btn btn-outline" style={{ width: "100%", justifyContent: "center", marginTop: "0.75rem" }} onClick={() => setMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Spacer so page content doesn't hide under fixed header */}
      <div style={{ height: "var(--header-h)" }} />
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    background: "var(--color-white)",
    borderBottom: "1px solid var(--color-border)",
    boxShadow: "var(--shadow-sm)",
    height: "var(--header-h)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    gap: "1.5rem",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.625rem",
    textDecoration: "none",
    flexShrink: 0,
  },
  logoIcon: {
    fontSize: "1.5rem",
  },
  logoName: {
    fontWeight: 800,
    fontSize: "1.1rem",
    color: "var(--color-dark)",
    letterSpacing: "-0.02em",
    display: "block",
  },
  desktopNav: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    // hidden on mobile via media query in CSS module — handled inline via JS below
  },
  navLink: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "var(--color-text)",
    transition: "color 0.15s",
    textDecoration: "none",
  },
  phoneBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontWeight: 700,
    fontSize: "0.9rem",
    color: "var(--color-primary)",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    background: "var(--color-primary-light)",
    borderRadius: "var(--radius-md)",
    whiteSpace: "nowrap",
  },
  mobileControls: {
    alignItems: "center",
    gap: "0.75rem",
  },
  hamburger: {
    background: "none",
    border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "0.5rem 0.75rem",
    fontSize: "1.1rem",
    color: "var(--color-text)",
    cursor: "pointer",
  },
  drawer: {
    position: "fixed",
    top: "var(--header-h)",
    left: 0,
    right: 0,
    bottom: 0,
    background: "var(--color-white)",
    overflowY: "auto",
    zIndex: 999,
    borderTop: "1px solid var(--color-border)",
  },
  drawerInner: {
    padding: "1.25rem 1.5rem 3rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  drawerLabel: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-muted)",
    padding: "0.75rem 0 0.25rem",
  },
  drawerLink: {
    display: "block",
    padding: "0.75rem 0",
    fontSize: "1rem",
    fontWeight: 600,
    color: "var(--color-text)",
    borderBottom: "1px solid var(--color-border)",
    textDecoration: "none",
  },
  drawerDivider: {
    height: "1px",
    background: "var(--color-border)",
    margin: "0.75rem 0",
  },
};
