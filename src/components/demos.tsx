"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  UtensilsCrossed,
  HeartPulse,
  PawPrint,
  HardHat,
  BedDouble,
  Sparkles,
  GraduationCap,
  Building2,
  Home,
  Scissors,
  Coffee,
  ArrowUpRight,
  ImageOff,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";

// Para cada demo: coloca tu imagen en /public/demos/ y pon aquí el nombre
// del archivo en "image" (ej. "/demos/titan-fitness.jpg"). Si lo dejas en
// "", se muestra automáticamente un fondo con ícono en su lugar.
const demos = [
  {
    name: "Titan Fitness Center",
    category: "Gym",
    icon: Dumbbell,
    image: "C:\Users\OFICINA\Documents\PROYECTOS\landinghub\public\demos\titan-fitness.png",
    // TODO: reemplaza con la URL pública real (la que diste es el panel de Netlify, no el sitio).
    url: "https://titan-fitness-hour.netlify.app/",
  },
  {
    name: "La Parrilla Urbana",
    category: "Restaurante",
    icon: UtensilsCrossed,
    image: "C:\Users\OFICINA\Documents\PROYECTOS\landinghub\public\demos\parrilla-urbana.png",
    url: "https://parrillaurbana.netlify.app/",
  },
  {
    name: "Centro Médico Vida Sana",
    category: "Clínica",
    icon: HeartPulse,
    image: "",
    url: "https://centro-medico-especialidades.netlify.app/",
  },
  {
    name: "Café Aroma",
    category: "Cafetería",
    icon: Coffee,
    image: "C:\Users\OFICINA\Documents\PROYECTOS\landinghub\public\demos\cafe-aroma.png",
    url: "https://cafe-aroma19-06.netlify.app/",
  },
];

const categories = ["Todos", ...Array.from(new Set(demos.map((d) => d.category)))];

export function Demos() {
  const [filter, setFilter] = useState("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? demos : demos.filter((d) => d.category === filter)),
    [filter]
  );

  return (
    <section id="demos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Portafolio"
          title="Un mismo producto, cualquier giro de negocio"
          description="Explora ejemplos de páginas construidas sobre la misma plataforma, adaptadas a cada tipo de negocio."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2" delay={0.1}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-300 ${
                filter === cat
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-ink-muted)] hover:border-[var(--color-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((demo, i) => (
            <motion.div
              key={demo.name}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <TiltCard className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_24px_60px_-24px_rgba(37,99,235,0.4)]">
                {/* Imagen de la demo */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#132038] to-[var(--color-primary)]">
                  {demo.image ? (
                    <img
                      src={demo.image}
                      alt={`Vista previa de ${demo.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/70">
                      <div className="grid-fade absolute inset-0 opacity-25" />
                      <demo.icon className="relative h-9 w-9 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/40">
                        <ImageOff className="h-3 w-3" />
                        Sin imagen aún
                      </span>
                    </div>
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                    {demo.category}
                  </span>
                </div>

                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="font-display text-sm font-semibold text-[var(--color-ink)]">
                      {demo.name}
                    </h3>
                    <p className="text-xs text-[var(--color-ink-muted)]">{demo.category}</p>
                  </div>
                  {demo.url ? (
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${demo.name}`}
                      className="flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] transition-all duration-300 group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                    >
                      Ver Demo
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span
                      aria-label={`Demo de ${demo.name} próximamente`}
                      className="flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink-muted)] opacity-60"
                    >
                      Próximamente
                    </span>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
