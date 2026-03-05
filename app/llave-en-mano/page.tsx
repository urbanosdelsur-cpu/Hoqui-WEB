"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, DollarSign, Clock, Users, Shield, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function LlaveEnManoPage() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: CheckCircle2,
      title: t("llaveEnMano.benefits.quality.title"),
      description: t("llaveEnMano.benefits.quality.description"),
      details: t("llaveEnMano.benefits.quality.details"),
      slug: "calidad-comprobable",
    },
    {
      icon: DollarSign,
      title: t("llaveEnMano.benefits.price.title"),
      description: t("llaveEnMano.benefits.price.description"),
      slug: "precio-cierto",
    },
    {
      icon: Clock,
      title: t("llaveEnMano.benefits.deadline.title"),
      description: t("llaveEnMano.benefits.deadline.description"),
      slug: "plazo-cierto",
    },
    {
      icon: Users,
      title: t("llaveEnMano.benefits.personalized.title"),
      description: t("llaveEnMano.benefits.personalized.description"),
      slug: "trato-personalizado",
    },
    {
      icon: Shield,
      title: t("llaveEnMano.benefits.postSale.title"),
      description: t("llaveEnMano.benefits.postSale.description"),
      details: t("llaveEnMano.benefits.postSale.details"),
      slug: "servicio-post-venta",
    },
    {
      icon: Award,
      title: t("llaveEnMano.benefits.warranty.title"),
      description: t("llaveEnMano.benefits.warranty.description"),
      slug: "garantia",
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div className="fixed inset-0 z-0">
        <img src="/ejecucion-obra-background.png" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Header />

        <main className="mt-20">
          <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="text-center backdrop-blur-xl bg-white/80 p-6 sm:p-8 md:p-12 rounded-2xl border border-white/40 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 md:mb-8 tracking-tight text-foreground">
                  {t("llaveEnMano.intro.title")}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                  {t("llaveEnMano.intro.description")}
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div
                      key={index}
                      className="group backdrop-blur-xl bg-white/85 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex p-2.5 sm:p-3 md:p-4 bg-primary/10 rounded-full group-hover:bg-primary/15 transition-colors">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-foreground leading-tight break-words flex-1 pt-1 sm:pt-2">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4 font-light">
                        {benefit.description}
                      </p>
                      {benefit.details && (
                        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light pt-3 sm:pt-4 border-t border-border/50">
                          {benefit.details}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <div className="text-center backdrop-blur-xl bg-secondary/90 p-8 sm:p-12 md:p-16 rounded-2xl border border-white/30 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 md:mb-8 tracking-tight text-primary-foreground">
                  {t("llaveEnMano.cta.title")}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-primary-foreground/95 font-light leading-relaxed">
                  {t("llaveEnMano.cta.subtitle")}
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white text-foreground hover:bg-white/90 font-light text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-lg"
                >
                  <Link href="/contacto">{t("llaveEnMano.cta.button")}</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
