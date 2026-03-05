"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    {
      label: t("nav.llaveEnMano"),
      href: "/llave-en-mano",
      lines: language === "es" ? ["LLAVE EN", "MANO"] : ["TURNKEY"],
    },
    { label: t("nav.obras"), href: "/obras" },
    { label: t("nav.servicios"), href: "/servicios" },
    { label: t("nav.terminaciones"), href: "/terminaciones" },
    { label: t("nav.nosotros"), href: "/nosotros" },
    {
      label: t("nav.comoTrabajamos"),
      href: "/como-trabajamos",
      lines: language === "es" ? ["COMO", "TRABAJAMOS"] : ["HOW WE", "WORK"],
    },
    { label: t("nav.valores"), href: "/valores" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      {/* Increased gap and padding for better spacing */}
      <div className="flex items-center justify-between h-20 gap-6 px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img src="/hoqui-logo.png" alt="HOQUI Construcciones S.R.L." className="h-14 sm:h-16 lg:h-[4.5rem] w-auto" />
        </Link>

        {/* Increased gap between nav items from gap-2 to gap-4 */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium tracking-wide text-foreground hover:text-primary transition-colors flex flex-col items-center leading-tight"
            >
              {item.lines ? (
                <>
                  {item.lines.map((line, idx) => (
                    <span key={idx}>{line}</span>
                  ))}
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Increased gap between language selector and contact button */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-2 text-xs font-light tracking-wide">
            <button
              onClick={() => setLanguage("es")}
              className={`transition-colors ${
                language === "es" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Español
            </button>
            <span className="text-muted-foreground">-</span>
            <button
              onClick={() => setLanguage("en")}
              className={`transition-colors ${
                language === "en" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs tracking-wide px-4 py-2"
          >
            <Link href="/contacto">{t("nav.contacto")}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden py-4 border-t border-border">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-normal text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 text-sm font-light py-2">
              <button
                onClick={() => setLanguage("es")}
                className={`transition-colors ${
                  language === "es" ? "text-primary font-medium" : "text-muted-foreground"
                }`}
              >
                Español
              </button>
              <span className="text-muted-foreground">-</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors ${
                  language === "en" ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                English
              </button>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-normal mt-2">
              <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>
                {t("nav.contacto")}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
