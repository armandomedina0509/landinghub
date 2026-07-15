import { Star } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const testimonials = [
  {
    name: "Andrea Gómez",
    business: "Titan Fitness Center",
    initials: "AG",
    quote:
      "En menos de una semana ya teníamos nuestra página publicada. Los clientes ahora nos encuentran directo en Google y agendan por WhatsApp.",
  },
  {
    name: "Marco Reyes",
    business: "La Parrilla Urbana",
    initials: "MR",
    quote:
      "Dejamos de pagar a un freelancer cada vez que queríamos un cambio. Ahora solo escribimos y ellos actualizan la página.",
  },
  {
    name: "Carla López",
    business: "Centro Médico Vida Sana",
    initials: "CL",
    quote:
      "La inversión inicial de una agencia no era opción para nosotros. Con LandingHub tuvimos algo profesional desde el primer mes.",
  },
  {
    name: "Pablo Torres",
    business: "Café Aroma",
    initials: "PT",
    quote:
      "Lo que más valoro es no preocuparme por el hosting, el dominio ni la seguridad. Todo simplemente funciona.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonios"
          title="Negocios reales, resultados reales"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
                <div className="flex gap-0.5 text-[var(--color-accent)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-balance text-sm leading-relaxed text-[var(--color-ink)]">
                  “{t.quote}”
                </p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-ink)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-ink-muted)]">{t.business}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
