import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { CTABanner } from "@/components/TrustSection";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { seoMeta, studio, portfolioImages } from "@/data/content";

const rahmenImages = portfolioImages.filter((_, i) => [7, 3, 5, 0].includes(i));

const features = [
  "Maßanfertigung für jedes Format",
  "Große Passepartout-Auswahl in vielen Farben",
  "UV-Schutzglas – schützt vor Licht und Verblassen",
  "Antireflex-Glas auf Wunsch",
  "Kaschierung auf Hartschaum oder Aluminium",
  "Leinwandbespannung in vielen Größen",
  "Museumsqualität auf Anfrage",
  "Persönliche Beratung vor Ort",
];

const materials = [
  {
    title: "Holzrahmen",
    text: "Klassisch, modern oder rustikal – unsere Holzrahmen in zahllosen Ausführungen und Farbtönen.",
    icon: "🪵",
  },
  {
    title: "Passepartouts",
    text: "Große Auswahl an Kartonpassepartouts in Weiß, Elfenbein, Grau, Schwarz und vielen Farben.",
    icon: "🎨",
  },
  {
    title: "UV-Schutzglas",
    text: "Schützt Ihre Bilder langfristig vor UV-Licht, Verblassen und Staub.",
    icon: "🛡️",
  },
  {
    title: "Leinwand",
    text: "Leinwandbespannung für ein modernes, rahmenloses Bild-Erlebnis.",
    icon: "🖼️",
  },
];

const RahmenEinrahmung = () => {
  return (
    <>
      <SeoHead
        title={seoMeta.rahmen.title}
        description={seoMeta.rahmen.description}
        keywords={seoMeta.rahmen.keywords}
      />

      {/* Hero */}
      <div className="h-[55vh] min-h-[360px] relative overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=85&auto=format&fit=crop"
          alt="Bilderrahmen Einrahmung Stuttgart"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/20" />
        <div className="relative z-10 container-studio px-4 md:px-8 pb-12 fade-up">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
            Leistung
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Rahmen & Einrahmung
          </h1>
          <p className="text-primary-foreground/70 text-sm mt-3 max-w-md">
            Boutique-Werkstatt in Stuttgart-Möhringen – Maßanfertigung mit Leidenschaft.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-studio grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Handwerk vor Ort
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              Ihr Bild verdient den richtigen Rahmen.
            </h2>
            <span className="divider-accent-left" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              In unserer Einrahmungswerkstatt entstehen individuelle Rahmungen
              nach Maß. Ob Kunstdruck, Familienfoto, Diplom oder Unternehmensbild –
              wir finden den perfekten Rahmen für jedes Stück.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mit einer großen Auswahl an Holzrahmen, Passepartouts und Glasoptionen
              beraten wir Sie persönlich vor Ort – damit das Ergebnis genau so wird,
              wie Sie es sich vorstellen.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex gap-3 items-start text-sm">
                  <Check size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/kontakt" className="btn-primary">
              Beratungstermin anfragen
            </Link>
          </div>
          <div>
            <PortfolioCarousel images={rahmenImages} />
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-muted/30">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Materialien & Optionen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Höchste Qualität für Ihr Bild
            </h2>
            <span className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {materials.map((m, i) => (
              <div
                key={m.title}
                className={`p-8 text-center ${i < materials.length - 1 ? "border-r border-border" : ""} border-b border-border`}
              >
                <span className="text-4xl mb-5 block">{m.icon}</span>
                <h3 className="font-medium text-sm tracking-wide mb-3">{m.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Beratung */}
      <section className="section-padding-sm">
        <div className="container-studio max-w-2xl text-center">
          <div className="border border-border p-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium mb-4">
              Persönliche Beratung
            </p>
            <h3 className="font-display text-2xl font-semibold mb-4">
              Kommen Sie einfach vorbei
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wir beraten Sie in aller Ruhe zu allen Fragen rund um Rahmen, Glas
              und Passepartout. Bringen Sie Ihr Bild gerne mit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={studio.phoneHref} className="btn-primary">
                {studio.phone}
              </a>
              <Link to="/kontakt" className="btn-outline">
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default RahmenEinrahmung;
