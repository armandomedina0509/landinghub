"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

// Nota: evitamos combinar rotación 3D (rotateX/rotateY) con
// overflow-hidden + bordes redondeados en el mismo elemento: esa
// combinación es un bug conocido de renderizado en varios navegadores
// y puede hacer que el contenido desaparezca. En su lugar usamos un
// brillo que sigue el cursor (glare) + elevación 2D, que es igual de
// premium pero seguro en cualquier navegador/dispositivo.
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("relative", className)}
    >
      {children}
      <motion.div
        aria-hidden
        style={{
          background: `radial-gradient(320px circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 60%)`,
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}
