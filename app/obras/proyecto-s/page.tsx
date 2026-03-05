"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, User, Calendar, Maximize2, Camera } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoSPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-s/
  const images = [
    "/proyectos/proyecto-s/proyecto-s-1-5e3639dd-0949-42cf-82ae-825ced92c857.png",
    "/proyectos/proyecto-s/proyecto-s-2-7d3ba36e-82a8-4747-bb6e-c63631ba48a8.png",
    "/proyectos/proyecto-s/proyecto-s-3-0a4be909-9ae2-4471-ac68-4eb2ec595ae0.png",
    "/proyectos/proyecto-s/proyecto-s-4-798c8eb4-0c94-4247-b499-bc109d1bff2e.png",
    "/proyectos/proyecto-s/proyecto-s-5-66905dd6-1009-421c-ba44-e74cff02eb45.png",
    "/proyectos/proyecto-s/proyecto-s-6-0242671d-ae40-4ea9-bd8a-9e8e73861eb1.png",
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
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("proyectoS.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoS.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoS.locationLabel")}</p>
                  <p className="font-light">{t("proyectoS.location")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoS.architectLabel")}</p>
                  <p className="font-light">{t("proyectoS.architect")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Maximize2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoS.surfaceLabel")}</p>
                  <p className="font-light">{t("proyectoS.surface")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoS.yearLabel")}</p>
                  <p className="font-light">{t("proyectoS.year")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Main Image */}
            <div className="mb-6">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`${t("proyectoS.title")} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
                  }`}
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

        {/* Project Details */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoS.characteristicsTitle")}</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">{t("proyectoS.characteristics")}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera className="w-4 h-4" />
                <span className="font-light">
                  {t("proyectoS.photosLabel")}: {t("proyectoS.photographer")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
