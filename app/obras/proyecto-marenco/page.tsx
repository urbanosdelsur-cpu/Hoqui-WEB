"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function ProyectoMarencoPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Nombres exactos de los archivos en public/proyectos/proyecto-marenco/
  const images = [
    "/proyectos/proyecto-marenco/IMG_7328-e168cd8b-a1ed-4183-b721-3f57dbadb38f.png",
    "/proyectos/proyecto-marenco/IMG_7329-1ccea9cc-d303-4728-9599-3bfd6179d4db.png",
    "/proyectos/proyecto-marenco/IMG_7264-7ff25c42-f0e6-4eb5-9d60-84ca831acea9.png",
    "/proyectos/proyecto-marenco/IMG_7249-7f1b7ed4-dc3a-4cc7-ae9e-0f80e14e39a2.png",
    "/proyectos/proyecto-marenco/IMG_7357-9c348687-d6a9-409d-b942-ec82f952c918.png",
    "/proyectos/proyecto-marenco/IMG_7393-116ecc5b-1d98-4dad-9d21-d418ca2c2ea3.png",
    "/proyectos/proyecto-marenco/IMG_7398-04aaaee1-d9ec-4aba-a0ec-b3953b771c88.png",
    "/proyectos/proyecto-marenco/IMG_7408-c6319372-a4c9-49f3-ad4b-36b200fa2835.png",
    "/proyectos/proyecto-marenco/Sugerencia__IMG_7303-554e892c-9771-454a-85a9-bf2da734ed54.png",
    "/proyectos/proyecto-marenco/IMG_7259-659942c7-9660-4d69-8acd-6980eae4d17f.png",
    "/proyectos/proyecto-marenco/IMG_7282-a765728f-da99-4b45-a67a-edc58774dc6a.png",
    "/proyectos/proyecto-marenco/IMG_7402-7e0bd8ff-60be-47ca-b077-7886716c2973.png",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              href="/obras"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-5" />
              <span className="font-light tracking-wide">{t("proyectoMarenco.backToProjects")}</span>
            </Link>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-wide">{t("proyectoMarenco.title")}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoMarenco.locationLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoMarenco.location")}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoMarenco.surfaceLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoMarenco.surface")}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2 tracking-wide">
                  {t("proyectoMarenco.yearLabel")}
                </h3>
                <p className="font-light tracking-wide">{t("proyectoMarenco.year")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-light mb-8 tracking-wide">
              {t("proyectoMarenco.photosLabel")}: {t("proyectoMarenco.photographer")}
            </h2>
            <div className="mb-6">
              <div
                className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setLightboxOpen(true)}
              >
                <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={`${t("proyectoMarenco.title")} - ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                    selectedImage === index ? "ring-2 ring-primary ring-offset-2" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${t("proyectoMarenco.title")} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={images[selectedImage] ?? "/placeholder.svg"}
            alt={t("proyectoMarenco.title")}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
