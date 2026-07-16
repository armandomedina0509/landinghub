import { ClipboardList, PenTool, Eye, Rocket, MousePointerClick } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const steps = [
  {
    icon: MousePointerClick,
    title: "Selecciona tu plan",
    description: "Elige el plan que se ajusta al tamaño y giro de tu negocio.",
  },
  {
    icon: ClipboardList,
    title: "Llena un formulario",
    description: "Cuéntanos sobre tu negocio: textos, fotos y datos de contacto.",
  },
  {
    icon: PenTool,
    title: "Nosotros diseñamos tu página",
    description: "Nuestro equipo construye tu sitio con tu identidad de marca.",
  },
  {
    icon: Eye,
    title: "La revisas",
    description: "Te compartimos una vista previa para tus ajustes finales.",
  },
  {
    icon: Rocket,
    title: "Publicamos",
    description: "Tu página queda en línea, lista para recibir clientes.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Cómo funciona"
          title="De la idea a publicada en 5 pasos"
          description="Todo el proceso está diseñado para que tú no tengas que preocuparte por nada técnico."
        />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--color-border)] sm:left-1/2 sm:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(29,78,216,0.35)]">
                  <span className="font-mono text-xs text-[var(--color-ink-muted)]">
                    Paso {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-[var(--color-primary)] transition-colors group-hover:from-[var(--color-primary)] group-hover:to-[var(--color-accent)] group-hover:text-white">
                    <step.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
