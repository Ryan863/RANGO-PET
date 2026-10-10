"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Heart, CheckCircle2, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function SocialCommunity() {
  const testimonials = [
    {
      name: "Mariana Pozzobon",
      city: "Joaçaba - SC",
      pet: "Billy (Spitz Alemão, 4 anos)",
      story:
        "O Billy passava o dia todo empurrando o pote de ração seca e só comia à noite forçado. No primeiro dia do Rango Pet de Bovino com Abóbora ele comeu tudo em 2 minutos e ainda lambeu o chão em volta! As fezes dele secaram e não têm mais cheiro forte.",
      rating: 5,
    },
    {
      name: "Thiago Silveira",
      city: "Herval d'Oeste - SC",
      pet: "Mel (Bulldog Francês, 3 anos)",
      story:
        "A Mel sofria com coceiras e dermatite alérgica por causa dos conservantes de rações industriais. Com as marmitas personalizadas da Rango Pet, a pele dela limpou em 35 dias e o pelo está brilhando. As meninas são super atenciosas!",
      rating: 5,
    },
    {
      name: "Dra. Camila Rigoni",
      city: "Luzerna - SC",
      pet: "Oliver (Gato SRD, 5 anos)",
      story:
        "Meu gato já teve obstrução urinária por não beber água suficiente. A alimentação natural úmida com caldo de ossos e salmão fresco foi a melhor prevenção possível. Ele adora e eu fico em paz.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#121110] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-400 uppercase tracking-wider font-semibold mb-3">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@rango.petnatural</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans">
              Histórias de tutores que viram a transformação
            </h2>
          </div>

          <a
            href="https://www.instagram.com/rango.petnatural/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>Ver Bastidores no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#181716] border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-[#F26522]/30 transition-all shadow-xl"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6 italic font-light">
                  &ldquo;{t.story}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#F8F5DE]">{t.name}</h4>
                  <p className="text-[11px] text-[#F26522] font-semibold">{t.pet}</p>
                  <p className="text-[10px] text-neutral-500">{t.city}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#7A8B63]/10 text-[#7A8B63] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Profile Teaser Card */}
        <div className="rounded-3xl bg-gradient-to-r from-[#20151E] via-[#1E1916] to-[#161514] border border-pink-500/20 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shrink-0">
              <div className="w-full h-full bg-[#121110] rounded-[14px] flex items-center justify-center text-white">
                <InstagramIcon className="w-8 h-8 text-pink-400" />
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-pink-400 font-bold block mb-1">
                Comunidade Rango Pet
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Acompanhe o dia a dia da nossa produção artesanal
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm">
                Vídeos de pets felizes, receitas saindo do vapor e dicas de saúde animal direto no seu feed.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/rango.petnatural/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-pink-500/20 hover:scale-[1.03]"
          >
            Seguir @rango.petnatural
          </a>
        </div>

      </div>
    </section>
  );
}
