import { Header } from "@/components/header"
import { ClipboardList } from "lucide-react"

export default function AdministracionDeProyectosPage() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url(/ejecucion-obra-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />

        <main className="mt-20">
          {/* Hero Section */}
          <section className="relative py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl max-w-4xl mx-auto">
                <div className="flex items-center gap-8 mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                    <ClipboardList className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light text-foreground uppercase tracking-wide">
                    Administración de Proyectos
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl mb-16 mx-auto">
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Administramos proyectos desde la etapa que el propietario lo requiera o desde cero con la
                  conceptualización de la obra y construcción de la misma.
                </p>
              </div>

              {/* Service Features */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Gestión Integral</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Coordinamos todos los aspectos del proyecto, desde la planificación inicial hasta la entrega final.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Flexibilidad</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Nos adaptamos a las necesidades específicas de cada cliente, incorporándonos en cualquier etapa del
                    proyecto.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Control de Costos</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Supervisamos el presupuesto y optimizamos recursos para garantizar la rentabilidad del proyecto.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Seguimiento Continuo</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Monitoreamos el avance de obra y mantenemos comunicación constante con todas las partes
                    involucradas.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
