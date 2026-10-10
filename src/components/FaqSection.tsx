"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Como fazer a transição correta da ração seca para o Rango Natural?",
    answer:
      "A transição deve ser gradual ao longo de 7 dias para que a microbiota intestinal do pet se adapte com tranquilidade. Dias 1 e 2: 75% ração + 25% Rango Pet. Dias 3 e 4: 50% ração + 50% Rango Pet. Dias 5 e 6: 25% ração + 75% Rango Pet. Dia 7 em diante: 100% alimentação natural fresca!",
  },
  {
    question: "Quanto tempo as marmitas duram no freezer e na geladeira?",
    answer:
      "No freezer (-12°C a -18°C), nossas marmitas porcionadas mantêm todos os nutrientes e sabor por até 90 dias. Depois de descongeladas na geladeira, devem ser consumidas em até 3 dias.",
  },
  {
    question: "Como descongelar e servir no dia a dia com praticidade?",
    answer:
      "A forma mais prática é descer a marmita do dia seguinte do congelador para a geladeira na noite anterior. Na hora de servir, você pode oferecer em temperatura ambiente ou amornar por 2 a 3 minutos em banho-maria. Amornar ativa os aromas naturais da carne e deixa o pet apaixonado!",
  },
  {
    question: "Meu pet tem alergia severa ou problema de saúde. Vocês personalizam?",
    answer:
      "Com certeza! Nós fazemos marmitas monoproteicas (por exemplo, sem frango, apenas bovino ou peixe) e também seguimos estritamente a prescrição do seu médico veterinário nutrólogo caso seu pet seja nefropata, alérgico ou diabético.",
  },
  {
    question: "Gatos também podem comer as marmitas da Rango Pet?",
    answer:
      "Sim! Felinos têm exigências metabólicas únicas: são carnívoros estritos e necessitam de alta umidade para não sobrecarregar os rins. Nossas receitas felinas contêm caldos naturais de ossos, vísceras nobres e suplementação rigorosa de taurina.",
  },
  {
    question: "Como funciona a entrega em Joaçaba e Herval d'Oeste?",
    answer:
      "Realizamos entregas programadas semanais ou quinzenais diretamente no seu endereço com caixas térmicas apropriadas. Você também pode combinar a retirada no nosso polo de produção no Centro de Herval d'Oeste. O pagamento pode ser feito via Pix ou cartão.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#181716] text-white relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F26522] uppercase tracking-wider font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-tight mb-4">
            Perguntas Frequentes
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light">
            Tudo o que você precisa saber para começar a nutrir seu pet com comida de verdade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#201E1C] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#F8F5DE] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#F26522] text-white" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-300">
            Ainda tem alguma dúvida específica sobre o caso do seu pet?
          </p>
          <a
            href="https://wa.me/5549999447991?text=Ol%C3%A1!%20Fiquei%20com%20uma%20d%C3%BAvida%20sobre%20a%20alimenta%C3%A7%C3%A3o%20natural%20da%20Rango%20Pet."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-[#F26522]/20"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
