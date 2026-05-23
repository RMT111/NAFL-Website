import { PhoneIcon, MailIcon, PinDotIcon, CalendarIcon } from "./icons";
import QuoteForm from "./QuoteForm";
import type { SiteContent, ContactContent } from "../types/content";
import site from "../../content/site.json";
import contact from "../../content/contact.json";

const s: SiteContent = site;
const ct: ContactContent = contact;

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">{ct.eyebrow}</span>
            <h2>{ct.heading}</h2>
            <p className="intro">{ct.introText}</p>

            <div className="ci-item">
              <div className="ico">
                <PhoneIcon />
              </div>
              <div>
                <div className="lbl">Telephone</div>
                <a className="val" href={s.phoneHref}>
                  {s.phone}
                </a>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <MailIcon />
              </div>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href={s.emailHref}>
                  {s.email}
                </a>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <PinDotIcon />
              </div>
              <div>
                <div className="lbl">Address</div>
                <address>
                  {s.address.line1}
                  <br />
                  {s.address.line2}
                  <br />
                  {s.address.line3}
                </address>
              </div>
            </div>
            <div className="ci-item">
              <div className="ico">
                <CalendarIcon />
              </div>
              <div>
                <div className="lbl">Fax</div>
                <div className="val" style={{ fontWeight: 600 }}>
                  {s.fax}
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
