import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { studio } from "@/data/content";

const navLinks = [
  { href: "/passbilder", label: "Passbilder" },
  { href: "/bewerbungsfotos", label: "Bewerbungsfotos" },
  { href: "/portrait-familie", label: "Portrait & Familie" },
  { href: "/rahmen-einrahmung", label: "Rahmen" },
  { href: "/studio", label: "Studio" },
  { href: "/kontakt", label: "Kontakt" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "nav-transparent"
          : "nav-solid shadow-sm"
      }`}
    >
      <div className="container-studio flex items-center justify-between h-[72px] px-4 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          className={`font-display text-xl font-semibold tracking-wider transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-primary-foreground"
          }`}
        >
          foto-butik
          <span className="block text-[9px] font-body font-normal tracking-[0.2em] uppercase opacity-70 -mt-0.5">
            Alexander Schmid-Paetzold
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:opacity-70 ${
                isTransparent ? "text-white" : "text-primary-foreground"
              } ${
                location.pathname === link.href
                  ? "opacity-100"
                  : "opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={studio.phoneHref}
            className={`flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 hover:opacity-70 ${
              isTransparent ? "text-white" : "text-primary-foreground"
            }`}
          >
            <Phone size={13} />
            {studio.phone}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-primary-foreground"
          }`}
          aria-label="Navigation öffnen"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden nav-solid border-t border-white/10">
          <nav className="container-studio px-4 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-foreground text-sm tracking-[0.15em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={studio.phoneHref}
              className="flex items-center gap-2 text-primary-foreground text-sm tracking-[0.12em] uppercase font-medium opacity-80 hover:opacity-100 transition-opacity mt-2"
            >
              <Phone size={14} />
              {studio.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
