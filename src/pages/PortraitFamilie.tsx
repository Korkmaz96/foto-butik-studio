import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { CTABanner } from "@/components/TrustSection";
import { prices, seoMeta, portfolioImages } from "@/data/content";

type Category = "Alle" | "Portrait" | "Familie" | "Schwangerschaft";

const galleryImages = [
  ...portfolioImages.filter((_, i) => [1, 4, 9].includes(i)),
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1622038075088-e093f29cef59?w=800&q=80&auto=format&fit=crop",
    alt: "Familie mit Baby",
    category: "Familie",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1609870216073-c59bfb9c7ccb?w=800&q=80&auto=format&fit=crop",
    alt: "Kinderfoto natürlich",
    category: "Familie",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80&auto=format&fit=crop",
    alt: "Professionelles Portrait",
    category: "Portrait",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait Frau studio",
    category: "Portrait",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&q=80&auto=format&fit=crop",
    alt: "Schwangerschaft Portrait",
    category: "Schwangerschaft",
  },
];

const categories: Category[] = ["Alle", "Portrait", "Familie", "Schwangerschaft"];

const PriceCard = ({ card }: { card: typeof prices.portrait[0] }) => (
  <div className={`price-card ${card.featured ? "featured" : ""}`}>
    {card.featured && (
      <span className="absolute -top-3 left-6 text-[9px] tracking-[0.2em] uppercase bg-accent text-primary px-3 py-1 font-medium">
        Beliebt
      </span>
    )}
    <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-3">
      {card.title}
    </p>
    <p className={`font-display text-4xl font-semibold mb-4 ${card.featured ? "text-primary-foreground" : ""}`}>
      {card.price}
    </p>
    <p className={`text-sm leading-relaxed mb-6 ${card.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
      {card.description}
    </p>
    <ul className="space-y-2 mb-8">
      {card.features.map((f) => (
        <li key={f} className="flex gap-3 items-start">
          <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
          <span className={`text-sm ${card.featured ? "text-primary-foreground/80" : ""}`}>{f}</span>
        </li>
      ))}
    </ul>
    <Link
      to="/kontakt"
      className={card.featured ? "btn-sand w-full text-center block" : "btn-outline block text-center"}
    >
      Termin vereinbaren
    </Link>
  </div>
);

const PortraitFamilie = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <SeoHead
        title={seoMeta.portrait.title}
        description={seoMeta.portrait.description}
        keywords={seoMeta.portrait.keywords}
      />

      {/* Hero */}
      <div className="h-[55vh] min-h-[360px] relative overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=85&auto=format&fit=crop"
          alt="Portrait und Familienfoto Stuttgart"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/20" />
        <div className="relative z-10 container-studio px-4 md:px-8 pb-12 fade-up">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
            Leistung
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Portrait & Familie
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-3 max-w-md">
            Momente, die bleiben – klassische Portraits, Familienfotos und Kinderbilder mit Herz.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-studio">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img) => (
              <button
                key={img.id}
                onClick={() => setLightboxImg(img.src)}
                className="relative overflow-hidden aspect-square group cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="lightbox-backdrop"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-primary-foreground/70 hover:text-primary-foreground"
            aria-label="Schließen"
          >
            <X size={28} />
          </button>
          <img
            src={lightboxImg.replace("w=800", "w=1400")}
            alt="Vollbild"
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Pricing */}
      <section className="section-padding bg-muted/30">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Preise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Transparente Pakete
            </h2>
            <span className="divider-accent" />
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Alle Preise sind Aufnahmepreise. Prints und digitale Dateien werden
              separat nach Ihrer Bildauswahl berechnet.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prices.portrait.map((card) => (
              <PriceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default PortraitFamilie;
