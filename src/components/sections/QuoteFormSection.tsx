import { CLIENT, SERVICES } from "@/lib/client-config";

type Props = {
  preselectedService?: string;
  heading?: string;
};

export default function QuoteFormSection({
  preselectedService,
  heading = "Get a Free Quote",
}: Props) {
  return (
    <section className="section" style={{ background: "var(--color-primary)" }}>
      <div className="container quote-inner">
        {/* Copy */}
        <div>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "0.75rem",
            }}
          >
            Free Estimate
          </span>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {heading}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
            Describe your project and we&apos;ll get back to you with a no-obligation estimate. Most quotes delivered within a few hours during business hours.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
            <li>✅ No obligation, no pressure</li>
            <li>✅ Transparent itemized pricing</li>
            <li>✅ Licensed &amp; insured technicians</li>
          </ul>

          <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Prefer to call?</p>
            <a
              href={CLIENT.phoneHref}
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.25rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              📞 {CLIENT.phone}
            </a>
          </div>
        </div>

        {/* Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "var(--radius-xl)",
            padding: "2rem",
          }}
        >
          <form
            action={CLIENT.formspreeEndpoint}
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="quote-form-grid">
              <div className="form-group">
                <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="qs-name">
                  Your Name
                </label>
                <input className="form-input" id="qs-name" name="name" type="text" placeholder="John Smith" required />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="qs-phone">
                  Phone Number
                </label>
                <input className="form-input" id="qs-phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="qs-email">
                Email Address
              </label>
              <input className="form-input" id="qs-email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="qs-service">
                Service Needed
              </label>
              <select className="form-select" id="qs-service" name="service" defaultValue={preselectedService ?? ""} required>
                <option value="" disabled>Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
                <option value="Other">Other / Not sure</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: "rgba(255,255,255,0.85)" }} htmlFor="qs-message">
                Describe Your Project
              </label>
              <textarea
                className="form-textarea"
                id="qs-message"
                name="message"
                placeholder="What do you need done? Include address and any relevant details…"
                required
              />
            </div>

            <input type="hidden" name="_subject" value="New Quote Request from Website" />
            <input type="hidden" name="_next" value="/thank-you" />

            <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%", justifyContent: "center" }}>
              Send My Free Quote Request →
            </button>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textAlign: "center" }}>
              We respond within a few hours. No spam, no pressure.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
