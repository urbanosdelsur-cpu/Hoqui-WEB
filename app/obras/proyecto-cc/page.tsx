"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { ArrowLeft, MapPin, User, Calendar, Maximize2, Camera } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ProyectoCCPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  // Nombres exactos de los archivos en public/proyectos/proyecto-cc/
  const images = [
    "/proyectos/proyecto-cc/proyecto-cc-1-d2c46e13-3c18-4105-8a92-57566c39bec3.png",
    "/proyectos/proyecto-cc/proyecto-cc-2-f9bbec8d-ee26-40ec-8a80-f436b875d93f.png",
    "/proyectos/proyecto-cc/proyecto-cc-3-2aea1e2d-8157-4c9d-8e22-569e9eb557e0.png",
    "/proyectos/proyecto-cc/proyecto-cc-4-afa57116-ed33-4848-9394-7da717d687ae.png",
    "/proyectos/proyecto-cc/proyecto-cc-5-a5f7b6fe-e983-494c-8be2-1cafaf3a763b.png",
    "/proyectos/proyecto-cc/proyecto-cc-6-35c5f458-f880-46c5-a69f-9dc1c1e8ec38.png",
    "/proyectos/proyecto-cc/proyecto-cc-7-1098574c-cf60-4e65-8554-d56efb743bb3.png",
    "/proyectos/proyecto-cc/proyecto-cc-8-9baa2220-c19b-4b4f-a63d-eb06f2ec4d68.png",
    "/proyectos/proyecto-cc/proyecto-cc-9-72c529dc-1e22-4750-a570-a4ec195e81c4.png",
    "/proyectos/proyecto-cc/proyecto-cc-10-d388061a-fdd8-45bf-af13-57c0df8f1efe.png",
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
              {t("proyectoCC.backToProjects")}
            </Link>
          </div>
        </section>

        {/* Project Header */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoCC.title")}</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoCC.locationLabel")}</p>
                  <p className="font-light">{t("proyectoCC.location")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoCC.architectLabel")}</p>
                  <p className="font-light">{t("proyectoCC.architect")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Maximize2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoCC.surfaceLabel")}</p>
                  <p className="font-light">{t("proyectoCC.surface")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground font-light mb-1">{t("proyectoCC.yearLabel")}</p>
                  <p className="font-light">{t("proyectoCC.year")}</p>
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
                  alt={`${t("proyectoCC.title")} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
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
              <h2 className="text-2xl font-light mb-6 tracking-wide">{t("proyectoCC.characteristicsTitle")}</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">{t("proyectoCC.characteristics")}</p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera className="w-4 h-4" />
                <span className="font-light">
                  {t("proyectoCC.photosLabel")}: {t("proyectoCC.photographer")}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
