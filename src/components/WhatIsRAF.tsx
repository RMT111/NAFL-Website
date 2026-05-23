import { BoltIcon, ServerIcon, AirIcon, FireIcon } from "./icons";
import type { AboutContent } from "../types/content";
import about from "../../content/about.json";

const a: AboutContent = about;

const iconMap: Record<string, React.FC> = {
  bolt: BoltIcon,
  server: ServerIcon,
  air: AirIcon,
  fire: FireIcon,
};

export default function WhatIsRAF() {
  return (
    <section className="raf" id="what">
      <div className="wrap">
        <div className="raf-grid">
          <div className="raf-text reveal">
            <span className="eyebrow">{a.eyebrow}</span>
            <h2
              style={{
                fontSize: "clamp(1.9rem,3.3vw,2.6rem)",
                fontWeight: 800,
                color: "var(--navy)",
                margin: "16px 0 18px",
              }}
            >
              {a.heading}
            </h2>
            {a.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="uses">
              {a.uses.map((use) => {
                const Icon = iconMap[use.icon];
                return (
                  <div className="use" key={use.label}>
                    {Icon && <Icon />} {use.label}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="diagram reveal">
            <svg
              viewBox="0 0 500 360"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Raised access floor cross-section"
            >
              <defs>
                <linearGradient id="panelG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3c86d6" />
                  <stop offset="1" stopColor="#2469b2" />
                </linearGradient>
                <linearGradient id="slabG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#c8cfd8" />
                  <stop offset="1" stopColor="#a8b2be" />
                </linearGradient>
                <linearGradient id="pedG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#8fa3b5" />
                  <stop offset="1" stopColor="#6d8399" />
                </linearGradient>
                <pattern id="slabHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#b0b8c2" strokeWidth="1" />
                </pattern>
              </defs>

              {/* concrete slab */}
              <rect x="30" y="290" width="420" height="40" rx="3" fill="url(#slabG)" />
              <rect x="30" y="290" width="420" height="40" rx="3" fill="url(#slabHatch)" opacity=".3" />
              <text x="240" y="315" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="13" fill="#4a5568" fontWeight="700" letterSpacing="1">
                CONCRETE SLAB
              </text>

              {/* pedestals */}
              <g>
                <rect x="60" y="200" width="16" height="90" rx="2" fill="url(#pedG)" />
                <rect x="170" y="200" width="16" height="90" rx="2" fill="url(#pedG)" />
                <rect x="295" y="200" width="16" height="90" rx="2" fill="url(#pedG)" />
                <rect x="405" y="200" width="16" height="90" rx="2" fill="url(#pedG)" />
              </g>
              {/* pedestal bases */}
              <g fill="#5b6670">
                <rect x="50" y="284" width="36" height="8" rx="2" />
                <rect x="160" y="284" width="36" height="8" rx="2" />
                <rect x="285" y="284" width="36" height="8" rx="2" />
                <rect x="395" y="284" width="36" height="8" rx="2" />
              </g>
              {/* pedestal heads */}
              <g fill="#5b6670">
                <rect x="52" y="196" width="32" height="6" rx="1" />
                <rect x="162" y="196" width="32" height="6" rx="1" />
                <rect x="287" y="196" width="32" height="6" rx="1" />
                <rect x="397" y="196" width="32" height="6" rx="1" />
              </g>

              {/* pedestal label */}
              <line x1="450" y1="240" x2="425" y2="240" stroke="#6b7884" strokeWidth="1" strokeDasharray="3 2" />
              <text x="448" y="233" textAnchor="end" fontFamily="Archivo,sans-serif" fontSize="9" fill="#4a5568" fontWeight="600">
                ADJUSTABLE
              </text>
              <text x="448" y="244" textAnchor="end" fontFamily="Archivo,sans-serif" fontSize="9" fill="#4a5568" fontWeight="600">
                PEDESTALS
              </text>

              {/* services in void */}
              {/* data cable */}
              <circle cx="120" cy="260" r="10" fill="#e8f0fe" stroke="#2c7cce" strokeWidth="2.5" />
              <text x="120" y="264" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="7" fill="#2c7cce" fontWeight="700">
                D
              </text>
              {/* power cable */}
              <circle cx="230" cy="270" r="8" fill="#edf7f0" stroke="#48b06a" strokeWidth="2.5" />
              <text x="230" y="274" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="7" fill="#48b06a" fontWeight="700">
                P
              </text>
              {/* HVAC duct */}
              <rect x="310" y="245" width="60" height="22" rx="4" fill="#fef6e8" stroke="#e0a13c" strokeWidth="2.5" />
              <text x="340" y="260" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="7" fill="#c8891e" fontWeight="700">
                HVAC
              </text>

              {/* services legend */}
              <circle cx="140" cy="345" r="5" fill="#e8f0fe" stroke="#2c7cce" strokeWidth="1.5" />
              <text x="150" y="348" fontFamily="Archivo,sans-serif" fontSize="8" fill="#4a5568">
                Data
              </text>
              <circle cx="185" cy="345" r="5" fill="#edf7f0" stroke="#48b06a" strokeWidth="1.5" />
              <text x="195" y="348" fontFamily="Archivo,sans-serif" fontSize="8" fill="#4a5568">
                Power
              </text>
              <rect x="229" y="340" width="12" height="8" rx="2" fill="#fef6e8" stroke="#e0a13c" strokeWidth="1.5" />
              <text x="246" y="348" fontFamily="Archivo,sans-serif" fontSize="8" fill="#4a5568">
                HVAC
              </text>

              {/* void height indicator */}
              <line x1="25" y1="202" x2="25" y2="288" stroke="#15325f" strokeWidth="1.5" markerStart="url(#arrowUp)" markerEnd="url(#arrowDown)" />
              <line x1="22" y1="202" x2="28" y2="202" stroke="#15325f" strokeWidth="1.5" />
              <line x1="22" y1="288" x2="28" y2="288" stroke="#15325f" strokeWidth="1.5" />
              <text x="12" y="250" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="8" fill="#15325f" fontWeight="600" transform="rotate(-90,12,250)">
                VOID
              </text>

              {/* floor panels */}
              <g>
                <rect x="44" y="180" width="130" height="20" rx="2" fill="url(#panelG)" />
                <rect x="180" y="180" width="120" height="20" rx="2" fill="url(#panelG)" />
                <rect x="306" y="180" width="114" height="20" rx="2" fill="url(#panelG)" />
              </g>
              {/* panel surface highlight */}
              <g opacity=".35">
                <rect x="44" y="180" width="130" height="5" rx="1" fill="#7db8f0" />
                <rect x="306" y="180" width="114" height="5" rx="1" fill="#7db8f0" />
              </g>

              {/* removed panel showing access */}
              <rect x="180" y="180" width="120" height="20" rx="2" fill="#f0f4f8" stroke="#2469b2" strokeWidth="2" strokeDasharray="6 4" />
              <text x="240" y="194" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="10" fill="#2469b2" fontWeight="700">
                ACCESS POINT
              </text>

              {/* lifted panel arrow */}
              <g transform="translate(200, 100) rotate(-12)">
                <rect x="0" y="0" width="100" height="16" rx="2" fill="url(#panelG)" opacity=".6" />
                <rect x="0" y="0" width="100" height="4" rx="1" fill="#7db8f0" opacity=".3" />
              </g>
              <path d="M240 170 C240 150, 250 130, 255 118" fill="none" stroke="#6b7884" strokeWidth="1" strokeDasharray="4 3" />

              {/* title */}
              <text x="240" y="80" textAnchor="middle" fontFamily="Archivo,sans-serif" fontSize="14" fontWeight="800" fill="#15325f" letterSpacing="1.5">
                REMOVABLE FLOOR PANELS
              </text>
              <text x="240" y="96" textAnchor="middle" fontFamily="Hanken Grotesk,sans-serif" fontSize="10" fill="#6b7884">
                Panels lift for easy access to services below
              </text>

              {/* floor finish label */}
              <line x1="450" y1="190" x2="425" y2="190" stroke="#6b7884" strokeWidth="1" strokeDasharray="3 2" />
              <text x="448" y="183" textAnchor="end" fontFamily="Archivo,sans-serif" fontSize="9" fill="#4a5568" fontWeight="600">
                FLOOR
              </text>
              <text x="448" y="194" textAnchor="end" fontFamily="Archivo,sans-serif" fontSize="9" fill="#4a5568" fontWeight="600">
                PANELS
              </text>
            </svg>
            <p className="cap">{a.diagramCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
