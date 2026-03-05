"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, Calendar, Ruler, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoCasaMaitenPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-casa-maiten/
  const images = [
    "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-1-8635594b-82ad-42d7-b00c-a0d502fd9a2f.png",
    "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-2-0d885caf-ef38-41ae-8170-5934469398e7.png",
    "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-3-42f79b25-e902-4c52-bb28-06c6644743a9.png",
    "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-4-241c3904-1565-4ce6-b0da-762035a345da.png",
    "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-5-43ae28da-11f4-4d80-b7a2-5287ef7a445e.png",
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
              {t("proyectoCasaMaiten.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 tracking-wide">{t("proyectoCasaMaiten.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t("proyectoCasaMaiten.locationLabel")}
                  </p>
                  <p className="font-light tracking-wide">{t("proyectoCasaMaiten.location")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t("proyectoCasaMaiten.architectLabel")}
                  </p>
                  <p className="font-light tracking-wide">{t("proyectoCasaMaiten.architect")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t("proyectoCasaMaiten.surfaceLabel")}
                  </p>
                  <p className="font-light tracking-wide">{t("proyectoCasaMaiten.surface")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t("proyectoCasaMaiten.yearLabel")}
                  </p>
                  <p className="font-light tracking-wide">{t("proyectoCasaMaiten.year")}</p>
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
                alt={`Proyecto Casa Maiten - Imagen ${selectedImage + 1}`}
                className="w-full max-h-[600px] object-contain rounded-lg bg-muted/20"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-4">
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
                    alt={`Proyecto Casa Maiten - Miniatura ${index + 1}`}
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
            <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoCasaMaiten.characteristicsTitle")}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="font-light leading-relaxed tracking-wide text-foreground">
                {t("proyectoCasaMaiten.characteristics")}
              </p>
            </div>

            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {t("proyectoCasaMaiten.photosLabel")}: {t("proyectoCasaMaiten.photographer")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
