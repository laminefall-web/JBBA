import Image from "next/image";

const avocats = [
  {
    photo:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/20c65b69-3e3b-4d06-91d4-2a5af13225e8/5D1A1191-C2+%282%29.jpg",
    role: "Associe fondateur",
    name: "Theodore\nJean-Baptiste",
    bar: "Avocat au Barreau de Paris - Toque C1393",
    bio: "Entrepreneur avant d'etre avocat, Theodore a fonde sa premiere start-up a 24 ans dans les complements alimentaires naturels. Apres des experiences a Londres et a Paris, il cree JBBA pour accompagner les porteurs de projets avec une approche innovante, ancree dans la realite entrepreneuriale.",
    tags: ["Droit agroalimentaire", "Droit des societes", "Industrie musicale"],
    formation: [
      "CAPA - Haute Ecole des Avocats Conseils",
      "M2 Law, Entrepreneurship & Digital - Paris-Saclay",
      "M2 Droit des affaires - Univ. Catholique de Lille",
      "M2 Developpement agricole durable - Paris-Saclay",
    ],
  },
  {
    photo:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/3706ac0a-80c4-4eb5-a717-1b6c4408ec68/5D1A1228-C+%282%29.jpg",
    role: "Associe fondateur",
    name: "Seydi\nBa",
    bar: "Avocat au Barreau de Paris - 2eme Secretaire de la Conference 2023",
    bio: "Oriente vers l'international et l'Afrique, Seydi est forme au droit OHADA et au contentieux des affaires. Co-fondateur d'Ethos (art oratoire), elu 2eme Secretaire de la Conference en 2023, il intervient notamment en droit penal pour defendre victimes et personnes mises en cause.",
    tags: ["Droit OHADA", "Droit penal", "Contentieux", "Droit des societes"],
    formation: [
      "2eme Secretaire de la Conference - 2023",
      "CAPA - Ecole de Formation du Barreau de Paris",
      "M2 Contentieux interne & international - Paris V",
      "M2 Droits africains - Paris I Pantheon-Sorbonne",
    ],
  },
  {
    photo:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/0366b6eb-f546-42d5-973d-5d91d615e1bb/gautret-astrid-5d1a6211-2-3000px-1.jpg",
    role: "Collaboratrice",
    name: "Astrid\nGautret",
    bar: "Avocate au Barreau de Paris",
    bio: "Dotee d'un parcours pluridisciplinaire, Astrid a acquis une solide experience en droit penal au sein de cabinets et d'associations (Paris Aide aux Victimes, La Voix de l'Enfant). Elle a developpe une expertise en reparation du prejudice corporel. Son approche humaine est au coeur de sa pratique.",
    tags: ["Droit penal", "Responsabilite medicale", "Prejudice corporel"],
    formation: [
      "CAPA - Haute Ecole des Avocats Conseils",
      "M2 Contentieux interne & international - Paris V",
    ],
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="py-[10vh] px-[5vw] bg-white">
      {/* Section label */}
      <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold flex items-center gap-[14px] mb-12">
        <span className="w-7 h-[1.5px] bg-gold" />
        L&apos;equipe
      </div>

      <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-navy">
        Vos <em className="italic text-gold">avocats.</em>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border border-border mt-16">
        {avocats.map((avocat, i) => (
          <div
            key={avocat.name}
            className={`reveal reveal-delay-${i + 1} border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 overflow-hidden flex flex-col transition-colors hover:bg-off group`}
          >
            {/* Photo */}
            <div className="aspect-[3/3.5] overflow-hidden relative">
              <Image
                src={avocat.photo}
                alt={avocat.name.replace("\n", " ")}
                fill
                className="object-cover object-top saturate-[0.9] transition-all duration-500 group-hover:scale-[1.04] group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/55 to-transparent via-transparent" />
            </div>

            {/* Body */}
            <div className="p-8 lg:p-10 flex-1 flex flex-col">
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold mb-1">
                {avocat.role}
              </div>
              <div className="font-serif text-[28px] font-normal leading-[1.15] text-navy mb-1 whitespace-pre-line">
                {avocat.name}
              </div>
              <div className="text-[12px] text-muted-2 italic mb-6 pb-6 border-b border-border">
                {avocat.bar}
              </div>
              <p className="text-[13px] text-muted leading-[1.85] font-light mb-6 flex-1">
                {avocat.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-[6px] mb-6">
                {avocat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium tracking-[0.08em] uppercase border border-gold-border text-gold px-3 py-[5px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Formation */}
              <div className="border-t border-border pt-5">
                <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted-2 mb-3">
                  Formation
                </div>
                <ul className="list-none">
                  {avocat.formation.map((item) => (
                    <li
                      key={item}
                      className="text-[12px] text-muted py-1 border-b border-border-light last:border-b-0 flex gap-2 font-light"
                    >
                      <span className="text-gold shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
