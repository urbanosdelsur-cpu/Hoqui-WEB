"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function CasaRMPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-casa-rm/
  const images = [
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-1-970c0da3-1172-48d6-b70d-5e1a8d503887.png",
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-2-452636f6-6dfb-48f3-8523-1a5973e502ee.png",
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-3-80a74927-732e-4acb-84c4-206f33a636cb.png",
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-4-c7ead9b5-f14f-4421-bc02-42777d22d446.png",
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-5-9ad9708f-2653-4e28-a860-6da647c4d97f.png",
    "/proyectos/proyecto-casa-rm/proyecto-casa-rm-6-4b1ebfb5-4ccb-456f-bfc9-fdbce7223719.png",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
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
            {t.proyectoCasaRM?.backToProjects || "Volver a Obras"}
          </Link>
        </div>

        {/* Project Header */}
        <section className="container mx-auto px-4 lg:px-8 pb-12">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 tracking-wide">Casa R-M</h1>
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
              <p className="text-lg font-light tracking-wide">260 m²</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                {t("project.year")}
              </h3>
              <p className="text-lg font-light tracking-wide">2022</p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="relative">
            {/* Main Image */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`Casa R-M - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-6 gap-4 mt-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  } transition-all`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
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
