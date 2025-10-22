"use client"

import { useState, type FormEvent } from "react"
import { personalInfo } from "@/lib/data/personal"

const url =
  "https://script.google.com/macros/s/AKfycbw6pLiResn8j9mRIJoq9aAbikhqEU8QNGnaiHVvcb63MlkZ5PERPlkkOR0FM4jJPrOG/exec"

type Msg = { text: string; type: "success" | "error" }

// (Opcional) tipado mínimo para evitar errores de TS al usar dataLayer
declare global {
  interface Window {
    dataLayer: Array<Record<string, any>>
  }
}

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState<Msg | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormMessage(null)
    setLoading(true)

    const formEl = e.currentTarget
    const formData = new FormData(formEl)

    // Útil para Apps Script / auditoría
    formData.append("_submitted_at", new Date().toISOString())

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      })

      // Determinar éxito real (si el endpoint devuelve JSON con { success: true })
      let ok = res.ok
      try {
        const isJSON = res.headers.get("content-type")?.includes("application/json")
        if (isJSON) {
          const data = await res.json()
          if (typeof data?.success === "boolean") ok = data.success
        }
      } catch {
        /* sin JSON legible, seguimos con res.ok */
      }

      if (!ok) throw new Error(`HTTP ${res.status}`)

      // 👉 EVENTO PERSONALIZADO A GA4 (vía GTM)
      // Este evento reemplaza el activador nativo de "Envío de formulario" para evitar duplicados.
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "generate_lead",
          form_id: "contact-form",
          form_name: "Contacto",
          method: "apps_script",
          status: "success",
        })
      }

      setFormMessage({
        text: "¡Mensaje enviado con éxito! Te responderé pronto.",
        type: "success",
      })
      formEl.reset()

      // Ocultamos el mensaje de éxito a los 5 s
      setTimeout(() => setFormMessage(null), 5000)
    } catch (err: any) {
      console.error("[contact] error:", err)
      setFormMessage({
        text:
          "No pudimos enviar tu mensaje en este momento. Intenta nuevamente o escríbeme por WhatsApp.",
        type: "error",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Contacto</h2>

        <p className="text-center text-muted-foreground mb-12 text-lg">
          ¿Tienes un proyecto o idea? Hablemos.
        </p>

        <form id="contact-form" onSubmit={handleSubmit} className="bg-card rounded-lg p-8 mb-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                placeholder="Tu nombre"
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                placeholder="tu@email.com"
                disabled={loading}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-card-foreground"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                disabled={loading}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg cursor-pointer hover:text-amber-50 hover:bg-accent-foreground transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2 justify-center">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Enviando…
                </span>
              ) : (
                "Enviar mensaje"
              )}
            </button>
          </div>
        </form>

        {formMessage && (
          <div
            role="status"
            aria-live="polite"
            className={`p-4 rounded-lg mb-8 ${
              formMessage.type === "success"
                ? "bg-accent/20 text-muted-foreground border border-accent/30"
                : "bg-destructive/20 text-destructive border border-destructive/30"
            }`}
          >
            {formMessage.text}
          </div>
        )}

        <div className="text-center">
          <p className="text-muted-foreground mb-4">O contáctame directamente por WhatsApp</p>
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#20BA5A] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}