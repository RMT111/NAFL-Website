import { CheckIcon } from "./icons";
import type { DataCentresContent } from "../types/content";
import dataCentres from "../../content/data-centres.json";

const dc: DataCentresContent = dataCentres;

export default function DataCentres() {
  return (
    <section className="comms" id="comms">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">{dc.eyebrow}</span>
          <h2>{dc.heading}</h2>
          {dc.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="reqs">
            {dc.requirements.map((r) => (
              <li key={r}>
                <CheckIcon /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="comms-panel reveal">
          <div className="big">{dc.panelHeading}</div>
          <p className="quote-line">{dc.panelDescription}</p>
          <div className="floor-feat" style={{ marginBottom: 28 }}>
            {dc.panelFeatures.map((f) => (
              <div className="ff" key={f}>
                <CheckIcon /> {f}
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            {dc.panelCta}
          </a>
        </div>
      </div>
    </section>
  );
}
