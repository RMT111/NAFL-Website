import Image from "next/image";
import type { SiteContent } from "../types/content";
import site from "../../content/site.json";

const s: SiteContent = site;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="logo-chip">
              <Image
                src={s.footerLogo}
                alt={s.logoAlt}
                width={2242}
                height={624}
                style={{ height: 38, width: "auto" }}
              />
            </span>
            <p>{s.footerDescription}</p>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            {s.footerNav.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <a href={s.phoneHref}>Tel: {s.phone}</a>
            <p>Fax: {s.fax}</p>
            <a href={s.emailHref}>{s.email}</a>
            <p>
              {s.address.line2}
              <br />
              {s.address.line3}
            </p>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            &copy; {year} {s.companyName}. All rights reserved.
          </span>
          <span>{s.badgeText}</span>
        </div>
      </div>
    </footer>
  );
}
