"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { siteConfig } from "@/lib/site-config";

const businessTypes = [
  "Gimnasio",
  "Restaurante",
  "Clínica / Salud",
  "Veterinaria",
  "Ingeniería / Construcción",
  "Hotel",
  "Dentista",
  "Escuela",
  "Inmobiliaria",
  "Barbería / Salón",
  "Cafetería",
  "Otro",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const nombre = form.get("nombre")?.toString() ?? "";
    const empresa = form.get("empresa")?.toString() ?? "";
    const whatsapp = form.get("whatsapp")?.toString() ?? "";
    const correo = form.get("correo")?.toString() ?? "";
    const tipo = form.get("tipo")?.toString() ?? "";
    const mensaje = form.get("mensaje")?.toString() ?? "";

    const text = [
      `Hola, soy ${nombre} de ${empresa}.`,
      `Tipo de negocio: ${tipo}.`,
      `WhatsApp: ${whatsapp} · Correo: ${correo}.`,
      mensaje ? `Mensaje: ${mensaje}` : "",
      "Quiero solicitar mi página con LandingHub.",
    ]
      .filter(Boolean)
      .join(" ");

    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus("sent");
      window.open(url, "_blank", "noopener,noreferrer");
    }, 600);
  }

  return (
    <section id="contacto" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Cuéntanos sobre tu negocio"
          description="Completa el formulario y te contactaremos por WhatsApp para arrancar tu página."
        />

        <Reveal delay={0.1} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:grid-cols-2 sm:p-8"
          >
            <Field label="Nombre" name="nombre" placeholder="Tu nombre completo" required />
            <Field label="Empresa" name="empresa" placeholder="Nombre de tu negocio" required />
            <Field label="WhatsApp" name="whatsapp" placeholder="55 1234 5678" type="tel" required />
            <Field label="Correo" name="correo" placeholder="tu@correo.com" type="email" required />

            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-[var(--color-ink)]">Tipo de negocio</span>
              <select
                name="tipo"
                required
                defaultValue=""
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary)]"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
              <span className="font-medium text-[var(--color-ink)]">Mensaje</span>
              <textarea
                name="mensaje"
                rows={4}
                placeholder="Cuéntanos un poco más sobre lo que necesitas"
                className="resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary)]"
              />
            </label>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-600)] disabled:opacity-70 sm:col-span-2"
            >
              {status === "idle" && (
                <>
                  Comenzar <Send className="h-4 w-4" />
                </>
              )}
              {status === "sending" && (
                <>
                  Enviando <Loader2 className="h-4 w-4 animate-spin" />
                </>
              )}
              {status === "sent" && (
                <>
                  ¡Listo! Te escribimos por WhatsApp <CheckCircle2 className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-[var(--color-ink)]">{label}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition-colors focus:border-[var(--color-primary)]"
      />
    </label>
  );
}
