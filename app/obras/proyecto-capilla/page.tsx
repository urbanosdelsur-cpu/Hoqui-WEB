"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoCapillaPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-capilla/
  const images = [
    "/proyectos/proyecto-capilla/proyecto-capilla-1-f2a83af8-bfd7-45da-b0f9-1e0eae430ddf.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-2-eea0bd3b-e0d8-4b71-b77b-dea35e22580f.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-3-57c5d622-43db-4d2f-b93b-602720753f7f.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-4-19f30baa-d47d-4f45-9e56-7c53a1c1ae72.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-5-675b8c5c-e0be-4f00-b97c-450519906df5.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-6-287e71c2-89a2-4dd3-8115-72acc77a4f69.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-7-dfbcb135-22a7-494c-a9b0-2264ef1481c2.png",
    "/proyectos/proyecto-capilla/proyecto-capilla-8-3cef97c2-652c-4ac0-bd2c-039096c61158.png",
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
              {t("proyectoCapilla.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoCapilla.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">{t("proyectoCapilla.locationLabel")}</p>
                <p className="font-light tracking-wide">{t("proyectoCapilla.location")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">
                  {t("proyectoCapilla.architectLabel")}
                </p>
                <p className="font-light tracking-wide">{t("proyectoCapilla.architect")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">{t("proyectoCapilla.surfaceLabel")}</p>
                <p className="font-light tracking-wide">{t("proyectoCapilla.surface")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1 tracking-wide">{t("proyectoCapilla.yearLabel")}</p>
                <p className="font-light tracking-wide">{t("proyectoCapilla.year")}</p>
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
                alt="Proyecto Capilla"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
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
              <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoCapilla.characteristicsTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed font-light tracking-wide mb-6">
                {t("proyectoCapilla.characteristics")}
              </p>
              <p className="text-sm text-muted-foreground font-light tracking-wide">
                {t("proyectoCapilla.photosLabel")}: {t("proyectoCapilla.photographer")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
