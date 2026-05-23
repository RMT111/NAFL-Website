import { LayersIcon, ShieldIcon, UsersIcon, ClockIcon } from "./icons";
import type { WhyUsContent } from "../types/content";
import whyUs from "../../content/why-us.json";

const w: WhyUsContent = whyUs;

const iconMap: Record<string, React.FC> = {
  layers: LayersIcon,
  shield: ShieldIcon,
  users: UsersIcon,
  clock: ClockIcon,
};

export default function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">{w.eyebrow}</span>
          <h2>{w.heading}</h2>
          <p>{w.description}</p>
        </div>
        <div className="why-grid">
          {w.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <div className="stat-card reveal" key={card.title}>
                <div className="ico">{Icon && <Icon />}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
