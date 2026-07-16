import { Check, Star } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Landing profesional para empezar con el pie derecho.",
    features: [
      "Landing profesional",
      "Hosting",
      "Dominio",
      "SSL",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "WhatsApp",
      "Soporte",
    ],
    cta: "Comenzar",
    highlight: false,
  },
  {
    name: "Business",
    price: "799",
    description: "La opción favorita para negocios que buscan crecer.",
    features: [
      "Todo lo de Starter",
      "SEO",
      "Google Analytics",
      "Meta Pixel",
      "Google Maps",
      "Hasta 8 secciones",
      "1 actualización mensual",
    ],
    cta: "Elegir Plan",
    highlight: true,
  },
  {
    name: "Custom",
    price: "",
    description: "Tu negocio, tus reglas. Nosotros nos adaptamos a ti.",
    features: [
      "Construye la página perfecta para tu negocio. Agrega únicamente las funcionalidades que necesitas y hazla crecer conforme crece tu empresa.",
    ],
    cta: "Porque ningún negocio es igual a otro.",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="planes" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Planes"
          title="Un plan para cada etapa de tu negocio"
          description="Cambia de plan cuando quieras. Sin contratos forzosos, sin sorpresas."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1.5",
                  plan.highlight
                    ? "border-[var(--color-primary)] bg-gradient-to-b from-[var(--color-primary)]/[0.06] to-transparent shadow-[0_30px_70px_-30px_rgba(29,78,216,0.45)] hover:shadow-[0_40px_90px_-30px_rgba(29,78,216,0.55)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)]/40 hover:shadow-[0_24px_60px_-30px_rgba(29,78,216,0.3)]"
                )}
              >
                {plan.highlight ? (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)] opacity-20 blur-xl [animation:pulse_4s_ease-in-out_infinite]"
                    />
                    <span
                      className="absolute -top-3 left-8 flex items-center gap-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-3 py-1 text-xs font-semibold text-white"
                      style={{ animation: "float 5s ease-in-out infinite" }}
                    >
                      <Star className="h-3 w-3 fill-white" />
                      Más Popular
                    </span>
                  </>
                ) : null}

                <h3 className="font-display text-lg font-semibold text-[var(--color-ink)]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-[var(--color-ink)]">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-[var(--color-ink-muted)]">MXN / mes</span>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                      <Check className="mt-0.5 h-4 w-4 flex-none text-[var(--color-primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all",
                    plan.highlight
                      ? "bg-[var(--color-primary)] text-white shadow-[0_12px_32px_-10px_rgba(29,78,216,0.7)] hover:bg-[var(--color-primary-600)]"
                      : "border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-primary)]"
                  )}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
