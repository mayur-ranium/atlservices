import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `Customer Reviews — ${CLIENT.businessName}`,
  description: `Read ${CLIENT.reviewCount}+ verified customer reviews for ${CLIENT.businessName}. Rated ${CLIENT.rating}★ on Google. Serving ${CLIENT.primaryArea}.`,
};

// ─── Static reviews — swap/add per client ────────────────────────
const ALL_REVIEWS: {
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  text: string;
  highlight?: boolean;
}[] = [
  { name: "James R.",    location: "Sample City, TX",   service: "plumbing",     rating: 5, date: "2 weeks ago",  highlight: true,
    text: "Burst pipe at 7 am on a Monday. Called ProFix and they had someone at my door by 9. Fixed within 2 hours, cleaned up after themselves, and charged exactly what they quoted. Will never call anyone else for plumbing." },
  { name: "Maria S.",    location: "Westview, TX",      service: "remodeling",   rating: 5, date: "1 month ago",  highlight: true,
    text: "Full kitchen remodel — new cabinets, countertops, flooring, lighting. Finished on time and on budget. The crew was professional every single day. My kitchen looks like something out of a magazine." },
  { name: "Derek T.",    location: "Sample City, TX",   service: "hvac",         rating: 5, date: "3 weeks ago",  highlight: true,
    text: "AC died on a Friday afternoon in July. ProFix had a tech out by 6 pm the same day. Up and running before dinner. He explained exactly what failed and why — didn't try to upsell me anything." },
  { name: "Angela P.",   location: "Lakeside, TX",      service: "junk-removal", rating: 5, date: "1 week ago",
    text: "Cleared an entire 2-car garage — old furniture, appliances, junk that had been there for years. In and out in 3 hours. Clean, fast, and way cheaper than I expected." },
  { name: "Carlos M.",   location: "North Heights, TX", service: "plumbing",     rating: 5, date: "5 days ago",
    text: "Water heater died. Called in the morning, new unit installed by afternoon. Fair pricing and the technician was incredibly professional. Highly recommend." },
  { name: "Susan K.",    location: "Riverside, TX",     service: "hvac",         rating: 5, date: "2 months ago",
    text: "Annual HVAC maintenance — they caught a refrigerant issue before it became a big problem. Saved me from a summer without AC. These guys really know what they're doing." },
  { name: "Bob L.",      location: "Sample City, TX",   service: "remodeling",   rating: 5, date: "6 weeks ago",
    text: "Bathroom remodel exceeded every expectation. Custom tile work, new vanity, walk-in shower conversion. Finished 2 days early. I've already referred them to three neighbors." },
  { name: "Priya N.",    location: "Westview, TX",      service: "junk-removal", rating: 5, date: "3 weeks ago",
    text: "Estate cleanout after my mother passed. They were respectful, efficient, and donated what they could. Made a hard job much easier. Grateful for the professionalism." },
  { name: "Tom G.",      location: "North Heights, TX", service: "plumbing",     rating: 4, date: "1 month ago",
    text: "Drain cleaning and pipe inspection. Thorough job, found an issue the previous plumber missed. Took a little longer than expected but the quality was there. Would use again." },
  { name: "Karen W.",    location: "Lakeside, TX",      service: "hvac",         rating: 5, date: "5 weeks ago",
    text: "New HVAC system installation. They handled the whole process — removal of old unit, installation, testing. Incredibly tidy. House is so much more comfortable now." },
  { name: "Mike F.",     location: "Sample City, TX",   service: "remodeling",   rating: 5, date: "2 months ago",
    text: "Basement conversion to a home office. Framing, drywall, electrical coordination, flooring — they managed everything. On-time, on-budget, and the quality is outstanding." },
  { name: "Lisa D.",     location: "Riverside, TX",     service: "junk-removal", rating: 5, date: "4 weeks ago",
    text: "Moving cleanout — furniture, appliances, miscellaneous junk. Two-man crew showed up exactly on time and had everything out in under 2 hours. Extremely professional." },
];

// Rating breakdown (static, adjust per client)
const RATING_BREAKDOWN = [
  { stars: 5, count: 128, pct: 90 },
  { stars: 4, count: 11,  pct: 8  },
  { stars: 3, count: 3,   pct: 2  },
  { stars: 2, count: 1,   pct: 1  },
  { stars: 1, count: 0,   pct: 0  },
];

function Stars({ rating, size = "base" }: { rating: number; size?: "sm" | "base" | "lg" }) {
  const cls = size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-base";
  return (
    <span className={`text-accent ${cls}`} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
}

export default function ReviewsPage() {
  const highlighted = ALL_REVIEWS.filter((r) => r.highlight);
  const rest        = ALL_REVIEWS.filter((r) => !r.highlight);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">Reviews</span>
          </nav>

          <span className="eyebrow">What Customers Say</span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Customer Reviews
          </h1>

          {/* Big rating display */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="text-center">
              <p className="text-7xl font-black text-accent leading-none mb-1">{CLIENT.rating}</p>
              <Stars rating={5} size="lg" />
              <p className="text-white/60 text-sm mt-1">out of 5</p>
            </div>
            <div className="h-16 w-[1px] bg-white/20 hidden sm:block" />
            <div className="flex flex-col gap-1">
              <p className="text-white font-bold text-lg">{CLIENT.reviewCount}+ verified reviews</p>
              <p className="text-white/60 text-sm">on Google Business Profile</p>
              <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-accent hover:underline">
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#4285F4] font-black text-xs">G</span>
                View on Google ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── RATING BREAKDOWN ──────────────────────────────────── */}
      <section className="section-sm bg-surface border-b border-border">
        <div className="container max-w-2xl">
          <div className="flex flex-col gap-2">
            {RATING_BREAKDOWN.map((row) => (
              <div key={row.stars} className="flex items-center gap-3">
                <span className="text-sm text-muted w-12 shrink-0">{row.stars} star</span>
                <div className="flex-1 h-2.5 bg-border rounded-pill overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-pill transition-all"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <span className="text-sm text-muted w-8 text-right shrink-0">{row.pct}%</span>
                <span className="text-xs text-muted/70 w-10 shrink-0">({row.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED REVIEWS ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Featured</span>
          <h2 className="section-title">Highlighted Reviews</h2>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {highlighted.map((r, i) => {
              const svc = SERVICES.find((s) => s.slug === r.service);
              return (
                <div key={i} className="flex flex-col gap-4 p-6 bg-white border-2 border-primary/20
                                         rounded-xl shadow-sm relative">
                  {/* Quote mark */}
                  <span className="absolute top-4 right-5 text-5xl text-primary/10 font-black leading-none select-none">&ldquo;</span>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center
                                    justify-center font-black text-base shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{r.name}</p>
                      <p className="text-xs text-muted">{r.location}</p>
                    </div>
                    <span className="ml-auto w-7 h-7 rounded-full bg-[#4285F4] text-white flex items-center
                                     justify-center font-black text-xs shrink-0">G</span>
                  </div>

                  <Stars rating={r.rating} />

                  <p className="text-sm text-muted leading-relaxed flex-1 italic">
                    &ldquo;{r.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    {svc && (
                      <span className="badge badge-default">{svc.icon} {svc.name}</span>
                    )}
                    <span className="text-xs text-muted ml-auto">{r.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ALL REVIEWS ───────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">All Reviews</span>
          <h2 className="section-title">More from Our Customers</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {rest.map((r, i) => {
              const svc = SERVICES.find((s) => s.slug === r.service);
              return (
                <div key={i} className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center
                                    justify-center font-bold text-sm shrink-0">
                      {r.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{r.name}</p>
                      <p className="text-xs text-muted">{r.location}</p>
                    </div>
                    <span className="ml-auto w-6 h-6 rounded-full bg-[#4285F4] text-white flex items-center
                                     justify-center font-black text-[0.6rem] shrink-0">G</span>
                  </div>

                  <Stars rating={r.rating} size="sm" />

                  <p className="text-sm text-muted leading-relaxed italic flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    {svc && (
                      <span className="badge badge-default text-[0.6rem]">{svc.icon} {svc.name}</span>
                    )}
                    <span className="text-xs text-muted ml-auto">{r.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load more — links to Google */}
          <div className="text-center mt-10">
            <p className="text-muted text-sm mb-4">
              Showing {ALL_REVIEWS.length} of {CLIENT.reviewCount}+ reviews
            </p>
            <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-outline btn-lg">
              Read All Reviews on Google ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── PER-SERVICE SUMMARY ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">By Service</span>
          <h2 className="section-title">Ratings Across Every Service</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {SERVICES.map((s) => {
              const serviceReviews = ALL_REVIEWS.filter((r) => r.service === s.slug);
              const avg = serviceReviews.length
                ? (serviceReviews.reduce((sum, r) => sum + r.rating, 0) / serviceReviews.length).toFixed(1)
                : "5.0";
              return (
                <div key={s.slug} className="flex flex-col gap-3 p-5 bg-white border border-border rounded-lg text-center">
                  <span className="text-3xl">{s.icon}</span>
                  <p className="font-bold text-dark text-sm">{s.name}</p>
                  <div>
                    <p className="text-2xl font-black text-accent">{avg}</p>
                    <Stars rating={5} size="sm" />
                    <p className="text-xs text-muted mt-1">{serviceReviews.length} reviews shown</p>
                  </div>
                  <Link href={`/services/${s.slug}`} className="btn btn-outline btn-sm">
                    View Service →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── LEAVE A REVIEW CTA ────────────────────────────────── */}
      <section className="bg-dark py-16">
        <div className="container text-center">
          <p className="text-white/60 text-sm uppercase tracking-widest font-bold mb-3">Happy with our work?</p>
          <h2 className="text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Leave Us a Review
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
            Your feedback helps other homeowners find a contractor they can trust — and it means
            the world to our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={CLIENT.googleBusinessUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-accent btn-lg">
              ⭐ Review on Google
            </a>
            <Link href="/contact" className="btn btn-white btn-lg">
              Send Us Feedback
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
