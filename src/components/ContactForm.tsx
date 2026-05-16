import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<"name" | "email" | "phone" | "service" | "message" | "rgpd", string>>;

const SERVICES = [
  { value: "pompe-a-chaleur", label: "Pompe à chaleur" },
  { value: "climatisation", label: "Climatisation réversible" },
  { value: "chauffage", label: "Chauffage / chaudière" },
  { value: "chauffe-eau", label: "Chauffe-eau thermodynamique" },
  { value: "plomberie", label: "Plomberie / sanitaire" },
  { value: "depannage", label: "Dépannage urgent" },
  { value: "autre", label: "Autre projet" },
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (formData: FormData): FieldErrors => {
    const e: FieldErrors = {};
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const service = (formData.get("service") || "").toString();
    const message = (formData.get("message") || "").toString().trim();
    const rgpd = formData.get("rgpd");

    if (name.length < 2) e.name = "Merci d'indiquer votre nom (2 caractères min.)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Adresse e-mail invalide";
    if (phone && !/^[0-9\s+().-]{8,}$/.test(phone)) e.phone = "Numéro de téléphone invalide";
    if (!service) e.service = "Choisissez le type de projet";
    if (message.length < 10) e.message = "Décrivez brièvement votre projet (10 caractères min.)";
    if (!rgpd) e.rgpd = "Merci d'accepter la politique de confidentialité";
    return e;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if ((data.get("website") || "").toString()) {
      setStatus("success");
      form.reset();
      return;
    }

    const validation = validate(data);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent-200 bg-accent-50 p-6 text-accent-900"
      >
        <h3 className="font-display font-bold text-lg">Demande bien reçue.</h3>
        <p className="mt-2 text-sm">
          Merci pour votre message, notre équipe vous recontacte sous 24 heures ouvrées avec une première
          estimation et une proposition de rendez-vous.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm"
      aria-describedby="form-help"
    >
      <p id="form-help" className="text-sm text-neutral-600">
        Les champs marqués d'un <span className="text-accent-600 font-semibold">*</span> sont obligatoires.
        Réponse personnalisée sous 24h ouvrées.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="name"
          label="Nom & prénom"
          required
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="email"
          label="E-mail"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
          inputMode="email"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="phone"
          label="Téléphone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
          inputMode="tel"
          placeholder="07 67 34 12 63"
        />
        <Field
          id="postal"
          label="Code postal"
          autoComplete="postal-code"
          inputMode="numeric"
          placeholder="59000"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          Type de projet <span className="text-accent-600">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 ${
            errors.service ? "border-red-400" : "border-neutral-300"
          }`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          defaultValue=""
        >
          <option value="" disabled>Choisissez un service</option>
          {SERVICES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-sm text-red-600">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          Votre projet <span className="text-accent-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Décrivez votre logement, l'équipement actuel, vos besoins..."
          className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 ${
            errors.message ? "border-red-400" : "border-neutral-300"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* honeypot - hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          className="mt-1 w-5 h-5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
          aria-invalid={!!errors.rgpd}
        />
        <label htmlFor="rgpd" className="text-sm text-neutral-700">
          J'accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande.
          <a href="/mentions-legales" className="text-primary-700 underline ml-1">En savoir plus</a>.
        </label>
      </div>
      {errors.rgpd && (
        <p className="text-sm text-red-600 -mt-2">{errors.rgpd}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "url" | "search";
  placeholder?: string;
  error?: string;
}

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  inputMode,
  placeholder,
  error,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-neutral-800 mb-1.5">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-200 ${
          error ? "border-red-400" : "border-neutral-300"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
