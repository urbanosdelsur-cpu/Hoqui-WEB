import { Header } from "@/components/header"
import {
  Building,
  Users,
  Award,
  Clock,
  TrendingUp,
  MapPin,
  Calculator,
  FileText,
  Hammer,
  ShoppingCart,
  Shield,
} from "lucide-react"

export default function DesarrollosInmobiliariosPage() {
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
                    <Building className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light text-foreground uppercase tracking-wide">
                    Desarrollos Inmobiliarios
                  </h1>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl">
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  Los desarrollos inmobiliarios a través de fideicomisos constituyen una excelente oportunidad de
                  inversión. Mediante la alianza estratégica con Inversores, que buscan en HOQUI Construcciones un
                  aliado profesional y confiable, hemos construido la vivienda multifamiliar{" "}
                  <span className="font-normal text-foreground">Casa Maitén en Arelauquen Golf & Country Club</span>.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl mb-12">
                <h2 className="text-3xl font-light text-foreground mb-4 text-center tracking-wide">
                  Valores Fundamentales
                </h2>
                <p className="text-muted-foreground/70 text-center">
                  Son valores fundamentales en nuestros desarrollos inmobiliarios los siguientes:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">
                        Asistencia y Atención Permanente
                      </h3>
                      <p className="text-muted-foreground/70 leading-relaxed text-sm">
                        La asistencia y atención permanente del inversor en cada etapa del proyecto.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Sello de Calidad</h3>
                      <p className="text-muted-foreground/70 leading-relaxed text-sm">
                        El sello diferencial de calidad de nuestras construcciones que nos distingue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">Cumplimiento de Plazos</h3>
                      <p className="text-muted-foreground/70 leading-relaxed text-sm">
                        El cumplimiento de los plazos establecidos en cada fase del desarrollo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-10 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-foreground mb-3 tracking-wide">
                        Búsqueda de la Excelencia
                      </h3>
                      <p className="text-muted-foreground/70 leading-relaxed text-sm">
                        La permanente búsqueda de la excelencia en la gestión del proyecto.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl mb-12">
                <h2 className="text-3xl font-light text-foreground mb-4 text-center tracking-wide">
                  Nuestro Respaldo al Inversor
                </h2>
                <p className="text-lg text-muted-foreground/70 text-center max-w-3xl mx-auto leading-relaxed">
                  En HOQUI Construcciones, aspiramos a una verdadera sinergia con el Inversor, brindándole el respaldo
                  adecuado en cada etapa del desarrollo inmobiliario:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">Búsqueda del Terreno</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Acompañamiento en la búsqueda y selección del terreno ideal para el proyecto.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Calculator className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">
                    Evaluación Técnica y Financiera
                  </h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Análisis completo de viabilidad técnica, financiera y económica del emprendimiento.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">Definición del Proyecto</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Desarrollo de un proyecto arquitectónico acorde a su entorno y objetivos.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Hammer className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">
                    Gerenciamiento y Construcción
                  </h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Gestión integral y construcción de la obra con los más altos estándares.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <ShoppingCart className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">Comercialización</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Apoyo en la estrategia de comercialización del desarrollo inmobiliario.
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:bg-white/90 transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base font-normal text-foreground mb-2 tracking-wide">Garantía Post Venta</h3>
                  <p className="text-muted-foreground/70 text-sm leading-relaxed">
                    Eficaz garantía post venta que respalda la inversión a largo plazo.
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
