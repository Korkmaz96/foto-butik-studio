import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { studio } from "@/data/content";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-studio px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-semibold tracking-wider mb-1">
            foto-butik
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-6">
            {studio.owner}
          </p>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Ihr professionelles Fotostudio in Stuttgart-Möhringen. Passbilder,
            Bewerbungsfotos, Portraits und Einrahmungen.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-6 text-primary-foreground/50">
            Leistungen
          </p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/passbilder", label: "Passbilder & ePassbild" },
              { href: "/bewerbungsfotos", label: "Bewerbungsfotos" },
              { href: "/portrait-familie", label: "Portrait & Familie" },
              { href: "/rahmen-einrahmung", label: "Rahmen & Einrahmung" },
              { href: "/studio", label: "Über das Studio" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-6 text-primary-foreground/50">
            Kontakt
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <MapPin size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-primary-foreground/60 leading-relaxed">
                {studio.address}
              </span>
            </div>
            <div className="flex gap-3">
              <Phone size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <a
                href={studio.phoneHref}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {studio.phone}
              </a>
            </div>
            <div className="flex gap-3">
              <Mail size={14} className="text-accent mt-0.5 flex-shrink-0" />
              <a
                href={studio.emailHref}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {studio.email}
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase font-medium mb-6 text-primary-foreground/50">
            Öffnungszeiten
          </p>
          <div className="flex flex-col gap-3">
            {studio.openingHours.map((h) => (
              <div key={h.day} className="flex justify-between gap-4">
                <span className="text-sm text-primary-foreground/60">{h.day}</span>
                <span className="text-sm text-primary-foreground/60 text-right">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-studio px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-primary-foreground/40">
            © {year} foto-butik – Alexander Schmid-Paetzold
          </p>
          <div className="flex gap-6">
            <Link
              to="/impressum"
              className="text-[11px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors tracking-wide"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-[11px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors tracking-wide"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
