import { Header } from "@/components/header"
import { ClipboardList, Users, Hammer, CheckCircle2 } from "lucide-react"

export default function ComoTrabajamosPage() {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Consulta Inicial",
      description:
        "Nos reunimos contigo para entender tu visión, necesidades y presupuesto. Realizamos un análisis detallado del proyecto y te brindamos asesoramiento profesional.",
    },
    {
      icon: Users,
      number: "02",
      title: "Diseño y Planificación",
      description:
        "Nuestro equipo de arquitectos e ingenieros desarrolla el proyecto completo, incluyendo planos, renders 3D y cronograma de obra. Te mantenemos informado en cada etapa.",
    },
    {
      icon: Hammer,
      number: "03",
      title: "Ejecución",
      description:
        "Iniciamos la construcción con un equipo de profesionales especializados. Supervisamos cada detalle, garantizando calidad y cumplimiento de plazos establecidos.",
    },
    {
      icon: CheckCircle2,
      number: "04",
      title: "Entrega y Seguimiento",
      description:
        "Realizamos la entrega final con todos los detalles terminados. Brindamos garantía y seguimiento post-entrega para asegurar tu completa satisfacción.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/como-trabajamos.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">Cómo Trabajamos</h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Un proceso transparente y eficiente para garantizar el éxito de tu proyecto
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative mb-16 last:mb-0">
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute left-[60px] top-[120px] w-0.5 h-[calc(100%+64px)] bg-border" />
                    )}

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-[120px] h-[120px] rounded-full bg-primary flex items-center justify-center">
                          <Icon className="w-12 h-12 text-primary-foreground" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-accent-foreground font-bold">{step.number}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-4">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nuestro Compromiso</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                En cada etapa del proceso, mantenemos una comunicación fluida y transparente. Tu satisfacción es nuestra
                prioridad, y trabajamos incansablemente para superar tus expectativas en cada proyecto que emprendemos
                juntos.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
