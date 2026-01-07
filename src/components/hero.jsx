import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-br from-primary via-primary to-[rgb(147, 91, 92)]">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('./images/soccer-stadium-aerial-view.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">Desde 1907 · Tradición y Pasión</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Club Atlético y Biblioteca Campaña
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 text-balance max-w-2xl mx-auto leading-relaxed">
            Más que un club, una familia. Deportes, cultura y comunidad en el corazón de Campaña.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://www.google.com/maps/place/Club+Atl%C3%A9tico+y+Biblioteca+Campa%C3%B1a/@-32.8561765,-61.1499806,18z/data=!4m6!3m5!1s0x95b625c96e2c5acf:0x87f6c1f105faafc7!8m2!3d-32.8573296!4d-61.1487297!16s%2Fg%2F11q2tjkh9g?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Hacete Socio
            </Button>
            </a>
            <a href="https://www.google.com/maps/place/Caribe+al+Rojo-+Club+Atl%C3%A9tico+y+Biblioteca+Campa%C3%B1a./@-32.8496624,-61.1371919,16z/data=!4m6!3m5!1s0x95b63b910fd2f697:0xc45a0aa7e48ad04!8m2!3d-32.8491311!4d-61.1398789!16s%2Fg%2F11gx_d57xb?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Conocé el Club
            </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Trophy className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">118</div>
              <div className="text-sm text-white/80">Años de Historia</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Users className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">6,500+</div>
              <div className="text-sm text-white/80">Socios Activos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-3xl font-bold mb-1">8</div>
              <div className="text-sm text-white/80">Disciplinas Deportivas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
