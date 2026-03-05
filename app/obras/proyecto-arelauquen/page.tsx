"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoArelauquenPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-arelauquen/
  const images = [
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-1-13a4a1f7-3894-4383-be5c-f9879d1a391e.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-2-24593dde-f53d-4395-8934-db0c9cb5d0a5.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-3-f9fd35b1-1dd1-42f3-b2aa-e0a2691a0034.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-4-0f6f6acd-de60-4b99-b2b2-7fdac8172a1e.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-5-d85f88f3-37d2-4e85-b300-437498a92f1c.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-6-f5b7de1d-32bc-4227-be9e-3d5e70240e29.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-7-38d2ba4d-6729-4b9c-a33e-16f2c5cdc7ce.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-8-aca3701d-7d02-4222-9fa9-46751b562751.png",
    "/proyectos/proyecto-arelauquen/proyecto-arelauquen-9-9b98cd35-d879-411a-b4cf-eec34ef73d8b.png",
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              {t("proyectoArelauquen.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoArelauquen.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">
                  {t("proyectoArelauquen.locationLabel")}
                </p>
                <p className="font-light tracking-wide">{t("proyectoArelauquen.location")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">
                  {t("proyectoArelauquen.architectLabel")}
                </p>
                <p className="font-light tracking-wide">{t("proyectoArelauquen.architect")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">
                  {t("proyectoArelauquen.surfaceLabel")}
                </p>
                <p className="font-light tracking-wide">{t("proyectoArelauquen.surface")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">{t("proyectoArelauquen.yearLabel")}</p>
                <p className="font-light tracking-wide">{t("proyectoArelauquen.year")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Proyecto Arelauquen"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Vista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoArelauquen.characteristicsTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed font-light tracking-wide mb-6">
                {t("proyectoArelauquen.characteristics")}
              </p>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {t("proyectoArelauquen.photosLabel")}: {t("proyectoArelauquen.photographer")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
