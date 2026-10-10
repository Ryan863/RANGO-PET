"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Truck,
  CalendarCheck,
  Building2,
  Navigation,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export function DeliveryCoverage() {
  const cities = [
    {
      name: "Herval d'Oeste",
      state: "SC",
      status: "Polo de Produção & Entregas Diárias",
      description: "Centro, Vila Santo Antônio, Estação e todos os bairros urbanos.",
    },
    {
      name: "Joaçaba",
      state: "SC",
      status: "Rotas Semanais & Quinzenais",
      description: "Centro, Cruzeiro, Santa Tereza, Clara Adélia, Menino Deus e região.",
    },
    {
      name: "Luzerna & Vizinhanças",
      state: "SC",
      status: "Rotas Programadas",
      description: "Consulte o dia da semana para a sua localidade pelo WhatsApp.",
    },
  ];

  return (
    <section id="entregas" className="py-24 bg-[#181716] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F26522] uppercase tracking-wider font-semibold mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Logística & Preservação da Cadeia de Frio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-tight mb-4">
            Entregamos na sua casa fresquinho e congelado
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Nossas marmitas chegam perfeitamente congeladas em caixas térmicas, prontas para ir direto para o seu freezer sem perder nenhum nutriente.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cities.map((city, idx) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-[#201E1C] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#F26522]/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F26522]/10 border border-[#F26522]/20 flex items-center justify-center text-[#F26522]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A8B63] bg-[#7A8B63]/10 px-2.5 py-1 rounded-full">
                    Atendido
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8F5DE] mb-1">
                  {city.name} - {city.state}
                </h3>
                <p className="text-xs font-semibold text-[#F26522] mb-3">
                  {city.status}
                </p>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {city.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#F26522]" />
                <span>Entrega com horário agendado</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Physical Address & Production Hub Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#23201D] to-[#1C1A18] border border-white/10 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F26522]">
              <Building2 className="w-4 h-4" />
              <span>Polo de Produção & Cozinha Artesanal</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Rua Atílio Pagnoncelli, 171 – Centro, Herval d&apos;Oeste - SC
            </h3>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              CEP 89610-000. Atendimento de Segunda a Sábado. Se preferir, você também pode retirar suas marmitas diretamente conosco mediante agendamento prévio.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F26522]" />
                <span>Segunda a Sábado com atendimento ágil</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7A8B63]" />
                <span>Alvará sanitário & rigor microbiológico</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="https://maps.google.com/?q=Rua+Atilio+Pagnoncelli,+171,+Herval+d'Oeste+-+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-xs tracking-wide uppercase transition-all"
            >
              <Navigation className="w-4 h-4 text-[#F26522]" />
              <span>Abrir no Google Maps</span>
            </a>

            <a
              href="https://wa.me/5549999447991?text=Ol%C3%A1!%20Moro%20na%20regi%C3%A3o%20e%20gostaria%20de%20saber%20o%20dia%20de%20entrega%20para%20o%20meu%20bairro."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-bold text-xs tracking-wide uppercase transition-all shadow-lg shadow-[#F26522]/30 hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Meu Bairro no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
