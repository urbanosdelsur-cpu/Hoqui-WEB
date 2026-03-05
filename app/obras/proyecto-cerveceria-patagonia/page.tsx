"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoCerveceriaPatagoniaPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-cerveceria-patagonia/
  const images = [
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-1-824a22b7-b1c8-481a-bcbf-9c14180b7e65.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-2-9bf89515-c581-43b5-8be8-0739eaa115a9.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-3-223594cf-b4a1-4bcc-8189-1ca8e11e049d.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-4-6097a4f6-c183-4ba4-80a6-088ef1035df9.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-5-947e6e1b-d9a3-4d23-857f-259b9f4756cc.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-6-beb8f388-6135-4026-b4d7-de5fa99b48b4.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-7-6a8669eb-1518-4e5a-9563-7b41a3e7aab5.png",
    "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-8-25924462-4db5-4e29-9018-fa87e6faa960.png",
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
              {t.proyectoCerveceriaPatagonia?.backToProjects || "Volver a Obras"}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">
              {t.proyectoCerveceriaPatagonia?.title || "Proyecto Cervecería Patagonia"}
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.locationLabel || "Ubicación"}
                  </p>
                  <p className="font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.location || "Circuito Chico, Bariloche"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.architectLabel || "Proyecto"}
                  </p>
                  <p className="font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.architect || "Bormida Yanzon"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.surfaceLabel || "Superficie"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCerveceriaPatagonia?.surface || "1.700 m²"}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t.proyectoCerveceriaPatagonia?.yearLabel || "Año"}
                  </p>
                  <p className="font-light tracking-wide">{t.proyectoCerveceriaPatagonia?.year || "2016"}</p>
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
                alt={`Cervecería Patagonia - Imagen ${selectedImage + 1}`}
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
                    alt={`Cervecería Patagonia - Miniatura ${index + 1}`}
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
              {t.proyectoCerveceriaPatagonia?.characteristicsTitle || "Características"}
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-light leading-relaxed tracking-wide text-foreground">
                {t.proyectoCerveceriaPatagonia?.characteristics ||
                  "Microcervecería y Pub construído con estructura metálica, revestimientos de madera de pino oregon y quebracho, piedra de voladura negra, micropiso de cemento en dos tonos combinado con entablonado rústico de curupay. Carpinterías de aluminio anodizado negro con termopanel."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
