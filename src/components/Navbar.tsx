"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X, Heart, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Cardápio & Porções", href: "#cardapio" },
    { label: "Ingredientes", href: "#ingredientes" },
    { label: "Entregas & Região", href: "#entregas" },
    { label: "Dúvidas", href: "#faq" },
  ];

  const whatsappUrl =
    "https://wa.me/5549999447991?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rango%20Pet%20Natural%20e%20gostaria%20de%20receber%20o%20card%C3%A1pio%20e%20fazer%20um%20or%C3%A7amento%20para%20o%20meu%20pet.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121110]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Rango Pet Natural - Página Inicial"
          >
            <div className="relative w-10 h-10 rounded-full bg-[#F8F5DE] p-1.5 flex items-center justify-center shadow-md border border-[#F26522]/30 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-rango-pet.png"
                alt="Logo Rango Pet"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-lg leading-tight flex items-center gap-1.5">
                RANGO PET
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#F8F5DE]/70 font-medium">
                Alimentação Natural
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#F26522] relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F26522] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-semibold text-xs tracking-wide uppercase transition-all duration-300 shadow-lg shadow-[#F26522]/25 hover:shadow-[#F26522]/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181716]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-200 hover:text-[#F26522] text-base font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F26522] hover:bg-[#E85D04] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-[#F26522]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Pedir no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
