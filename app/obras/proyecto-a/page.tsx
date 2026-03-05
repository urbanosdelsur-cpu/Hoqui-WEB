"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoAPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-a/ (7 imágenes; no hay -4)
  const images = [
    "/proyectos/proyecto-a/proyecto-a-1-9651691e-88ff-4909-9636-c48919262802.png",
    "/proyectos/proyecto-a/proyecto-a-2-47a912cf-5b4d-4275-bd6c-d664a99139e7.png",
    "/proyectos/proyecto-a/proyecto-a-3-3954d7fb-3847-4f28-b414-8094305922d7.png",
    "/proyectos/proyecto-a/proyecto-a-5-049aa5c4-3391-495e-9944-a2f491ebf90a.png",
    "/proyectos/proyecto-a/proyecto-a-6-3d71d78a-3d11-4d47-ab52-eb949a4a72d3.png",
    "/proyectos/proyecto-a/proyecto-a-7-ea3ce8e5-41aa-424f-959d-40eb1c7cc36f.png",
    "/proyectos/proyecto-a/proyecto-a-8-5c9bf08c-f99d-4afe-8b9a-d38585582dfb.png",
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
              {t.proyectoA?.backToProjects || "Volver a Obras"}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">{t.proyectoA?.title || "Proyecto A"}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoA?.locationLabel || "Ubicación"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoA?.location || "Circuito Chico, Bariloche"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoA?.architectLabel || "Proyecto"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoA?.architect || "Arq Pio Romero Carranza"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoA?.surfaceLabel || "Superficie"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoA?.surface || "587 m²"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoA?.yearLabel || "Año"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoA?.year || "2006"}</p>
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
                alt={`Proyecto A - Imagen ${selectedImage + 1}`}
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
                    alt={`Proyecto A - Miniatura ${index + 1}`}
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
              {t.proyectoA?.characteristicsTitle || "Características"}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-light leading-relaxed tracking-wide text-foreground">
                {t.proyectoA?.characteristics ||
                  "Techo tejuela de ciprés, revestimiento exterior de piedra granítica labrada y orilla de ciprés, aberturas en lenga con DVH, pisos exteriores en pórfido e interiores en madera de ciprés, revestimientos interiores de madera macrocarpa."}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {t.proyectoA?.photosLabel || "Fotos"}: {t.proyectoA?.photographer || "Guadalupe De La Vega"}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
