export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: "Social Ads",
    skills: [
      "Meta Ads",
      "Estrategias de embudo",
      "Optimización ROAS",
      "Copywriting persuasivo",
      "Optimización de redes sociales",
      "Edición de gráficas y videos",
    ],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript","React JS", "Astro", "Tailwind CSS", "Git", "GitHub"],
  },
]
