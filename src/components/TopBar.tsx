import { PhoneIcon, MailIcon } from "./icons";
import type { SiteContent } from "../types/content";
import site from "../../content/site.json";

const s: SiteContent = site;

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrap">
        <div className="tb-left">
          <a href={s.phoneHref} className="tb-item">
            <PhoneIcon />
            {s.phone}
          </a>
          <a href={s.emailHref} className="tb-item">
            <MailIcon />
            {s.email}
          </a>
          <span className="tb-item fax">Fax: {s.fax}</span>
        </div>
        <div className="tb-badge">
          <span className="dot" />
          {s.badgeText}
        </div>
      </div>
    </div>
  );
}
