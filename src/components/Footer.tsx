import Image from "next/image";
import { MessageCircle, MapPin, Clock, Phone, Heart } from "lucide-react";
import { InstagramIcon } from "./icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="bg-[#0D0C0B] text-neutral-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F8F5DE] p-1.5 flex items-center justify-center border border-[#F26522]/30">
                <Image
                  src="/images/logo-rango-pet.png"
                  alt="Logo Rango Pet"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight">
                  RANGO PET
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#F8F5DE]/70">
                  Alimentação Natural
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed">
              Comida de verdade, feita com cuidado. Marmitas naturais personalizadas para cada necessidade, promovendo saúde, vitalidade e longevidade para cães e gatos.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/rango.petnatural/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 border border-white/10 flex items-center justify-center transition-all text-neutral-300"
                aria-label="Instagram da Rango Pet"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5549999447991"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#F26522]/20 hover:text-[#F26522] border border-white/10 flex items-center justify-center transition-all text-neutral-300"
                aria-label="WhatsApp da Rango Pet"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F5DE]">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="hover:text-[#F26522] transition-colors">
                  Como Funciona o Pedido
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F26522] transition-colors">
                  Calculadora de Porções
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-[#F26522] transition-colors">
                  Cardápio para Cães e Gatos
                </a>
              </li>
              <li>
                <a href="#ingredientes" className="hover:text-[#F26522] transition-colors">
                  Ingredientes & Segurança
                </a>
              </li>
              <li>
                <a href="#entregas" className="hover:text-[#F26522] transition-colors">
                  Área de Entrega e Retirada
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F26522] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Polo de Produção & Horários */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F5DE]">
              Localização & Horários
            </h4>
            
            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
              <span>
                Rua Atílio Pagnoncelli, 171 – Centro, Herval d&apos;Oeste - SC, 89610-000
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Clock className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
              <span>
                Segunda a Sábado: 08:30 às 18:30<br />
                Entregas programadas e suporte contínuo.
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <Phone className="w-4 h-4 text-[#F26522] shrink-0 mt-0.5" />
              <span>
                (49) 99944-7991 (WhatsApp Oficial)
              </span>
            </div>
          </div>

          {/* Col 4: Destaques & Cobertura */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8F5DE]">
              Cidades Atendidas
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Entregas programadas em domicílio com caixas térmicas apropriadas em:
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                Herval d&apos;Oeste
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                Joaçaba
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                Luzerna
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300">
                Região Meio-Oeste SC
              </span>
            </div>
            <p className="text-[11px] text-[#F26522] font-medium pt-1">
              Empresa de empreendedoras acolhedora e inclusiva.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} Rango Pet Natural. Todos os direitos reservados. CNPJ e registro sob supervisão.
          </p>
          <p className="flex items-center gap-1">
            Feito com carinho e <Heart className="w-3 h-3 text-[#F26522] fill-[#F26522]" /> para pets saudáveis.
          </p>
        </div>
      </div>
    </footer>
  );
}
