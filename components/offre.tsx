import Link from "next/link";

const offres = [
  {
    badge: "Formule recurrente",
    title: "Abonnement",
    price: "A partir de 800 EUR HT / mois",
    desc: "Des demandes variees et recurrentes ? Vous souhaitez avoir de la visibilite sur vos depenses juridiques annuelles ? L'abonnement vous permet de contacter votre avocat des que vous en ressentez le besoin, pour tous les conseils generaux sur vos problemes juridiques quotidiens.",
    cta: "Prendre contact",
    featured: false,
  },
  {
    badge: "Formule sur mesure",
    title: "Forfait",
    price: "Sur devis",
    desc: "Apres etude de votre dossier, nous etablissons un devis personnalise conforme au service requis. Tarif fixe determine pour nos prestations, de la simple consultation a l'accompagnement jusqu'au terme d'une procedure judiciaire.",
    cta: "Obtenir un devis",
    featured: true,
  },
  {
    badge: "Affaires complexes",
    title: "Taux horaire",
    price: "350 EUR HT / heure",
    desc: "Pour les affaires les plus complexes ou il est impossible d'evaluer a l'avance les developpements previsibles. Selon la complexite du dossier, l'interet en jeu et les moyens consacres, la facturation au temps passe est privilegiee.",
    cta: "Nous contacter",
    featured: false,
  },
];

export function Offre() {
  return (
    <section id="offre" className="py-[10vh] px-[5vw] bg-off">
      {/* Section label */}
      <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold flex items-center gap-[14px] mb-12">
        <span className="w-7 h-[1.5px] bg-gold" />
        Nos tarifs
      </div>

      <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-navy">
        Une offre
        <br />
        sur <em className="italic text-gold">mesure.</em>
      </h2>

      {/* Cards */}
      <div className="reveal reveal-delay-1 grid grid-cols-1 lg:grid-cols-3 border border-border mt-16">
        {offres.map((offre) => (
          <div
            key={offre.title}
            className={`p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 flex flex-col relative transition-colors ${
              offre.featured
                ? "bg-navy hover:bg-navy-2"
                : "bg-white hover:bg-off-2"
            }`}
          >
            {offre.featured && (
              <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 text-[9px] font-medium tracking-[0.2em] uppercase bg-gold text-white px-[18px] py-[5px]">
                Recommande
              </div>
            )}

            <div
              className={`text-[10px] font-medium tracking-[0.2em] uppercase mb-5 ${
                offre.featured ? "text-gold-2" : "text-gold"
              }`}
            >
              {offre.badge}
            </div>

            <h3
              className={`font-serif text-[32px] font-normal mb-1 ${
                offre.featured ? "text-white" : "text-navy"
              }`}
            >
              {offre.title}
            </h3>

            <div
              className={`font-serif text-[18px] font-light mb-8 pb-8 border-b ${
                offre.featured
                  ? "text-gold-2 border-white/10"
                  : "text-gold border-border"
              }`}
            >
              {offre.price}
            </div>

            <p
              className={`text-[13px] leading-[1.9] font-light flex-1 mb-8 ${
                offre.featured ? "text-white/55" : "text-muted"
              }`}
            >
              {offre.desc}
            </p>

            <Link
              href="#contact"
              className={`inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase no-underline group ${
                offre.featured ? "text-gold-2" : "text-navy hover:text-gold"
              }`}
            >
              {offre.cta}
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
