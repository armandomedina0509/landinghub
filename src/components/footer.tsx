import { Sparkles, Globe, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const columns = [
  {
    title: "Producto",
    links: [
      { label: "Planes", href: "#planes" },
      { label: "Cómo funciona", href: "#como-funciona" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Portafolio", href: "#demos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de Privacidad", href: "#" },
      { label: "Términos y Condiciones", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-muted)]/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--color-ink)]">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white">
                <Sparkles className="h-4 w-4" />
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-xs text-sm text-[var(--color-ink-muted)]">
              {siteConfig.tagline} Diseño, hosting, dominio y soporte por una sola suscripción mensual.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Red social"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-ink-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-[var(--color-ink)]">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-ink-muted)] transition-colors hover:text-[var(--color-ink)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-xs text-[var(--color-ink-muted)] sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.</p>
          <p>Hecho para negocios en México 🇲🇽</p>
        </div>
      </div>
    </footer>
  );
}
