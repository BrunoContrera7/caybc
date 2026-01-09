import { Card, CardContent } from "@/components/ui/card"
import { Home } from "lucide-react"

export function Cabañas() {
  return (
    <section id="cabañas" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Cabañas destacadas */}
          <Card className="bg-linear-to-br from-accent to-background border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Home className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">Cabañas para Reservar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    En nuestra Ciudad Deportiva contamos con cómodas cabañas disponibles para alquiler. Perfectas para
                    eventos, concentraciones deportivas o escapadas familiares.
                  </p>
                </div>
                <div className="shrink-0">
                  <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Consultar Disponibilidad
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
