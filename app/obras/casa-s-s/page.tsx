"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function CasaSSPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/casa-s-s/
  const images = [
    "/proyectos/casa-s-s/casa-s-s-1-5ef36f0a-be7c-4595-807d-7fc22883a2d4.png",
    "/proyectos/casa-s-s/casa-s-s-2-b9367d71-7536-41b6-94b9-27370a5e4b82.png",
    "/proyectos/casa-s-s/casa-s-s-3-1b7712d2-f98f-4d8e-818f-99f1e7d12a8f.png",
    "/proyectos/casa-s-s/casa-s-s-4-83447e52-02ed-4f26-aac6-8b26b2e5c279.png",
    "/proyectos/casa-s-s/casa-s-s-5-ee6a2e87-afa1-432e-8417-364593046bb8.png",
    "/proyectos/casa-s-s/casa-s-s-6-35050999-a50c-4686-bfec-9b2b84d4e01b.png",
    "/proyectos/casa-s-s/casa-s-s-7-560672d1-99ef-4f0e-8264-a6ffe5a98ef0.png",
    "/proyectos/casa-s-s/casa-s-s-8-0d718437-7892-4347-bde9-0e397ae0d0d2.png",
    "/proyectos/casa-s-s/casa-s-s-9-3b56cb58-ceb8-4d2d-9880-91e4a617ed58.png",
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
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-wide">CASA S-S</h1>
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
              <p className="text-lg font-light tracking-wide">335 m²</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.year")}
              </h3>
              <p className="text-lg font-light tracking-wide">2021</p>
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
                alt={`CASA S-S - Imagen ${currentImageIndex + 1}`}
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
                alt={`CASA S-S - Imagen ${lightboxImageIndex + 1}`}
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
