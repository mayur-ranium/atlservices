"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES, CLIENT } from "@/lib/client-config";

// ─── Gallery data — swap src paths for real photos ───────────────
// Each item: replace `src: null` with the actual image path once you
// have photos, e.g. src: "/images/gallery/junk-truck-01.jpg"
const GALLERY_ITEMS: {
  id: number;
  service: string;      // matches SERVICES[n].slug
  title: string;
  caption: string;
  src: string | null;   // null = show placeholder tile
}[] = [
  // Junk Removal
  { id: 1,  service: "junk-removal", title: "Full Garage Cleanout",     caption: "Cleared 2-car garage in 3 hours — Sample City, TX",         src: null },
  { id: 2,  service: "junk-removal", title: "Estate Cleanout",          caption: "Complete estate cleanout after move-out — Westview, TX",     src: null },
  { id: 3,  service: "junk-removal", title: "Old Appliance Removal",    caption: "Refrigerator, washer & dryer hauled same day",                src: null },
  { id: 4,  service: "junk-removal", title: "Construction Debris",      caption: "Post-renovation debris cleared for contractor",               src: null },
  // Remodeling
  { id: 5,  service: "remodeling",   title: "Kitchen Remodel",          caption: "Full kitchen gut & rebuild — Lakeside, TX",                  src: null },
  { id: 6,  service: "remodeling",   title: "Master Bath Renovation",   caption: "Walk-in shower, double vanity — North Heights, TX",          src: null },
  { id: 7,  service: "remodeling",   title: "Open-Plan Living Room",    caption: "Wall removal & flooring replacement — Sample City, TX",      src: null },
  { id: 8,  service: "remodeling",   title: "Basement Finish",          caption: "Unfinished basement converted to home office",               src: null },
  // Plumbing
  { id: 9,  service: "plumbing",     title: "Burst Pipe Repair",        caption: "Emergency pipe repair — stopped leak in under 90 min",      src: null },
  { id: 10, service: "plumbing",     title: "Water Heater Install",     caption: "50-gal tank-less upgrade — Riverside, TX",                  src: null },
  { id: 11, service: "plumbing",     title: "Full Re-pipe",             caption: "Whole-home copper re-pipe — Sample City, TX",               src: null },
  { id: 12, service: "plumbing",     title: "Drain Cleaning",           caption: "Main line clog cleared with hydro-jetting",                 src: null },
  // HVAC
  { id: 13, service: "hvac",         title: "AC System Installation",   caption: "New 3-ton split system install — Sample City, TX",          src: null },
  { id: 14, service: "hvac",         title: "Furnace Replacement",      caption: "High-efficiency furnace swap — Westview, TX",               src: null },
  { id: 15, service: "hvac",         title: "Duct Cleaning",            caption: "Whole-home duct cleaning & sealing",                        src: null },
  { id: 16, service: "hvac",         title: "Mini-Split Install",       caption: "4-zone ductless system — home addition",                    src: null },
];

// Placeholder tile colors per service
const PLACEHOLDER_COLORS: Record<string, { bg: string; ring: string; icon: string }> = {
  "junk-removal": { bg: "from-amber-50 to-amber-100",    ring: "border-amber-200",  icon: "🗑️" },
  "remodeling":   { bg: "from-blue-50 to-indigo-100",    ring: "border-blue-200",   icon: "🏗️" },
  "plumbing":     { bg: "from-cyan-50 to-sky-100",       ring: "border-cyan-200",   icon: "🔧" },
  "hvac":         { bg: "from-violet-50 to-purple-100",  ring: "border-violet-200", icon: "❄️" },
};

// ─── Page component ──────────────────────────────────────────────

const ALL = "all";

export default function GalleryPage() {
  const [active, setActive] = useState<string>(ALL);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filters = [
    { slug: ALL, label: "All Work", icon: "📸" },
    ...SERVICES.map((s) => ({ slug: s.slug, label: s.name, icon: s.icon })),
  ];

  const visible = active === ALL
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((g) => g.service === active);

  const activeItem = lightbox !== null
    ? GALLERY_ITEMS.find((g) => g.id === lightbox) ?? null
    : null;

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Gallery</span>
          </nav>

          <span className="eyebrow">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-4">
            Project Gallery
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl mb-6">
            Real jobs. Real results. Browse completed projects across all our services —
            junk removal, remodeling, plumbing, and HVAC.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="text-white/60"><span className="text-accent font-bold">{CLIENT.projectsCompleted.toLocaleString()}+</span> projects completed</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60"><span className="text-accent font-bold">{CLIENT.rating}</span> avg. Google rating</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60">Serving {CLIENT.primaryArea} since <span className="text-accent font-bold">{CLIENT.yearFounded}</span></span>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-pill text-sm font-semibold
                            border-[1.5px] transition-all duration-150 cursor-pointer
                            ${active === f.slug
                              ? "bg-primary text-white border-primary shadow-sm"
                              : "bg-white text-text border-border hover:border-primary hover:text-primary"
                            }`}
              >
                <span>{f.icon}</span> {f.label}
                {f.slug !== ALL && (
                  <span className={`text-xs rounded-full px-1.5 py-0.5 font-bold
                    ${active === f.slug ? "bg-white/20 text-white" : "bg-surface text-muted"}`}>
                    {GALLERY_ITEMS.filter((g) => g.service === f.slug).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Item count */}
          <p className="text-muted text-sm mb-6">
            Showing <strong className="text-dark">{visible.length}</strong> project{visible.length !== 1 ? "s" : ""}
            {active !== ALL && (
              <> in <strong className="text-dark">{filters.find(f => f.slug === active)?.label}</strong></>
            )}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {visible.map((item) => {
              const svc = SERVICES.find((s) => s.slug === item.service)!;
              const ph = PLACEHOLDER_COLORS[item.service] ?? PLACEHOLDER_COLORS["remodeling"];
              return (
                <button
                  key={item.id}
                  onClick={() => setLightbox(item.id)}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border
                             bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5
                             transition-all duration-200 text-left cursor-pointer w-full"
                >
                  {/* Image / placeholder */}
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${ph.bg} border-b ${ph.ring} flex flex-col items-center justify-center gap-2`}>
                    {item.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.src}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <span className="text-4xl opacity-40">{ph.icon}</span>
                        <span className="text-[0.7rem] font-bold uppercase tracking-widest text-muted/60">
                          Photo placeholder
                        </span>
                      </>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-dark/70 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-200 flex items-center justify-center">
                      <span className="text-white font-bold text-sm bg-white/20 px-4 py-2 rounded-pill">
                        View project →
                      </span>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4 flex flex-col gap-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge badge-default text-[0.65rem]">
                        {svc.icon} {svc.name}
                      </span>
                    </div>
                    <p className="font-bold text-dark text-sm leading-snug">{item.title}</p>
                    <p className="text-muted text-xs leading-relaxed">{item.caption}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Empty state */}
          {visible.length === 0 && (
            <div className="text-center py-20 text-muted">
              <p className="text-4xl mb-4">📸</p>
              <p className="font-bold text-dark mb-2">No photos in this category yet</p>
              <p className="text-sm">Check back soon — we&apos;re adding new project photos regularly.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────── */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image / placeholder */}
            {(() => {
              const ph = PLACEHOLDER_COLORS[activeItem.service] ?? PLACEHOLDER_COLORS["remodeling"];
              return (
                <div className={`relative aspect-video bg-gradient-to-br ${ph.bg} flex flex-col items-center justify-center gap-3`}>
                  {activeItem.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={activeItem.src} alt={activeItem.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : (
                    <>
                      <span className="text-6xl opacity-30">{ph.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted/50">Photo placeholder</span>
                    </>
                  )}
                </div>
              );
            })()}

            {/* Details */}
            <div className="p-6">
              {(() => {
                const svc = SERVICES.find((s) => s.slug === activeItem.service)!;
                return (
                  <>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">
                          {svc.icon} {svc.name}
                        </p>
                        <h3 className="font-black text-dark text-xl">{activeItem.title}</h3>
                      </div>
                      <button
                        onClick={() => setLightbox(null)}
                        className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-muted
                                   hover:bg-border transition-colors shrink-0 text-lg"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-5">{activeItem.caption}</p>
                    <div className="flex gap-3">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="btn btn-primary btn-sm"
                        onClick={() => setLightbox(null)}
                      >
                        See {svc.name} Service →
                      </Link>
                      <Link
                        href="/quote"
                        className="btn btn-outline btn-sm"
                        onClick={() => setLightbox(null)}
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container text-center">
          <span className="eyebrow">Start Your Project</span>
          <h2 className="section-title">Ready to Add Your Home to Our Gallery?</h2>
          <p className="section-subtitle mx-auto mb-8">
            Get a free, no-obligation estimate on any service. We respond within a few hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn btn-primary btn-lg">Get a Free Quote</Link>
            <a href={CLIENT.phoneHref} className="btn btn-outline btn-lg">📞 {CLIENT.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
