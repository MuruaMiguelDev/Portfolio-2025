import { education } from "@/lib/data/education"

export default function EducationList() {
  return (
    <section id="formacion" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Formación Académica</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold text-card-foreground mb-2">{edu.title}</h3>
              <p className="text-muted-foreground">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
