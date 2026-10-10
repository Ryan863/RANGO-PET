# Rango Pet Natural — Landing Page Editorial de Alta Conversão

Landing page de gastronomia pet natural e nutrição animal criada para **Rango Pet Natural** (Herval d'Oeste / Joaçaba - SC), com estética editorial warm minimalist, hero escuro cinematográfico, calculadora interativa de gramagem, vitrine de receitas e direcionamento direto para WhatsApp.

---

## 🎨 Design System & Estética
- **Hero & Dark Mood:** Fundo carvão acolhedor (`#121110` / `#181716`) inspirado no layout editorial de referência.
- **Cores da Marca:** Laranja Terracota Vibrante (`#F26522` / `#E85D04`) e Amarelo Creme Manteiga (`#F8F5DE`).
- **Tipografia:**
  - *Display Sans:* Plus Jakarta Sans (geométrica, moderna e ultra legível)
  - *Editorial Serif:* Fraunces (curvas orgânicas e sofisticadas)
  - *Script Itálico Accent:* Caveat (*"saúde & sabor"*, *"comida de verdade"*)
- **Tratamento de Imagem:** Integração orgânica das fotografias com `mask-image: radial-gradient` e degradê suave sem cortes rígidos.
- **Padrões 21st.dev & Aceternity:**
  - `SpotlightCard` com feixe radial seguidor de cursor
  - `GlowingCard` com feixe rotativo cônico para o fechamento
  - Microinterações de elevação nos botões com `framer-motion`

---

## 🚀 Estrutura de Dobras
1. **Navbar Transparente & Fina:** Logo com patinha, links rápidos e CTA pílula WhatsApp.
2. **Hero Editorial (Referência Visual):**
   - Fotografia de alta resolução em destaque central/lateral com fade de bordas.
   - Alternador de perfis (Filhotes Dachshund, Cães Adultos e Felinos Gourmet).
   - Tipografia display com selo editorial 01/03.
   - CTA direto: `[ Montar Dieta do Meu Pet via WhatsApp ]`.
3. **O Problema vs. A Solução:**
   - Comparativo interativo: Ração seca ultraprocessada vs. Rango Pet Natural fresco.
   - Alívio da rotina do tutor: economia de tempo na cozinha com marmitas porcionadas.
4. **Como Funciona (3 Passos Editoriais com Spotlight):**
   - 01. Avaliação Personalizada via WhatsApp
   - 02. Cozinha Artesanal e Pesagem Rigorosa
   - 03. Marmitas a Vácuo Congeladas Entregues na Porta
5. **Simulador de Dieta & Cardápio Interativo:**
   - Seletor de espécie (Cão vs Gato), slider de peso e fase de vida.
   - Cálculo automático de gramas/dia e porção por refeição.
   - Efeito de confetti festivo e botão WhatsApp com dados pré-preenchidos.
6. **Cardápio de Receitas:** Bovino & Cabotiá, Frango Caipira & Batata Doce, Banquete de Salmão & Caldo Úmido (Gatos) e Dieta Terapêutica sob Prescrição.
7. **Ingredientes Seguros & Rigor de Qualidade:** Carnes nobres de verdade, vegetais cozidos no vapor, suplementação quelatada e lista de tolerância zero (sem conservantes químicos ou tóxicos).
8. **Área de Cobertura & Entregas:** Detalhes de entrega para Joaçaba, Herval d'Oeste e Luzerna, endereço do polo (Rua Atílio Pagnoncelli, 171) e gatilho do Google Maps.
9. **Depoimentos & Feed Instagram:** Prova social de tutores reais e convite para o perfil `@rango.petnatural`.
10. **FAQ Editorial:** Dúvidas comuns sobre transição de 7 dias, tempo de freezer, descongelamento prático e dietas especiais.
11. **Fechamento Radiant Glow (Aceternity):** Chamada de alto impacto para fechamento da primeira encomenda.
12. **Floating WhatsApp:** Botão flutuante no canto inferior direito com indicador pulsante de atendimento online.

---

## 🛠️ Tecnologias Utilizadas
- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React + SVGs customizados
- **SEO & Structured Data:** Schema.org `LocalBusiness`, OpenGraph, Viewport e metadados completos.

---

## 💻 Executando Localmente
```bash
# Entrar no diretório
cd C:\Users\nru62\.gemini\antigravity-ide\scratch\rango-petnatural

# Rodar o servidor de desenvolvimento
npm run dev -- --port 3003
```
Acesse em seu navegador: [http://localhost:3003](http://localhost:3003)
