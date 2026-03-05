import { Header } from "@/components/header"
import { FileText, Hammer, Home, Wrench, Building2 } from "lucide-react"

export default function RemodelacionesPage() {
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
                    <FileText className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-light text-foreground uppercase tracking-wide">
                    Remodelaciones
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl mb-20 mx-auto">
                <p className="text-xl text-muted-foreground/70 leading-relaxed">
                  Además de la construcción de nuevos proyectos también trabajamos con la remodelación de proyectos ya
                  existentes. Poseemos la logística y el equipo necesario para la realización de remodelaciones con
                  aplicaciones de estructura liviana, acabados varios y demoliciones internas tanto en viviendas vacías
                  como ocupadas.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Building2 className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-3 tracking-wide">Estructura Liviana</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Aplicaciones modernas de estructura liviana para remodelaciones eficientes y duraderas.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Hammer className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-3 tracking-wide">Acabados Varios</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Amplia variedad de acabados de alta calidad para personalizar cada espacio.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Wrench className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-3 tracking-wide">Demoliciones Internas</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Demoliciones controladas y seguras para transformar espacios existentes.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                    <Home className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal mb-3 tracking-wide">Viviendas Ocupadas</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Trabajamos en viviendas vacías u ocupadas con mínima interrupción de la rutina.
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
