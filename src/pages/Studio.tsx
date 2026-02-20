import { Link } from "react-router-dom";
import { SeoHead } from "@/components/SeoHead";
import { CTABanner } from "@/components/TrustSection";
import { studio, seoMeta } from "@/data/content";
import heroStudio from "@/assets/hero-studio.jpg";

const values = [
  {
    title: "Leidenschaft für Details",
    text: "Jedes Bild, das unser Studio verlässt, wurde mit Sorgfalt belichtet, bearbeitet und überprüft.",
  },
  {
    title: "Persönliche Beratung",
    text: "Wir nehmen uns Zeit für Sie – denn gute Fotos entstehen aus Vertrauen und Kommunikation.",
  },
  {
    title: "Modernste Technik",
    text: "Professionelle Kamerasysteme, optimale Studioleuchten und hochwertige Entwicklung vor Ort.",
  },
  {
    title: "Faire Preise",
    text: "Premium-Qualität zu fairen, transparenten Preisen – ohne versteckte Kosten.",
  },
];

const Studio = () => {
  return (
    <>
      <SeoHead
        title={seoMeta.studio.title}
        description={seoMeta.studio.description}
        keywords={seoMeta.studio.keywords}
      />

      {/* Hero */}
      <div className="h-[60vh] min-h-[400px] relative overflow-hidden flex items-end">
        <img
          src={heroStudio}
          alt="foto-butik Studio Stuttgart-Möhringen"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-primary/20" />
        <div className="relative z-10 container-studio px-4 md:px-8 pb-12 fade-up">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
            Über uns
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Das Studio
          </h1>
        </div>
      </div>

      {/* About */}
      <section className="section-padding">
        <div className="container-studio grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Ihr Fotostudio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              foto-butik – <br />
              <em>Fotografie mit Persönlichkeit.</em>
            </h2>
            <span className="divider-accent-left" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Willkommen bei foto-butik in Stuttgart-Möhringen. Inhaber{" "}
              <strong>{studio.owner}</strong> führt das Studio mit Leidenschaft
              und langjähriger Erfahrung in der professionellen Fotografie.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unser Schwerpunkt liegt auf biometrischen Passbildern, professionellen
              Bewerbungsfotos, Portraits sowie der handwerklichen Einrahmung von
              Kunstdrucken und Fotos. Dabei stehen Qualität und Ihr persönliches
              Wohlbefinden im Mittelpunkt.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wir freuen uns auf Ihren Besuch in der Hechinger Straße – ob mit oder
              ohne Termin. Kommen Sie einfach vorbei.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Zum Kontakt
            </Link>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-border p-6">
                <h3 className="font-medium text-sm mb-3">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="section-padding bg-primary">
        <div className="container-studio">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-primary-foreground/10">
            {[
              { value: "100%", label: "Biometrisch korrekt" },
              { value: "Sofort", label: "Zum Mitnehmen" },
              { value: "Maß", label: "Einrahmungen" },
              { value: "Persönlich", label: "Beratung" },
            ].map((f, i) => (
              <div
                key={f.label}
                className={`py-10 px-6 text-center ${i < 3 ? "border-r border-primary-foreground/10" : ""}`}
              >
                <p className="font-display text-4xl font-semibold text-primary-foreground mb-2">
                  {f.value}
                </p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-accent font-medium">
                  {f.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
};

export default Studio;
