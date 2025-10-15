export interface Project {
  title: string
  description: string
  stack: string[]
  url?: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Maglev",
    description:
      "Sitio web profesional para empresa de servicios eléctricos, con diseño moderno y optimizado para conversión.",
    stack: ["Astro", "Tailwind CSS", "JavaScript"],
    url: "https://maglev-web.vercel.app/",
    image: "/images/projects/Maglev-mockup.png",
  },
  {
    title: "Landing Suplementos Deportivos",
    description:
      "Landing page en desarrollo para e-commerce de suplementos. Fase 1 con Astro, escalable con React y backend colaborativo.",
    stack: ["Astro", "Tailwind CSS", "JavaScript", "React (próximamente)","EN DESARROLLO",],
    image: "/images/projects/suplementos-thumb.jpg",
  },
]
