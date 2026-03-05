import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"

export default function ServicioPostVentaPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        <section className="relative h-[400px] bg-secondary">
          <img src="/after-sales-service.jpg" alt="Servicio post venta" className="w-full h-full object-cover" />
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
                  <Shield className="w-10 h-10 text-primary-foreground" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground">Servicio Post Venta</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contenido detallado sobre Servicio Post Venta próximamente...
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
