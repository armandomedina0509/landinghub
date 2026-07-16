"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  Dumbbell,
  UtensilsCrossed,
  HeartPulse,
  Coffee,
  Circle,
  MessageCircle,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const previews = [
  {
    label: "Titan Fitness",
    icon: Dumbbell,
    kicker: "Gimnasio",
    heading: "Entrena sin límites",
    sub: "Membresías desde $499/mes",
  },
  {
    label: "La Parrilla",
    icon: UtensilsCrossed,
    kicker: "Restaurante",
    heading: "Sabor que se reserva",
    sub: "Reserva tu mesa en 1 clic",
  },
  {
    label: "Vida Sana",
    icon: HeartPulse,
    kicker: "Clínica",
    heading: "Tu salud, sin filas",
    sub: "Agenda tu cita hoy mismo",
  },
  {
    label: "Café Aroma",
    icon: Coffee,
    kicker: "Cafetería",
    heading: "Cada taza, una pausa",
    sub: "Ordena y pasa por tu café",
  },
];

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % previews.length), 3200);
    return () => clearInterval(id);
  }, []);

  const current = previews[active];
  const Icon = current.icon;

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <div className="grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(29,78,216,0.22),transparent)] blur-2xl dark:bg-[radial-gradient(closest-side,rgba(29,78,216,0.35),transparent)]" />
      <div className="pointer-events-none absolute right-[-10%] top-[20%] -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(255,107,74,0.22),transparent)] blur-2xl" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-ink-muted)]"
          >
            <Circle className="h-2 w-2 fill-[var(--color-accent)] text-[var(--color-accent)]" />
            Nuevo: onboarding en 48 horas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
          >
            Tu página web lista desde{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              $499 MXN al mes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-lg text-balance text-lg text-[var(--color-ink-muted)]"
          >
            Olvídate de contratar desarrolladores, pagar miles de pesos o esperar meses. Nosotros diseñamos, publicamos y damos mantenimiento a tu página mientras tú te enfocas en hacer crecer tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(29,78,216,0.7)] transition-all hover:scale-[1.02] hover:bg-[var(--color-primary-600)]"
            >
              🚀 Crear mi Página
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-primary)]"
            >
              <PlayCircle className="h-4 w-4" />
              Ver Ejemplos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex items-center gap-4 text-sm text-[var(--color-ink-muted)]"
          >
            <div className="flex -space-x-2">
              {["AG", "MR", "CL", "PT"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-bg)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-[10px] font-semibold text-white"
                >
                  {initials}
                </span>
              ))}
            </div>
            <span>+80 negocios ya tienen su página con {"LandingHub"}</span>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* floating status chips */}
          <motion.div
            className="absolute -left-6 top-6 z-20 hidden items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 text-xs font-medium text-[var(--color-ink)] shadow-lg backdrop-blur-md sm:flex"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            SSL activo
          </motion.div>
          <motion.div
            className="absolute -right-4 top-24 z-20 hidden items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 text-xs font-medium text-[var(--color-ink)] shadow-lg backdrop-blur-md sm:flex"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}
          >
            <MessageCircle className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            Nuevo mensaje de WhatsApp
          </motion.div>
          <motion.div
            className="absolute -bottom-6 left-8 z-20 hidden items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-2 text-xs font-medium text-[var(--color-ink)] shadow-lg backdrop-blur-md sm:flex"
            style={{ animation: "float 8s ease-in-out infinite 0.5s" }}
          >
            <Gauge className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            Lighthouse 98/100
          </motion.div>

          {/* browser chrome */}
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.35)]">
            <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface-muted)] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 rounded-full bg-[var(--color-bg)] px-3 py-1 font-mono text-[11px] text-[var(--color-ink-muted)]">
                {current.label.toLowerCase().replace(/\s/g, "")}.mx
              </div>
            </div>

            <div className="relative h-72 sm:h-80">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex flex-col justify-between bg-gradient-to-br from-[var(--color-secondary)] to-[#111c33] p-6 text-white"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-4 w-4" />
                      </span>
                      {current.label}
                    </span>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white/70">
                      {current.kicker}
                    </span>
                  </div>

                  <div>
                    <p className="font-display text-2xl font-semibold leading-tight sm:text-3xl">
                      {current.heading}
                    </p>
                    <p className="mt-2 text-sm text-white/60">{current.sub}</p>
                    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-4 py-2 text-xs font-semibold">
                      Conocer más
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    {previews.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i === active ? "bg-[var(--color-accent)]" : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--color-ink-muted)]">
            Una sola suscripción. Páginas para cualquier giro de negocio.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
