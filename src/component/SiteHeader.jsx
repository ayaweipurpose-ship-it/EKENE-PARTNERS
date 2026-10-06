import { useState } from "react";
import { ArrowUpRight, Menu, Scale, X } from "lucide-react";

const links = [
  ["Expertise", "expertise"],
  ["About", "about"],
  ["Perspectives", "insights"],
  ["Contact", "contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>
          <span className="wordmark-icon">
            <Scale size={21} strokeWidth={1.6} />
          </span>
          <span>
            <strong>EKINI</strong>
            <small>PARTNERS</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div
          id="primary-links"
          className={`nav-links${menuOpen ? " is-open" : ""}`}
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Start a conversation <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}
