import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#noticias", label: "Noticias" },
    { href: "#deportes", label: "Deportes" },
    { href: "#caribe", label: "Caribe al Rojo" },
    { href: "#salon", label: "Salón de Fiestas" },
    { href: "#historia", label: "Historia" },
    { href: "#ubicaciones", label: "Ubicaciones" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <img src="./images/logo-caybc.png" alt="Logo Campaña" className="bg-transparent"/>
            </div>
            <div className="hidden md:block">
              <span className="font-bold text-lg">
                Club Atlético y Biblioteca Campaña
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Contacto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Contacto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
