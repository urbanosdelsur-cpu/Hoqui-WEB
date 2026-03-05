"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoCDPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-cd/
  const images = [
    "/proyectos/proyecto-cd/proyecto-cd-1-e89f1eaf-c250-44f1-a3df-f60b8264225f.png",
    "/proyectos/proyecto-cd/proyecto-cd-2-adbe6cc0-2f9c-425a-a6bb-2d301027aeda.png",
    "/proyectos/proyecto-cd/proyecto-cd-3-1e598d83-b39f-49e3-9773-32fd7738c04c.png",
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
              {t.proyectoCD?.backToProjects || "Volver a Obras"}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">
              {t.proyectoCD?.title || "Proyecto CD"}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCD?.locationLabel || "Ubicación"}
                  </p>
                  <p className="font-light tracking-wide">
                    {t.proyectoCD?.location || "Arelauquen Golf & Country Club, Bariloche"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCD?.architectLabel || "Proyecto"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCD?.architect || "Arq Isa Gioioso & Asoc"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCD?.surfaceLabel || "Superficie"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCD?.surface || "275 m²"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCD?.yearLabel || "Año"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCD?.year || "2006"}</p>
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
                alt={`Proyecto CD - Imagen ${selectedImage + 1}`}
                className="w-full max-h-[600px] object-contain rounded-lg bg-muted/20"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-4">
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
                    alt={`Proyecto CD - Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-light mb-6 tracking-wide">
              {t.proyectoCD?.characteristicsTitle || "Características"}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-light leading-relaxed tracking-wide text-foreground">
                {t.proyectoCD?.characteristics ||
                  "Techo de madera de Oregón bajo cubierta de chapa prepintada negra, revestimiento de piedra moloneada y traslapo de Oregón. Aberturas en lenga con DVH, pisos interiores de laja negra San Luis con detalles en madera."}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {t.proyectoCD?.photosLabel || "Fotos"}: {t.proyectoCD?.photographer || "Guadalupe De La Vega"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
