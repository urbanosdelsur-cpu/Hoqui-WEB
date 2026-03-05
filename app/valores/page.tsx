"use client"

import { Header } from "@/components/header"
import {
  Heart,
  Shield,
  Award,
  Calendar,
  MessageSquare,
  ClipboardCheck,
  Leaf,
  Users,
  TrendingUp,
  UsersRound,
  Package,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function ValoresPage() {
  const { t } = useLanguage()

  const mainPillars = [
    {
      icon: Heart,
      titleKey: "valores.pillars.compromiso.title",
      descriptionKey: "valores.pillars.compromiso.description",
    },
    {
      icon: Award,
      titleKey: "valores.pillars.calidad.title",
      descriptionKey: "valores.pillars.calidad.description",
    },
    {
      icon: Shield,
      titleKey: "valores.pillars.garantia.title",
      descriptionKey: "valores.pillars.garantia.description",
    },
  ]

  const additionalValues = [
    {
      icon: Calendar,
      titleKey: "valores.additional.planificacion.title",
      descriptionKey: "valores.additional.planificacion.description",
    },
    {
      icon: MessageSquare,
      titleKey: "valores.additional.comunicacion.title",
      descriptionKey: "valores.additional.comunicacion.description",
    },
    {
      icon: ClipboardCheck,
      titleKey: "valores.additional.control.title",
      descriptionKey: "valores.additional.control.description",
    },
    {
      icon: Leaf,
      titleKey: "valores.additional.medioAmbiente.title",
      descriptionKey: "valores.additional.medioAmbiente.description",
    },
    {
      icon: Package,
      titleKey: "valores.additional.proveedores.title",
      descriptionKey: "valores.additional.proveedores.description",
    },
    {
      icon: UsersRound,
      titleKey: "valores.additional.trabajadores.title",
      descriptionKey: "valores.additional.trabajadores.description",
    },
    {
      icon: TrendingUp,
      titleKey: "valores.additional.innovacion.title",
      descriptionKey: "valores.additional.innovacion.description",
    },
    {
      icon: Users,
      titleKey: "valores.additional.equipo.title",
      descriptionKey: "valores.additional.equipo.description",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[400px] bg-secondary">
          <img
            src="/modern-construction-values.jpg"
            alt={t("valores.hero.title")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
              <h1 className="text-5xl lg:text-6xl font-light text-primary-foreground mb-4">
                {t("valores.hero.title")}
              </h1>
              <p className="text-xl font-light text-primary-foreground/90 max-w-2xl">{t("valores.hero.subtitle")}</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">{t("valores.intro")}</p>
            </div>
          </div>
        </section>

        {/* Main Pillars - Three Columns */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {mainPillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-normal mb-4 text-center tracking-wide">{t(pillar.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">{t(pillar.descriptionKey)}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Values Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
                {t("valores.additionalIntro")}
              </p>
            </div>
          </div>
        </section>

        {/* Additional Values Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {additionalValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-normal mb-3 tracking-wide uppercase text-sm">{t(value.titleKey)}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{t(value.descriptionKey)}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
