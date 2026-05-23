"use client";

import { useRef, useState } from "react";
import { SendIcon } from "./icons";
import type { ContactContent, SiteContent } from "../types/content";
import contact from "../../content/contact.json";
import site from "../../content/site.json";

const ct: ContactContent = contact;
const s: SiteContent = site;

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const v = (id: string) =>
      (form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value.trim() ??
      "";

    if (!v("name") || !v("email") || !v("phone") || !v("enquiry")) {
      form.reportValidity();
      return;
    }

    const lines = [
      "Name: " + v("name"),
      "Company: " + (v("company") || "—"),
      "Email: " + v("email"),
      "Telephone: " + v("phone"),
      "Site postcode: " + (v("postcode") || "—"),
      "Type of work: " + (v("service") || "—"),
      "",
      "Enquiry:",
      v("enquiry"),
    ].join("\n");

    const subject =
      "Quote request - " + v("name") + (v("company") ? " (" + v("company") + ")" : "");

    window.location.href =
      "mailto:" +
      s.email +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines);

    setShowMsg(true);
  };

  return (
    <div className="quote-form reveal">
      <h3>{ct.formHeading}</h3>
      <p className="fsub">
        Fields marked <span style={{ color: "var(--blue)" }}>*</span> are
        required. We aim to respond the same working day.
      </p>
      <div className={`form-msg${showMsg ? " show" : ""}`} id="formMsg">
        {ct.formSuccessMessage.replace("{phone}", s.phone)}
      </div>
      <form ref={formRef} id="quoteForm" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">
              Name <span className="req">*</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="Company name" />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Telephone <span className="req">*</span>
            </label>
            <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="postcode">Site postcode</label>
            <input type="text" id="postcode" name="postcode" placeholder="e.g. HU9 5LW" />
          </div>
          <div className="field">
            <label htmlFor="service">Type of work</label>
            <select id="service" name="service" defaultValue="">
              <option value="">Please select…</option>
              {ct.serviceOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="enquiry">
            Your enquiry <span className="req">*</span>
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            placeholder="Tell us about the project — approximate floor area, location, timescales and anything else that helps us quote."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {ct.submitButton}
          <SendIcon />
        </button>
        <p className="form-note">
          {ct.formNote.split("{phone}")[0]}
          <a href={s.phoneHref} style={{ color: "var(--blue)", fontWeight: 700 }}>
            {s.phone}
          </a>
          {ct.formNote.split("{phone}")[1]}
        </p>
      </form>
    </div>
  );
}
