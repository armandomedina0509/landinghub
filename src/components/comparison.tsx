import { Check, Minus, Clock } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type Cell = string | boolean;

const rows: { label: string; freelance: Cell; agency: Cell; landinghub: Cell }[] = [
  { label: "Costo inicial", freelance: "$8,000 – $25,000", agency: "$20,000 – $80,000", landinghub: "$499" },
  { label: "Tiempo de entrega", freelance: "3–6 semanas", agency: "6–12 semanas", landinghub: "7 Dias" },
  { label: "Soporte continuo", freelance: false, agency: "Con costo extra", landinghub: true },
  { label: "Hosting incluido", freelance: false, agency: false, landinghub: true },
  { label: "Dominio incluido", freelance: false, agency: false, landinghub: true },
  { label: "Actualizaciones", freelance: "Con costo extra", agency: "Con costo extra", landinghub: true },
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-ink-muted)]/10 text-[var(--color-ink-muted)]">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-sm text-[var(--color-ink-muted)]">{value}</span>;
}

export function Comparison() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Comparativa"
          title="La forma más simple de tener presencia digital"
          description="Así se compara LandingHub frente a contratar un freelancer o una agencia tradicional."
        />

        <Reveal delay={0.1} className="mt-14 overflow-x-auto">
          <div className="min-w-[640px] rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="grid grid-cols-4 gap-2 border-b border-[var(--color-border)] p-6">
              <span className="self-end text-sm font-medium text-[var(--color-ink-muted)]">Comparar</span>
              <span className="text-center text-sm font-semibold text-[var(--color-ink-muted)]">
                Desarrollador freelance
              </span>
              <span className="text-center text-sm font-semibold text-[var(--color-ink-muted)]">Agencia</span>
              <div className="flex flex-col items-center gap-1 rounded-2xl bg-gradient-to-b from-[var(--color-primary)]/10 to-transparent py-2">
                <span className="font-display text-sm font-semibold text-[var(--color-primary)]">
                  LandingHub
                </span>
                <Clock className="h-3.5 w-3.5 text-[var(--color-primary)]" />
              </div>
            </div>

            {rows.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-4 items-center gap-2 px-6 py-4 text-center",
                  i !== rows.length - 1 && "border-b border-[var(--color-border)]"
                )}
              >
                <span className="text-left text-sm font-medium text-[var(--color-ink)]">{row.label}</span>
                <div className="flex justify-center">
                  <CellValue value={row.freelance} />
                </div>
                <div className="flex justify-center">
                  <CellValue value={row.agency} />
                </div>
                <div className="flex justify-center rounded-xl bg-[var(--color-primary)]/[0.04] py-1">
                  <CellValue value={row.landinghub} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
