"use client";

import { useState } from "react";

const tabs = [
  { id: "conseil", label: "Vous conseille" },
  { id: "represente", label: "Vous represente" },
  { id: "forme", label: "Vous forme" },
];

const panelData = {
  conseil: [
    {
      domain: "Droit des societes",
      title: "Accompagnement des entreprises",
      desc: "De la start-up au grand groupe, nous intervenons sur toutes vos problematiques de gouvernance et de structure.",
      items: [
        "Structure juridique et fiscale a la creation",
        "Redaction statuts & pactes d'actionnaires",
        "Levees de fonds pour start-up",
        "Assemblees generales & audits juridiques",
      ],
    },
    {
      domain: "Droit des contrats",
      title: "Securisation contractuelle",
      desc: "Les contrats conditionnent la securite juridique des entreprises. Nous intervenons pour reduire les risques.",
      items: [
        "CGV/CGU et contrats de prestation",
        "Contrats de franchise & distribution",
        "Industrie musicale (cession de droits)",
        "Contrats sportifs (clubs, agents)",
      ],
    },
    {
      domain: "Droit immobilier",
      title: "Gestion & transactions immobilieres",
      desc: "Protection optimale des droits de nos clients dans tous les aspects juridiques de leurs biens immobiliers.",
      items: [
        "Copropriete & gestion d'immeubles",
        "Baux commerciaux & residentiels",
        "Transactions et acquisitions",
        "Recouvrement de charges",
      ],
    },
  ],
  represente: [
    {
      domain: "Civil & commercial",
      title: "Contentieux des affaires",
      desc: "Strategie adaptee au contexte pour resoudre tout litige, simple comme complexe, devant toutes les juridictions.",
      items: [
        "Rupture de relations commerciales",
        "Inexecution contractuelle",
        "Conflits entre associes",
        "Concurrence deloyale",
        "Vices caches & responsabilite civile",
      ],
    },
    {
      domain: "Penal des affaires",
      title: "Defense penale rigoureuse",
      desc: "Mis en cause ou victime, nous vous accompagnons a chaque stade de la procedure avec rigueur et engagement.",
      items: [
        "Evaluation du risque penal en amont",
        "De l'enquete jusqu'aux plaidoiries",
        "Corruption, escroquerie, blanchiment",
        "Defense des victimes (discriminations...)",
        "Communication de crise",
      ],
    },
    {
      domain: "Prevention",
      title: "Negociation precontentieuse",
      desc: "Un proces peut etre couteux et chronophage. Agir preventivement est souvent la solution la plus efficace.",
      items: [
        "Etude minutieuse du dossier",
        "Assistance dans les negociations",
        "Protocoles d'accord sur mesure",
        "Preservation des relations commerciales",
      ],
    },
  ],
  forme: [
    {
      domain: "Entrepreneurs & Start-up",
      title: "Formations juridiques",
      desc: "Maitriser les fondamentaux juridiques permet aux entrepreneurs de gagner en autonomie et d'anticiper les risques.",
      items: [
        "Recouvrement de creances",
        "Responsabilites contractuelles",
        "Protection de marque et image",
        "Depot de brevet France & international",
        "Lancement d'e-commerce",
      ],
    },
    {
      domain: "Sportifs & agents sportifs",
      title: "Droit du sport",
      desc: "Le monde du sport se confond avec celui des affaires. Nous formons les acteurs du sport a leurs droits.",
      items: [
        "Contrats de sponsoring sportif",
        "Relation joueur / agent",
        "Negociation avec un club",
        "Protection et gestion de l'image",
      ],
    },
    {
      domain: "Industrie agroalimentaire",
      title: "Droit de l'agroalimentaire",
      desc: "L'agroalimentaire connait un reequilibrage profond. Nos formations preparent les acteurs a leurs droits et obligations.",
      items: [
        "Decryptage de la loi EGALIM 2",
        "Clause de renegociation",
        "Pratiques publicitaires alimentaires",
        "Droits et obligations des acteurs",
      ],
    },
  ],
};

export function SavoirFaire() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof panelData>("conseil");

  return (
    <section id="savoir-faire" className="py-[10vh] px-[5vw] bg-navy">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-14">
        <div>
          <div className="text-[10px] font-medium tracking-[0.28em] uppercase text-gold-2 flex items-center gap-[14px] mb-12">
            <span className="w-7 h-[1.5px] bg-gold-2" />
            Savoir-faire
          </div>
          <h2 className="reveal font-serif text-[clamp(36px,4vw,64px)] font-light leading-[1.1] tracking-[-0.02em] text-white">
            Un duo d&apos;avocats,
            <br />
            pour <em className="italic text-gold-2">vous.</em>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 text-[15px] text-white/55 leading-[1.9] font-light">
          Chez JBBA, l&apos;experience client se veut unique. Vos avocats sont
          vos partenaires, accessibles en toutes circonstances pour accompagner
          vos projets et se battre a vos cotes devant toutes les juridictions.
        </p>
      </div>

      {/* Tabs */}
      <div className="reveal flex flex-wrap border-b border-white/10 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as keyof typeof panelData)}
            className={`px-7 lg:px-11 py-4 font-sans text-[11px] font-medium tracking-[0.18em] uppercase cursor-pointer border-none border-b-2 bg-transparent transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? "text-gold-2 border-b-gold-2"
                : "text-white/50 border-b-transparent hover:text-white/85"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/10">
        {panelData[activeTab].map((card, i) => (
          <div
            key={card.title}
            className={`p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 last:border-r-0 last:border-b-0 transition-colors hover:bg-white/[0.04]`}
          >
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-gold-2 mb-4">
              {card.domain}
            </div>
            <h4 className="font-serif text-[24px] font-normal text-white mb-5 leading-[1.3]">
              {card.title}
            </h4>
            <p className="text-[13px] text-white/50 leading-[1.9] mb-6 font-light">
              {card.desc}
            </p>
            <ul className="list-none">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] text-white/50 py-[7px] border-b border-white/[0.07] last:border-b-0 flex gap-[10px] items-start"
                >
                  <span className="text-gold text-[11px] mt-[3px] shrink-0">
                    -
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
