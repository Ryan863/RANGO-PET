"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardList, ChefHat, PackageCheck, ArrowRight, MessageCircle } from "lucide-react";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof ClipboardList;
  highlight: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Avaliação Personalizada",
    subtitle: "Entendemos a rotina e porte do seu pet",
    description:
      "Via WhatsApp, coletamos peso, idade, se é castrado, nível de atividade física e histórico de sensibilidades ou alergias alimentares.",
    icon: ClipboardList,
    highlight: "Gramagem calculada com precisão veterinária",
  },
  {
    number: "02",
    title: "Preparo Artesanal na Cozinha",
    subtitle: "Ingredientes selecionados e pesagem rigorosa",
    description:
      "Cozinhamos proteínas nobres e vegetais selecionados em calor controlado para manter micronutrientes, acrescentando suplementação específica.",
    icon: ChefHat,
    highlight: "Zero conservantes químicos ou subprodutos",
  },
  {
    number: "03",
    title: "Congelamento & Entrega em Casa",
    subtitle: "Marmitas práticas prontas para descongelar",
    description:
      "Embalamos em porções diárias higienizadas e congelamos. Entregamos direto na sua porta em Joaçaba, Herval d'Oeste e região.",
    icon: PackageCheck,
    highlight: "Praticidade total: tire do freezer e sirva com carinho",
  },
];

function SpotlightStepCard({ step, idx }: { step: StepItem; idx: number }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.15 }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative rounded-3xl border border-white/10 bg-[#181716]/90 p-8 overflow-hidden group hover:border-[#F26522]/40 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Spotlight Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(242,101,34,0.15), transparent 40%)`,
        }}
      />

      <div>
        {/* Step Number & Icon Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-3xl font-extrabold text-[#F26522] tracking-tighter">
            {step.number}
          </span>
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F8F5DE] group-hover:scale-110 group-hover:bg-[#F26522]/20 group-hover:text-[#F26522] transition-all">
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#F8F5DE] mb-2 group-hover:text-white transition-colors">
          {step.title}
        </h3>
        <p className="text-xs font-semibold text-[#F26522] uppercase tracking-wider mb-4">
          {step.subtitle}
        </p>

        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
          {step.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-400">
        <span className="text-[#F8F5DE]/80 font-medium">{step.highlight}</span>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#121110] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#F26522] font-bold block mb-2">
              Passo a Passo Editorial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans">
              Como funciona o Rango Pet na prática?
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Do primeiro contato no WhatsApp até o potinho do seu pet limpinho: um processo transparente, carinhoso e sem complicação.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <SpotlightStepCard key={step.number} step={step} idx={idx} />
          ))}
        </div>

        {/* Bottom Banner with Packaging Photography */}
        <div className="rounded-3xl bg-[#1A1918] border border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/marmitas-prep.jpg"
              alt="Marmitas naturais personalizadas da Rango Pet Natural"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl">
              Embalagens higiênicas, etiquetadas com nome do pet e gramagem
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#F26522] font-bold">
              Praticidade no Dia a Dia
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8F5DE]">
              Descongele na geladeira e sirva. Simples assim.
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              As marmitas chegam congeladas e cabem perfeitamente no seu freezer. Você só precisa descer a porção do dia para a geladeira na noite anterior ou amornar rapidamente em banho-maria para liberar todo o aroma apetitoso.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5549999447991?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20a%20avalia%C3%A7%C3%A3o%20gratuita%20para%20as%20marmitas%20do%20meu%20pet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-lg shadow-[#F26522]/20 hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir Avaliação Gratuita no WhatsApp</span>
              </a>
              <span className="text-xs text-neutral-400">
                Atendimento rápido de segunda a sábado
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
