"use client";
import { useEffect, useState } from "react";
import { CLIENT } from "@/lib/client-config";

export default function MobileCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={CLIENT.phoneHref}
      className="mobile-call-btn"
      aria-label={`Call ${CLIENT.businessName}: ${CLIENT.phone}`}
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "var(--color-primary)",
        color: "#fff",
        fontWeight: 700,
        fontSize: "0.95rem",
        padding: "0.875rem 1.25rem",
        borderRadius: "var(--radius-pill)",
        boxShadow: "0 4px 20px rgba(27,79,216,0.45)",
        textDecoration: "none",
        transition: "opacity 0.25s, transform 0.25s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        pointerEvents: visible ? "auto" : "none",
        // Mobile only — hidden on desktop via JS check
      }}
    >
      <span style={{ fontSize: "1.1rem" }}>📞</span>
      Call Now
    </a>
  );
}
