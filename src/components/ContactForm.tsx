import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";
import { studio } from "@/data/content";

const anliegen = [
  "Passbild / biometrisches Foto",
  "ePassbild (QR-Code)",
  "Bewerbungsfoto",
  "Portrait / Familienfoto",
  "Einrahmung / Rahmen",
  "Sonstiges",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  anliegen: string;
  termin: string;
  nachricht: string;
};

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    anliegen: "",
    termin: "",
    nachricht: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!formData.anliegen) e.anliegen = "Bitte wählen Sie ein Anliegen.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // In production: send to backend / email service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <CheckCircle size={48} className="text-accent mb-6" />
        <h3 className="font-display text-2xl font-semibold mb-3">
          Vielen Dank!
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Ihre Anfrage ist eingegangen. Wir melden uns so schnell wie möglich
          bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
            Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input-studio"
            placeholder="Max Mustermann"
            maxLength={100}
          />
          {errors.name && (
            <p className="text-destructive text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
            E-Mail *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="form-input-studio"
            placeholder="max@beispiel.de"
            maxLength={255}
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
            Telefon (optional)
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="form-input-studio"
            placeholder="0711 / …"
            maxLength={30}
          />
        </div>
        <div className="relative">
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
            Anliegen *
          </label>
          <select
            value={formData.anliegen}
            onChange={(e) => setFormData({ ...formData, anliegen: e.target.value })}
            className="form-input-studio appearance-none pr-8 cursor-pointer"
          >
            <option value="">Bitte wählen …</option>
            {anliegen.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-0 bottom-3.5 text-muted-foreground pointer-events-none" />
          {errors.anliegen && (
            <p className="text-destructive text-xs mt-1">{errors.anliegen}</p>
          )}
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
            Wunschtermin (optional)
          </label>
          <input
            type="date"
            value={formData.termin}
            onChange={(e) => setFormData({ ...formData, termin: e.target.value })}
            className="form-input-studio"
          />
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase font-medium text-muted-foreground mb-2">
          Ihre Nachricht
        </label>
        <textarea
          value={formData.nachricht}
          onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
          className="form-input-studio resize-none"
          rows={4}
          placeholder="Wie können wir Ihnen helfen?"
          maxLength={1000}
        />
      </div>
      <button type="submit" className="btn-primary">
        Anfrage absenden
      </button>
    </form>
  );
};
