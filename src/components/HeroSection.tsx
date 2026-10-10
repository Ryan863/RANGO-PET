"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
  MapPin,
  Flame,
} from "lucide-react";

interface PetSlide {
  id: string;
  number: string;
  cursiveAccent: string;
  tagline: string;
  petType: string;
  description: string;
  image: string;
  alt: string;
  highlightPill: string;
  badge1: string;
  badge2: string;
}

const slides: PetSlide[] = [
  {
    id: "dachshund",
    number: "01",
    cursiveAccent: "saúde & sabor",
    tagline: "Nutrição natural feita sob medida.",
    petType: "Para cães filhotes e adultos",
    description:
      "Marmitas artesanais calculadas para o peso, idade e energia exatos do seu cão. Cheiro irresistível, digestão leve e fezes firmes sem conservantes.",
    image: "/images/hero-dachshund.jpg",
    alt: "Filhote Dachshund saudável com olhar carismático para Rango Pet Natural",
    highlightPill: "Receita Mais Pedida: Bovino & Abóbora",
    badge1: "100% Ingredientes de Verdade",
    badge2: "Pesado em Gramas Exatas",
  },
  {
    id: "studio-dog",
    number: "02",
    cursiveAccent: "comida de verdade",
    tagline: "Vitalidade pura em cada garfada.",
    petType: "Cães de todos os portes",
    description:
      "Chega de ração seca rejeitada. Proteínas nobres grelhadas, legumes cozidos no vapor e suplementação veterinária que devolve a alegria de comer.",
    image: "/images/hero-dog.jpg",
    alt: "Cão feliz e atento nutrido com alimentação natural Rango Pet",
    highlightPill: "Energia & Pelagem Brilhante",
    badge1: "Zero Conservantes Artificiais",
    badge2: "Digestão 100% Otimizada",
  },
  {
    id: "gourmet-cat",
    number: "03",
    cursiveAccent: "paladar seletivo",
    tagline: "Hidratação e carinho para felinos.",
    petType: "Nutrição específica para gatos",
    description:
      "Gatos bebem pouca água e exigem alta umidade. Nossas receitas contêm caldos naturais ricos em taurina, salmão fresco e filé desfiado.",
    image: "/images/cat-nutrition.jpg",
    alt: "Gato apreciando banquete de comida natural fresca e úmida",
    highlightPill: "Rico em Taurina & Caldo Natural",
    badge1: "Alta Umidade / Rins Protegidos",
    badge2: "Apetite Renovado para Gatos",
  },
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[currentIdx];

  const whatsappBaseUrl =
    "https://wa.me/5549999447991?text=" +
    encodeURIComponent(
      `Olá! Estava na página inicial da Rango Pet Natural e gostaria de montar a dieta personalizada para o meu pet (${currentSlide.petType}). Como funciona?`
    );

  return (
    <section className="relative min-h-screen bg-[#121110] text-white flex flex-col justify-between pt-24 pb-8 overflow-hidden">
      {/* Background ambient warm spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#F26522]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E85D04]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Display Typography (Inspired by Reference Layout) */}
          <div className="lg:col-span-6 z-10 flex flex-col justify-center">
            
            {/* Top cursive kicker detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + "-accent"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-2"
              >
                <span className="font-serif italic text-2xl sm:text-3xl text-[#F26522] tracking-wide font-normal">
                  {currentSlide.cursiveAccent}.
                </span>
                <span className="h-px w-10 bg-[#F26522]/40" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#F8F5DE]/70 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                  {currentSlide.petType}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Main H1 Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide.id + "-title"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F7F5F0] leading-[1.08] mb-5 font-sans"
              >
                {currentSlide.tagline}
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle & Reference layout snippet (02/04 + micro bio) */}
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-8 pt-1">
              {/* Reference style index indicator: 01 / 03 */}
              <div className="flex sm:flex-col items-baseline gap-1 text-sm font-semibold tracking-wider text-neutral-400 border-b sm:border-b-0 sm:border-r border-white/10 pb-2 sm:pb-0 sm:pr-5 shrink-0">
                <span className="text-[#F26522] text-xl font-bold font-mono">
                  {currentSlide.number}
                </span>
                <span className="text-xs text-neutral-500 font-mono">/03</span>
              </div>

              {/* Editorial Subtitle */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide.id + "-desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl font-light"
                >
                  {currentSlide.description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F8F5DE]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F26522]" />
                <span>{currentSlide.badge1}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F8F5DE]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A8B63]" />
                <span>{currentSlide.badge2}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F26522]/10 border border-[#F26522]/30 text-xs text-[#FF8A4C]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Entrega em Joaçaba e Herval</span>
              </div>
            </div>

            {/* CTAs & Navigation Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-[#F26522]/30 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Montar Dieta do Meu Pet via WhatsApp</span>
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 hover:text-white font-medium text-sm transition-all duration-300"
              >
                <span>Conhecer o Processo</span>
              </a>
            </div>

            {/* Slide Navigation Buttons (like reference arrows) */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-[#F26522] flex items-center justify-center text-neutral-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 active:scale-95"
                  aria-label="Perfil de pet anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-[#F26522] flex items-center justify-center text-neutral-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 active:scale-95"
                  aria-label="Próximo perfil de pet"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                {slides.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIdx
                        ? "w-7 bg-[#F26522]"
                        : "w-2 bg-neutral-600 hover:bg-neutral-400"
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              <span className="text-xs text-neutral-400 ml-auto hidden sm:inline">
                Alterne entre cães, filhotes e gatos
              </span>
            </div>
          </div>

          {/* Right Column: Central Pet Photography with Smooth Mask Fade */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Ambient circular halo */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-tr from-[#F26522]/20 via-[#E85D04]/10 to-transparent blur-3xl pointer-events-none" />

            {/* Image Container with seamless mask fade */}
            <div className="relative w-full max-w-[520px] aspect-square rounded-3xl overflow-hidden mask-hero-blend">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id + "-image"}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.04 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 520px"
                  />
                  {/* Subtle vignette layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-60" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating Editorial Badge (Bottom right) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-4 right-4 sm:right-8 bg-[#181716]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl shadow-2xl max-w-[240px] hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F26522]/20 flex items-center justify-center text-[#F26522] shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-[#F8F5DE]/70 uppercase tracking-wider font-semibold">
                  Cozinha Artesanal
                </p>
                <p className="text-xs font-bold text-white leading-tight">
                  {currentSlide.highlightPill}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar: Scroll Indicator & Local Region Credibility */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#F26522]" />
          <span>
            Polo de Produção: <strong className="text-neutral-200">Herval d&apos;Oeste</strong> • Entregas em{" "}
            <strong className="text-neutral-200">Joaçaba, Luzerna e Região</strong>
          </span>
        </div>

        <a
          href="#como-funciona"
          className="flex items-center gap-2 text-neutral-400 hover:text-[#F26522] transition-colors group"
        >
          <span>Role para explorar o cardápio e diferenciais</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>

        <div className="hidden lg:flex items-center gap-4 text-neutral-400">
          <span>WhatsApp Oficial: <strong>(49) 99944-7991</strong></span>
          <span>•</span>
          <span>Instagram: <strong>@rango.petnatural</strong></span>
        </div>
      </div>
    </section>
  );
}
