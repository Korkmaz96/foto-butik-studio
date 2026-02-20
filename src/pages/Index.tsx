import { Link } from "react-router-dom";
import heroStudio from "@/assets/hero-studio.jpg";
import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { TrustSection, CTABanner } from "@/components/TrustSection";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { SeoHead } from "@/components/SeoHead";
import { services, studio, seoMeta } from "@/data/content";

const ServiceCard = ({
  service,
}: {
  service: (typeof services)[0];
}) => (
  <Link to={service.link} className="service-card group block">
    <div className="relative overflow-hidden aspect-[4/5]">
      <img
        src={service.image}
        alt={service.alt}
        loading="lazy"
        className="service-card-image w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-medium mb-2">
          {service.subtitle}
        </p>
        <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
          {service.title}
        </h3>
        <p className="text-primary-foreground/70 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
          {service.description}
        </p>
        <span className="inline-block mt-3 text-[10px] tracking-[0.2em] uppercase text-accent border-b border-accent pb-0.5">
          Mehr erfahren
        </span>
      </div>
    </div>
  </Link>
);

const Index = () => {
  return (
    <>
      <SeoHead
        title={seoMeta.home.title}
        description={seoMeta.home.description}
        keywords={seoMeta.home.keywords}
      />

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroStudio}
            alt="foto-butik Studio Stuttgart-Möhringen"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-primary/10" />
        </div>

        <div className="relative z-10 container-studio px-4 md:px-8 fade-up">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent font-medium mb-5">
            foto-butik · Stuttgart-Möhringen
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground leading-[1.05] mb-6 max-w-4xl">
            {studio.claim}
          </h1>
          <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            {studio.claimSub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/passbilder" className="btn-sand">
              Passbilder sofort
            </Link>
            <Link to="/kontakt" className="btn-outline btn-outline-light">
              Termin vereinbaren
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="w-px h-12 bg-primary-foreground/30 animate-pulse" />
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section className="section-padding">
        <div className="container-studio mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Einblicke ins Studio
              </h2>
            </div>
            <Link
              to="/portrait-familie"
              className="text-[11px] tracking-[0.15em] uppercase font-medium hover:text-accent transition-colors flex-shrink-0"
            >
              Alle Arbeiten →
            </Link>
          </div>
        </div>
        <div className="pl-4 md:pl-8 max-w-[100vw] overflow-hidden">
          <div className="container-studio">
            <PortfolioCarousel />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Leistungen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Was wir für Sie tun
            </h2>
            <span className="divider-accent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <TrustSection />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-studio">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
              Kundenstimmen
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              Was unsere Kunden sagen
            </h2>
            <span className="divider-accent" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </>
  );
};

export default Index;
