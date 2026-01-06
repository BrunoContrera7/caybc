import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Trophy, Users2, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const noticias = [
  {
    id: 1,
    titulo: "Empate del Primer Equipo",
    categoria: "Fútbol Mayor",
    fecha: "25 de Diciembre, 2024",
    descripcion: "Empate 1-1 ante Defensores de Armstrong. Gol de Aquiles Heffeli.",
    contenidoCompleto:
      "El primer equipo de CAYBC empato 1-1 ante Defensores de Armstrong en un partido lleno de emociones. Los goles llegaron en el primer tiempo con Martínez abriendo el marcador a los 15 minutos, seguido por Sánchez a los 28 minutos. En el segundo tiempo, el rival descontó, pero López sentenció el partido a los 82 minutos con un golazo de tiro libre. Excelente actuación del equipo que continúa en la cima de la tabla.",
    imagenes: [
      "./images/image1.jpg",
      "./images/image2.jpg",
      "./images/image3.jpg",
    ],
    icon: Trophy,
  },
  {
    id: 2,
    titulo: "Clasificación del Hockey Femenino",
    categoria: "Hockey",
    fecha: "23 de Diciembre, 2024",
    descripcion: "Nuestro equipo de hockey femenino se clasificó para la final regional tras empatar 2-2.",
    contenidoCompleto:
      "Nuestro equipo de hockey femenino protagonizó un partido histórico...",
    imagenes: ["/field-hockey-women-playing.jpg", "/field-hockey-team-huddle.jpg"],
    icon: Trophy,
  },
  {
    id: 3,
    titulo: "Inauguración de Nueva Temporada de Pileta",
    categoria: "Natación",
    fecha: "20 de Diciembre, 2024",
    descripcion: "El Caribe al Rojo abrió sus puertas para el verano...",
    contenidoCompleto:
      "El complejo Caribe al Rojo dio inicio a la temporada de verano...",
    imagenes: ["/swimming-pool-summer-activities.jpg", "/pool-bar-area.jpg", "/pool-aerial-view.jpg"],
    icon: Users2,
  },
]

export function Noticias() {
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null)
  const [imagenActual, setImagenActual] = useState(0)

  const abrirNoticia = (noticia) => {
    setNoticiaSeleccionada(noticia)
    setImagenActual(0)
  }

  const siguienteImagen = () => {
    if (!noticiaSeleccionada) return
    setImagenActual((prev) =>
      prev === noticiaSeleccionada.imagenes.length - 1 ? 0 : prev + 1
    )
  }

  const anteriorImagen = () => {
    if (!noticiaSeleccionada) return
    setImagenActual((prev) =>
      prev === 0 ? noticiaSeleccionada.imagenes.length - 1 : prev - 1
    )
  }

  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {noticias.map((noticia) => (
            <Card
              key={noticia.id}
              className="cursor-pointer hover:shadow-lg"
              onClick={() => abrirNoticia(noticia)}
            >
              <div className="h-100 overflow-auto">
                <img
                  src={noticia.imagenes[0]}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {noticia.fecha}
                </div>
                <h3 className="text-xl font-bold">{noticia.titulo}</h3>
                <p className="text-muted-foreground">{noticia.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!noticiaSeleccionada} onOpenChange={(open) => !open && setNoticiaSeleccionada(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {noticiaSeleccionada && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary">{noticiaSeleccionada.categoria}</Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {noticiaSeleccionada.fecha}
                  </span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl text-left">{noticiaSeleccionada.titulo}</DialogTitle>
              </DialogHeader>

              {/* Galería de imágenes con navegación */}
              <div className="relative w-full rounded-lg overflow-hidden bg-muted">
                <img
                  src={noticiaSeleccionada.imagenes[imagenActual] || "/placeholder.svg"}
                  alt={`${noticiaSeleccionada.titulo} - Imagen ${imagenActual + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Botones de navegación si hay más de una imagen */}
                {noticiaSeleccionada.imagenes.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={anteriorImagen}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={siguienteImagen}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>

                    {/* Indicadores de imagen */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {noticiaSeleccionada.imagenes.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setImagenActual(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === imagenActual ? "bg-primary w-6" : "bg-white/60 hover:bg-white/90"
                          }`}
                          aria-label={`Ver imagen ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Contador de imágenes */}
              {noticiaSeleccionada.imagenes.length > 1 && (
                <p className="text-center text-sm text-muted-foreground">
                  Imagen {imagenActual + 1} de {noticiaSeleccionada.imagenes.length}
                </p>
              )}

              {/* Contenido completo de la noticia */}
              <div className="space-y-4">
                <p className="text-lg font-semibold text-foreground">{noticiaSeleccionada.descripcion}</p>
                <p className="text-muted-foreground leading-relaxed">{noticiaSeleccionada.contenidoCompleto}</p>
              </div>

              {/* Botón de compartir en redes */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() =>
                    window.open(`https://www.instagram.com/p/DQAxxa-Ee4y/?img_index=1`, "_blank")
                  }
                >
                  Ver en Instagram
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/permalink.php?story_fbid=1397856772350035&id=100063771765163&ref=embed_post`,
                      "_blank",
                    )
                  }
                >
                  Ver en Facebook
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
