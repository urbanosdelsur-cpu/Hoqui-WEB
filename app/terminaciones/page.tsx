"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useState } from "react"

export default function TerminacionesPage() {
  const { t } = useLanguage()

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentB612ImageIndex, setCurrentB612ImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)
  const [lightboxCarousel, setLightboxCarousel] = useState<"laflorida" | "b612">("laflorida")

  // Nombres exactos de los archivos que pasaste (copialos a public/images/ y public/terminaciones/ sin renombrar)
  const laFloridaImages = [
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2013-3f72793d-4ea7-498a-ae42-834e171dce03.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2014-53b24e88-6434-49b3-a4da-15fb82c54935.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2015-5cdc2aa5-f54f-4c65-b056-d7ddd4f3519b.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2016-cdb0db93-dc9a-42b3-b9ad-630eb0f61e1c.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2017-624485d7-6de0-44be-b3dc-df942ed54cbe.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2017-20-281-29-083d40c7-078c-439c-a1e1-4b00908c992f.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2018-d09efbd4-8899-4072-904b-d1762e2ef5e4.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2021-37859f90-ae9a-4613-a901-8ac7461559e0.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2022-273801de-53d2-4308-be23-dad818842ff4.png",
    "/images/detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2023-21680daf-240d-4f21-a1df-60cc49716198.png",
    "/terminaciones/cabinet-6f2098ee-783c-437e-984d-92a822dc3e16.png",
    "/terminaciones/curtain-detail-74b14680-ae38-4303-ace0-3c2ba656f8a1.png",
    "/terminaciones/door-detail-3b88a7ed-1ab6-40a5-8152-3f4b80f3bf7e.png",
    "/terminaciones/door-profile-e40cf743-6796-411e-aa0a-fdec0c3b4811.png",
    "/terminaciones/exterior-railing-ac59958b-ad7a-4a1e-aebd-34eb8a6691f9.png",
    "/terminaciones/frame-detail-5778824a-d112-4afb-9353-aa11f79eae2a.png",
    "/terminaciones/railing-detail-0d14b032-8fdb-4661-aae0-060293163ffc.png",
    "/terminaciones/signage-cbf6aeb6-3558-421b-ba81-b2af1a4c951a.png",
    "/terminaciones/staircase-interior-8ca785cb-1d52-4bda-87de-833d89b414ea.png",
    "/terminaciones/stairs-full-60b598a1-baf2-4377-98ee-04617bb57ad5.png",
  ]

  // Terminaciones B612 – nombres exactos de los archivos en public/images/
  const b612Images = [
    "/images/a1-20-c5eb5329-3f13-49e0-a7a6-511431e0f79a.png",
    "/images/depto-2-7-7c2400be-641d-4196-b2dd-1e533bda3b9b.png",
    "/images/depto-j29-4-3bad77c7-65dd-4b99-97f3-47564571425b.png",
    "/images/depto-1-19-e2f2379e-51ee-44f8-91cd-8a95a62bed30.png",
    "/images/a1-26-4f11a3b2-868e-4050-8b00-c68510692b40.png",
    "/images/depto-1-22-bcbdec90-e590-4520-b4e3-a07a1e2df8ca.png",
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % laFloridaImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + laFloridaImages.length) % laFloridaImages.length)
  }

  const nextB612Image = () => {
    setCurrentB612ImageIndex((prev) => (prev + 1) % b612Images.length)
  }

  const prevB612Image = () => {
    setCurrentB612ImageIndex((prev) => (prev - 1 + b612Images.length) % b612Images.length)
  }

  const openLightbox = (index: number, carousel: "laflorida" | "b612" = "laflorida") => {
    setLightboxImageIndex(index)
    setLightboxCarousel(carousel)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const currentLightboxImages = lightboxCarousel === "laflorida" ? laFloridaImages : b612Images

  const nextLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev + 1) % currentLightboxImages.length)
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prev) => (prev - 1 + currentLightboxImages.length) % currentLightboxImages.length)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        <section className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-secondary">
          <Image
            src="/terminaciones-hero.png"
            alt="Terminaciones - Interior moderno"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-wide mb-2 sm:mb-4">
                Terminaciones
              </h1>
              <div className="w-24 h-px bg-white mt-8 mx-auto" />
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <p className="text-base sm:text-lg text-muted-foreground">
                  Nuestro compromiso con la excelencia se refleja en cada detalle. Desde carpintería de alta calidad
                  hasta herrería personalizada, cada acabado es cuidadosamente seleccionado y ejecutado.
                </p>
              </div>

              {/* LA FLORIDA CAROUSEL */}
              <div className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-8 tracking-wide uppercase">LA FLORIDA</h2>

                <div className="relative">
                  <div
                    className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => openLightbox(currentImageIndex, "laflorida")}
                  >
                    <Image
                      src={laFloridaImages[currentImageIndex] || "/placeholder.svg"}
                      alt={`LA FLORIDA - Detalle ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      priority={currentImageIndex === 0}
                    />

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

                    <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {laFloridaImages.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2 md:gap-4 mt-4">
                    {laFloridaImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentImageIndex(index)
                          openLightbox(index, "laflorida")
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
                          sizes="(max-width: 768px) 25vw, 10vw"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-16 md:mb-24">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-8 tracking-wide uppercase">B612</h2>

                <div className="relative">
                  <div
                    className="relative aspect-[16/9] rounded-lg overflow-hidden bg-muted cursor-pointer"
                    onClick={() => openLightbox(currentB612ImageIndex, "b612")}
                  >
                    <Image
                      src={b612Images[currentB612ImageIndex] || "/placeholder.svg"}
                      alt={`B612 - Detalle ${currentB612ImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        prevB612Image()
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        nextB612Image()
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                      aria-label="Siguiente imagen"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    <div className="absolute bottom-4 right-4 bg-background/80 px-3 py-1 rounded-full text-sm">
                      {currentB612ImageIndex + 1} / {b612Images.length}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 mt-4">
                    {b612Images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentB612ImageIndex(index)
                          openLightbox(index, "b612")
                        }}
                        className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                          currentB612ImageIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
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
              </div>
            </div>
          </div>
        </section>
      </main>

      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="absolute top-4 left-4 text-white text-lg z-10">
            {lightboxImageIndex + 1} / {currentLightboxImages.length}
          </div>

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

          <div
            className="relative w-full h-full flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-full">
              <Image
                src={currentLightboxImages[lightboxImageIndex] || "/placeholder.svg"}
                alt={`${lightboxCarousel === "laflorida" ? "LA FLORIDA" : "B612"} - Detalle ${lightboxImageIndex + 1}`}
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
