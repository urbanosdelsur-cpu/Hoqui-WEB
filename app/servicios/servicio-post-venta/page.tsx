import { Header } from "@/components/header"
import { Wrench, Shield, Clock, CheckCircle, HeartHandshake } from "lucide-react"

export default function ServicioPostVentaPage() {
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
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl max-w-4xl mx-auto">
                <div className="flex items-center gap-8 mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-light text-foreground uppercase tracking-wide">
                    Servicio Post Venta
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              {/* Main Description */}
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl mb-20 max-w-4xl mx-auto">
                <p className="text-xl text-foreground/70 leading-relaxed">
                  Posterior a la entrega damos un servicio de mantenimiento gratis por un año, lo que refleja nuestra
                  permanente preocupación por el perfecto funcionamiento de su nueva casa.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Shield className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-4 text-foreground tracking-wide">Garantía Total</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Cobertura completa de todos los trabajos realizados durante un año.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Clock className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-4 text-foreground tracking-wide">Atención Inmediata</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Respuesta rápida ante cualquier inconveniente que pueda surgir.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <CheckCircle className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-4 text-foreground tracking-wide">Mantenimiento Preventivo</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Revisiones periódicas para asegurar el óptimo estado de su vivienda.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <HeartHandshake className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-4 text-foreground tracking-wide">Compromiso Continuo</h3>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Nuestra relación no termina con la entrega de llaves.
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
