"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function ConjuntoViviendasW1Page() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Nombres exactos en public/proyectos/conjunto-viviendas-w1-1/ (orden por hora del screenshot)
  const images = [
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.09.26_AM.png-9abfc150-64c6-4072-86e8-abd14cd8c4ee.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.09.41_AM-8449948a-8e69-4b36-8d2e-df351c69c998.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.09.48_AM-c80b3a7c-3bbb-4f6d-b731-295c78820cd3.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.09.54_AM-b2fff09d-61c0-4c50-bdc5-03617cbc34a1.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.10.03_AM.png-c4453608-628f-4933-804f-fa94774ada51.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.10.23_AM-a8d8ddba-611a-4ef3-8139-2dd2428551d4.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.10.33_AM.png-ce730562-2f3a-4612-9202-556879eafd4e.png",
    "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.10.41_AM-efd06547-1b1b-4525-a571-f8b47d7189b5.png",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <Link
            href="/obras"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.proyectoCasaSS?.backToProjects || "Volver a Obras"}
          </Link>
        </div>

        {/* Project Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-wide">CONJUNTO VIVIENDAS W1-1</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.location")}
              </h3>
              <p className="text-lg font-light tracking-wide">Arelauquen Golf & Country Club, Bariloche</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.architects")}
              </h3>
              <p className="text-lg font-light tracking-wide">Estudio Alric Galindez</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.surface")}
              </h3>
              <p className="text-lg font-light tracking-wide">950 m²</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.year")}
              </h3>
              <p className="text-lg font-light tracking-wide">2023</p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="relative">
            {/* Main Image */}
            <div
              className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted cursor-pointer"
              onClick={() => openLightbox(currentImageIndex)}
            >
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`Conjunto Viviendas W1-1 - Imagen ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority={currentImageIndex === 0}
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentImageIndex(index)
                    openLightbox(index)
                  }}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  } transition-all`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-lg z-10">
            {lightboxImageIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevLightboxImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextLightboxImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Full Size Image */}
          <div
            className="relative w-full h-full flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-full">
              <Image
                src={images[lightboxImageIndex] || "/placeholder.svg"}
                alt={`Conjunto Viviendas W1-1 - Imagen ${lightboxImageIndex + 1}`}
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
