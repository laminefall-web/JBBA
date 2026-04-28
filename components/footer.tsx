import Link from "next/link";

const navLinks = [
  { href: "#cabinet", label: "Cabinet" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#offre", label: "Offre" },
  { href: "#equipe", label: "Equipe" },
  { href: "#actu", label: "Actualites" },
  { href: "#medias", label: "Medias" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white px-[5vw] pt-12 pb-14">
      {/* Top */}
      <div className="flex flex-col lg:flex-row items-center justify-between pb-8 border-b border-white/10 mb-8 gap-6 text-center lg:text-left">
        <div className="font-serif text-[24px] font-semibold tracking-[0.07em]">
          JB<span className="text-gold-2">BA</span>
        </div>
        <nav className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/40 no-underline transition-colors hover:text-gold-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-[12px] text-white/30 gap-4 text-center lg:text-left">
        <div>
          &copy; JBBA 2025 - A.A.R.P.I. - Toque C1393 - 1 bis, boulevard Berthier
          - 75017 Paris
        </div>
        <div className="flex gap-8">
          <Link
            href="#"
            className="text-white/30 no-underline transition-colors hover:text-gold-2"
          >
            Mentions legales
          </Link>
          <Link
            href="#"
            className="text-white/30 no-underline transition-colors hover:text-gold-2"
          >
            Donnees personnelles
          </Link>
        </div>
      </div>
    </footer>
  );
}
