"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoCPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Nombres exactos de los archivos en public/proyectos/proyecto-c/
  const images = [
    "/proyectos/proyecto-c/proyecto-c-1-45d14eb5-931c-45ee-8ac8-fa966f7b2911.png",
    "/proyectos/proyecto-c/proyecto-c-2-fa9a8fed-7673-4e15-b810-111c85178605.png",
    "/proyectos/proyecto-c/proyecto-c-3-27188a60-fc33-416c-bfda-32e96ac30da3.png",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-secondary">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={t("proyectoC.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                href="/obras"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-light tracking-wide">{t("proyectoC.backToProjects")}</span>
              </Link>
              <h1 className="text-5xl lg:text-6xl font-light text-primary-foreground mb-4 tracking-wide">
                {t("proyectoC.title")}
              </h1>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Project Info */}
              <div>
                <h2 className="text-3xl font-light mb-8 tracking-wide">{t("proyectoC.title")}</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                      {t("proyectoC.locationLabel")}
                    </h3>
                    <p className="text-lg font-light tracking-wide">{t("proyectoC.location")}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                      {t("proyectoC.architectLabel")}
                    </h3>
                    <p className="text-lg font-light tracking-wide">{t("proyectoC.architect")}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                        {t("proyectoC.surfaceLabel")}
                      </h3>
                      <p className="text-lg font-light tracking-wide">{t("proyectoC.surface")}</p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                        {t("proyectoC.yearLabel")}
                      </h3>
                      <p className="text-lg font-light tracking-wide">{t("proyectoC.year")}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h3 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoC.characteristicsTitle")}</h3>
                <p className="text-muted-foreground font-light leading-relaxed tracking-wide">
                  {t("proyectoC.characteristics")}
                </p>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {t("proyectoC.photosLabel")}: {t("proyectoC.photographer")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery - Carrusel */}
            <div className="mb-6">
              <div
                className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`${t("proyectoC.title")} - ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
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
                    alt={`${t("proyectoC.title")} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[selectedImage] || "/placeholder.svg"}
            alt={t("proyectoC.title")}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
