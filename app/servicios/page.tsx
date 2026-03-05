"use client"

import { Header } from "@/components/header"
import Link from "next/link"
import { HardHat, ClipboardList, Building, FileText, Home, Key, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ServiciosPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: HardHat,
      title: t("servicios.items.ejecucion"),
      slug: "ejecucion-de-obra",
      iconColor: "bg-accent",
    },
    {
      icon: ClipboardList,
      title: t("servicios.items.administracion"),
      slug: "administracion-de-proyectos",
      iconColor: "bg-accent",
    },
    {
      icon: Building,
      title: t("servicios.items.desarrollos"),
      slug: "desarrollos-inmobiliarios",
      iconColor: "bg-accent",
    },
    {
      icon: FileText,
      title: t("servicios.items.remodelaciones"),
      slug: "remodelaciones",
      iconColor: "bg-accent",
    },
    {
      icon: Home,
      title: t("servicios.items.autosustentables"),
      slug: "construccion-casas-autosustentables",
      iconColor: "bg-accent",
    },
    {
      icon: Key,
      title: t("servicios.items.contratoLlave"),
      slug: "/llave-en-mano",
      iconColor: "bg-accent",
    },
    {
      icon: Wrench,
      title: t("servicios.items.postVenta"),
      slug: "servicio-post-venta",
      iconColor: "bg-accent",
    },
  ]

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url(/servicios-background.png)" }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        <Header />

        <main className="mt-20">
          {/* Hero Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-5xl lg:text-6xl font-light text-white mb-6 uppercase tracking-wide">
                {t("servicios.hero.title")}
              </h1>
              <div className="w-24 h-px bg-white mt-8" />
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
                {services.map((service, index) => {
                  const Icon = service.icon
                  const href = service.slug.startsWith("/") ? service.slug : `/servicios/${service.slug}`
                  return (
                    <Link
                      key={index}
                      href={href}
                      className="flex flex-col items-center text-center group cursor-pointer"
                    >
                      <div
                        className={`w-32 h-32 rounded-full ${service.iconColor} flex items-center justify-center mb-8 group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100`}
                      >
                        <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base font-light uppercase tracking-widest text-white group-hover:text-white/80 transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
