"use client";

import Image from "next/image";

const contactDetails = [
  { label: "Adresse", value: "1 bis, boulevard Berthier - 75017 Paris" },
  {
    label: "Telephone",
    value: "+33 9 53 49 66 99",
    href: "tel:+33953496699",
  },
  { label: "Fax", value: "+33 9 57 36 92 08" },
  {
    label: "Email",
    value: "contact@jbba.co",
    href: "mailto:contact@jbba.co",
  },
  { label: "Statut", value: "A.A.R.P.I. - Toque C1393" },
];

const domaines = [
  {
    label: "Conseil",
    options: ["Droit des societes", "Droit des contrats", "Droit immobilier"],
  },
  {
    label: "Contentieux",
    options: [
      "Contentieux civil & commercial",
      "Droit penal",
      "Negociation precontentieuse",
    ],
  },
  {
    label: "Formations",
    options: [
      "Formation entrepreneurs",
      "Formation sportifs",
      "Formation agroalimentaire",
    ],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-[10vh] px-[5vw] bg-white">
      {/* Section label */}
      <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold flex items-center gap-[14px] mb-12">
        <span className="w-7 h-[1.5px] bg-gold" />
        Contact
      </div>

      <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-navy">
        Parlons de
        <br />
        votre <em className="italic text-gold">projet.</em>
      </h2>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mt-16 items-start">
        {/* Left - Map + Details */}
        <div className="reveal">
          {/* Map placeholder */}
          <div className="aspect-video overflow-hidden relative border border-border mb-8">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/2fda0e23-7ad6-444a-945f-bf61c9a9c09b/unsplash-image-K6pr5ClxWiE.jpg"
              alt="Paris 17"
              fill
              className="object-cover saturate-[0.4] brightness-[0.6]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <strong className="block text-[10px] font-medium tracking-[0.22em] uppercase text-gold-2 mb-2 font-sans">
                Notre cabinet
              </strong>
              <span className="font-serif text-[20px] font-light text-white">
                1 bis, boulevard Berthier
                <br />
                75017 Paris
              </span>
            </div>
          </div>

          {/* Contact details */}
          <div className="border border-border">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex items-center gap-8 px-7 py-4 border-b border-border last:border-b-0"
              >
                <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-gold min-w-[80px] shrink-0">
                  {detail.label}
                </span>
                <span className="text-[14px] text-muted">
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-navy no-underline transition-colors hover:text-gold"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    detail.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form className="reveal reveal-delay-2" onSubmit={(e) => e.preventDefault()}>
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
            <div>
              <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
                Prenom
              </label>
              <input
                type="text"
                placeholder="Votre prenom"
                className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
                Nom
              </label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white"
              />
            </div>
          </div>

          {/* Email + Phone row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
            <div>
              <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
                Email
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
                Telephone
              </label>
              <input
                type="tel"
                placeholder="+33 6 00 00 00 00"
                className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white"
              />
            </div>
          </div>

          {/* Domain select */}
          <div className="mb-7">
            <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
              Domaine juridique
            </label>
            <select className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23B8912A%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_16px_center]">
              <option value="">- Choisissez un domaine -</option>
              {domaines.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.options.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </optgroup>
              ))}
              <option>Autre</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-7">
            <label className="block text-[10px] font-medium tracking-[0.18em] uppercase text-navy mb-3">
              Message
            </label>
            <textarea
              placeholder="Decrivez brievement votre situation ou votre projet..."
              className="w-full bg-off border border-border border-b-[1.5px] text-foreground px-[18px] py-[13px] font-sans text-[14px] font-light outline-none transition-all focus:border-gold focus:bg-white h-[120px] resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-navy text-white font-sans text-[11px] font-medium tracking-[0.17em] uppercase border-2 border-navy px-[34px] py-[15px] cursor-pointer transition-all hover:bg-gold hover:border-gold"
          >
            Envoyer ma demande
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-[14px] h-[14px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
