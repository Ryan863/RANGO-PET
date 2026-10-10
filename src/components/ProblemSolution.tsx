"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Clock,
  Sparkles,
  HeartHandshake,
  AlertCircle,
  Flame,
  Salad,
  Smile,
  ShieldCheck,
} from "lucide-react";

export function ProblemSolution() {
  const comparisonItems = [
    {
      problem: "Grãos secos ultraprocessados cozidos em altíssimas temperaturas",
      solution: "Carnes e legumes frescos cozidos brandamente no vapor",
    },
    {
      problem: "Conservantes artificiais, palatabilizantes químicos e subprodutos",
      solution: "100% natural, sem conservantes, aromatizantes ou químicas nocivas",
    },
    {
      problem: "Pet sem ânimo para comer, cheirando a ração e deixando restos",
      solution: "Aroma e sabor de comida de verdade: o potinho volta brilhando de limpo",
    },
    {
      problem: "Baixa umidade (apenas 10%), sobrecarregando rins e trato urinário",
      solution: "70% a 75% de umidade biológica: hidratação profunda em cada refeição",
    },
    {
      problem: "Volume alto de fezes com odor forte e gases frequentes",
      solution: "Aproveitamento nutricional máximo: fezes firmes, secas e com odor mínimo",
    },
  ];

  return (
    <section className="relative py-24 bg-[#161514] text-white overflow-hidden border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F26522]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F26522] uppercase tracking-wider font-semibold mb-4">
            <Salad className="w-3.5 h-3.5" />
            <span>Por que Alimentação Natural?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-tight mb-4">
            Você comeria a mesma comida seca todos os dias da sua vida?
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Seu pet sente cheiro, textura e sabor. A alimentação natural devolve a alegria de se alimentar e transforma a saúde de dentro para fora.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card: Ração Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 bg-neutral-900/60 border border-red-500/20 relative overflow-hidden"
          >
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-red-400 font-bold block mb-1">
                  Rotina Comum
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-200">
                  Ração Seca Ultraprocessada
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertCircle className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-400 text-sm leading-relaxed">
                  <XCircle className="w-5 h-5 text-red-400/80 shrink-0 mt-0.5" />
                  <span>{item.problem}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 bg-red-500/5 -mx-8 -mb-8 p-6">
              <p className="text-xs text-neutral-400 italic">
                Resultado frequente: apetite caprichoso, alergias dermatológicas crônicas, tártaro e sobrecarga renal ao longo dos anos.
              </p>
            </div>
          </motion.div>

          {/* Card: Rango Pet Natural */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-8 bg-[#201E1C]/80 border border-[#F26522]/30 relative overflow-hidden shadow-2xl shadow-[#F26522]/5"
          >
            {/* Top gradient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F26522]/10 blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#F26522] font-bold block mb-1">
                  O Novo Padrão de Saúde
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8F5DE]">
                  Rango Pet Natural Fresco
                </h3>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#F26522]/20 border border-[#F26522]/40 flex items-center justify-center text-[#F26522]">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            <ul className="space-y-4">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-200 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#F26522] shrink-0 mt-0.5" />
                  <span className="font-medium">{item.solution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 bg-[#F26522]/10 -mx-8 -mb-8 p-6 flex items-center justify-between">
              <p className="text-xs text-[#F8F5DE] font-medium">
                Resultado visível: pelagem sedosa, mais energia e alegria a cada refeição.
              </p>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F26522] bg-white/10 px-2.5 py-1 rounded-full">
                100% Digestível
              </span>
            </div>
          </motion.div>
        </div>

        {/* Tutor Relief Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 lg:p-10 bg-gradient-to-r from-[#201E1C] via-[#2A2724] to-[#201E1C] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#F26522]/20 border border-[#F26522]/30 flex items-center justify-center text-[#F26522] shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#F8F5DE] mb-1">
                E o melhor para você: Zero tempo perdido na cozinha!
              </h4>
              <p className="text-neutral-300 text-sm max-w-2xl leading-relaxed">
                Cozinhar AN em casa exige balança de precisão, cálculo de cálcio e horas picando legumes. A Rango Pet entrega tudo pronto, balanceado e congelado em porções diárias exatas. É só descongelar e servir.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/5549999447991?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20as%20marmitas%20congeladas%20da%20Rango%20Pet%20e%20economizar%20tempo%20na%20cozinha."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#F26522]/20 hover:scale-[1.02]"
          >
            Quero Praticidade na Minha Rotina
          </a>
        </motion.div>
      </div>
    </section>
  );
}
