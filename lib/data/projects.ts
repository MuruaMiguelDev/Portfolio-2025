export interface Project {
  title: string
  description: string
  stack: string[]
  url?: string
  image: string
}

export const projects: Project[] = [
  {
    title: "Maglev Servicios Eléctricos",
    description:
      "Landing page profesional para empresa de servicios eléctricos, con diseño moderno y optimizado para conversión.",
    stack: ["Astro", "Tailwind CSS", "JavaScript"],
    url: "https://maglev-web.vercel.app/",
    image: "/images/projects/Maglev-mockup.png",
  },
  {
    title: "E-commerce Suplementos Deportivos",
    description:
      "E-commerce de suplementos deportivos. Diseño atractivo y funcional para mejorar la experiencia del usuario y aumentar las ventas.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "PL/pgSQL", "EN DESARROLLO",],
    url: "https://supplementos-shop-868a.vercel.app/",
    image: "/images/projects/Supple.webp",
  },
]
