"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Salad,
  Sparkles,
  Heart,
  Beef,
  Apple,
  Pill,
} from "lucide-react";

export function IngredientsSafety() {
  const allowedCategories = [
    {
      title: "Proteínas Nobres & Carnes Frescas",
      desc: "Apenas cortes próprios para consumo humano. Carnes magras e vísceras essenciais ricas em ferro e aminoácidos.",
      items: ["Patinho & Músculo Bovino", "Peito & Sobrecoxa de Frango", "Filé de Salmão Fresco", "Coração & Fígado de Origem Controlada"],
      icon: Beef,
      badge: "Proteína de Alto Valor Biológico",
    },
    {
      title: "Vegetais & Fibras Seguras",
      desc: "Legumes e tubérculos cozidos no ponto exato para quebrar fibras indigestas e liberar micronutrientes aos pets.",
      items: ["Abóbora Cabotiá no Vapor", "Cenouras Doces em Cubos", "Batata-Doce de Baixo Índice Glicêmico", "Chuchu Hidratante & Abobrinha"],
      icon: Salad,
      badge: "Digestão Suave & Fibras Solúveis",
    },
    {
      title: "Suplementação & Ômegas Essenciais",
      desc: "Nenhum animal come só carne e vegetais na natureza sem os ossos e minerais. Garantimos 100% das doses diárias recomendadas.",
      items: ["Cálcio Carbonato & Quelatos", "Ômega 3 Puro (EPA / DHA)", "Taurina Pura (Fundamental para Gatos)", "Complexos Vitamínicos A, D, E e B"],
      icon: Pill,
      badge: "Equilíbrio Científico Completo",
    },
  ];

  const neverEnterList = [
    "Farinha de carne e ossos ou subprodutos industriais",
    "Conservantes químicos sintéticos (como BHA e BHT)",
    "Corantes artificiais e realçadores de sabor de laboratório",
    "Alimentos tóxicos para pets: Cebola, alho, uva, chocolate, macadâmia e xilitol",
    "Gorduras saturadas hidrogenadas e sobras de mesa",
  ];

  return (
    <section id="ingredientes" className="py-24 bg-[#121110] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#7A8B63] uppercase tracking-wider font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rigor & Transparência Alimentar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-tight mb-4">
            Ingredientes que você reconhece no prato
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Se não serve para uma alimentação humana saudável, não entra na tigela do seu pet. É esse o compromisso inegociável da Rango Pet Natural.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {allowedCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-[#181716] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F26522]/30 transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F26522]/10 border border-[#F26522]/20 flex items-center justify-center text-[#F26522] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F26522] block mb-1">
                    {cat.badge}
                  </span>

                  <h3 className="text-xl font-bold text-[#F8F5DE] mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                    {cat.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {cat.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-neutral-200">
                        <CheckCircle className="w-4 h-4 text-[#7A8B63] shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* The "Zero Tolerância" / Prohibited List Banner */}
        <div className="rounded-3xl bg-neutral-900/90 border border-white/10 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <XCircle className="w-3.5 h-3.5" />
                Zero Tolerância
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                O que você NUNCA vai encontrar nas nossas marmitas:
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Toda a nossa cozinha segue protocolos sanitários estritos para garantir nutrição 100% segura e livre de contaminações.
              </p>
            </div>

            <div className="flex-1 max-w-xl space-y-3">
              {neverEnterList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-neutral-300"
                >
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
