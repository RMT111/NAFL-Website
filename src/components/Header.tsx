"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#what", label: "Raised Access Flooring" },
  { href: "#why", label: "Why Us" },
  { href: "#services", label: "Services" },
  { href: "#comms", label: "Data Centres" },
  { href: "#contact", label: "Contact" },
];

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
          {/* Logo extracted from the original inline base64 into /public/logo.jpg */}
          <Image
            src="/logo.png"
            alt="Northern Access Floors Ltd"
            width={2242}
            height={624}
            priority
            style={{ width: "auto" }}
          />
        </a>
        <nav className={`navlinks${open ? " open" : ""}`} id="navlinks">
          {links.map((l) => (
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
