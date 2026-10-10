"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";

export function FinalCta() {
  const whatsappUrl =
    "https://wa.me/5549999447991?text=" +
    encodeURIComponent(
      "Olá! Quero dar o melhor para o meu pet! Gostaria de receber o cardápio e montar a dieta personalizada com a Rango Pet Natural."
    );

  return (
    <section className="py-24 bg-[#121110] text-white relative overflow-hidden">
      {/* Background glow halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F26522]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Aceternity Style Radiant Glowing Border Card (21st.dev pattern) */}
        <div className="relative p-[1.5px] overflow-hidden rounded-3xl group shadow-2xl">
          {/* Animated radiant gradient beam */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#F26522_0%,#F8F5DE_50%,#F26522_100%)] animate-[spin_8s_linear_infinite] opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
          
          <div className="relative bg-[#181716] rounded-[23px] p-8 sm:p-14 text-center z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F26522] uppercase tracking-wider font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transforme a Vida do Seu Pet Hoje</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-[1.15] mb-6 max-w-3xl mx-auto">
              Comida de verdade, feita com cuidado. Seu pet vai amar cada mordida.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Marmitas naturais personalizadas para cada necessidade. Entregues fresquinhas na sua porta em Joaçaba, Herval d&apos;Oeste e região.
            </p>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#F26522]/30 hover:scale-[1.03] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Pedir Marmitas pelo WhatsApp</span>
              </a>

              <a
                href="https://www.instagram.com/rango.petnatural/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white font-semibold text-sm transition-all"
              >
                <span>Conhecer o Instagram</span>
              </a>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B63]" />
                <span>Ingredientes 100% Naturais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B63]" />
                <span>Zero Conservantes Artificiais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8B63]" />
                <span>Entrega Programada no Domicílio</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
