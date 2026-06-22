import type { Metadata } from "next";
import Link from "next/link";
import { CLIENT, SERVICES } from "@/lib/client-config";

export const metadata: Metadata = {
  title: `About Us — ${CLIENT.businessName}`,
  description: `Learn about ${CLIENT.businessName} — locally owned since ${CLIENT.yearFounded}, serving ${CLIENT.primaryArea} with licensed, insured home service professionals.`,
};

const STATS = [
  { value: `${CLIENT.projectsCompleted.toLocaleString()}+`, label: "Projects Completed" },
  { value: `${new Date().getFullYear() - CLIENT.yearFounded}+`, label: "Years in Business" },
  { value: CLIENT.rating.toString(), label: "Google Rating" },
  { value: `${CLIENT.serviceAreas.length}`, label: "Cities Served" },
];

const VALUES = [
  { icon: "🤝", title: "Honesty First", desc: "We quote before we start and never add charges you didn't agree to. What we say is what you pay." },
  { icon: "⭐", title: "Quality Work", desc: "Every job is done right or we come back and fix it — no arguments, no charge." },
  { icon: "⏱️", title: "Respect Your Time", desc: "We show up in the window we promise. If something changes, we call ahead." },
  { icon: "🌱", title: "Community First", desc: "We're your neighbors. We hire locally, buy locally, and give back to the communities we serve." },
];

const TEAM_MEMBERS = [
  { name: "Alex Johnson", role: "Founder & CEO", bio: `Started ${CLIENT.businessName} in ${CLIENT.yearFounded} with one truck and a commitment to honest service. Still on job sites every week.`, initials: "AJ" },
  { name: "Maria Chen", role: "Operations Manager", bio: "Keeps every crew on schedule and every customer informed. The reason jobs run on time and on budget.", initials: "MC" },
  { name: "Derek Williams", role: "Lead Plumber", bio: `Licensed master plumber with 15+ years experience. Handles every plumbing job in ${CLIENT.primaryArea}.`, initials: "DW" },
  { name: "Sam Torres", role: "HVAC Lead Technician", bio: "EPA-certified HVAC tech specializing in residential systems. The person your AC calls when it's having a bad day.", initials: "ST" },
];

const CERTIFICATIONS = [
  { icon: "🏛️", label: "State Licensed Contractor", detail: CLIENT.licenseNumber },
  { icon: "🛡️", label: "Fully Insured", detail: "General liability + workers' comp" },
  { icon: "❄️", label: "EPA 608 Certified", detail: "All HVAC technicians" },
  { icon: "🔧", label: "Master Plumber Licensed", detail: `State of ${CLIENT.serviceAreas[0]?.state ?? "TX"}` },
  { icon: "⭐", label: "Google Guaranteed", detail: `${CLIENT.rating}★ from ${CLIENT.reviewCount}+ reviews` },
  { icon: "🏅", label: `${new Date().getFullYear() - CLIENT.yearFounded}+ Years in Business`, detail: `Established ${CLIENT.yearFounded}` },
];

const MILESTONES = [
  { year: CLIENT.yearFounded, event: `${CLIENT.businessName} founded with a single crew and a focus on honest, local service.` },
  { year: CLIENT.yearFounded + 2, event: "Added HVAC services and brought on our first certified technicians." },
  { year: CLIENT.yearFounded + 4, event: "Expanded to all 5 communities in the service area. Completed our 500th project." },
  { year: CLIENT.yearFounded + 7, event: "Launched 24/7 emergency line for plumbing and HVAC — because emergencies don't wait." },
  { year: new Date().getFullYear() - 1, event: `Reached ${CLIENT.projectsCompleted.toLocaleString()} completed projects and ${CLIENT.reviewCount}+ five-star Google reviews.` },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="bg-hero-gradient py-14 md:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm mb-8" aria-label="Breadcrumb">
            <Link href="/" className="text-white/50 hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">›</span>
            <span className="text-white/70">About Us</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">Our Story</span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
                Locally Owned.<br />
                <span className="text-accent">Genuinely Trusted.</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {CLIENT.businessName} was built on a simple idea: home service should be honest,
                on time, and done right. Since {CLIENT.yearFounded} we&apos;ve served thousands of
                homeowners in {CLIENT.primaryArea} — one job at a time.
              </p>
              <p className="text-white/65 leading-relaxed mb-8">
                We&apos;re not a franchise or a call center. Every technician who walks into your
                home is our employee, background-checked, licensed, and trained to treat your
                property the way they&apos;d want theirs treated.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote" className="btn btn-accent btn-lg">Get a Free Quote</Link>
                <a href={CLIENT.phoneHref} className="btn btn-white btn-lg">📞 {CLIENT.phone}</a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div key={s.label}
                  className="bg-white/[0.07] border border-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <p className="text-3xl font-black text-accent mb-2">{s.value}</p>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY / TIMELINE ──────────────────────────────── */}
      <section className="section">
        <div className="container grid lg:grid-cols-[1fr_480px] gap-12 items-start">

          {/* Copy */}
          <div>
            <span className="eyebrow">How We Got Here</span>
            <h2 className="section-title">Built from the Ground Up</h2>
            <p className="text-muted leading-relaxed mb-5">
              {CLIENT.businessName} started in {CLIENT.yearFounded} when our founder Alex Johnson
              noticed a gap: homeowners couldn&apos;t find a single contractor they could trust for
              multiple types of work. Too many specialists, too much coordination, too many surprises
              on the final bill.
            </p>
            <p className="text-muted leading-relaxed mb-5">
              The solution was simple — build one reliable team that covers the services homeowners
              actually need most: cleanup, renovation, plumbing, and heating &amp; cooling. Train
              everyone to the same standard. Quote honestly. Show up on time.
            </p>
            <p className="text-muted leading-relaxed">
              Today we have {CLIENT.projectsCompleted.toLocaleString()}+ completed jobs and a {CLIENT.rating}-star
              Google rating from real customers in {CLIENT.primaryArea}. We&apos;re proud of every one of them.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] top-2 bottom-2 w-[2px] bg-border" />

            <div className="flex flex-col gap-6">
              {MILESTONES.map((m, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center
                                  text-white font-black text-xs shrink-0 relative z-10 border-4 border-white shadow">
                    {m.year}
                  </div>
                  <div className="pt-2 pb-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-1">{m.year}</p>
                    <p className="text-sm text-text leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">What Drives Us</span>
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle mb-12">
            These aren&apos;t marketing words — they&apos;re the standards we hold every employee to on every job.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-4 p-6 bg-white border border-border rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center text-2xl">
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base mb-2">{v.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">The Team</span>
          <h2 className="section-title">People Behind the Work</h2>
          <p className="section-subtitle mb-12">
            Real people, not a call center. Every technician is our direct employee — background-checked,
            licensed, and accountable.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="flex flex-col gap-4 p-6 bg-white border border-border rounded-xl text-center">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-primary mx-auto flex items-center justify-center
                                text-white font-black text-xl">
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-dark text-base">{member.name}</p>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mt-1 mb-3">{member.role}</p>
                  <p className="text-muted text-xs leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-muted text-sm mt-10">
            Plus {CLIENT.projectsCompleted > 500 ? "dozens" : "several"} more licensed technicians and crew members
            serving {CLIENT.primaryArea} every day.
          </p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ────────────────────────────────────── */}
      <section className="section bg-surface">
        <div className="container">
          <span className="eyebrow">Credentials</span>
          <h2 className="section-title">Licensed, Insured &amp; Certified</h2>
          <p className="section-subtitle mb-10">
            Every credential below is current and verifiable. Ask us for proof on any job.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((c) => (
              <div key={c.label} className="flex items-start gap-4 p-5 bg-white border border-border rounded-lg">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-bold text-dark text-sm">{c.label}</p>
                  <p className="text-muted text-xs mt-0.5">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES SUMMARY ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}
                className="group flex items-center gap-4 p-4 border border-border rounded-lg bg-white
                           hover:border-primary/40 hover:shadow-sm transition-all duration-200">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <p className="font-bold text-dark text-sm group-hover:text-primary transition-colors">{s.name}</p>
                  <p className="text-muted text-xs">From {s.startingPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-dark py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Ready to Work with Us?
          </h2>
          <p className="text-white/60 max-w-md mx-auto mb-8 leading-relaxed">
            Get a free, no-obligation quote or book an appointment online. We respond within hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/quote" className="btn btn-accent btn-lg">Get a Free Quote</Link>
            <Link href="/book" className="btn btn-white btn-lg">Book an Appointment</Link>
            <a href={CLIENT.phoneHref} className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.25)", color: "#fff" }}>
              📞 {CLIENT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
