"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { SiteContent } from "../types/content";
import site from "../../content/site.json";

const s: SiteContent = site;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="wrap">
        <a href="#top" className="brand">
          <Image
            src={s.logo}
            alt={s.logoAlt}
            width={2242}
            height={624}
            priority
            style={{ width: "auto" }}
          />
        </a>
        <nav className={`navlinks${open ? " open" : ""}`} id="navlinks">
          {s.navigation.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">
            Request a Quote
          </a>
          <button
            className="menu-toggle"
            id="menuToggle"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
