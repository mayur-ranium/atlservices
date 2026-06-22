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
      aria-label={`Call ${CLIENT.businessName}: ${CLIENT.phone}`}
      className={[
        "md:hidden fixed bottom-5 right-5 z-[900]",
        "flex items-center gap-2",
        "bg-primary text-white font-bold text-[0.95rem]",
        "px-5 py-3.5 rounded-pill",
        "shadow-[0_4px_20px_rgba(27,79,216,0.45)]",
        "transition-[opacity,transform] duration-[250ms]",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none",
      ].join(" ")}
    >
      <span className="text-[1.1rem]">📞</span>
      Call Now
    </a>
  );
}
