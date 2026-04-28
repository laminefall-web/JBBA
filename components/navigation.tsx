"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#cabinet", label: "Cabinet" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#offre", label: "Offre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#actu", label: "Actualites" },
  { href: "#medias", label: "Medias" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[5vw] bg-white border-b border-border transition-all duration-300 ${
        scrolled ? "h-[62px] shadow-[0_2px_24px_rgba(12,35,64,0.08)]" : "h-[74px]"
      }`}
    >
      <Link
        href="#accueil"
        className="font-serif text-[27px] font-semibold tracking-[0.07em] text-navy no-underline"
      >
        JB<span className="text-gold">BA</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[11px] font-medium tracking-[0.17em] uppercase text-muted no-underline transition-colors hover:text-navy relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1.5px] after:bg-gold after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <Link
        href="#contact"
        className="hidden lg:block text-[11px] font-medium tracking-[0.15em] uppercase text-white bg-navy px-[26px] py-[11px] no-underline transition-all border-[1.5px] border-navy hover:bg-gold hover:border-gold"
      >
        Nous contacter
      </Link>

      {/* Hamburger */}
      <button
        className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none p-[6px] cursor-pointer z-[210]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-[1.5px] bg-navy transition-all ${
            mobileMenuOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-navy transition-all ${
            mobileMenuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-navy transition-all ${
            mobileMenuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-[74px] left-0 right-0 bottom-0 z-[195] bg-white flex-col p-[2rem_5vw] border-t border-border overflow-y-auto ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-[13px] font-medium tracking-[0.14em] uppercase text-navy no-underline py-[1.1rem] border-b border-border transition-colors hover:text-gold"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="mt-6 bg-navy text-white text-center py-4 text-[13px] font-medium tracking-[0.14em] uppercase no-underline"
        >
          Nous contacter
        </Link>
      </div>
    </nav>
  );
}
