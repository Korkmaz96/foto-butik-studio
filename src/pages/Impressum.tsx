import { Link } from "react-router-dom";

const Impressum = () => (
  <div className="pt-[72px]">
    <div className="container-studio px-4 md:px-8 section-padding max-w-3xl">
      <h1 className="font-display text-4xl font-semibold mb-8">Impressum</h1>
      <div className="prose prose-sm text-foreground space-y-6">
        <div>
          <h2 className="font-medium text-base mb-2">Angaben gemäß § 5 TMG</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Alexander Schmid-Paetzold<br />
            foto-butik<br />
            Hechinger Straße 5<br />
            70567 Stuttgart-Möhringen<br />
            Deutschland
          </p>
        </div>
        <div>
          <h2 className="font-medium text-base mb-2">Kontakt</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Telefon: 0711 / 71 28 28<br />
            E-Mail: kontakt@foto-butik.de
          </p>
        </div>
        <div>
          <h2 className="font-medium text-base mb-2">Umsatzsteuer-ID</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            [Bitte USt-ID eintragen]
          </p>
        </div>
        <div>
          <h2 className="font-medium text-base mb-2">Berufsbezeichnung</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Fotograf / Einzelunternehmer
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          [Bitte rechtlich prüfen lassen und vollständig ausfüllen]
        </p>
      </div>
      <Link to="/" className="btn-outline mt-12 inline-block">← Zurück zur Startseite</Link>
    </div>
  </div>
);

export default Impressum;
