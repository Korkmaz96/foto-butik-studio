import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { CTABanner } from "@/components/TrustSection";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { prices, studio, seoMeta, portfolioImages } from "@/data/content";

const bewImages = portfolioImages.filter((_, i) => [0, 2, 8, 9].includes(i));

const PriceCard = ({ card }: { card: typeof prices.bewerbung[0] }) => (
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

const processSteps = [
  { num: "01", title: "Beratung", text: "Persönliches Gespräch zu Outfit, Haare, Brille und Haltung – wir bereiten Sie optimal vor." },
  { num: "02", title: "Shooting", text: "Ca. 25–30 Aufnahmen in entspannter Atmosphäre. Verschiedene Posen und Ausleuchtungen." },
  { num: "03", title: "Auswahl", text: "Gemeinsame Bildauswahl direkt im Studio. Sie entscheiden, welche Motive es werden." },
  { num: "04", title: "Retusche & Ausgabe", text: "Feine Retusche, digitale Bilddaten und optionale Fineart-Prints – fertig für Ihre Bewerbung." },
];

const Bewerbungsfotos = () => {
  return (
    <>
      <SeoHead
        title={seoMeta.bewerbungsfotos.title}
        description={seoMeta.bewerbungsfotos.description}
        keywords={seoMeta.bewerbungsfotos.keywords}
      />

      {/* Hero */}
      <div className="h-[55vh] min-h-[360px] relative overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1600&q=85&auto=format&fit=crop"
          alt="Professionelle Bewerbungsfotos Stuttgart"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/20" />
        <div className="relative z-10 container-studio px-4 md:px-8 pb-12 fade-up">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
            Leistung
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Bewerbungsfotos
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-3 max-w-md">
            Ihr erster Eindruck beim Arbeitgeber – professionell, authentisch, überzeugend.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <section className="section-padding">
        <div className="container-studio grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Der erste Eindruck zählt
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Überzeugen Sie –{" "}
              <em>bevor</em> Sie sprechen.
            </h2>
            <span className="divider-accent-left" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              In einem hart umkämpften Stellenmarkt ist Ihr Bewerbungsfoto oft
              das Erste, was ein Personalverantwortlicher von Ihnen sieht. Wir
              sorgen dafür, dass dieser erste Eindruck sitzt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Vor dem Shooting besprechen wir gemeinsam Outfit, Haltung, und
              welche Wirkung Sie erzielen möchten – seriös, modern, sympathisch.
              Im Shooting entstehen ca. 25–30 Aufnahmen, aus denen Sie die besten
              gemeinsam mit uns auswählen.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Termin vereinbaren
            </Link>
          </div>
          <div className="space-y-4">
            <PortfolioCarousel images={bewImages} />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Ablauf
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              So läuft Ihr Shooting ab
            </h2>
            <span className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`p-8 ${i < processSteps.length - 1 ? "border-r border-border" : ""} border-b border-border`}
              >
                <p className="font-display text-5xl font-light text-accent/30 mb-4">
                  {step.num}
                </p>
                <h3 className="font-medium text-base mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Pakete
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Das richtige Paket für Sie
            </h2>
            <span className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {prices.bewerbung.map((card) => (
              <PriceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Bewerbungsfotos;
