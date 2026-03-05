"use client"

import { Header } from "@/components/header"
import { Target, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function NosotrosPage() {
  const { t } = useLanguage()

  const stats = [
    { number: "20+", labelKey: "nosotros.stats.experience" },
    { number: "150+", labelKey: "nosotros.stats.projects" },
    { number: "50+", labelKey: "nosotros.stats.clients" },
    { number: "100%", labelKey: "nosotros.stats.commitment" },
  ]

  const teamMembers = [
    {
      name: "EDUARDO HOQUI",
      role: "Socio Gerente",
      specialty: "Ingeniero en Construcciones",
      image: "/eduardo-hoqui.png",
    },
    {
      name: "PABLO TOMMASONE",
      role: "Socio Gerente",
      specialty: "Ingeniero Civil",
      image: "/pablo-tommasone.png",
    },
    {
      name: "CLAUDIO GIGENA",
      role: "Socio",
      specialty: "Coordinador de Obra",
      image: "/claudio-gigena.png",
    },
    {
      name: "MARTA AMPUERO",
      role: "Gerente Recursos Humanos",
      specialty: "",
      image: "/marta-ampuero.png",
    },
    {
      name: "CRISTINA COLITRIPAY",
      role: "Administrativa",
      specialty: "",
      image: "/cristina-colitripay.png",
    },
    {
      name: "PEDRO SOLIS",
      role: "Administrativo & RRSS",
      specialty: "",
      image: "/pedro-solis.png",
    },
    {
      name: "RAMÓN PALLERES",
      role: "Jefe de Obras",
      specialty: "",
      image: "/ramon-palleres.png",
    },
    {
      name: "ANDREI MEDVEDEV",
      role: "Arquitecto",
      specialty: "",
      image: "/andrei-medvedev.png",
    },
    {
      name: "NUNÉ AVEDISSIAN",
      role: "Gerente de Proyectos",
      specialty: "Arquitecta",
      image: "/nune-avedissian.png",
    },
    {
      name: "GASTÓN TOMMASONE",
      role: "Oficina Técnica de Obra",
      specialty: "",
      image: "/gaston-tommasone.png",
    },
    {
      name: "RAMIRO HOQUI",
      role: "Gerente Comercial y Finanzas",
      specialty: "",
      image: "/ramiro-hoqui.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mt-20">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-secondary">
          <img src="/construction-team.jpg" alt={t("nosotros.hero.title")} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2 sm:mb-4">
                {t("nosotros.hero.title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                {t("nosotros.hero.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                  {t("nosotros.historia.title")}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {t("nosotros.historia.p1")}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {t("nosotros.historia.p2")}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t("nosotros.historia.p3")}
                </p>
              </div>
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden flex items-center justify-center bg-card">
                <img src="/hoqui-logo.png" alt="Logo HOQUI Construcciones" className="w-3/4 h-auto object-contain" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">{t(stat.labelKey)}</div>
                </div>
              ))}
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t("nosotros.mision.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("nosotros.mision.description")}
                </p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{t("nosotros.vision.title")}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {t("nosotros.vision.description")}
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="mt-16 sm:mt-24 md:mt-32">
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                  {t("nosotros.equipo.title")}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("nosotros.equipo.subtitle")}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-6 sm:p-8 text-center border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="mb-4 sm:mb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto object-cover grayscale"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{member.name}</h3>
                    <div className="w-20 sm:w-24 h-px bg-primary mx-auto mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg font-semibold mb-2">{member.role}</p>
                    {member.specialty && (
                      <p className="text-sm sm:text-base text-muted-foreground">{member.specialty}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
