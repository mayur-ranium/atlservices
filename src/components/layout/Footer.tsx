import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark">

      {/* Emergency banner */}
      <div className="bg-emergency-banner py-8">
        <div className="container flex items-center justify-between gap-8 flex-wrap">
          <div>
            <p className="text-white font-extrabold text-xl mb-1">🚨 Need emergency service right now?</p>
            <p className="text-white/85 text-[0.9rem]">Available 24/7 for plumbing, HVAC, and electrical emergencies.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-wrap max-sm:w-full">
            <a href={CLIENT.phoneHref} className="btn btn-white btn-lg max-sm:w-full max-sm:justify-center">
              📞 Call {CLIENT.phone}
            </a>
            <Link href="/emergency" className="btn btn-emergency btn-lg max-sm:w-full max-sm:justify-center">
              Emergency Request
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="pt-16 pb-8">
        <div className="container">

          {/* Grid: 4-col → 2-col → 1-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-footer gap-8 lg:gap-12 mb-12">

            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-white font-extrabold text-[1.1rem]" style={{ letterSpacing: '-0.02em' }}>
                  {CLIENT.businessName}
                </span>
              </Link>
              <p className="text-white/55 text-sm leading-[1.65] mb-4">{CLIENT.description}</p>
              <div className="flex flex-col gap-1.5 mb-5">
                <span className="text-white/70 text-[0.8rem]">✅ Licensed &amp; Insured</span>
                <span className="text-white/70 text-[0.8rem]">⭐ {CLIENT.rating} ({CLIENT.reviewCount} reviews)</span>
                <span className="text-white/70 text-[0.8rem]">🏅 Since {CLIENT.yearFounded}</span>
              </div>
              <div className="flex gap-2.5">
                {[
                  { href: CLIENT.facebookUrl,       label: "Facebook",        text: "f"  },
                  { href: CLIENT.instagramUrl,       label: "Instagram",       text: "in" },
                  { href: CLIENT.googleBusinessUrl,  label: "Google Business", text: "G"  },
                ].map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 text-white/70 font-bold text-[0.85rem] transition-[background] duration-150 hover:bg-white/20">
                    {s.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="text-white font-bold text-[0.8rem] tracking-[0.1em] uppercase mb-4">Services</p>
              <ul className="flex flex-col gap-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}
                      className="text-white/60 text-sm transition-colors duration-150 hover:text-white/90">
                      {s.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="text-white/60 text-sm transition-colors duration-150 hover:text-white/90">
                    All Services →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-white font-bold text-[0.8rem] tracking-[0.1em] uppercase mb-4">Company</p>
              <ul className="flex flex-col gap-2.5">
                {([
                  ["/about",   "About Us"],
                  ["/gallery", "Project Gallery"],
                  ["/reviews", "Reviews"],
                  ["/areas",   "Service Areas"],
                  ["/blog",    "Blog"],
                  ["/contact", "Contact"],
                ] as [string, string][]).map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-white/60 text-sm transition-colors duration-150 hover:text-white/90">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white font-bold text-[0.8rem] tracking-[0.1em] uppercase mb-4">Contact</p>
              <ul className="flex flex-col gap-3.5 mb-6">
                <li className="flex gap-2.5 items-start text-sm">
                  <span>📞</span>
                  <a href={CLIENT.phoneHref} className="text-white/60 font-bold text-sm hover:text-white/90">{CLIENT.phone}</a>
                </li>
                <li className="flex gap-2.5 items-start text-sm">
                  <span>✉️</span>
                  <a href={`mailto:${CLIENT.email}`} className="text-white/60 text-sm hover:text-white/90">{CLIENT.email}</a>
                </li>
                <li className="flex gap-2.5 items-start text-sm">
                  <span>📍</span>
                  <span className="text-white/60 text-sm">{CLIENT.address.full}</span>
                </li>
                <li className="flex gap-2.5 items-start text-sm">
                  <span>🕐</span>
                  <div>
                    <p className="text-white/70 text-sm">{CLIENT.hours.regular}</p>
                    <p className="text-accent font-semibold text-sm">{CLIENT.hours.emergency}</p>
                  </div>
                </li>
              </ul>
              <div className="flex gap-3 flex-wrap">
                <Link href="/book" className="btn btn-accent btn-sm">Book Online</Link>
                <Link href="/quote" className="btn btn-sm border-white/30 text-white bg-transparent">Free Quote</Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center flex-wrap gap-4 max-md:flex-col max-md:items-start">
            <p className="text-white/40 text-[0.8rem]">© {year} {CLIENT.legalName}. All rights reserved.</p>
            <div className="flex gap-6 items-center">
              <Link href="/privacy" className="text-white/40 text-[0.8rem]">Privacy Policy</Link>
              <Link href="/terms"   className="text-white/40 text-[0.8rem]">Terms of Service</Link>
              <span className="text-white/30">{CLIENT.licenseNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
