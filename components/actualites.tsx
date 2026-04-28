import Image from "next/image";
import Link from "next/link";

const mainArticles = [
  {
    href: "https://jbba.co/actu/rap",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1747683329813-BJUYVM835SX0X94M9821/unsplash-image-sdtnZ4LgbWk.jpg",
    category: "Droit d'auteur",
    date: "19 mai 2025",
    title:
      "OEuvre artistique et disparition de l'auteur : peut-on juridiquement demander le retrait posthume d'une oeuvre ?",
    main: true,
  },
  {
    href: "https://jbba.co/actu/editolexbase-mtnet",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1737050740573-FZIQZSM82HZZUX77THQH/1725555356014.jpg",
    category: "Lexbase",
    date: "16 jan. 2025",
    title: "Edito de Seydi Ba, avocat associe, dans le journal juridique LEXBASE",
    main: false,
  },
  {
    href: "https://jbba.co/actu/crypto",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1737049103145-ERJDM268XRXMHX7MDJGF/unsplash-image-fiXLQXAhCfk.jpg",
    category: "Penal",
    date: "16 jan. 2025",
    title:
      "Relaxe confirmee dans l'un des premiers dossiers de cryptomonnaies en France",
    main: false,
  },
];

const listArticles = [
  {
    href: "https://jbba.co/actu/editolexbase",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1704457801823-WOD4ECCOH31O933CSB8L/1704358928606.jpeg",
    category: "Lexbase",
    date: "2024",
    title: "Edito de Seydi Ba dans le journal LEXBASE",
  },
  {
    href: "https://jbba.co/actu/le-cabinet-en-dfense-dans-une-affaire-dabus-de-confiance-contre-une-ancienne-rsistante",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1703628180281-N2GPJ1PLKJAJVN9O27MO/386870764_7547471338614834_2787889030849555078_n.jpg",
    category: "Penal",
    date: "2023",
    title: "Defense dans une affaire d'abus de confiance contre une ancienne resistante",
  },
  {
    href: "https://jbba.co/actu/memorialdecaen",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1684168390443-91FBS51UH0C102HQZPAV/1+%282%29.jpg",
    category: "Prix",
    date: "2023",
    title: "Theodore Jean-Baptiste recompense au Concours de Plaidoirie du Memorial de Caen",
  },
  {
    href: "https://jbba.co/actu/rixeparis",
    img: "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/1687532333736-XGN2C5XRHXUFMV7W5MVT/image-asset.jpeg",
    category: "Penal",
    date: "2023",
    title: "Le cabinet accompagne une personne mise en examen dans une affaire de tentative de meurtre",
  },
];

export function Actualites() {
  return (
    <section id="actu" className="py-[10vh] px-[5vw] bg-off">
      {/* Header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold flex items-center gap-[14px] mb-12">
            <span className="w-7 h-[1.5px] bg-gold" />
            Actualites
          </div>
          <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-navy">
            Nos dernieres
            <br />
            <em className="italic text-gold">publications.</em>
          </h2>
        </div>
        <Link
          href="https://jbba.co/actu"
          target="_blank"
          className="reveal reveal-delay-2 text-[11px] font-medium tracking-[0.16em] uppercase text-gold no-underline transition-opacity hover:opacity-65 flex items-center gap-2"
        >
          Toutes les actualites
          <span>&rarr;</span>
        </Link>
      </div>

      {/* Main grid */}
      <div className="reveal grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] border border-border">
        {mainArticles.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            target="_blank"
            className="border-b lg:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 overflow-hidden flex flex-col no-underline text-inherit bg-white transition-colors hover:bg-off-2 group"
          >
            <div
              className={`overflow-hidden ${article.main ? "aspect-[4/3]" : "aspect-video"}`}
            >
              <Image
                src={article.img}
                alt=""
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-gold mb-4 flex gap-2 items-center">
                {article.category}
                <span className="text-muted-2">-</span>
                <span className="text-muted-2">{article.date}</span>
              </div>
              <h3
                className={`font-serif font-normal leading-[1.3] text-navy flex-1 ${
                  article.main ? "text-[26px] mb-4" : "text-[19px]"
                }`}
              >
                {article.title}
              </h3>
              {article.main && (
                <div className="text-[11px] font-medium tracking-[0.14em] uppercase text-gold flex items-center gap-2 mt-6">
                  Lire l&apos;article
                  <span className="transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* List grid */}
      <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-r border-b border-border">
        {listArticles.map((article) => (
          <Link
            key={article.title}
            href={article.href}
            target="_blank"
            className="p-8 border-b sm:border-b-0 lg:border-r border-border last:border-r-0 last:border-b-0 no-underline text-inherit flex flex-col gap-3 bg-white transition-colors hover:bg-off-2 group"
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={article.img}
                alt=""
                width={300}
                height={169}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-gold flex gap-2 items-center">
              {article.category}
              <span className="text-muted-2">-</span>
              <span className="text-muted-2">{article.date}</span>
            </div>
            <h4 className="font-serif text-[17px] font-normal text-navy leading-[1.35]">
              {article.title}
            </h4>
          </Link>
        ))}
      </div>
    </section>
  );
}
