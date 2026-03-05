"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function DesarrolloB612Page() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/desarrollo-b612/
  const images = [
    "/proyectos/desarrollo-b612/desarrollo-b612-3__1_-93d97978-545f-40b8-94f0-9d32d1b80f91.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-17-bcfc5e0b-f267-4db8-b961-82a200b19298.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-9-dc924c53-808c-4ec1-b569-1c6dbe7d4e84.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-3-b03e707f-5054-4a60-bab9-555a0238123b.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-11-0e54ed5b-b47e-41fa-9328-9410ebcddef7.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-12-5dfd16d1-eafb-422e-bcec-eb12e120d897.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-7-237a6250-c059-49cc-af43-0ff365b7f18e.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-14-37f1d729-a8bf-4ba5-87c9-95e7291fbe49.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-1__1_-f029eb19-fb63-41c2-9029-bd0f035c0785.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-10-6ae4de00-794b-4760-a38c-2d2cdd877e47.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-1-60777a23-7d90-4d7c-ae4c-ce139a599def.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-5-7f1e6598-cf94-4694-a6ec-98c6f1c3f063.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-4-02609e13-21c0-4cae-b11d-7a8ee46072f1.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-8-dae1b2b6-de3f-4a87-8021-8353b7151ba7.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-6-4bfeab76-6588-4b53-9909-70d17dec4cbb.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-16-5225d596-584f-4922-a997-16f185c39f3c.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-2-7fad555d-1c93-4594-bf9b-3f8738e73f6a.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-13-7ea4a1c5-48b3-420f-affa-6f2c92c90c18.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-15-e937b99a-c525-488f-9c17-71a68d61f598.png",
    "/proyectos/desarrollo-b612/desarrollo-b612-2__1_-3d290716-2562-4e24-a3e1-6b95214a8eb4.png",
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
            {t.desarrolloB612?.backToProjects || "Volver a Obras"}
          </Link>
        </div>

        {/* Project Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-wide">Desarrollo B612</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.location")}
              </h3>
              <p className="text-lg font-light tracking-wide">Bustillo 5440, Bariloche</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.architects")}
              </h3>
              <p className="text-lg font-light tracking-wide">Alric Galindez Arquitectos</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.surface")}
              </h3>
              <p className="text-lg font-light tracking-wide">3.300 m²</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.year")}
              </h3>
              <p className="text-lg font-light tracking-wide">2024</p>
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
                alt={`Desarrollo B612 - Imagen ${currentImageIndex + 1}`}
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
                alt={`Desarrollo B612 - Imagen ${lightboxImageIndex + 1}`}
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
