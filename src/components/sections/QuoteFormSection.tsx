import { CLIENT, SERVICES } from "@/lib/client-config";
import FormSubmit from "@/components/ui/FormSubmit";

type Props = {
  preselectedService?: string;
  heading?: string;
};

export default function QuoteFormSection({ preselectedService, heading = "Get a Free Quote" }: Props) {
  return (
    <section className="section bg-primary">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Copy */}
        <div>
          <span className="inline-block text-[0.8rem] font-bold tracking-[0.1em] uppercase text-accent mb-3">
            Free Estimate
          </span>
          <h2 className="text-[2rem] font-extrabold text-white mb-4 leading-tight" style={{ letterSpacing: "-0.02em" }}>
            {heading}
          </h2>
          <p className="text-white/75 leading-[1.65] mb-6">
            Describe your project and we&apos;ll get back to you with a no-obligation estimate. Most quotes delivered within a few hours during business hours.
          </p>
          <ul className="flex flex-col gap-2 text-white/80 text-[0.9rem]">
            <li>✅ No obligation, no pressure</li>
            <li>✅ Transparent itemized pricing</li>
            <li>✅ Licensed &amp; insured technicians</li>
          </ul>
          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-white/60 text-[0.85rem] mb-2">Prefer to call?</p>
            <a href={CLIENT.phoneHref} className="text-white font-bold text-xl inline-flex items-center gap-2">
              📞 {CLIENT.phone}
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/[0.07] border border-white/[0.12] rounded-xl p-8">
          <FormSubmit action={CLIENT.formspreeEndpoint} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group">
                <label className="form-label !text-white/85" htmlFor="qs-name">Your Name</label>
                <input className="form-input" id="qs-name" name="name" type="text" placeholder="John Smith" required />
              </div>
              <div className="form-group">
                <label className="form-label !text-white/85" htmlFor="qs-phone">Phone Number</label>
                <input className="form-input" id="qs-phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label !text-white/85" htmlFor="qs-email">Email Address</label>
              <input className="form-input" id="qs-email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="form-group">
              <label className="form-label !text-white/85" htmlFor="qs-service">Service Needed</label>
              <select className="form-select" id="qs-service" name="service" defaultValue={preselectedService ?? ""} required>
                <option value="" disabled>Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.name}>{s.name}</option>
                ))}
                <option value="Other">Other / Not sure</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label !text-white/85" htmlFor="qs-message">Describe Your Project</label>
              <textarea className="form-textarea" id="qs-message" name="message"
                placeholder="What do you need done? Include address and any relevant details…" required />
            </div>

            <input type="hidden" name="_subject" value="New Quote Request from Website" />

            <button type="submit" className="btn btn-accent btn-lg w-full justify-center">
              Send My Free Quote Request →
            </button>
            <p className="text-xs text-white/50 text-center">
              We respond within a few hours. No spam, no pressure.
            </p>
          </FormSubmit>
        </div>
      </div>
    </section>
  );
}
