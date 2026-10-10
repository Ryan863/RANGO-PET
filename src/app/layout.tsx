import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rangopetnatural.com.br"),
  title: "Rango Pet Natural | Comida de Verdade e Marmitas para Cães e Gatos",
  description:
    "Marmitas naturais personalizadas para cada necessidade do seu pet. Ingredientes 100% frescos, sem conservantes. Entregas em Joaçaba, Herval d'Oeste e região (SC).",
  keywords: [
    "alimentação natural pet",
    "marmitas para cães",
    "comida natural para gatos",
    "nutrição pet Joaçaba",
    "Rango Pet Natural Herval d'Oeste",
    "comida de verdade pet SC",
    "dieta pet personalizada",
  ],
  authors: [{ name: "Rango Pet Natural" }],
  openGraph: {
    title: "Rango Pet Natural | Nutrição feita sob medida para o seu pet",
    description:
      "Comida de verdade, feita com cuidado. Marmitas naturais personalizadas e balanceadas entregues na sua casa em Joaçaba e Herval d'Oeste.",
    url: "https://rangopetnatural.com.br",
    siteName: "Rango Pet Natural",
    images: [
      {
        url: "/images/hero-dachshund.jpg",
        width: 1200,
        height: 630,
        alt: "Rango Pet Natural - Marmitas Naturais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/images/logo-rango-pet.png",
    apple: "/images/logo-rango-pet.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rango Pet Natural",
  image: "https://rangopetnatural.com.br/images/logo-rango-pet.png",
  telephone: "+5549999447991",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Atílio Pagnoncelli, 171",
    addressLocality: "Herval d'Oeste",
    addressRegion: "SC",
    postalCode: "89610-000",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.1856,
    longitude: -51.4984,
  },
  url: "https://rangopetnatural.com.br",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "18:30",
    },
  ],
  sameAs: ["https://www.instagram.com/rango.petnatural/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${fraunces.variable} ${caveat.variable}`}
    >
      <body className="antialiased selection:bg-[#F26522] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
