import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SeoHead } from "@/components/SeoHead";
import { ContactForm } from "@/components/ContactForm";
import { studio, seoMeta } from "@/data/content";

const Kontakt = () => {
  return (
    <>
      <SeoHead
        title={seoMeta.kontakt.title}
        description={seoMeta.kontakt.description}
        keywords={seoMeta.kontakt.keywords}
      />

      {/* Header */}
      <div className="pt-[72px] pb-16 bg-primary">
        <div className="container-studio px-4 md:px-8 pt-16">
          <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-4">
            Kontakt & Termin
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-primary-foreground">
            Wir sind für Sie da.
          </h1>
          <p className="text-primary-foreground/60 mt-4 text-sm max-w-lg leading-relaxed">
            Ob Passbild, Bewerbungsfoto, Portrait oder Einrahmung – sprechen Sie
            uns einfach an. Wir freuen uns auf Sie.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-studio grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-8">
              Kontakt
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-1">
                    Adresse
                  </p>
                  <p className="text-sm leading-relaxed">{studio.address}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-1">
                    Telefon
                  </p>
                  <a
                    href={studio.phoneHref}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {studio.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-1">
                    E-Mail
                  </p>
                  <a
                    href={studio.emailHref}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {studio.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                  <Clock size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
                    Öffnungszeiten
                  </p>
                  <div className="space-y-1">
                    {studio.openingHours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-4 text-sm">
                        <span className="text-muted-foreground">{h.day}</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-col gap-3">
              <a href={studio.phoneHref} className="btn-primary text-center">
                Jetzt anrufen
              </a>
              <a href={studio.emailHref} className="btn-outline text-center">
                E-Mail schreiben
              </a>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 border border-border overflow-hidden">
              <div className="bg-muted h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} className="text-accent mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Hechinger Straße 5</p>
                  <p className="text-xs text-muted-foreground">70567 Stuttgart-Möhringen</p>
                  <a
                    href="https://maps.google.com/?q=Hechinger+Straße+5,+70567+Stuttgart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] tracking-[0.15em] uppercase text-accent mt-3 inline-block hover:underline"
                  >
                    In Google Maps öffnen →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.25em] uppercase text-accent font-medium mb-8">
              Terminanfrage
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
              Schreiben Sie uns
            </h2>
            <p className="text-muted-foreground text-sm mb-10">
              Wir antworten in der Regel innerhalb von 24 Stunden.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
