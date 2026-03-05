"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ObrasPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = ["/obras-hero-1.png", "/obras-hero-2.png", "/obras-hero-3.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const projects = [
    {
      id: "proyecto-cd",
      title: "Proyecto CD",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2006",
      image: "/proyectos/proyecto-cd/proyecto-cd-1-e89f1eaf-c250-44f1-a3df-f60b8264225f.png",
      surface: "275 m²",
    },
    {
      id: "proyecto-cc",
      title: "Proyecto CC",
      location: "Av. Bustillo km 18",
      year: "2009",
      image: "/proyectos/proyecto-cc/proyecto-cc-1-d2c46e13-3c18-4105-8a92-57566c39bec3.png",
      surface: "1.280 m²",
    },
    {
      id: "proyecto-casa-maiten",
      title: "Proyecto Casa Maiten",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2011",
      image: "/proyectos/proyecto-casa-maiten/proyecto-casa-maiten-1-8635594b-82ad-42d7-b00c-a0d502fd9a2f.png",
      surface: "830 m²",
    },
    {
      id: "proyecto-b",
      title: "Proyecto B",
      location: "Península San Pedro, Bariloche",
      year: "2009",
      image: "/proyectos/proyecto-b/proyecto-b-1-fc822c42-6087-4882-a72f-c7c305fd10f8.png",
      surface: "1.050 m²",
    },
    {
      id: "proyecto-capilla",
      title: "Proyecto Capilla",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2009",
      image: "/proyectos/proyecto-capilla/proyecto-capilla-1-f2a83af8-bfd7-45da-b0f9-1e0eae430ddf.png",
      surface: "150 m²",
    },
    {
      id: "proyecto-c",
      title: "Proyecto C",
      location: "Arelauuen Golf & Country Club, Bariloche",
      year: "2014",
      image: "/proyectos/proyecto-c/proyecto-c-1-45d14eb5-931c-45ee-8ac8-fa966f7b2911.png",
      surface: "434 m²",
    },
    {
      id: "proyecto-d",
      title: "Proyecto D",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2014",
      image: "/proyectos/proyecto-d/proyecto-d-1-164cc281-03f1-4bf2-b0ef-d2af03713d81.png",
      surface: "428 m²",
    },
    {
      id: "proyecto-arelauquen",
      title: "Proyecto Arelauquen",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2013",
      image: "/proyectos/proyecto-arelauquen/proyecto-arelauquen-1-13a4a1f7-3894-4383-be5c-f9879d1a391e.png",
      surface: "760 m²",
    },
    {
      id: "proyecto-m",
      title: "Proyecto M",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2010",
      image: "/proyectos/proyecto-m/Screenshot_2026-03-05_at_1.36.27_PM-d5015958-4980-4dd2-9474-47174da36570.png",
      surface: "480 m²",
    },
    {
      id: "proyecto-marenco",
      title: "Proyecto Marenco",
      location: "—",
      year: "2009",
      image: "/proyectos/proyecto-marenco/IMG_7328-e168cd8b-a1ed-4183-b721-3f57dbadb38f.png",
      surface: "No disponible",
    },
    {
      id: "proyecto-r",
      title: "Proyecto R",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2008",
      image: "/proyectos/proyecto-r/proyecto-r-1-6c5cd689-2f46-4dc8-b361-d6d51ac87b5b.png",
      surface: "315 m²",
    },
    {
      id: "proyecto-s",
      title: "Proyecto S",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2008",
      image: "/proyectos/proyecto-s/proyecto-s-1-5e3639dd-0949-42cf-82ae-825ced92c857.png",
      surface: "540 m²",
    },
    {
      id: "proyecto-a",
      title: "Proyecto A",
      location: "Circuito Chico, Bariloche",
      year: "2006",
      image: "/proyectos/proyecto-a/proyecto-a-1-9651691e-88ff-4909-9636-c48919262802.png",
      surface: "587 m²",
    },
    {
      id: "proyecto-cerveceria-patagonia",
      title: "Proyecto Cervecería Patagonia",
      location: "Circuito Chico, Bariloche",
      year: "2016",
      image: "/proyectos/proyecto-cerveceria-patagonia/proyecto-cerveceria-patagonia-1-824a22b7-b1c8-481a-bcbf-9c14180b7e65.png",
      surface: "1.700 m²",
    },
    {
      id: "proyecto-casa-ch",
      title: "Casa CH",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2021",
      image: "/proyectos/proyecto-casa-ch/proyecto-casa-ch-1-278f2376-9643-40cd-9550-c45f99b1163d.png",
      surface: "320 m²",
    },
    {
      id: "proyecto-casa-rm",
      title: "Casa R-M",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2022",
      image: "/proyectos/proyecto-casa-rm/proyecto-casa-rm-1-970c0da3-1172-48d6-b70d-5e1a8d503887.png",
      surface: "260 m²",
    },
    {
      id: "proyecto-sr",
      title: "S+R",
      location: "Circuito Chico, Bariloche",
      year: "2022",
      image: "/proyectos/proyecto-sr/proyecto-sr-1-70c0d544-2389-4fc1-8084-bd77b74b0294.png",
      surface: "485 m²",
    },
    {
      id: "casa-s-s",
      title: "CASA S-S",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2021",
      image: "/proyectos/casa-s-s/casa-s-s-1-5ef36f0a-be7c-4595-807d-7fc22883a2d4.png",
      surface: "335 m²",
    },
    {
      id: "conjunto-viviendas-w1-1",
      title: "Conjunto Viviendas W1-1",
      location: "Arelauquen Golf & Country Club, Bariloche",
      year: "2023",
      image: "/proyectos/conjunto-viviendas-w1-1/Screenshot_2025-10-27_at_11.09.26_AM.png-9abfc150-64c6-4072-86e8-abd14cd8c4ee.png",
      surface: "950 m²",
    },
    {
      id: "la-florida",
      title: "Conjunto Viviendas LA FLORIDA",
      location: "Av. Bustillo, Bariloche",
      year: "2024",
      image: "/proyectos/la-florida/la-florida-1-e5aeaa5e-9dd9-41e4-8ae7-9d5284074cbe.png",
      surface: "5.000 m²",
    },
    {
      id: "desarrollo-b612",
      title: "Desarrollo B612",
      location: "Bustillo 5440, Bariloche",
      year: "2024",
      image: "/proyectos/desarrollo-b612/desarrollo-b612-1-60777a23-7d90-4d7c-ae4c-ce139a599def.png",
      surface: "3.300 m²",
    },
  ]

  const sortedProjects = [...projects].sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-secondary overflow-hidden">
          {heroImages.map((image, index) => (
            <img
              key={image}
              src={image || "/placeholder.svg"}
              alt={`${t("obras.title")} ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-5xl lg:text-6xl font-light text-primary-foreground mb-4 tracking-wide">
                {t("obras.title")}
              </h1>
              <p className="text-xl font-light text-primary-foreground/90 max-w-2xl tracking-wide">
                {t("obras.subtitle")}
              </p>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-primary-foreground w-8"
                    : "bg-primary-foreground/50 hover:bg-primary-foreground/75"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Obras en Proceso */}
            <div className="mb-16">
              <h2 className="text-3xl font-light mb-8 tracking-wide">Obras en Proceso</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {/* Mirador del Nautico */}
                <Link href="/obras/mirador-del-nautico">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                      <img
                        src="/proyectos/mirador-del-nautico/mirador-del-nautico-1-5e9d1231-ea09-4860-911b-d64b8fc41d48.png"
                        alt="Mirador del Nautico"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-light mb-2 tracking-wide">Mirador del Nautico</h3>
                    <p className="text-muted-foreground font-light text-sm tracking-wide">En construcción</p>
                  </div>
                </Link>

                {/* Confitería Cerro Campanario */}
                <Link href="/obras/confiteria-campanario">
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                      <img
                        src="/proyectos/confiteria-campanario/Screenshot_2026-03-05_at_11.59.32_AM-ef6827d8-98e5-4db8-bbd5-21ce23867846.png"
                        alt="Confitería Cerro Campanario"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-light mb-2 tracking-wide">Confitería Cerro Campanario</h3>
                    <p className="text-muted-foreground font-light text-sm tracking-wide">En construcción</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Obras Finalizadas */}
            <h2 className="text-3xl font-light mb-8 tracking-wide">Obras Finalizadas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <Link key={project.id} href={`/obras/${project.id}`}>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-light mb-2 tracking-wide">{project.title}</h3>
                    <p className="text-muted-foreground font-light text-sm tracking-wide">{project.location}</p>
                    <p className="text-muted-foreground font-light text-sm tracking-wide">
                      {project.surface} • {project.year}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
