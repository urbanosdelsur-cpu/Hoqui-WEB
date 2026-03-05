"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoBPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Nombres exactos de los archivos en public/proyectos/proyecto-b/
  const images = [
    { src: "/proyectos/proyecto-b/proyecto-b-1-fc822c42-6087-4882-a72f-c7c305fd10f8.png", alt: "Interior piscina cubierta con techo de lenga" },
    { src: "/proyectos/proyecto-b/proyecto-b-2-03a053b2-eaa2-4ea4-932c-d1a3a21f975a.png", alt: "Sala de estar con doble altura y chimenea de piedra" },
    { src: "/proyectos/proyecto-b/proyecto-b-3-2a288c62-21c0-49e5-bb4b-78cb14e55409.png", alt: "Vista exterior frontal con torre de piedra" },
    { src: "/proyectos/proyecto-b/proyecto-b-4-925953cf-2efb-4428-b0ca-df9aa4b6bd37.png", alt: "Escalera interior curva de curupai" },
    { src: "/proyectos/proyecto-b/proyecto-b-5-aa9d68ec-2d08-41ff-941c-1ab7a33cf1f3.png", alt: "Comedor formal con paredes de piedra" },
    { src: "/proyectos/proyecto-b/proyecto-b-6-505e28e6-9ac3-4a5a-89e8-4dc4667e99ec.png", alt: "Vista exterior trasera con quincho" },
    { src: "/proyectos/proyecto-b/proyecto-b-7-0ac5a83a-6d2c-4174-a977-ae37bfd625f9.png", alt: "Arco de piedra interior" },
    { src: "/proyectos/proyecto-b/proyecto-b-8-65df87c5-16d8-48e9-83d1-2ad827a413ad.png", alt: "Vista panorámica con lago Nahuel Huapi" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-secondary">
          <img
            src={images[0].src}
            alt={t("proyectoB.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                href="/obras"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-light tracking-wide">{t("proyectoB.backToProjects")}</span>
              </Link>
              <h1 className="text-5xl lg:text-6xl font-light text-primary-foreground mb-4 tracking-wide">
                {t("proyectoB.title")}
              </h1>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="text-sm font-light text-muted-foreground mb-2 tracking-wide uppercase">
                  {t("proyectoB.locationLabel")}
                </h3>
                <p className="text-lg font-light tracking-wide">{t("proyectoB.location")}</p>
              </div>
              <div>
                <h3 className="text-sm font-light text-muted-foreground mb-2 tracking-wide uppercase">
                  {t("proyectoB.architectLabel")}
                </h3>
                <p className="text-lg font-light tracking-wide">{t("proyectoB.architect")}</p>
              </div>
              <div>
                <h3 className="text-sm font-light text-muted-foreground mb-2 tracking-wide uppercase">
                  {t("proyectoB.surfaceLabel")}
                </h3>
                <p className="text-lg font-light tracking-wide">{t("proyectoB.surface")}</p>
              </div>
              <div>
                <h3 className="text-sm font-light text-muted-foreground mb-2 tracking-wide uppercase">
                  {t("proyectoB.yearLabel")}
                </h3>
                <p className="text-lg font-light tracking-wide">{t("proyectoB.year")}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-light mb-6 tracking-wide">{t("proyectoB.characteristicsTitle")}</h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed tracking-wide">
                {t("proyectoB.characteristics")}
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery - Carrusel */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-light mb-2 tracking-wide">{t("proyectoB.photosLabel")}</h2>
              <p className="text-sm font-light text-muted-foreground tracking-wide">{t("proyectoB.photographer")}</p>
            </div>

            <div className="mb-6">
              <div
                className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={images[selectedImage]?.src || "/placeholder.svg"}
                  alt={images[selectedImage]?.alt ?? t("proyectoB.title")}
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
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
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
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
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
            src={images[selectedImage]?.src || "/placeholder.svg"}
            alt={images[selectedImage]?.alt ?? t("proyectoB.title")}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
