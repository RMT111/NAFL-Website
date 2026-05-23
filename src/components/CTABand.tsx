import type { CTAContent, SiteContent } from "../types/content";
import cta from "../../content/cta.json";
import site from "../../content/site.json";

const c: CTAContent = cta;
const s: SiteContent = site;

export default function CTABand() {
  return (
    <div className="cta-band">
      <div className="wrap reveal">
        <div>
          <h2>{c.heading}</h2>
          <p>{c.description}</p>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#contact" className="btn btn-dark">
            {c.primaryButton}
          </a>
          <a href={s.phoneHref} className="btn btn-ghost">
            {c.secondaryButtonPrefix} {s.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
