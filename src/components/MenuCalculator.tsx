"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Scale,
  Dog,
  Cat,
  Flame,
  Sparkles,
  MessageCircle,
  Check,
  Heart,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";

type Species = "dog" | "cat";
type Goal = "manutencao" | "castrado" | "filhote" | "senior";

interface Recipe {
  id: string;
  name: string;
  tag: string;
  category: "cães" | "gatos" | "terapêutico";
  description: string;
  ingredients: string[];
  benefits: string[];
  image: string;
}

const recipes: Recipe[] = [
  {
    id: "bovino-abobora",
    name: "Bovino Nobre & Abóbora Cabotiá",
    tag: "O Favorito dos Cães",
    category: "cães",
    description:
      "Cortes nobres bovinos selecionados, cozidos suavemente com abóbora rica em betacaroteno e fibras para uma digestão impecável.",
    ingredients: [
      "Patinho / Músculo bovino magro",
      "Abóbora cabotiá cozida no vapor",
      "Cenoura fresca em cubos",
      "Chuchu hidratante",
      "Fígado bovino (fonte de ferro)",
      "Cálcio & minerais quelatados",
    ],
    benefits: [
      "Alta saciedade e energia",
      "Fezes firmes e com odor reduzido",
      "Palatabilidade máxima",
    ],
    image: "/images/food-gourmet.jpg",
  },
  {
    id: "frango-batatadoce",
    name: "Frango Caipira & Batata Doce",
    tag: "Digestão Leve & Equilibrada",
    category: "cães",
    description:
      "Filé de peito de frango cozido com ervas suaves, batata doce de baixo índice glicêmico e cúrcuma anti-inflamatória.",
    ingredients: [
      "Peito e sobrecoxa desossada",
      "Batata-doce cozida",
      "Abobrinha italiana",
      "Cúrcuma pura & azeite extravirgem",
      "Semente de chia moída",
      "Suplementação vitamínica completa",
    ],
    benefits: [
      "Ideal para digestão sensível",
      "Brilho intenso na pelagem",
      "Equilíbrio glicêmico prolongado",
    ],
    image: "/images/marmitas-prep.jpg",
  },
  {
    id: "salmao-felino",
    name: "Banquete de Salmão & Caldo Úmido",
    tag: "Especial Felinos Exigentes",
    category: "gatos",
    description:
      "Desenvolvido para suprir a necessidade natural de hidratação dos gatos, enriquecido com taurina e caldo caseiro nutritivo.",
    ingredients: [
      "Filé de peixe e salmão fresco",
      "Coração e moela higienizados",
      "Caldo biológico rico em colágeno",
      "Abobrinha em tiras finas",
      "Taurina veterinária essencial",
      "Óleo de peixe ômega 3 puro",
    ],
    benefits: [
      "Prevenção de doenças renais",
      "Hidratação celular profunda",
      "Atração instantânea pelo olfato felino",
    ],
    image: "/images/cat-nutrition.jpg",
  },
  {
    id: "dietas-terapeuticas",
    name: "Receita Personalizada sob Prescrição",
    tag: "Nutrição Clínica & Terapêutica",
    category: "terapêutico",
    description:
      "Se o seu pet possui laudo de médico veterinário (renal, hepático, cardiopata ou alérgico), preparamos a receita estritamente conforme a prescrição.",
    ingredients: [
      "Ingredientes sob medida da receita médica",
      "Controle rígido de sódio / fósforo",
      "Fontes proteicas hipoalergênicas",
      "Pesagem de precisão laboratorial",
    ],
    benefits: [
      "Apoio ao tratamento clínico",
      "Acompanhamento personalizado",
      "Segurança total para pets convalescentes",
    ],
    image: "/images/hero-dog.jpg",
  },
];

export function MenuCalculator() {
  const [species, setSpecies] = useState<Species>("dog");
  const [weight, setWeight] = useState<number>(8);
  const [goal, setGoal] = useState<Goal>("manutencao");
  const [recipeFilter, setRecipeFilter] = useState<string>("todos");

  // Calculation multipliers (approximate clinical guidelines for cooked natural food)
  let factor = 0.035; // default 3.5% of body weight
  if (species === "cat") {
    factor = goal === "castrado" ? 0.035 : goal === "filhote" ? 0.06 : 0.045;
  } else {
    // Dog
    if (goal === "castrado") factor = 0.028;
    else if (goal === "filhote") factor = 0.06;
    else if (goal === "senior") factor = 0.03;
    else factor = 0.038;
  }

  const dailyGrams = Math.round(weight * factor * 1000);
  const mealGrams = Math.round(dailyGrams / 2);
  const monthlyMarmitas = 30; // 30 daily portions

  const handleConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#F26522", "#F8F5DE", "#7A8B63"],
    });
  };

  const speciesName = species === "dog" ? "Cão" : "Gato";
  const goalNames: Record<Goal, string> = {
    manutencao: "Manutenção Saudável",
    castrado: "Castrado / Controle de Peso",
    filhote: "Filhote em Crescimento",
    senior: "Sênior / Digestão Sensível",
  };

  const calculatedWhatsAppUrl =
    "https://wa.me/5549999447991?text=" +
    encodeURIComponent(
      `Olá Rango Pet! Fiz a simulação de porção no site:\n` +
        `• Pet: ${speciesName}\n` +
        `• Peso: ${weight} kg\n` +
        `• Perfil: ${goalNames[goal]}\n` +
        `• Porção calculada: ~${dailyGrams}g/dia (duas refeições de ${mealGrams}g)\n\n` +
        `Gostaria de ver as opções de cardápio disponíveis e o valor das marmitas personalizadas!`
    );

  const filteredRecipes =
    recipeFilter === "todos"
      ? recipes
      : recipes.filter(
          (r) =>
            r.category === recipeFilter ||
            (recipeFilter === "cães" && r.category === "terapêutico")
        );

  return (
    <section id="cardapio" className="py-24 bg-[#181716] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#F26522] uppercase tracking-wider font-semibold mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Simulador de Dieta & Cardápio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F7F5F0] font-sans leading-tight mb-4">
            Quanto o seu pet deve comer por dia?
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
            Use nossa calculadora rápida para estimar a quantidade diária em gramas e receba uma recomendação sob medida direto no WhatsApp.
          </p>
        </div>

        {/* Interactive Calculator Block */}
        <div className="bg-[#201E1C] border border-white/10 rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Calculator Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Species selector */}
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-3">
                  1. Qual é o seu pet?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setSpecies("dog");
                      if (weight < 2) setWeight(5);
                    }}
                    className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border font-bold text-sm transition-all ${
                      species === "dog"
                        ? "bg-[#F26522] border-[#F26522] text-white shadow-lg shadow-[#F26522]/20"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    <Dog className="w-5 h-5" />
                    <span>Cão (Cachorro)</span>
                  </button>

                  <button
                    onClick={() => {
                      setSpecies("cat");
                      if (weight > 12) setWeight(4);
                    }}
                    className={`flex items-center justify-center gap-3 p-3.5 rounded-2xl border font-bold text-sm transition-all ${
                      species === "cat"
                        ? "bg-[#F26522] border-[#F26522] text-white shadow-lg shadow-[#F26522]/20"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
                    }`}
                  >
                    <Cat className="w-5 h-5" />
                    <span>Gato (Felino)</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Weight selection slider & presets */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                    2. Peso aproximado do pet
                  </label>
                  <span className="text-xl font-extrabold text-[#F8F5DE] font-mono">
                    {weight} kg
                  </span>
                </div>

                <input
                  type="range"
                  min={species === "cat" ? 1 : 1}
                  max={species === "cat" ? 12 : 50}
                  step={species === "cat" ? 0.5 : 1}
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full accent-[#F26522] cursor-pointer h-2 bg-neutral-800 rounded-lg"
                />

                {/* Quick weight pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {(species === "dog" ? [3, 7, 12, 20, 32] : [2.5, 4, 5.5, 7]).map(
                    (preset) => (
                      <button
                        key={preset}
                        onClick={() => setWeight(preset)}
                        className={`text-xs px-3 py-1 rounded-lg border transition-all ${
                          weight === preset
                            ? "bg-[#F8F5DE] text-black border-[#F8F5DE] font-bold"
                            : "bg-white/5 text-neutral-400 border-white/10 hover:text-white"
                        }`}
                      >
                        {preset} kg
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Step 3: Life stage / goal */}
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-3">
                  3. Fase de vida ou objetivo
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(
                    [
                      { id: "manutencao", label: "Manutenção" },
                      { id: "castrado", label: "Castrado / Peso" },
                      { id: "filhote", label: "Filhote" },
                      { id: "senior", label: "Sênior" },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGoal(item.id)}
                      className={`p-2.5 rounded-xl border text-xs text-center transition-all ${
                        goal === item.id
                          ? "bg-[#F26522]/20 border-[#F26522] text-[#F8F5DE] font-bold"
                          : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculator Output Result Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#2A2724] to-[#1E1C1B] rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F26522] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Estimativa Nutricional
                  </span>
                  <span className="text-xs text-neutral-400">
                    {speciesName} de {weight}kg
                  </span>
                </div>

                <div className="text-center py-4 bg-black/20 rounded-2xl border border-white/5 mb-6">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1 font-semibold">
                    Porção Diária Recomendada
                  </p>
                  <p className="text-4xl sm:text-5xl font-black text-[#F8F5DE] font-mono tracking-tight">
                    ~{dailyGrams}
                    <span className="text-2xl text-[#F26522] font-sans ml-1">g / dia</span>
                  </p>
                  <p className="text-xs text-neutral-300 mt-2 font-medium">
                    Sugerido: 2 refeições de <strong>{mealGrams}g</strong> cada
                  </p>
                </div>

                <div className="space-y-2 text-xs text-neutral-300 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0" />
                    <span>Marmitas fracionadas sem desperdício</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0" />
                    <span>Preparo artesanal com carnes nobres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#F26522] shrink-0" />
                    <span>Entrega programada em Joaçaba e Herval</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={calculatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConfetti}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-bold text-xs uppercase tracking-wide transition-all shadow-xl shadow-[#F26522]/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pedir Orçamento com Esta Porção</span>
                </a>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  Você será direcionado ao WhatsApp com o cálculo pronto.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Recipes Showcase Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#F26522] font-bold block mb-1">
              Cardápio Selecionado
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F7F5F0]">
              Receitas feitas com carinho e ingredientes puros
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: "todos", label: "Todas" },
              { id: "cães", label: "Cães" },
              { id: "gatos", label: "Gatos" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setRecipeFilter(f.id)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  recipeFilter === f.id
                    ? "bg-[#F26522] text-white border-[#F26522] font-bold"
                    : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredRecipes.map((recipe, idx) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#201E1C]/90 rounded-3xl border border-white/10 overflow-hidden hover:border-[#F26522]/30 transition-all flex flex-col group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201E1C] via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-[#F8F5DE]">
                    {recipe.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-[#F8F5DE] mb-2">
                    {recipe.name}
                  </h4>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                    {recipe.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-wider text-neutral-400 font-bold mb-2.5">
                      Ingredientes Principais:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {recipe.ingredients.map((ing, i) => (
                        <span
                          key={i}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-neutral-300"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#7A8B63] font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Equilíbrio Nutricional Garantido</span>
                  </div>

                  <a
                    href={`https://wa.me/5549999447991?text=${encodeURIComponent(
                      `Olá! Gostaria de pedir a receita "${recipe.name}" para o meu pet!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F26522] hover:text-[#E85D04] transition-colors"
                  >
                    <span>Pedir Esta Receita</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
