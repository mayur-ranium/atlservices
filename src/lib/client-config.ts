// ============================================================
// CLIENT CONFIG — swap these values per client
// ============================================================

export const CLIENT = {
  // ── Business Identity ──────────────────────────────────────
  businessName: "ProFix Home Services",
  legalName: "ProFix Home Services LLC",
  tagline: "Fast, Reliable Home Services — Done Right the First Time.",
  shortTagline: "Done right. Done fast.",
  description:
    "ProFix Home Services is your trusted local team for junk removal, remodeling, plumbing, and HVAC. Licensed, insured, and available for emergencies.",

  // ── Contact ────────────────────────────────────────────────
  phone: "(555) 123-4567",
  phoneHref: "tel:+15551234567",
  email: "hello@profix-example.com",
  address: {
    street: "123 Main Street",
    city: "Sample City",
    state: "TX",
    zip: "75001",
    full: "123 Main Street, Sample City, TX 75001",
  },
  hours: {
    regular: "Mon – Sat: 7 am – 7 pm",
    emergency: "Emergency line: 24 / 7",
  },
  responseTime: "Same-day service available",

  // ── Service Areas ──────────────────────────────────────────
  primaryArea: "Sample City, TX",
  serviceAreas: [
    { name: "Sample City", state: "TX", slug: "sample-city" },
    { name: "Westview", state: "TX", slug: "westview" },
    { name: "Lakeside", state: "TX", slug: "lakeside" },
    { name: "North Heights", state: "TX", slug: "north-heights" },
    { name: "Riverside", state: "TX", slug: "riverside" },
  ],

  // ── Social & External Links ────────────────────────────────
  googleBusinessUrl: "https://g.page/your-business-id",
  googlePlaceId: "YOUR_GOOGLE_PLACE_ID",
  facebookUrl: "https://facebook.com/your-page",
  instagramUrl: "https://instagram.com/your-page",
  nextdoorUrl: "",

  // ── Trust Badges ───────────────────────────────────────────
  yearFounded: 2012,
  licenseNumber: "LIC #TX-00000",
  rating: 4.9,
  reviewCount: 143,
  projectsCompleted: 2400,

  // ── Site URL — used for absolute redirects (Formspree _next) ──
  // Local dev: "http://localhost:3000"  |  Production: "https://yourdomain.com"
  siteUrl: "http://localhost:3000",

  // ── Booking & Forms ────────────────────────────────────────
  // Acuity Scheduling embed URL — get from your Acuity account
  acuityEmbedUrl: "https://app.acuityscheduling.com/schedule.php?owner=YOUR_ID",
  // Formspree form endpoint — get from formspree.io
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  // ── Chat ───────────────────────────────────────────────────
  // Tidio public key — get from Tidio dashboard
  tidioKey: "YOUR_TIDIO_PUBLIC_KEY",

  // ── Analytics ──────────────────────────────────────────────
  ga4MeasurementId: "G-XXXXXXXXXX",

  // ── Design Tokens (override colors per client) ─────────────
  colors: {
    primary: "#1B4FD8",   // brand blue
    primaryDark: "#1340B0",
    accent: "#F59E0B",    // amber / CTA highlight
    accentDark: "#D97706",
    emergency: "#DC2626", // red — emergency pages only
  },
};

// ── Services offered — add or remove per client ────────────────
export const SERVICES = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    shortDesc: "Fast, clean removal of unwanted items from any space.",
    icon: "🗑️",
    heroImage: "/images/services/junk-removal-hero.jpg",
    startingPrice: "$99",
    priceNote: "Pricing based on load size",
    emergency: false,
    keywords: ["junk removal", "haul away", "cleanout", "debris removal"],
  },
  {
    slug: "remodeling",
    name: "House Remodeling",
    shortDesc: "Kitchen, bathroom, and whole-home renovations done right.",
    icon: "🏗️",
    heroImage: "/images/services/remodeling-hero.jpg",
    startingPrice: "$2,500",
    priceNote: "Quote required — price varies by project scope",
    emergency: false,
    keywords: ["house remodeling", "kitchen renovation", "bathroom remodel", "home renovation"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    shortDesc: "Repairs, installs, and 24/7 emergency plumbing service.",
    icon: "🔧",
    heroImage: "/images/services/plumbing-hero.jpg",
    startingPrice: "$85",
    priceNote: "Per-hour rate — free diagnosis visit",
    emergency: true,
    keywords: ["plumber", "plumbing repair", "emergency plumber", "drain cleaning"],
  },
  {
    slug: "hvac",
    name: "HVAC",
    shortDesc: "Heating, cooling, maintenance, and emergency repair.",
    icon: "❄️",
    heroImage: "/images/services/hvac-hero.jpg",
    startingPrice: "$75",
    priceNote: "Diagnostic fee — applied to repair cost",
    emergency: true,
    keywords: ["HVAC repair", "air conditioning", "heating repair", "furnace repair"],
  },
];

// ── Emergency service types ────────────────────────────────────
export const EMERGENCY_TYPES = [
  { slug: "plumbing", name: "Emergency Plumbing", icon: "🚿", service: "plumbing" },
  { slug: "hvac",     name: "Emergency HVAC",     icon: "❄️", service: "hvac"     },
];

// ── FAQs per service (add/edit per client) ─────────────────────
export const SERVICE_FAQS: Record<string, { q: string; a: string }[]> = {
  "junk-removal": [
    { q: "What items can't you remove?", a: "We can't haul hazardous materials, chemicals, or paint. Everything else — furniture, appliances, yard waste, construction debris — is fine." },
    { q: "Do I need to be home?", a: "Not necessarily. As long as we can access the area and you've confirmed the items, we can handle it without you present." },
    { q: "How is pricing calculated?", a: "We charge by volume — how much space your junk takes in the truck. You'll get an exact price on arrival before we start." },
    { q: "Do you donate or recycle?", a: "Yes. We sort loads and donate usable items to local charities. We recycle metal, cardboard, and electronics where possible." },
  ],
  remodeling: [
    { q: "How long does a kitchen remodel take?", a: "A typical kitchen remodel takes 3–6 weeks depending on scope. We give you a detailed timeline before starting." },
    { q: "Do I need to move out?", a: "For partial remodels, usually not. For full gut jobs we recommend making other arrangements for at least part of the project." },
    { q: "Are you licensed and insured?", a: "Yes. We're fully licensed contractors in TX and carry both liability insurance and workers' comp." },
    { q: "Can I supply my own materials?", a: "Yes, though we recommend letting us source materials — we get contractor pricing and can guarantee quality." },
  ],
  plumbing: [
    { q: "Do you offer emergency service?", a: "Yes — 24/7 for burst pipes, major leaks, and sewage backups. Call us any time." },
    { q: "What's your service call fee?", a: "There's no trip charge. We charge only for parts and labor." },
    { q: "Can you handle full bathroom plumbing installs?", a: "Yes — new construction, remodel rough-in, fixture installation, and everything between." },
    { q: "How fast can you arrive for an emergency?", a: "Our emergency response target is under 90 minutes for any location in our service area." },
  ],
  hvac: [
    { q: "What brands do you service?", a: "We work on all major HVAC brands including Carrier, Trane, Lennox, Goodman, Rheem, and more." },
    { q: "How often should I service my AC?", a: "Annual tune-ups are recommended — before cooling season in spring and before heating season in fall." },
    { q: "Do you offer financing?", a: "Yes, for system replacements over $2,000 we offer 0% financing for 12 months with approved credit." },
    { q: "My AC stopped working at night — what do I do?", a: "Call our emergency line. We have on-call technicians available 24/7, including nights and weekends." },
  ],
};
