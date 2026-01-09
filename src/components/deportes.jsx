import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users } from "lucide-react"

const deportes = [
  {
    id: 1,
    nombre: "Fútbol",
    categorias: ["Mayor", "Juvenil", "Infantil", "Femenino"],
    descripcion: "Nuestro deporte insignia con equipos en todas las categorías",
    imagen: "/images/futbol-fem.webp",
    color: "bg-primary",
  },
  {
    id: 2,
    nombre: "Hockey",
    categorias: ["Femenino"],
    descripcion: "Equipo de hockey femenino con gran trayectoria regional",
    imagen: "/images/hockey.webp",
    color: "bg-primary",
  },
  {
    id: 3,
    nombre: "Natación",
    categorias: ["Todas las edades"],
    descripcion: "Escuela de natación y equipo competitivo en el Caribe al Rojo",
    imagen: "/images/natacion.webp",
    color: "bg-primary",
  },
  {
    id: 4,
    nombre: "Taekwondo",
    categorias: ["Todas las edades"],
    descripcion: "Clases de taekwondo para niños y adultos, desde principiantes hasta avanzados",
    imagen: "/images/taekwondo.webp",
    color: "bg-primary",
  },
  {
    id: 5,
    nombre: "Basquet",
    categorias: ["Masculino", "Femenino", "Todas las edades"],
    descripcion: "Equipos de basquet en diversas categorías y niveles",
    imagen: "/images/basquet-fem.webp",
    color: "bg-primary",
  },
  {
    id: 6,
    nombre: "Tenis",
    categorias: ["Masculino", "Femenino", "Todas las edades"],
    descripcion: "Clases y torneos de tenis para socios del club",
    imagen: "/indoor-soccer-futsal.jpg",
    color: "bg-primary",
  },
  {
    id: 7,
    nombre: "Padel",
    categorias: ["Masculino", "Femenino", "Todas las edades"],
    descripcion: "Cancha de padel disponible para socios, con clases y torneos regulares",
    imagen: "/images/padel.webp",
    color: "bg-primary",
  },
  {
    id: 8,
    nombre: "Danza y Gimnasia",
    categorias: ["Masculino", "Femenino", "Todas las edades"],
    descripcion: "Clases de danza y gimnasia artística para niños y adultos",
    imagen: "/images/danzas-gimnasia.webp",
    color: "bg-primary",
  },
]

export function Deportes() {
  return (
    <section id="deportes" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary">Nuestros Deportes</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Disciplinas del Club</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Ofrecemos una amplia variedad de deportes para todas las edades y niveles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deportes.map((deporte) => (
              <Card
                key={deporte.id}
                className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deporte.imagen || "/placeholder.svg"}
                    alt={deporte.nombre}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 ${deporte.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{deporte.nombre}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{deporte.descripcion}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Categorías:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {deporte.categorias.map((categoria, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {categoria}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
