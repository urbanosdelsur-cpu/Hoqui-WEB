"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import { useState } from "react"

export default function ProyectoSRPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-sr/
  const images = [
    "/proyectos/proyecto-sr/proyecto-sr-1-70c0d544-2389-4fc1-8084-bd77b74b0294.png",
    "/proyectos/proyecto-sr/proyecto-sr-2-b83cd48f-d6b3-4360-ab02-a73934441510.png",
    "/proyectos/proyecto-sr/proyecto-sr-3-bdb6b650-43d9-4c41-8428-d75da32ae19e.png",
    "/proyectos/proyecto-sr/proyecto-sr-4-4010b6f2-8159-489c-a4ce-83fcc5184f96.png",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Back Button */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/obras"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-light tracking-wide"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-light tracking-wide">{t.proyectoSR?.backToProjects || "Volver a Obras"}</span>
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">{t.proyectoSR?.title || "S+R"}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoSR?.locationLabel || "Ubicación"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoSR?.location || "Circuito Chico, Bariloche"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoSR?.architectLabel || "Proyecto"}
                  </p>
                  <p className="font-light tracking-wide">
                    {t.proyectoSR?.architect || "Arqs. Isa Gioioso & Martina Hoqui"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoSR?.surfaceLabel || "Superficie"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoSR?.surface || "485 m²"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoSR?.yearLabel || "Año"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoSR?.year || "2022"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Main Image */}
            <div className="mb-6">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`S+R - Imagen ${selectedImage + 1}`}
                className="w-full max-h-[600px] object-contain rounded-lg bg-muted/20"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`S+R - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
