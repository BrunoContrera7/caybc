import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Music, Utensils, Sparkles } from "lucide-react"

const caracteristicas = [
  {
    icon: Users,
    titulo: "Capacidad",
    descripcion: "Hasta 300 personas",
  },
  {
    icon: Music,
    titulo: "Audio y Luces",
    descripcion: "Equipamiento profesional",
  },
  {
    icon: Utensils,
    titulo: "Catering",
    descripcion: "Servicio completo disponible",
  },
  {
    icon: Sparkles,
    titulo: "Ambientación",
    descripcion: "Decoración personalizada",
  },
]

export function SalonFiestas() {
  return (
    <section id="salon" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary">Nuevo en Ciudad Deportiva</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Salón de Fiestas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Estrená nuestro flamante salón para eventos. El espacio perfecto para tu celebración.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative h-100 rounded-xl overflow-hidden">
              <img src="./images/modern-event-hall-party-room.web.webp" alt="Salón de Fiestas" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
                ¡Recién Inaugurado!
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Un espacio único para tus eventos</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ubicado en nuestra Ciudad Deportiva, el nuevo salón de fiestas cuenta con todas las comodidades para
                hacer de tu evento algo inolvidable. Ideal para cumpleaños, casamientos, eventos corporativos y
                celebraciones especiales.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {caracteristicas.map((item, idx) => (
                  <Card key={idx} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="p-8 pt-8">
                      <item.icon className="w-8 h-8 text-primary mb-2" />
                      <h4 className="font-semibold mb-1 text-sm">{item.titulo}</h4>
                      <p className="text-xs text-muted-foreground">{item.descripcion}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-accent border-l-4 border-primary p-6 rounded-lg mb-6">
                <p className="font-semibold mb-2">Beneficios para Socios</p>
                <p className="text-sm text-muted-foreground">
                  Tarifas preferenciales y prioridad en reservas para socios del club
                </p>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                Consultar Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
