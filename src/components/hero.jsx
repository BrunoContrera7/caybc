import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary via-primary to-[oklch(0.45_0.25_22)]">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/soccer-stadium-aerial-view.jpg')`,
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
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Hacete Socio
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Conocé el Club
            </Button>
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
