"use client";
import { useState } from "react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {faqs.map((faq, i) => (
        <div
          key={i}
          style={{
            border: `1.5px solid ${open === i ? "var(--color-primary)" : "var(--color-border)"}`,
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            transition: "border-color 0.2s",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
              padding: "1.125rem 1.25rem",
              background: open === i ? "var(--color-primary-light)" : "var(--color-white)",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              transition: "background 0.2s",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--color-dark)", lineHeight: 1.4 }}>
              {faq.q}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: open === i ? "var(--color-primary)" : "var(--color-surface)",
                color: open === i ? "#fff" : "var(--color-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                fontWeight: 700,
                transition: "background 0.2s, color 0.2s, transform 0.2s",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div
              style={{
                padding: "0 1.25rem 1.25rem",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                background: "var(--color-white)",
              }}
            >
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
