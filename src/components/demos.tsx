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
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { TiltCard } from "./tilt-card";

const demos = [
  {
    name: "Titan Fitness Center",
    category: "Gym",
    icon: Dumbbell,
    headline: "Entrena sin límites",
    // TODO: reemplaza con la URL pública real (la que diste es el panel de Netlify, no el sitio).
    url: "https://titan-fitness-hour.netlify.app/",
  },
  {
    name: "La Parrilla Urbana",
    category: "Restaurante",
    icon: UtensilsCrossed,
    headline: "Sabor que se reserva",
    url: "https://parrillaurbana.netlify.app/",
  },
  {
    name: "Centro Médico Vida Sana",
    category: "Clínica",
    icon: HeartPulse,
    headline: "Tu salud, sin filas",
    url: "https://centro-medico-especialidades.netlify.app/",
  },
  {
    name: "Huellitas Vet",
    category: "Veterinaria",
    icon: PawPrint,
    headline: "Cuidamos a tu mejor amigo",
    url: "",
  },
  {
    name: "Estructura & Obra",
    category: "Ingeniería",
    icon: HardHat,
    headline: "Proyectos que sí se entregan",
    url: "",
  },
  {
    name: "Hotel Meridiano",
    category: "Hotel",
    icon: BedDouble,
    headline: "Descansa con vista",
    url: "",
  },
  {
    name: "Sonrisa Dental",
    category: "Dentista",
    icon: Sparkles,
    headline: "Sonríe con confianza",
    url: "",
  },
  {
    name: "Instituto Progreso",
    category: "Escuela",
    icon: GraduationCap,
    headline: "Educación que transforma",
    url: "",
  },
  {
    name: "Grupo Constructor MX",
    category: "Constructora",
    icon: Building2,
    headline: "Construimos tu visión",
    url: "",
  },
  {
    name: "Casa Nueva Inmobiliaria",
    category: "Inmobiliaria",
    icon: Home,
    headline: "Tu próximo hogar te espera",
    url: "",
  },
  {
    name: "Barbería del Barrio",
    category: "Barbería",
    icon: Scissors,
    headline: "Estilo con tradición",
    url: "",
  },
  {
    name: "Café Aroma",
    category: "Cafetería",
    icon: Coffee,
    headline: "Cada taza, una pausa",
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
                {/* Mini website preview */}
                <div
                  className="relative overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#132038] to-[var(--color-primary)]"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="grid-fade absolute inset-0 opacity-25" />

                  {/* fake browser chrome */}
                  <div className="relative flex items-center gap-1.5 border-b border-white/10 bg-black/10 px-3 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    <span className="ml-2 truncate rounded-full bg-white/10 px-2 py-0.5 font-mono text-[9px] text-white/50">
                      {demo.name.toLowerCase().replace(/[^a-z]+/g, "")}.mx
                    </span>
                  </div>

                  {/* fake hero content */}
                  <div className="relative flex h-32 flex-col justify-between p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <demo.icon className="h-4 w-4" />
                      </span>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-white/70">
                        {demo.category}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-sm font-semibold leading-tight text-white sm:text-base">
                        {demo.headline}
                      </p>
                      <div className="mt-2 flex gap-1.5">
                        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                        <span className="h-1 w-5 rounded-full bg-white/20" />
                      </div>
                    </div>
                  </div>
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
