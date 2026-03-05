"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, User, Calendar, Maximize2, Camera } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoRPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-r/
  const images = [
    "/proyectos/proyecto-r/proyecto-r-1-6c5cd689-2f46-4dc8-b361-d6d51ac87b5b.png",
    "/proyectos/proyecto-r/proyecto-r-2-ecb192ac-f0d2-447f-9e9e-62d261aa3b31.png",
    "/proyectos/proyecto-r/proyecto-r-3-e0e71020-9f66-4284-8364-450e293772e4.png",
    "/proyectos/proyecto-r/proyecto-r-4-1a13ad09-005d-471a-a735-dc9f0e4da504.png",
    "/proyectos/proyecto-r/proyecto-r-5-bef875a4-a12a-487e-832c-fca196b5982b.png",
    "/proyectos/proyecto-r/proyecto-r-6-796ac9e9-0c48-44cf-b4b0-b39fea49f709.png",
    "/proyectos/proyecto-r/proyecto-r-7-396c5637-4b4b-425b-be05-bfb54820a824.png",
    "/proyectos/proyecto-r/proyecto-r-8-1a27c76b-35d0-457a-9052-924df3b3db25.png",
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
              {t("proyectoR.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoR.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoR.locationLabel")}</p>
                  <p className="font-light">{t("proyectoR.location")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoR.architectLabel")}</p>
                  <p className="font-light">{t("proyectoR.architect")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Maximize2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoR.surfaceLabel")}</p>
                  <p className="font-light">{t("proyectoR.surface")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoR.yearLabel")}</p>
                  <p className="font-light">{t("proyectoR.year")}</p>
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
                  alt={`${t("proyectoR.title")} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
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
              <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoR.characteristicsTitle")}</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">{t("proyectoR.characteristics")}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera className="w-4 h-4" />
                <span className="font-light">
                  {t("proyectoR.photosLabel")}: {t("proyectoR.photographer")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
