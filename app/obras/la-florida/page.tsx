"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function LaFloridaPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/la-florida/
  const images = [
    "/proyectos/la-florida/la-florida-1-e5aeaa5e-9dd9-41e4-8ae7-9d5284074cbe.png",
    "/proyectos/la-florida/la-florida-2-575d78da-6dbf-4f3a-aed1-f19fef659be9.png",
    "/proyectos/la-florida/la-florida-2__1_-94c12d95-a1de-483b-a6a6-e4afe2867fe4.png",
    "/proyectos/la-florida/la-florida-3-49280d53-211d-435e-8263-96ce220dfff4.png",
    "/proyectos/la-florida/la-florida-3__1_-6454f5e8-8ce7-4bc6-9ac9-2860e0a4a8dd.png",
    "/proyectos/la-florida/la-florida-4-a59aa381-f299-48cd-9155-f8a9525c8534.png",
    "/proyectos/la-florida/la-florida-4__1_-03bb6e3e-4465-48ef-be7b-a11fc457cdf4.png",
    "/proyectos/la-florida/la-florida-5-44350835-9cbf-44d6-a822-f32cad013d31.png",
    "/proyectos/la-florida/la-florida-5__1_-de5c7368-840f-4fd6-bfb3-d17671a7a0f5.png",
    "/proyectos/la-florida/la-florida-6-7bb611b6-5243-4228-b358-64f04f28b78c.png",
    "/proyectos/la-florida/la-florida-6__1_-4b6e479b-97a3-4e19-b249-24dd55dc45eb.png",
    "/proyectos/la-florida/la-florida-7-261b6c4e-d25a-4e34-bcfe-b675b14b27ac.png",
    "/proyectos/la-florida/la-florida-7__1_-0df20ee3-22dc-4fa6-876f-e466607e4a1a.png",
    "/proyectos/la-florida/la-florida-8-8fcaab02-03ec-41ff-aa07-96b8779d209d.png",
    "/proyectos/la-florida/la-florida-8__1_-19d3dd53-094d-400b-ba67-5ff84f86b49e.png",
    "/proyectos/la-florida/la-florida-9-197cc63a-5217-4d5e-9358-07fca628d2ae.png",
    "/proyectos/la-florida/la-florida-9__1_-560a9d5d-d563-400b-9834-3dee93fa12ca.png",
    "/proyectos/la-florida/la-florida-10-f671b3ff-a3b7-474b-82e1-7e97dc148636.png",
    "/proyectos/la-florida/la-florida-10__1_-e616ff28-eda8-46f5-858b-8ef123c19acb.png",
    "/proyectos/la-florida/la-florida-11-3bb2c000-2f50-4c75-b560-0e8923f474af.png",
    "/proyectos/la-florida/la-florida-12-c0ca46c6-149c-4d07-8738-ed29bb9cbbce.png",
    "/proyectos/la-florida/la-florida-13-2bc961b8-d44b-4b79-a13b-a29f556e49f6.png",
    "/proyectos/la-florida/la-florida-14-db2d4d08-1a05-4e7f-99b5-e80ecd0275f9.png",
    "/proyectos/la-florida/la-florida-15-9496e3e9-666e-4155-8c68-b7e8e619baba.png",
    "/proyectos/la-florida/la-florida-16-f3ac05d2-b16f-466f-90f9-5b8eb607ef34.png",
    "/proyectos/la-florida/la-florida-17-2680fc43-3936-49ee-9f9d-5c6dfa013866.png",
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
            {t.proyectoLaFlorida?.backToProjects || "Volver a Obras"}
          </Link>
        </div>

        {/* Project Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-wide">Conjunto Viviendas LA FLORIDA</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.location")}
              </h3>
              <p className="text-lg font-light tracking-wide">Av. Bustillo, Bariloche</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.architects")}
              </h3>
              <p className="text-lg font-light tracking-wide">Estudio BMA</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.surface")}
              </h3>
              <p className="text-lg font-light tracking-wide">5.000 m²</p>
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
                alt={`LA FLORIDA - Imagen ${currentImageIndex + 1}`}
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
                alt={`LA FLORIDA - Imagen ${lightboxImageIndex + 1}`}
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
