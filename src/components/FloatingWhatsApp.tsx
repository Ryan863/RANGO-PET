"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/5549999447991?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site da Rango Pet Natural e gostaria de falar sobre o cardápio e fazer um pedido para o meu pet."
    );

  return (
    <aside aria-label="Atendimento Rápido" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on desktop hover */}
      <div className="hidden md:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-2xl bg-[#181716]/95 backdrop-blur-md border border-white/10 text-xs text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-semibold text-[#F8F5DE]">Atendimento Rápido</span>
        <span className="text-neutral-400">• Joaçaba e Herval</span>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Falar com a Rango Pet pelo WhatsApp"
      >
        {/* Pulsing attention ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white text-white" />
      </a>
    </aside>
  );
}
