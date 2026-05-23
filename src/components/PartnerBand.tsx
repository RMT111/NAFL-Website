import type { PartnersContent } from "../types/content";
import partners from "../../content/partners.json";

const p: PartnersContent = partners;

export default function PartnerBand() {
  return (
    <div className="partner">
      <div className="wrap">
        <span className="lbl">{p.heading}</span>
        <div className="brands">
          {p.brands.map((b) => (
            <span key={b} className="chip">
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
