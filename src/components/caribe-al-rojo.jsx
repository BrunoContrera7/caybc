import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Waves, Coffee, ShowerHead, Sun } from "lucide-react"

const servicios = [
  {
    icon: Waves,
    titulo: "Pileta Climatizada",
    descripcion: "Disfruta del agua durante todo el año",
  },
  {
    icon: Coffee,
    titulo: "Barra & Parrilla",
    descripcion: "Comidas y bebidas para toda la familia",
  },
  {
    icon: ShowerHead,
    titulo: "Vestuarios Modernos",
    descripcion: "Baños y duchas de primera calidad",
  },
  {
    icon: Sun,
    titulo: "Solarium",
    descripcion: "Amplias zonas de descanso y sombra",
  },
]

export function CaribeAlRojo() {
  return (
    <section id="caribe" className="py-16 md:py-24 bg-linear-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary">Complejo de Pileta</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Caribe al Rojo</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                El corazón del verano en CAYBC. Un espacio único para disfrutar en familia con las mejores
                instalaciones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {servicios.map((servicio, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <servicio.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{servicio.titulo}</h4>
                      <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-3">Horarios de Verano</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes a Viernes:</span>
                    <span className="font-medium">12:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábados, Domingos y Feriados:</span>
                    <span className="font-medium">10:00 - 20:30</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Ver Actividades y Precios
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/pileta1.webp"
                    alt="Pileta"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/pileta2.webp"
                    alt="Barra"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/pileta3.webp"
                    alt="Familia en pileta"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/images/pileta4.webp"
                    alt="Vestuarios"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
