import Image from "next/image";
import Link from "next/link";

const mediasRow1 = [
  {
    href: "https://www.youtube.com/watch?v=kAmo8GUIaNw",
    thumb: "https://i.ytimg.com/vi/kAmo8GUIaNw/hqdefault.jpg",
    source: "Lex Inside",
    title: "Seydi Ba interviewe dans l'emission Lex Inside",
  },
  {
    href: "https://www.youtube.com/watch?v=Vrfe3kX2lmU",
    thumb: "https://i.ytimg.com/vi/Vrfe3kX2lmU/hqdefault.jpg",
    source: "Barreau de Paris",
    title: "Discours de Seydi Ba - 2eme Secretaire de la Conference",
  },
  {
    href: "https://www.youtube.com/watch?v=lu0Ejv-2wu8",
    thumb: "https://i.ytimg.com/vi/lu0Ejv-2wu8/hqdefault.jpg",
    source: "Memorial de Caen",
    title: "Plaidoirie de Theodore Jean-Baptiste - 3eme Prix",
  },
  {
    href: "https://www.youtube.com/watch?v=TgA2h3kiEaQ",
    thumb: "https://i.ytimg.com/vi/TgA2h3kiEaQ/hqdefault.jpg",
    source: "Mediapart",
    title: "Seydi Ba dans 'A l'air libre' - Pornographie : l'industrie de la violence",
  },
  {
    href: "https://jbba.co/medias/v/bfm-paris-interview-de-seydi-ba",
    thumb:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/3c4d48fb-8ffe-47d9-9425-86a820290e71/IMG_2289.png",
    source: "BFM Paris",
    title: "Interview de Seydi Ba sur BFM Paris",
  },
];

const mediasRow2 = [
  {
    href: "https://jbba.co/medias/v/seydi-ba-interview-dans-le-cadre-de-lmission-job-sur-c8",
    thumb:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/46cdb23c-ae98-4081-912f-5d04fb196a4a/IMG_1253.jpeg",
    source: "C8",
    title: "Seydi Ba dans l'emission JOB sur C8",
  },
  {
    href: "https://jbba.co/medias/v/arnacoeur",
    thumb:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/6837cf64-9b34-4065-819a-1cbc4a021156/Capture+d%27%C3%A9cran+2023-12-27+180459.png",
    source: "M6",
    title: "Le cabinet en defense de 'l'arnacoeur' sur M6",
  },
  {
    href: "https://jbba.co/medias/v/resistante",
    thumb:
      "https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/dd266992-2c31-401d-9012-55bcd0d67ac0/Capture+d%27%C3%A9cran+2023-12-27+180229.png",
    source: "France 2",
    title: "Le cabinet en defense d'une auxiliaire de vie contre une ancienne resistante",
  },
  {
    href: "https://jbba.co/medias/v/bfmtv-seydi-ba-entendu-sur-la-dtention-provisoire",
    thumb: null,
    source: "BFM TV",
    title: "Seydi Ba entendu sur la detention provisoire",
  },
  {
    href: "https://jbba.co/medias/v/bfm-tv-seydi-ba-entendu-sur-le-nouveau-ministre-de-lintrieur",
    thumb: null,
    source: "BFM TV",
    title: "Seydi Ba entendu sur le nouveau ministre de l'Interieur",
  },
];

function PlayButton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[38px] h-[38px] border-[1.5px] border-gold/60 flex items-center justify-center bg-navy/50 transition-all group-hover:bg-gold group-hover:border-gold">
        <svg viewBox="0 0 24 24" className="w-3 h-3 fill-gold-2 ml-[2px] group-hover:fill-white">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </div>
    </div>
  );
}

function MediaCard({
  media,
}: {
  media: { href: string; thumb: string | null; source: string; title: string };
}) {
  return (
    <Link
      href={media.href}
      target="_blank"
      className="border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0 overflow-hidden no-underline text-inherit flex flex-col transition-colors hover:bg-white/5 cursor-pointer group"
    >
      <div className="aspect-video overflow-hidden relative">
        {media.thumb ? (
          <Image
            src={media.thumb}
            alt=""
            width={320}
            height={180}
            className="w-full h-full object-cover transition-all duration-500 brightness-[0.8] group-hover:scale-105 group-hover:brightness-100"
          />
        ) : (
          <div className="w-full h-full bg-navy-2 flex items-center justify-center" />
        )}
        <PlayButton />
      </div>
      <div className="p-5">
        <div className="text-[9px] font-medium tracking-[0.2em] uppercase text-gold-2 mb-1">
          {media.source}
        </div>
        <h4 className="text-[12px] text-white/50 leading-[1.5] font-light line-clamp-2">
          {media.title}
        </h4>
      </div>
    </Link>
  );
}

export function Medias() {
  return (
    <section id="medias" className="py-[10vh] px-[5vw] bg-navy">
      {/* Section label */}
      <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold-2 flex items-center gap-[14px] mb-12">
        <span className="w-7 h-[1.5px] bg-gold-2" />
        Medias
      </div>

      <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
        Presences
        <br />
        <em className="italic text-gold-2">mediatiques.</em>
      </h2>

      {/* Row 1 */}
      <div className="reveal reveal-delay-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-white/10 mt-16">
        {mediasRow1.map((media) => (
          <MediaCard key={media.title} media={media} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-l border-r border-b border-white/10">
        {mediasRow2.map((media) => (
          <MediaCard key={media.title} media={media} />
        ))}
      </div>
    </section>
  );
}
