import { Header } from "@/components/header"
import { Key, Shield, Users, CheckCircle, TrendingDown, Award } from "lucide-react"

export default function ContratoLlaveEnManoPage() {
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

      <div className="relative z-10">
        <Header />

        <main className="mt-20">
          {/* Hero Section - Simplified with lighter typography */}
          <section className="relative h-[400px] flex items-center">
            <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-8 mb-4">
                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                  <Key className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-light text-white uppercase tracking-wide drop-shadow-md">
                  Contrato Llave en Mano o por Precio Fijo
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - Removed borders, lighter styling */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
            <div className="bg-muted/10 p-12 rounded-sm">
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Modalidad contractual a través de la cual{" "}
                <span className="font-normal text-foreground">HOQUI Construcciones es el único responsable</span>{" "}
                garantizando que el resultado final de la construcción de un proyecto sea un éxito, brindando de inicio
                a fin el respaldo por cualquier contratiempo que pueda presentarse.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                Realizamos absolutamente todo el trabajo, desde la limpieza inicial del predio hasta el equipamiento
                final si así el cliente lo solicitara. Este sistema es la mejor manera de construir su vivienda.
                Trabajamos en conjunto con vuestro Estudio de Arquitectura para definir los detalles, terminaciones y
                acabados.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Dirigimos cada paso, y damos un profundo seguimiento profesional garantizando así la calidad del trabajo
                y la satisfacción de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid - Removed borders and shadows, lighter styling */}
        <section className="py-24 bg-muted/10">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-light text-center mb-16 text-foreground tracking-wide">
              Beneficios del Sistema
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Precio Fijo */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Precio Fijo</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  Se establece un precio fijo por la obra terminada con especificaciones detalladas. El cliente se
                  despreocupa totalmente de los problemas propios de la construcción.
                </p>
              </div>

              {/* Flujo de Pagos */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <TrendingDown className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Flujo de Pagos Establecido</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  Se define un flujo de pagos relacionado a un avance establecido, permitiendo al cliente un control
                  claro del progreso de la obra.
                </p>
              </div>

              {/* Trabajo en Conjunto */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Trabajo en Conjunto</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  Trabajamos en conjunto con su Estudio de Arquitectura para definir los detalles, terminaciones y
                  acabados de su proyecto.
                </p>
              </div>

              {/* Asunción de Riesgos */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Asunción de Riesgos</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  La empresa asume cualquier riesgo relacionado con cambios en el mercado respecto a los precios de
                  insumos.
                </p>
              </div>

              {/* Garantía Total */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Garantía Total</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  La empresa otorga garantía por la totalidad de los trabajos realizados, respaldando su inversión.
                </p>
              </div>

              {/* Alcance Completo */}
              <div className="bg-background/50 p-8 rounded-sm">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6">
                  <Key className="w-7 h-7 text-primary/70" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-normal mb-4 text-foreground tracking-wide">Alcance Completo</h3>
                <p className="text-muted-foreground/70 leading-relaxed text-sm">
                  Desde la limpieza inicial del predio hasta el equipamiento final si así el cliente lo solicitara.
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
