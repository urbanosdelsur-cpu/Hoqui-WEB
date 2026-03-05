"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProyectoMPage() {
  const { t } = useLanguage()

  // Nombres exactos de los archivos en public/proyectos/proyecto-m/
  const images = [
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.36.27_PM-d5015958-4980-4dd2-9474-47174da36570.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.36.35_PM-f232cd4f-fb61-46f6-8c23-f5cec35ca02f.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.36.42_PM-dc1e031f-eac1-4acc-8c09-16f4c7c4ac06.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.37.03_PM-d4be26a9-d027-4ca6-a943-822ff549d918.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.37.13_PM-5a91d085-d0a9-4d01-b65a-861825569ea6.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.37.21_PM-9c196a2d-2b92-452f-ad7c-e9946d8b8c0b.png",
    "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.37.29_PM-79f8c17d-d7e1-4fba-a76c-eb9e3430bb09.png",
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] bg-secondary">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={t("proyectoM.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <Link
                href="/obras"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("proyectoM.backToProjects")}
              </Link>
              <h1 className="text-5xl lg:text-6xl font-light text-primary-foreground mb-6 tracking-wide">
                {t("proyectoM.title")}
              </h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-primary-foreground/90">
                <div>
                  <p className="text-sm font-light tracking-wide mb-1">{t("proyectoM.locationLabel")}</p>
                  <p className="font-light tracking-wide">{t("proyectoM.location")}</p>
                </div>
                <div>
                  <p className="text-sm font-light tracking-wide mb-1">{t("proyectoM.architectLabel")}</p>
                  <p className="font-light tracking-wide">{t("proyectoM.architect")}</p>
                </div>
                <div>
                  <p className="text-sm font-light tracking-wide mb-1">{t("proyectoM.surfaceLabel")}</p>
                  <p className="font-light tracking-wide">{t("proyectoM.surface")}</p>
                </div>
                <div>
                  <p className="text-sm font-light tracking-wide mb-1">{t("proyectoM.yearLabel")}</p>
                  <p className="font-light tracking-wide">{t("proyectoM.year")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-light mb-6 tracking-wide">{t("proyectoM.characteristicsTitle")}</h2>
              <p className="text-lg font-light text-muted-foreground leading-relaxed tracking-wide">
                {t("proyectoM.characteristics")}
              </p>
            </div>

            {/* Image Gallery - Thumbnail Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${t("proyectoM.title")} - ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Credit */}
            <div className="mt-12 text-center">
              <p className="text-sm font-light text-muted-foreground tracking-wide">
                {t("proyectoM.photosLabel")}: {t("proyectoM.photographer")}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
