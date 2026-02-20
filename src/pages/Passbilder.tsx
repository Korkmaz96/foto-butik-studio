import { Link } from "react-router-dom";
import { Check, Phone } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { CTABanner } from "@/components/TrustSection";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { prices, studio, seoMeta, ePassbildStatus, ePassbildStatusLabels, portfolioImages } from "@/data/content";

const passbilImages = portfolioImages.filter((_, i) => [0, 2, 5, 8].includes(i));

const PriceCard = ({ card, featured }: { card: typeof prices.passbilder[0]; featured?: boolean }) => (
  <div className={`price-card ${card.featured ? "featured" : ""}`}>
    {card.featured && (
      <span className="absolute -top-3 left-6 text-[9px] tracking-[0.2em] uppercase bg-accent text-primary px-3 py-1 font-medium">
        Empfohlen
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

const Passbilder = () => {
  const statusInfo = ePassbildStatusLabels[ePassbildStatus];

  return (
    <>
      <SeoHead
        title={seoMeta.passbilder.title}
        description={seoMeta.passbilder.description}
        keywords={seoMeta.passbilder.keywords}
      />

      {/* Hero */}
      <div className="h-[45vh] min-h-[320px] relative overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85&auto=format&fit=crop"
          alt="Biometrische Passbilder Stuttgart"
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
        <div className="relative z-10 container-studio px-4 md:px-8 pb-12 fade-up">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
            Leistung
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Passbilder & ePassbild
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-studio grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Schnell & zuverlässig
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Biometrisch nach aktueller Norm
            </h2>
            <span className="divider-accent-left" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unsere Passbilder erfüllen die aktuellen biometrischen Vorschriften
              für Reisepass, Personalausweis und alle Behörden. Sofort zum
              Mitnehmen – ohne Wartezeit.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Biometrische Passbilder nach aktueller EU-Norm",
                "Sonderformate & Visafotos sofort",
                "Internationale Formate für alle Länder",
                "ePassbild mit QR-Code für digitale Einreichung",
                "Sofortentwicklung – innerhalb von Minuten",
                "Fachgerechte Beratung zu Anforderungen",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-sm">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="inline-flex items-center gap-3 border border-border px-5 py-3">
              <span className="text-[11px] tracking-[0.15em] uppercase font-medium text-muted-foreground">
                ePassbild Status: <span className="text-foreground">{statusInfo.label}</span>
              </span>
            </div>
          </div>
          <div>
            <PortfolioCarousel images={passbilImages} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-muted/30">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Preise
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Transparente Preise
            </h2>
            <span className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {prices.passbilder.map((card) => (
              <PriceCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis */}
      <section className="section-padding-sm">
        <div className="container-studio max-w-2xl text-center">
          <div className="border border-border p-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
              Wichtiger Hinweis
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wir empfehlen, einen Termin zu vereinbaren – damit wir uns Zeit für
              Sie nehmen können. Kurzfristige Termine sind nach Möglichkeit
              ebenfalls verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={studio.phoneHref} className="btn-primary flex items-center gap-2 justify-center">
                <Phone size={14} />
                {studio.phone}
              </a>
              <Link to="/kontakt" className="btn-outline">
                Online anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Passbilder;
