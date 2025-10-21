export interface Experience {
  company: string
  location: string
  position: string
  period: string
  current: boolean
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    company: "Nova Build Service & Supply",
    location: "Cape Coral, EE.UU.",
    position: "Social Media Ads",
    period: "Dic 2024 — Actualidad",
    current: true,
    responsibilities: [
      "Gestión y optimización de campañas en Meta Ads (Facebook e Instagram)",
      "Administración del portafolio comercial (Meta Business Suite)",
      "Gestión de redes sociales y diseño de contenido",
      "Crecimiento de comunidad digital (+10.000 seguidores)",
      "Sitios en Shopify (Gestión de productos, diseño y optimización)",
      "Reportes y análisis de métricas clave",
    ],
  },
  {
    company: "Wonderful 3D",
    location: "Córdoba, Argentina",
    position: "Asistente de Marketing Digital y Contenidos",
    period: "May 2023 — Oct 2024",
    current: false,
    responsibilities: [
      "Gestión de redes y diseño de contenido",
      "Gestión y optimización de campañas en Meta Ads.",
      "Administración del portafolio comercial (Meta Business Suite)",
      "Gestión de redes sociales y diseño de contenido",
      "Sitios en WordPress (Gestión de diseño y optimización)",
      "Diseño en Canva, CapCut, Illustrator y Photoshop (Herramientas de adobe básicas)",
      "Automatizaciones con Zapier, ManyChat, Envialo Simple",
    ],
  },
]
