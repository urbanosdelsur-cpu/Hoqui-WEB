import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, ArrowLeft, Hammer, Shield, FileCheck, Eye, Briefcase, Building2 } from "lucide-react"

export default function CalidadComprobablePage() {
  const features = [
    {
      icon: Hammer,
      title: "Mano de obra",
      description:
        "En cada actividad nos esmeramos por utilizar la buena práctica constructiva y a utilizar personal capacitado para cada labor. La empresa estandariza sus procesos constructivos mediante un documento llamado 'Azora Prácticas constructivas'.",
    },
    {
      icon: Shield,
      title: "Seguridad laboral",
      description:
        "Se cuenta con políticas de seguridad ocupacional para salvaguardar la integridad física y mental de los trabajadores. La seguridad del personal esta primero que cualquier objetivo dentro de la obra.",
    },
    {
      icon: FileCheck,
      title: "Adicionales",
      description:
        "Una vez firmado el contrato es posible realizar modificaciones adicionales mediante un ordenado sistema de registro.",
    },
    {
      icon: Eye,
      title: "Supervisión",
      description:
        "Presencia profesional permanente con supervisión diaria de cada tarea en sus verificando el uso adecuado de los recursos.",
    },
    {
      icon: Briefcase,
      title: "Responsabilidad laboral",
      description:
        "Nuestra empresa asume el control todos los asuntos relacionados con la seguridad ocupacional, derechos laborales y cargas sociales del personal a su cargo, sin ninguna responsabilidad para el propietario.",
    },
  ]

  const constructionSystems = [
    { name: "Tradicional", description: "Sistema constructivo convencional con materiales tradicionales" },
    { name: "En seco", description: "Construcción moderna con sistemas de paneles y estructuras livianas" },
    { name: "Steel frame", description: "Estructura de acero galvanizado de alta resistencia" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-secondary">
          <img
            src="/quality-construction-detail.jpg"
            alt="Calidad comprobable en construcción"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Button asChild variant="ghost" className="mb-4 text-primary-foreground hover:text-primary-foreground/80">
                <Link href="/llave-en-mano">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver a Llave en Mano
                </Link>
              </Button>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/20 rounded-lg">
                  <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground">Calidad Comprobable</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Realizamos todo lo concerniente a la planificación, y programación de las distintas tareas de la obra,
                teniendo como único fin lograr la plena satisfacción del cliente cuidando al máximo los 3 aspectos
                principales: <span className="font-semibold text-foreground">tiempo, costo y calidad</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Llevamos a cabo el control y monitoreo constante de la ejecución de vuestro proyecto, con el fin de
                anticiparnos a posibles eventualidades que pudieran presentarse. De forma constante analizamos nuevas
                estrategias y procedimientos de construcción con el fin de generar tecnologías para mejorar la
                concreción de proyecto y hacerlo más rentable para nuestros clientes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Asimismo, colaboramos con estudios de arquitectos de reconocido prestigio para hacer realidad sus
                proyectos.
              </p>
            </div>
          </div>
        </section>

        {/* Modalidades de Contratación */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Modalidades de Contratación</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-12">
                La ejecución de su obra puede realizarse con diferentes modalidades de contratación:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Administración de Proyectos</h3>
                    <p className="text-muted-foreground">
                      Gestión completa del proyecto con transparencia total en costos y procesos.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Contrato Llave en Mano o por Precio Fijo</h3>
                    <p className="text-muted-foreground">
                      Precio cerrado desde el inicio, sin sorpresas ni costos adicionales.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">Nuestros Compromisos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mt-2">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sistemas Constructivos */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <Building2 className="w-10 h-10 text-primary" />
                <h2 className="text-3xl lg:text-4xl font-bold">Sistemas Constructivos</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                La Empresa se adapta al sistema constructivo que el Estudio de Arquitectura especifique:
              </p>
              <div className="space-y-4">
                {constructionSystems.map((system, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{system.name}</h3>
                      <p className="text-muted-foreground">{system.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Querés conocer más sobre nuestra calidad?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contactanos para recibir más información sobre nuestros procesos y estándares de calidad
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/contacto">Solicitar Información</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
