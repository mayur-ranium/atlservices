import { CLIENT } from "@/lib/client-config";

export default function MobileCallButton() {
  return (
    <a
      href={CLIENT.phoneHref}
      aria-label={`Call ${CLIENT.businessName}: ${CLIENT.phone}`}
      className="mobile-call-btn fixed bottom-5 right-5 z-[900]
                 items-center gap-2
                 bg-primary text-white font-bold text-[0.95rem]
                 px-5 py-3.5 rounded-pill
                 shadow-[0_4px_20px_rgba(27,79,216,0.45)]"
    >
      <span className="text-[1.1rem]">📞</span>
      Call Now
    </a>
  );
}
