import Image from "next/image";

const valeurs = [
  {
    num: "01",
    title: "Travail d&apos;equipe",
    desc: "Equipe reduite pour un contact direct et permanent. Collaboration etroite pour saisir chaque enjeu.",
  },
  {
    num: "02",
    title: "Reactivite",
    desc: "Nos clients font parfois appel a nous dans l&apos;urgence. Repondre sans delai est notre priorite absolue.",
  },
  {
    num: "03",
    title: "Rigueur",
    desc: "Intervention dans des branches ciblees du droit pour une excellence technique optimale.",
  },
  {
    num: "04",
    title: "Combativite",
    desc: "Dans la negociation comme au contentieux, notre combativite est determinante. Nous envisageons les litiges pour les gagner.",
  },
];

export function Cabinet() {
  return (
    <section id="cabinet" className="py-[10vh] px-[5vw] bg-white">
      {/* Section label */}
      <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold flex items-center gap-[14px] mb-12">
        <span className="w-7 h-[1.5px] bg-gold" />
        Notre cabinet
      </div>

      {/* Split content */}
      <div className="grid grid-cols-1 lg:grid-cols-[5fr_4fr] gap-12 lg:gap-24 items-center my-20">
        {/* Photo */}
        <div className="reveal relative aspect-[4/5] overflow-hidden group">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/543fd8ad-2517-4b2c-9ae0-f62a56b763fd/image00119.jpg"
            alt="Theodore Jean-Baptiste & Seydi Ba"
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute top-[14px] left-[14px] right-[-14px] bottom-[-14px] border-2 border-gold-border -z-10" />
        </div>

        {/* Text */}
        <div className="reveal reveal-delay-2">
          <h2 className="font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-navy mb-8">
            Un tandem
            <br />
            depuis <em className="italic text-gold">12 ans.</em>
          </h2>
          <div className="space-y-6">
            <p className="text-[15px] leading-[1.9] text-muted font-light">
              JBBA est un cabinet d&apos;affaires a taille humaine, fonde par{" "}
              <strong className="text-navy font-medium">
                Theodore Jean-Baptiste
              </strong>{" "}
              et{" "}
              <strong className="text-navy font-medium">Seydi Ba</strong> - deux
              associes qui se connaissent depuis plus d&apos;une decennie.
            </p>
            <p className="text-[15px] leading-[1.9] text-muted font-light">
              Forts de leur experience d&apos;entrepreneurs, avec la creation de{" "}
              <strong className="text-navy font-medium">Nebedaye</strong>{" "}
              (complements alimentaires 100% naturels) et d&apos;
              <strong className="text-navy font-medium">Ethos</strong>{" "}
              (formation en art oratoire), ils apportent a leurs clients une
              vision qui depasse le seul cadre juridique.
            </p>
            <p className="text-[15px] leading-[1.9] text-muted font-light">
              Le cabinet conseille et accompagne les entrepreneurs, de
              l&apos;ideation a la creation, ainsi que les societes dans toutes
              leurs operations - et se bat a leurs cotes lors de tout
              contentieux.
            </p>
          </div>
        </div>
      </div>

      {/* Values grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border">
        {valeurs.map((v, i) => (
          <div
            key={v.num}
            className={`reveal reveal-delay-${i + 1} p-8 lg:p-10 border-r border-border last:border-r-0 relative transition-colors hover:bg-off group ${
              i < 2 ? "border-b lg:border-b-0 border-border" : ""
            } ${i === 1 ? "border-r-0 lg:border-r" : ""}`}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
            <div className="font-serif text-[13px] text-gold mb-2">{v.num}</div>
            <h3 className="text-[11px] font-medium tracking-[0.16em] uppercase text-navy mb-3">
              {v.title.replace(/&apos;/g, "'")}
            </h3>
            <p className="text-[13px] text-muted leading-[1.8]">
              {v.desc.replace(/&apos;/g, "'")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
