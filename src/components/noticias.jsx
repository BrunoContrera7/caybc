import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Noticias() {
  const [noticias, setNoticias] = useState([])
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null)
  const [imagenActual, setImagenActual] = useState(0)

  useEffect(() => {
    fetch("/data/noticias.json")
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.error("Error cargando noticias:", err))
  }, [])

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
              <div className="h-100 overflow-hidden">
                <img
                  src={noticia.imagenes[0]}
                  alt={noticia.titulo}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  {noticia.fecha}
                </div>
                <h3 className="text-xl font-bold">{noticia.titulo}</h3>
                <p className="text-muted-foreground">
                  {noticia.descripcion}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog
        open={!!noticiaSeleccionada}
        onOpenChange={(open) => !open && setNoticiaSeleccionada(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {noticiaSeleccionada && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary">
                    {noticiaSeleccionada.categoria}
                  </Badge>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {noticiaSeleccionada.fecha}
                  </span>
                </div>
                <DialogTitle className="text-2xl md:text-3xl text-left">
                  {noticiaSeleccionada.titulo}
                </DialogTitle>
              </DialogHeader>

              {/* Galería */}
              <div className="relative w-full rounded-lg overflow-hidden bg-muted">
                <img
                  src={
                    noticiaSeleccionada.imagenes[imagenActual] ||
                    "/placeholder.svg"
                  }
                  alt={`${noticiaSeleccionada.titulo}`}
                  className="w-full h-full object-cover"
                />

                {noticiaSeleccionada.imagenes.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90"
                      onClick={anteriorImagen}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90"
                      onClick={siguienteImagen}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>

              {noticiaSeleccionada.imagenes.length > 1 && (
                <p className="text-center text-sm text-muted-foreground">
                  Imagen {imagenActual + 1} de{" "}
                  {noticiaSeleccionada.imagenes.length}
                </p>
              )}

              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  {noticiaSeleccionada.descripcion}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {noticiaSeleccionada.contenidoCompleto}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
