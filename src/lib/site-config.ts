// -----------------------------------------------------------------------------
// CONFIGURACIÓN CENTRAL DEL SITIO
// Cambia aquí el nombre de marca, contacto y demás datos globales.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: "LandingHub",
  tagline: "Tu página web, sin complicaciones.",
  description:
    "LandingHub diseña, publica y da mantenimiento a tu página web profesional por una suscripción mensual. Sin desarrolladores, sin esperas, sin sorpresas.",
  url: "https://landinghub.mx",
  whatsapp: "5215500000000",
  email: "hola@landinghub.mx",
  locale: "es_MX",
};

// -----------------------------------------------------------------------------
// SECCIONES OPCIONALES
// Pon "false" para ocultar una sección (por ejemplo, mientras no tengas
// testimonios reales todavía) y "true" cuando quieras que vuelva a mostrarse.
// No necesitas tocar ningún otro archivo.
// -----------------------------------------------------------------------------
export const featureFlags = {
  showTestimonials: false,
};

export type SiteConfig = typeof siteConfig;
