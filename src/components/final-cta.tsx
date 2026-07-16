import { ArrowRight, Coffee } from "lucide-react";
import { Reveal } from "./reveal";

export function FinalCTA() {
  return (
    <section className="px-6 py-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-[var(--color-secondary)] px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,107,74,0.25),transparent)]" />
          <div className="grid-fade pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative">
            <h2 className="font-display text-balance text-3xl font-semibold text-white sm:text-4xl">
              Empieza hoy mismo.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-balance text-lg text-white/70">
              Tu negocio merece una página profesional.
            </p>

            <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              <Coffee className="h-4 w-4 text-[var(--color-accent)]" />
              Desde menos de lo que cuesta un café al día
            </div>

            <div className="mt-9">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-15px_rgba(255,107,74,0.6)] transition-transform hover:scale-[1.03]"
              >
                Quiero mi Página
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
