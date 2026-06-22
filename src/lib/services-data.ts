// Per-service extended content — pricing, process steps, included items
// All text is placeholder; swap per client.

export type PricingTier = {
  name: string;
  price: string;
  note: string;
  items: string[];
  highlight?: boolean;
};

export type ProcessStep = {
  step: number;
  title: string;
  desc: string;
};

export type ServiceDetail = {
  slug: string;
  longDesc: string;
  included: string[];
  notIncluded: string[];
  pricingTiers: PricingTier[];
  process: ProcessStep[];
  galleryAlt: string[]; // placeholder alt texts until real photos are added
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "junk-removal": {
    slug: "junk-removal",
    longDesc:
      "We haul away virtually anything — furniture, appliances, yard debris, construction waste, and estate cleanouts. Our team loads everything, sweeps up afterward, and sorts your items for donation or recycling wherever possible. One call and it's gone.",
    included: [
      "Full-service loading — we do all the lifting",
      "Same-day and next-day availability",
      "Donation drop-off for usable items",
      "Recycling of metal, electronics, and cardboard",
      "Light sweep of the area after removal",
    ],
    notIncluded: [
      "Hazardous materials (chemicals, paint, asbestos)",
      "Medical waste",
      "Large quantities of dirt or concrete (call for quote)",
    ],
    pricingTiers: [
      {
        name: "Small Load",
        price: "Starting at $99",
        note: "Up to ¼ truck",
        items: ["Single item pickups", "Small apartment cleanouts", "A few boxes of junk"],
      },
      {
        name: "Medium Load",
        price: "Starting at $199",
        note: "Up to ½ truck",
        items: ["Garage cleanouts", "Furniture removal (3–5 pieces)", "Yard debris"],
        highlight: true,
      },
      {
        name: "Full Truck",
        price: "Starting at $349",
        note: "Full 15-yard truck",
        items: ["Full estate cleanouts", "Renovation debris", "Hoarder cleanouts"],
      },
    ],
    process: [
      { step: 1, title: "Schedule Online or Call", desc: "Book online or call us. We'll confirm your window and send a reminder." },
      { step: 2, title: "We Show Up & Give a Price", desc: "Our team arrives, sees the items, and gives you a no-obligation price before touching anything." },
      { step: 3, title: "We Load Everything", desc: "You point, we haul. We handle all the heavy lifting and load it into our truck." },
      { step: 4, title: "Sweep & Done", desc: "We do a light sweep of the area and you're done — no mess left behind." },
    ],
    galleryAlt: [
      "Garage cleanout before and after",
      "Full truckload of furniture and debris",
      "Estate cleanout completed",
      "Yard waste removal",
    ],
  },

  "remodeling": {
    slug: "remodeling",
    longDesc:
      "From a single bathroom refresh to a complete home renovation, we manage every phase of your remodel — design consultation, permitting, demolition, construction, and finish work. All under one roof, with one point of contact.",
    included: [
      "Free initial design consultation",
      "Permit pulling and inspection coordination",
      "Demolition and haul-away",
      "All finish carpentry and installation",
      "Final walkthrough and punch list",
    ],
    notIncluded: [
      "Appliances and fixtures (unless specified in quote)",
      "Custom cabinetry lead times (allow 4–8 weeks)",
      "Structural engineering (referred to licensed engineer)",
    ],
    pricingTiers: [
      {
        name: "Bathroom Remodel",
        price: "Starting at $4,500",
        note: "Full gut-and-replace",
        items: ["New tile, vanity, toilet", "Updated plumbing rough-in", "Lighting and ventilation"],
      },
      {
        name: "Kitchen Remodel",
        price: "Starting at $12,000",
        note: "Mid-range full remodel",
        items: ["Cabinet replacement", "Countertop and backsplash", "Flooring and lighting"],
        highlight: true,
      },
      {
        name: "Whole-Home Renovation",
        price: "Custom quote",
        note: "Requires site visit",
        items: ["Multi-room or full home scope", "Structural and cosmetic work", "Fully managed project"],
      },
    ],
    process: [
      { step: 1, title: "Free Consultation", desc: "We visit your home, discuss your vision and budget, and measure the space." },
      { step: 2, title: "Design & Proposal", desc: "We send a detailed written proposal with scope, materials, timeline, and fixed price." },
      { step: 3, title: "Permits & Scheduling", desc: "We pull required permits and schedule your project start date." },
      { step: 4, title: "Construction", desc: "Our crew works daily until complete. You get weekly progress updates." },
      { step: 5, title: "Final Walkthrough", desc: "We walk through together and fix any punch-list items before we consider the job done." },
    ],
    galleryAlt: [
      "Kitchen before and after remodel",
      "Modern bathroom renovation",
      "Open-concept living room renovation",
      "Master bath tile and vanity upgrade",
    ],
  },

  "plumbing": {
    slug: "plumbing",
    longDesc:
      "From dripping faucets to full bathroom rough-ins and burst pipe emergencies, our licensed plumbers handle it all. No trip charge, transparent labor rates, and a 1-year warranty on all workmanship.",
    included: [
      "Free diagnosis on all service calls",
      "1-year workmanship warranty",
      "No hidden fees — price quoted before work starts",
      "24/7 emergency response (under 90 min)",
      "Licensed and background-checked plumbers",
    ],
    notIncluded: [
      "City sewer line work (we coordinate with the city)",
      "Septic system pumping (referred to septic specialist)",
    ],
    pricingTiers: [
      {
        name: "Minor Repairs",
        price: "Starting at $85",
        note: "Faucets, toilets, shut-offs",
        items: ["Dripping faucet repair", "Running toilet fix", "Shut-off valve replacement"],
      },
      {
        name: "Drain & Pipe Work",
        price: "Starting at $150",
        note: "Clearing, snaking, repair",
        items: ["Drain cleaning / snaking", "Pipe leak repair", "Water heater replacement"],
        highlight: true,
      },
      {
        name: "Full Installations",
        price: "Starting at $400",
        note: "Quote required",
        items: ["New fixture installation", "Bathroom plumbing rough-in", "Gas line work"],
      },
    ],
    process: [
      { step: 1, title: "Call or Book Online", desc: "For emergencies call directly. For non-urgent work, book online and pick your window." },
      { step: 2, title: "Diagnosis", desc: "Our plumber diagnoses the issue and gives you a fixed price before starting — no surprises." },
      { step: 3, title: "Repair or Install", desc: "Work is completed by a licensed plumber with quality parts and proper permits where required." },
      { step: 4, title: "Test & Guarantee", desc: "We test all work before leaving and back everything with a 1-year workmanship warranty." },
    ],
    galleryAlt: [
      "Bathroom plumbing rough-in",
      "Water heater replacement",
      "Under-sink pipe repair",
      "New shower installation",
    ],
  },

  "hvac": {
    slug: "hvac",
    longDesc:
      "Licensed HVAC technicians for repair, maintenance, and full system replacement. We service all major brands and offer maintenance plans that keep your system running efficiently year-round. Emergency calls answered 24/7.",
    included: [
      "All major brands serviced",
      "Free system assessment with any repair",
      "Manufacturer warranty on new equipment",
      "1-year labor warranty",
      "24/7 emergency service",
    ],
    notIncluded: [
      "Ductwork replacement (quoted separately)",
      "Refrigerant disposal fees (included in most repairs)",
    ],
    pricingTiers: [
      {
        name: "Tune-Up & Maintenance",
        price: "Starting at $75",
        note: "Per system, per visit",
        items: ["Filter replacement", "Coil cleaning", "System performance check"],
      },
      {
        name: "Repair",
        price: "Starting at $150",
        note: "Diagnostic fee applied to repair",
        items: ["Capacitor / contactor replacement", "Refrigerant recharge", "Thermostat replacement"],
        highlight: true,
      },
      {
        name: "System Replacement",
        price: "Starting at $3,200",
        note: "Full unit, installed",
        items: ["New AC or furnace installed", "Old unit removed", "0% financing available"],
      },
    ],
    process: [
      { step: 1, title: "Schedule Service", desc: "Book online or call. Emergency calls are answered 24/7 with response in under 90 minutes." },
      { step: 2, title: "Diagnosis", desc: "Our tech runs a full system check and explains exactly what's wrong and what it will cost." },
      { step: 3, title: "Repair or Replace", desc: "Most repairs are completed same-visit. Replacements are typically scheduled within 24–48 hours." },
      { step: 4, title: "Test & Sign Off", desc: "We run the system through a full cycle and confirm it's working properly before we leave." },
    ],
    galleryAlt: [
      "New AC unit installation",
      "Furnace replacement",
      "HVAC maintenance tune-up",
      "Ductless mini-split installation",
    ],
  },
};
