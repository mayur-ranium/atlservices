"use client";
import { useState } from "react";

type FAQ = { q: string; a: string };

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-md overflow-hidden transition-[border-color] duration-200 border-[1.5px]"
          style={{ borderColor: open === i ? "var(--color-primary)" : "var(--color-border)" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex justify-between items-center gap-4 px-5 py-[1.125rem] border-none cursor-pointer text-left transition-[background] duration-200"
            style={{ background: open === i ? "var(--color-primary-light)" : "var(--color-white)" }}
          >
            <span className="font-semibold text-[0.95rem] text-dark leading-snug">{faq.q}</span>
            <span
              className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-base font-bold transition-[background,color,transform] duration-200"
              style={{
                background: open === i ? "var(--color-primary)" : "var(--color-surface)",
                color: open === i ? "#fff" : "var(--color-muted)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-[0.9rem] text-muted leading-[1.7] bg-white">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
