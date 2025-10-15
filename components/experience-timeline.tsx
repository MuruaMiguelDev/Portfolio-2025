import { experiences } from "@/lib/data/experience"

export default function ExperienceTimeline() {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experiencia Laboral</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 sm:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-8 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-accent border-4 border-background"></div>

                <div className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">{exp.position}</h3>
                    {exp.current && (
                      <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                        Actualidad
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-1">
                    {exp.company} · {exp.location}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-secondary-foreground">
                        <svg
                          className="w-5 h-5 text-(--chart-2) flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
