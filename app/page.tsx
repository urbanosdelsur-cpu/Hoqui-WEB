"use client"

import { Header } from "@/components/header"
import { Carousel } from "@/components/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Key, Hammer, Users, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { t, language } = useLanguage()

  const carouselImages = [
    {
      src: "/hero-carousel-1.png",
      alt: t("home.hero.slides.0.title"),
      title: t("home.hero.slides.0.title"),
      subtitle: t("home.hero.slides.0.subtitle"),
    },
    {
      src: "/hero-carousel-2.png",
      alt: t("home.hero.slides.1.title"),
      title: t("home.hero.slides.1.title"),
      subtitle: t("home.hero.slides.1.subtitle"),
    },
    {
      src: "/hero-carousel-3.png",
      alt: t("home.hero.slides.2.title"),
      title: t("home.hero.slides.2.title"),
      subtitle: t("home.hero.slides.2.subtitle"),
    },
    {
      src: "/hero-carousel-4.png",
      alt: t("home.hero.slides.3.title"),
      title: t("home.hero.slides.3.title"),
      subtitle: t("home.hero.slides.3.subtitle"),
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      <section className="mt-20">
        <Carousel images={carouselImages} />
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-3 sm:mb-4 tracking-tight">
              {t("home.services.title")}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
            <Link href="/llave-en-mano" className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-secondary/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:bg-secondary/50 group-hover:scale-105">
                <Key className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3">{t("home.services.cards.turnkey.title")}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed">
                {t("home.services.cards.turnkey.description")}
              </p>
            </Link>

            <Link href="/obras" className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-secondary/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:bg-secondary/50 group-hover:scale-105">
                <Hammer className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3">{t("home.services.cards.projects.title")}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed">
                {t("home.services.cards.projects.description")}
              </p>
            </Link>

            <Link href="/nosotros" className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-secondary/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:bg-secondary/50 group-hover:scale-105">
                <Users className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3">{t("home.services.cards.about.title")}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed">
                {t("home.services.cards.about.description")}
              </p>
            </Link>

            <Link href="/valores" className="flex flex-col items-center text-center group">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-secondary/30 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 transition-all duration-300 group-hover:bg-secondary/50 group-hover:scale-105">
                <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-normal mb-2 sm:mb-3">{t("home.services.cards.values.title")}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed">
                {t("home.services.cards.values.description")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 tracking-tight">
            {t("home.cta.title")}
          </h2>
          <p className="text-sm sm:text-base mb-6 sm:mb-8 text-secondary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
            {t("home.cta.subtitle")}
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal">
            <Link href="/contacto">{t("home.cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
