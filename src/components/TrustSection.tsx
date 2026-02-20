import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  Smartphone,
  Star,
  Award,
  MapPin,
} from "lucide-react";
import { trustItems, ePassbildStatus, ePassbildStatusLabels, studio } from "@/data/content";

const iconMap = {
  shield: Shield,
  clock: Clock,
  smartphone: Smartphone,
  star: Star,
  award: Award,
  "map-pin": MapPin,
};

export const TrustSection = () => {
  const statusInfo = ePassbildStatusLabels[ePassbildStatus];

  return (
    <section className="section-padding bg-muted/40">
      <div className="container-studio">
        {/* ePassbild Status Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-3 border border-border px-6 py-3 bg-background">
            <Smartphone size={15} className="text-accent" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
              ePassbild (QR-Code) –{" "}
              <span
                className={
                  statusInfo.color === "success"
                    ? "text-green-600"
                    : statusInfo.color === "warning"
                    ? "text-amber-600"
                    : "text-muted-foreground"
                }
              >
                {statusInfo.label}
              </span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
            Warum foto-butik
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Qualität, auf die Sie vertrauen können
          </h2>
          <span className="divider-accent" />
        </div>

        {/* Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 border border-border">
          {trustItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.id}
                className="trust-badge border-r border-b border-border [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border">
                  <Icon size={18} className="text-accent" />
                </div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const CTABanner = () => {
  return (
    <section className="bg-primary py-20 px-4">
      <div className="container-studio text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
          Jetzt handeln
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
          Heute noch Termin sichern
        </h2>
        <p className="text-primary-foreground/70 text-sm mb-10 max-w-md mx-auto leading-relaxed">
          Passbild, Bewerbungsfoto oder Portrait – wir sind für Sie da. Rufen
          Sie einfach an oder schreiben Sie uns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={studio.phoneHref} className="btn-sand">
            {studio.phone} anrufen
          </a>
          <Link to="/kontakt" className="btn-outline btn-outline-light">
            Termin anfragen
          </Link>
        </div>
      </div>
    </section>
  );
};
