"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoCasaCHPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-casa-ch/
  const images = [
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-1-278f2376-9643-40cd-9550-c45f99b1163d.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-2-19f13644-891a-46a3-930f-5bc09724dd5b.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-3-9f10bdf2-d058-4a5b-8404-7ce308da1569.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-4-08cc78b3-b3c5-4964-97c0-9182e7119b34.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-5-86ce0398-511b-4eb0-b4da-3fcdb205edd4.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-6-5f8e922c-13da-4a3c-b4d6-db8ba570f740.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-7-8b2c1102-6c79-47d1-a5c8-0397c3397b90.png",
    "/proyectos/proyecto-casa-ch/proyecto-casa-ch-8-b8249213-f8f2-4063-b53e-0b06b4934950.png",
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
              {t.proyectoCasaCH?.backToProjects || "Volver a Obras"}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">
              {t.proyectoCasaCH?.title || "Casa CH"}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCasaCH?.locationLabel || "Ubicación"}
                  </p>
                  <p className="font-light tracking-wide">
                    {t.proyectoCasaCH?.location || "Arelauquen Golf & Country Club, Bariloche"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCasaCH?.architectLabel || "Proyecto"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCasaCH?.architect || "Estudio Alric Galindez"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCasaCH?.surfaceLabel || "Superficie"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCasaCH?.surface || "320 m²"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCasaCH?.yearLabel || "Año"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCasaCH?.year || "2021"}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Main Image */}
            <div className="mb-6">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`Casa CH - Imagen ${selectedImage + 1}`}
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
                    alt={`Casa CH - Miniatura ${index + 1}`}
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
