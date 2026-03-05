"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoDPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-d/
  const images = [
    "/proyectos/proyecto-d/proyecto-d-1-164cc281-03f1-4bf2-b0ef-d2af03713d81.png",
    "/proyectos/proyecto-d/proyecto-d-2-65e9cc3f-2965-4376-8523-65e4eac8d617.png",
    "/proyectos/proyecto-d/proyecto-d-3-0964e856-295c-4d91-9728-a04d7d8731b6.png",
    "/proyectos/proyecto-d/proyecto-d-4-9d9e33d7-3554-4fa8-b905-9f34fe15445e.png",
    "/proyectos/proyecto-d/proyecto-d-5-902afeb3-df82-40d8-bbee-e6c98a5f949f.png",
    "/proyectos/proyecto-d/proyecto-d-6-a47e705b-0c90-41ae-9100-d062d63d771b.png",
    "/proyectos/proyecto-d/proyecto-d-7-bfd26fbf-0f26-4026-81e3-8c6f2c7b6f77.png",
    "/proyectos/proyecto-d/proyecto-d-8-472403bc-371f-4ce5-9d4d-7bd0dae1947f.png",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Back Button */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/obras"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t("proyectoD.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoD.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoD.locationLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoD.location")}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoD.architectLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoD.architect")}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoD.surfaceLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoD.surface")}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoD.yearLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoD.year")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoD.characteristicsTitle")}</h2>
            <p className="text-muted-foreground font-light leading-relaxed max-w-4xl tracking-wide">
              {t("proyectoD.characteristics")}
            </p>
            <p className="text-muted-foreground font-light leading-relaxed max-w-4xl tracking-wide mt-4">
              {t("proyectoD.award")}
            </p>
          </div>
        </section>

        {/* Image Gallery - Carrusel */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-light mb-8 tracking-wide">
              {t("proyectoD.photosLabel")}: {t("proyectoD.photographer")}
            </h2>
            <div className="mb-6">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`${t("proyectoD.title")} - ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${t("proyectoD.title")} - ${index + 1}`}
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
