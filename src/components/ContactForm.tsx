import { useState, type FormEvent } from "react";
import type { Locale } from "@i18n";
import { getFormStrings, pathFor } from "@i18n";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<
  Record<"client_type" | "name" | "email" | "phone" | "service" | "message" | "rgpd", string>
>;

const CONTACT_ENDPOINT = import.meta.env.DEV ? "/__contact-proxy" : "/contact-zapier.php";

function normalizePhoneRaw(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("33") && digits.length >= 11) return `+${digits}`;
  if (digits.startsWith("0") && digits.length === 10) return `+33${digits.slice(1)}`;
  return digits.startsWith("+") ? phone.replace(/\s/g, "") : `+${digits}`;
}

interface ContactFormProps {
  locale: Locale;
}

export default function ContactForm({ locale }: ContactFormProps) {
  const t = getFormStrings(locale);
  const privacyHref = pathFor("legalNotice", locale);

  const buildPayload = (data: FormData) => {
    const now = new Date().toISOString();
    const phone = (data.get("phone") || "").toString().trim();
    const clientType = (data.get("client_type") || "").toString();
    const clientTypeLabel =
      t.clientTypeLabels[clientType as keyof typeof t.clientTypeLabels] ?? clientType;
    const service = (data.get("service") || "").toString();
    const serviceLabel = t.serviceLabels[service as keyof typeof t.serviceLabels] ?? service;

    return {
      client_type: clientType,
      client_type_label: clientTypeLabel,
      name: (data.get("name") || "").toString().trim(),
      email: (data.get("email") || "").toString().trim(),
      phone: phone || "—",
      phone_raw: normalizePhoneRaw(phone),
      postal: (data.get("postal") || "").toString().trim() || "—",
      service,
      service_label: serviceLabel,
      message: (data.get("message") || "").toString().trim(),
      source: "hfe-energie.fr",
      page: typeof window !== "undefined" ? window.location.pathname : pathFor("contact", locale),
      privacy_policy_accepted: "true",
      privacy_policy_accepted_at: now,
      submitted_at: now,
      website: (data.get("website") || "").toString(),
    };
  };

  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (formData: FormData): FieldErrors => {
    const e: FieldErrors = {};
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const clientType = (formData.get("client_type") || "").toString();
    const service = (formData.get("service") || "").toString();
    const message = (formData.get("message") || "").toString().trim();
    const rgpd = formData.get("rgpd");

    if (!clientType || !(clientType in t.clientTypeLabels)) {
      e.client_type = t.errors.client_type;
    }
    if (name.length < 2) e.name = t.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = t.errors.email;
    if (phone && !/^[0-9\s+().-]{8,}$/.test(phone)) e.phone = t.errors.phone;
    if (!service) e.service = t.errors.service;
    if (message.length < 10) e.message = t.errors.message;
    if (!rgpd) e.rgpd = t.errors.rgpd;
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
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(data)),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.status}`);
      }

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
        <h3 className="font-display font-bold text-lg">{t.successTitle}</h3>
        <p className="mt-2 text-sm">{t.successText}</p>
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
        {t.help.includes("*") ? (
          <>
            {t.help.split("*")[0]}
            <span className="text-accent-600 font-semibold">{t.requiredMark}</span>
            {t.help.split("*")[1]}
          </>
        ) : (
          t.help
        )}
      </p>

      <fieldset>
        <legend className="block text-sm font-semibold text-neutral-800 mb-2">
          {t.youAre} <span className="text-accent-600">{t.requiredMark}</span>
        </legend>
        <div
          className="grid grid-cols-2 gap-2 sm:gap-3"
          role="radiogroup"
          aria-invalid={!!errors.client_type}
          aria-describedby={errors.client_type ? "client-type-error" : undefined}
        >
          {t.clientTypes.map((type) => (
            <label
              key={type.value}
              className="relative flex cursor-pointer items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 shadow-sm transition-colors has-[:checked]:border-accent-600 has-[:checked]:bg-accent-50 has-[:checked]:text-accent-900 has-[:checked]:ring-2 has-[:checked]:ring-accent-200 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-600"
            >
              <input
                type="radio"
                name="client_type"
                value={type.value}
                required
                className="sr-only"
              />
              {type.label}
            </label>
          ))}
        </div>
        {errors.client_type && (
          <p id="client-type-error" className="mt-1 text-sm text-red-600">
            {errors.client_type}
          </p>
        )}
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="name" label={t.name} required error={errors.name} autoComplete="name" t={t} />
        <Field
          id="email"
          label={t.email}
          type="email"
          required
          error={errors.email}
          autoComplete="email"
          inputMode="email"
          t={t}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          id="phone"
          label={t.phone}
          type="tel"
          error={errors.phone}
          autoComplete="tel"
          inputMode="tel"
          placeholder={t.phonePlaceholder}
          t={t}
        />
        <Field
          id="postal"
          label={t.postal}
          autoComplete="postal-code"
          inputMode="numeric"
          placeholder={t.postalPlaceholder}
          t={t}
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          {t.projectType} <span className="text-accent-600">{t.requiredMark}</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
            errors.service ? "border-red-400" : "border-neutral-300"
          }`}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          defaultValue=""
        >
          <option value="" disabled>
            {t.chooseService}
          </option>
          {t.services.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1 text-sm text-red-600">
            {errors.service}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-1.5">
          {t.project} <span className="text-accent-600">{t.requiredMark}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder={t.messagePlaceholder}
          className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
            errors.message ? "border-red-400" : "border-neutral-300"
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{t.honeypotLabel}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="rgpd"
          name="rgpd"
          type="checkbox"
          className="mt-1 w-5 h-5 rounded border-neutral-300 text-accent-600 focus:ring-accent-500"
          aria-invalid={!!errors.rgpd}
        />
        <label htmlFor="rgpd" className="text-sm text-neutral-700">
          {t.privacyBefore}
          <a href={privacyHref} className="text-accent-700 underline ml-1">
            {t.privacyLink}
          </a>
          .
        </label>
      </div>
      {errors.rgpd && <p className="text-sm text-red-600 -mt-2">{errors.rgpd}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-accent w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          {t.error}
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
  t: ReturnType<typeof getFormStrings>;
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
  t,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-neutral-800 mb-1.5">
        {label} {required && <span className="text-accent-600">{t.requiredMark}</span>}
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
        className={`block w-full rounded-xl border bg-white px-4 py-3 text-base shadow-sm transition-colors focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-200 ${
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
