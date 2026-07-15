import { Check } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const items = [
  "Hosting",
  "Dominio",
  "SSL",
  "Diseño responsive",
  "Botón de WhatsApp",
  "Optimización SEO",
  "Google Analytics",
  "Meta Pixel",
  "Formularios de contacto",
  "Google Maps integrado",
  "Carga rápida",
  "Optimización de imágenes",
  "Soporte continuo",
  "Actualizaciones",
];

export function Includes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Todo incluido"
            title="Sin costos ocultos, sin letras chiquitas"
            description="Cada suscripción incluye absolutamente todo lo necesario para que tu página funcione desde el primer día. No hay complementos que pagar por separado."
            className="mx-0"
          />

          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-[var(--color-ink)]">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
