import {
  ConsultIcon,
  CadIcon,
  InstallIcon,
  WrenchIcon,
  ChartIcon,
  StairsIcon,
} from "./icons";
import type { ServicesContent } from "../types/content";
import services from "../../content/services.json";

const svc: ServicesContent = services;

const iconMap: Record<string, React.FC> = {
  consult: ConsultIcon,
  cad: CadIcon,
  install: InstallIcon,
  wrench: WrenchIcon,
  chart: ChartIcon,
  stairs: StairsIcon,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">{svc.eyebrow}</span>
          <h2>{svc.heading}</h2>
          <p>{svc.description}</p>
        </div>
        <div className="svc-grid">
          {svc.services.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div className="svc reveal" key={item.title}>
                <div className="ico">{Icon && <Icon />}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
