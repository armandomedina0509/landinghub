import {
  Globe,
  Server,
  Lock,
  Headset,
  TrendingUp,
  MessageCircle,
  RefreshCw,
} from "lucide-react";
import { Reveal } from "./reveal";

const badges = [
  { icon: Globe, label: "Dominio incluido" },
  { icon: Server, label: "Hosting incluido" },
  { icon: Lock, label: "SSL incluido" },
  { icon: Headset, label: "Soporte incluido" },
  { icon: TrendingUp, label: "Optimización SEO" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: RefreshCw, label: "Actualizaciones" },
];

export function Badges() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-muted)]/60 py-8">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink-muted)]"
            >
              <Icon className="h-4 w-4 text-[var(--color-primary)]" />
              {label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
