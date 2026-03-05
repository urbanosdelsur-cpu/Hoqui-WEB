import { Header } from "@/components/header"
import { Home, Sun, Droplets, Zap, Leaf, Thermometer, Recycle } from "lucide-react"

export default function ConstruccionCasasAutosustentablesPage() {
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
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl max-w-5xl mx-auto">
                <div className="flex items-center gap-8 mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                    <Home className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-light text-foreground uppercase tracking-wide">
                    Construcción de Casas Autosustentables
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl mb-16">
                <p className="text-xl text-foreground/70 leading-relaxed mb-16">
                  En la actualidad existen tecnologías para utilizar fuentes de energía gratis como la energía del sol,
                  el viento y la geotermia que tienen por objetivo generar ahorro de energía y eficiencia energética.
                </p>

                {/* Benefits */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <div className="bg-white/50 p-10 rounded-xl border border-white/30">
                    <div className="flex items-center gap-4 mb-4">
                      <Leaf className="w-8 h-8 text-primary/70" strokeWidth={1.5} />
                      <h3 className="text-2xl font-light text-foreground tracking-wide">Ecología</h3>
                    </div>
                    <p className="text-muted-foreground/70 text-sm">Producción de su propia energía en forma limpia</p>
                  </div>

                  <div className="bg-white/50 p-10 rounded-xl border border-white/30">
                    <div className="flex items-center gap-4 mb-4">
                      <Zap className="w-8 h-8 text-primary/70" strokeWidth={1.5} />
                      <h3 className="text-2xl font-light text-foreground tracking-wide">Economía</h3>
                    </div>
                    <p className="text-muted-foreground/70 text-sm">
                      Ahorro diario en el funcionamiento de su hogar utilizando energía gratis
                    </p>
                  </div>
                </div>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Si el Estudio de Arquitectura así lo especificara, HOQUI Construcciones tiene la capacidad de
                  construir utilizando algunas de las siguientes tecnologías con el objetivo de producir o ahorrar
                  energía:
                </p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Placas Fotovoltaicas */}
                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                      <Sun className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-normal text-primary/70 uppercase tracking-widest mb-1">
                        Energía Eléctrica
                      </h3>
                      <h4 className="text-lg font-normal text-foreground tracking-wide">Placas Fotovoltaicas</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Las placas fotovoltaicas captan la energía del sol y la transforman en energía eléctrica para el
                    consumo de su casa.
                  </p>
                </div>

                {/* Placas Solares */}
                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                      <Thermometer className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-normal text-primary/70 uppercase tracking-widest mb-1">
                        Calefacción y Agua Caliente
                      </h3>
                      <h4 className="text-lg font-normal text-foreground tracking-wide">Placas Solares</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Las placas solares calientan el agua con la energía que capta del sol permitiendo calefaccionar los
                    ambientes con losa radiante o radiadores, además de contar con agua caliente en toda su casa.
                  </p>
                </div>

                {/* Energía Geotérmica */}
                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                      <Droplets className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-normal text-primary/70 uppercase tracking-widest mb-1">
                        Calefacción y Agua Caliente
                      </h3>
                      <h4 className="text-lg font-normal text-foreground tracking-wide">Energía Geotérmica</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    La energía geotérmica es captada bajo la tierra en el patio de su casa y usa esta energía para
                    calentar agua y por medio de este proceso la casa se puede calefaccionar, usando losa radiante o
                    radiadores murales y tener agua caliente en toda su casa.
                  </p>
                </div>

                {/* Reciclaje de Agua */}
                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                      <Recycle className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-xs font-normal text-primary/70 uppercase tracking-widest mb-1">
                        Reutilización del Agua
                      </h3>
                      <h4 className="text-lg font-normal text-foreground tracking-wide">
                        Planta de Reciclaje de Aguas Servidas
                      </h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground/70 leading-relaxed text-sm">
                    Permite reutilizar el agua que consumió su casa y puede ser usada nuevamente, por ejemplo para regar
                    el jardín.
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
