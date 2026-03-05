"use client"

import { Header } from "@/components/header"
import { HardHat, Users, Shield, FileText, Eye, Scale, Hammer } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export default function EjecucionDeObraPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/ejecucion-obra-background.png"
          alt="Ejecución de Obra Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Header />

        <main className="mt-20">
          {/* Hero Section */}
          <section className="relative py-24">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="backdrop-blur-xl bg-white/85 p-12 rounded-2xl border border-white/40 shadow-xl max-w-4xl mx-auto">
                <div className="flex items-center gap-8 mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center flex-shrink-0">
                    <HardHat className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-light text-foreground uppercase tracking-wide">
                    {t("ejecucionObra.hero.title")}
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="backdrop-blur-xl bg-white/80 p-12 rounded-2xl border border-white/40 shadow-2xl">
                <div className="mb-16">
                  <h2 className="text-3xl font-light text-foreground mb-8 tracking-wide">
                    {t("ejecucionObra.intro.title")}
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                    {t("ejecucionObra.intro.p1")}
                    <strong className="font-normal text-foreground">{t("ejecucionObra.intro.p1Bold")}</strong>.
                  </p>
                  <p className="text-lg text-foreground/80 leading-relaxed mb-6">{t("ejecucionObra.intro.p2")}</p>
                  <p className="text-lg text-foreground/80 leading-relaxed">{t("ejecucionObra.intro.p3")}</p>
                </div>

                {/* Modalidades de Contratación */}
                <div className="mb-0">
                  <h3 className="text-2xl font-light text-foreground mb-8 tracking-wide">
                    {t("ejecucionObra.modalidades.title")}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                      <h4 className="text-xl font-normal text-foreground mb-3 tracking-wide">
                        {t("ejecucionObra.modalidades.admin.title")}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {t("ejecucionObra.modalidades.admin.description")}
                      </p>
                    </div>
                    <div className="backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                      <h4 className="text-xl font-normal text-foreground mb-3 tracking-wide">
                        {t("ejecucionObra.modalidades.llave.title")}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {t("ejecucionObra.modalidades.llave.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Nuestros Compromisos */}
          <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
              <div className="backdrop-blur-xl bg-white/80 p-12 rounded-2xl border border-white/40 shadow-2xl">
                <h2 className="text-3xl font-light text-foreground mb-16 text-center tracking-wide">
                  {t("ejecucionObra.compromisos.title")}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Mano de obra */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <Users className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.manoObra.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed font-light">
                      {t("ejecucionObra.compromisos.manoObra.description")}
                    </p>
                  </div>

                  {/* Seguridad laboral */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <Shield className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.seguridad.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed font-light">
                      {t("ejecucionObra.compromisos.seguridad.description")}
                    </p>
                  </div>

                  {/* Adicionales */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <FileText className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.adicionales.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed font-light">
                      {t("ejecucionObra.compromisos.adicionales.description")}
                    </p>
                  </div>

                  {/* Supervisión */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <Eye className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.supervision.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed font-light">
                      {t("ejecucionObra.compromisos.supervision.description")}
                    </p>
                  </div>

                  {/* Responsabilidad laboral */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <Scale className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.responsabilidad.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-4 font-light">
                      {t("ejecucionObra.compromisos.responsabilidad.description")}
                    </p>
                  </div>

                  {/* Sistemas Constructivos */}
                  <div className="group backdrop-blur-xl bg-white/85 p-8 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all hover:bg-white/90">
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors">
                        <Hammer className="w-7 h-7 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-light text-foreground mb-4 tracking-wide">
                        {t("ejecucionObra.compromisos.sistemas.title")}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-4 font-light">
                      {t("ejecucionObra.compromisos.sistemas.description")}
                    </p>
                    <ul className="space-y-2 text-foreground/70 text-sm font-light">
                      {(t("ejecucionObra.compromisos.sistemas.list") as unknown as string[]).map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
