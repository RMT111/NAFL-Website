import { ArrowRightIcon, PhoneIcon, CheckIcon } from "./icons";
import type { HeroContent, SiteContent } from "../types/content";
import hero from "../../content/hero.json";
import site from "../../content/site.json";

const h: HeroContent = hero;
const s: SiteContent = site;

export default function Hero() {
  return (
    <section className="hero" id="top" style={{ padding: 0 }}>
      <div className="wrap">
        <div className="hero-copy reveal">
          <span className="eyebrow">{h.eyebrow}</span>
          <p className="lead">{h.introText}</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              {h.ctaPrimary}
              <ArrowRightIcon />
            </a>
            <a href={s.phoneHref} className="btn btn-ghost">
              <PhoneIcon />
              {s.phone}
            </a>
          </div>
          <div className="hero-trust">
            {h.trustStats.map((stat) => (
              <div className="ht" key={stat.value}>
                <b>{stat.value}</b>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="floor-card reveal">
          <h3>{h.floorCard.heading}</h3>
          <p className="sub">{h.floorCard.subheading}</p>
          <div className="stack">
            <div className="panel p3" />
            <div className="panel p2" />
            <div className="panel p1" />
          </div>
          <div className="floor-feat">
            {h.floorCard.features.map((feat) => (
              <div className="ff" key={feat}>
                <CheckIcon /> {feat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
