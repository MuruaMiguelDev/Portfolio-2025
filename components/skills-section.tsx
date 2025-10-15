import { skillsData } from "@/lib/data/skills"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Habilidades</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 pl-3 text-(--chart-1)">{category.category}</h3>

              <div className="grid gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-(--chart-2) flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-card-foreground font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
