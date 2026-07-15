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

const demos = [
  { name: "Titan Fitness Center", category: "Gym", icon: Dumbbell },
  { name: "La Parrilla Urbana", category: "Restaurante", icon: UtensilsCrossed },
  { name: "Centro Médico Vida Sana", category: "Clínica", icon: HeartPulse },
  { name: "Huellitas Vet", category: "Veterinaria", icon: PawPrint },
  { name: "Estructura & Obra", category: "Ingeniería", icon: HardHat },
  { name: "Hotel Meridiano", category: "Hotel", icon: BedDouble },
  { name: "Sonrisa Dental", category: "Dentista", icon: Sparkles },
  { name: "Instituto Progreso", category: "Escuela", icon: GraduationCap },
  { name: "Grupo Constructor MX", category: "Constructora", icon: Building2 },
  { name: "Casa Nueva Inmobiliaria", category: "Inmobiliaria", icon: Home },
  { name: "Barbería del Barrio", category: "Barbería", icon: Scissors },
  { name: "Café Aroma", category: "Cafetería", icon: Coffee },
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
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(37,99,235,0.35)]"
            >
              <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-secondary)] via-[#132038] to-[var(--color-primary)]">
                <div className="grid-fade absolute inset-0 opacity-30" />
                <demo.icon className="h-12 w-12 text-white/90 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
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
                <button
                  aria-label={`Ver demo de ${demo.name}`}
                  className="flex items-center gap-1 rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] transition-colors group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)]"
                >
                  Ver Demo
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
