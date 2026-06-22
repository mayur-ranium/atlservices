"use client";
import { useState } from "react";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

const navLinks = [
  { label: "Services",  href: "/services" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Areas",     href: "/areas" },
  { label: "About",     href: "/about" },
  { label: "Reviews",   href: "/reviews" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-border shadow-sm h-header">
        <div className="container flex items-center justify-between h-full gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="text-2xl">⚡</span>
            <span className="font-extrabold text-[1.1rem] text-dark block" style={{ letterSpacing: '-0.02em' }}>
              {CLIENT.businessName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[0.9rem] font-semibold text-text transition-colors duration-150 hover:text-primary">
                {l.label}
              </Link>
            ))}
            <Link href="/emergency" className="btn btn-emergency btn-sm">🚨 Emergency</Link>
            <a href={CLIENT.phoneHref}
              className="inline-flex items-center gap-1.5 font-bold text-[0.9rem] text-primary px-4 py-2 bg-primary-light rounded-md whitespace-nowrap">
              📞 {CLIENT.phone}
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a href={CLIENT.phoneHref} className="btn btn-primary btn-sm" aria-label="Call us">📞 Call</a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="border-[1.5px] border-border rounded-md px-3 py-2 text-[1.1rem] text-text bg-transparent"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="fixed top-header left-0 right-0 bottom-0 bg-white overflow-y-auto z-[999] border-t border-border"
            role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="px-6 pt-5 pb-12 flex flex-col gap-1">
              <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-muted pt-3 pb-1">Services</p>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}
                  className="block py-3 text-base font-semibold text-text border-b border-border"
                  onClick={() => setMenuOpen(false)}>
                  {s.icon} {s.name}
                </Link>
              ))}
              <div className="h-px bg-border my-3" />
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}
                  className="block py-3 text-base font-semibold text-text border-b border-border"
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <div className="h-px bg-border my-3" />
              <Link href="/emergency" className="btn btn-emergency w-full justify-center" onClick={() => setMenuOpen(false)}>
                🚨 Emergency Service
              </Link>
              <Link href="/book" className="btn btn-primary w-full justify-center mt-3" onClick={() => setMenuOpen(false)}>
                Book Online
              </Link>
              <Link href="/quote" className="btn btn-outline w-full justify-center mt-3" onClick={() => setMenuOpen(false)}>
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer under fixed header */}
      <div className="h-header" />
    </>
  );
}
