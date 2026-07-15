"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "¿Tengo permanencia?",
    a: "No. Tu suscripción es mensual y puedes cancelar cuando quieras, sin contratos forzosos ni penalizaciones.",
  },
  {
    q: "¿Qué pasa si cancelo?",
    a: "Tu página deja de estar activa al finalizar el periodo pagado. Te ayudamos a exportar tu contenido si lo necesitas.",
  },
  {
    q: "¿La página es mía?",
    a: "El contenido y la información de tu negocio siempre son tuyos. La plataforma y el desarrollo son parte del servicio por suscripción.",
  },
  {
    q: "¿Puedo cambiar contenido?",
    a: "Sí. Puedes solicitar cambios de texto, imágenes y datos de contacto según las actualizaciones incluidas en tu plan.",
  },
  {
    q: "¿Puedo usar mi dominio?",
    a: "Sí. Puedes usar el dominio que incluye tu plan o conectar uno que ya tengas, sin costo adicional por la conexión.",
  },
  {
    q: "¿Cuánto tardan?",
    a: "El onboarding estándar toma entre 48 y 72 horas desde que recibimos tu información completa.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Sí, puedes subir o bajar de plan en cualquier momento y el ajuste se refleja en tu siguiente pago.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Todo lo que necesitas saber" />

        <Reveal delay={0.1} className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold text-[var(--color-ink)] sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 flex-none text-[var(--color-ink-muted)] transition-transform ${
                      isOpen ? "rotate-180 text-[var(--color-primary)]" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
