import Image from "next/image"
import { projects } from "@/lib/data/projects"

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video bg-secondary/50 overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">{project.title}</h3>

                <p className="text-secondary-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium bg-gray-300 text-(--sidebar-primary) rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-(--sidebar-primary) hover:text-(--chart-3) font-medium transition-colors"
                  >
                    Ver demo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
