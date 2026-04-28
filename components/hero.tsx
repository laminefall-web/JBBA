"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="min-h-screen relative grid grid-cols-1 lg:grid-cols-2 bg-navy overflow-hidden"
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 60% at 30% 60%, rgba(184,145,42,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 50% 80% at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 60%)
          `,
        }}
      />

      {/* Left content */}
      <div className="flex flex-col justify-end px-[5vw] pt-[18vh] lg:pt-[12vh] pb-[10vh] lg:pb-[8vh] relative z-[2]">
        {/* Badge */}
        <div className="text-[10px] font-medium tracking-[0.24em] uppercase text-gold-2 border border-gold-border inline-flex items-center gap-3 px-[18px] py-2 mb-14 w-fit animate-fade-up animate-fade-up-delay-1">
          <span className="w-5 h-[1px] bg-gold" />
          A.A.R.P.I. - Toque C1393 - Paris 17eme
        </div>

        {/* Title */}
        <h1 className="font-serif text-[clamp(54px,6.5vw,112px)] font-light leading-[1.0] tracking-[-0.02em] text-white animate-fade-up animate-fade-up-delay-2">
          Droit des
          <br />
          affaires.
          <br />
          Droit <em className="italic text-gold-2">penal.</em>
        </h1>

        {/* Divider */}
        <div className="w-14 h-[2px] bg-gold my-11 animate-fade-up animate-fade-up-delay-3" />

        {/* Description */}
        <p className="max-w-[480px] text-[15px] leading-[1.9] text-white/60 font-light animate-fade-up animate-fade-up-delay-4">
          Un cabinet a taille humaine fonde par deux entrepreneurs-avocats.
          Conseil et contentieux pour les entrepreneurs, societes et
          particuliers - en France et a l&apos;international.
        </p>

        {/* Stats */}
        <div className="flex gap-14 mt-14 animate-fade-up animate-fade-up-delay-5">
          <div>
            <div className="font-serif text-[42px] font-light text-white leading-none">
              12<span className="text-gold-2 text-[20px]">ans</span>
            </div>
            <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-white/40 mt-[5px]">
              D&apos;association
            </div>
          </div>
          <div>
            <div className="font-serif text-[42px] font-light text-white leading-none">
              3
            </div>
            <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-white/40 mt-[5px]">
              Avocats
            </div>
          </div>
          <div>
            <div className="font-serif text-[42px] font-light text-white leading-none">
              Paris
            </div>
            <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-white/40 mt-[5px]">
              17eme arrondissement
            </div>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="hidden lg:block relative overflow-hidden">
        <Image
          ref={imgRef}
          src="https://images.squarespace-cdn.com/content/v1/619cfe2f8aa3b84b5227152c/543fd8ad-2517-4b2c-9ae0-f62a56b763fd/image00119.jpg"
          alt="Cabinet JBBA"
          fill
          className="object-cover object-top brightness-50 contrast-110 transition-transform duration-[8s]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-transparent via-transparent" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[3.5vh] left-[5vw] flex items-center gap-[14px] text-[10px] tracking-[0.2em] uppercase text-white/35 animate-fade-up animate-fade-up-delay-6">
        <div className="w-11 h-[1px] bg-gold animate-pulse-line" />
        Defiler
      </div>
    </section>
  );
}
