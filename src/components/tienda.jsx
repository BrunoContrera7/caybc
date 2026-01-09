
import { useState } from "react"
import { ShoppingBag, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"


const products = [
  {
    id: 1,
    name: "Camiseta Oficial CAYBC",
    description: "Camiseta oficial del club con escudo bordado",
    price: "$25.000",
    image: "./images/camiseta-caybc.webp",
    category: "Indumentaria",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rojo/Blanco", "Blanco/Rojo"],
    detailedDescription:
      "Camiseta oficial del Club Atlético y Biblioteca Campaña. Confeccionada en tela deportiva de alta calidad, con tecnología de secado rápido. Incluye escudo del club bordado en el pecho y número en la espalda opcional.",
  },
  {
    id: 2,
    name: "Vaso Térmico CAYBC",
    description: "Vaso térmico de acero inoxidable con logo del club",
    price: "$8.500",
    image: "./images/vaso.webp",
    category: "Accesorios",
    detailedDescription:
      "Vaso térmico de acero inoxidable de 500ml. Mantiene bebidas frías por 24 horas y calientes por 12 horas. Logo del club grabado. Ideal para llevar al entrenamiento o trabajo.",
  },
  {
    id: 3,
    name: "Gorra CAYBC",
    description: "Gorra deportiva con visera y logo bordado",
    price: "$6.000",
    image: "/images/gorra.webp",
    category: "Accesorios",
    colors: ["Rojo", "Blanco", "Rojo/Blanco"],
    detailedDescription:
      "Gorra deportiva con visera curva, ajuste trasero con hebilla metálica. Logo del club bordado en frente. Material transpirable ideal para protegerse del sol.",
  },
  {
    id: 4,
    name: "Campera Rompeviento",
    description: "Campera rompeviento con capucha",
    price: "$35.000",
    image: "./images/campera.webp",
    category: "Indumentaria",
    sizes: ["S", "M", "L", "XL", "XXL"],
    detailedDescription:
      "Campera rompeviento oficial con capucha ajustable. Material impermeable y respirable. Bolsillos con cierre. Logo del club estampado en pecho y espalda. Perfecta para entrenamientos en días fríos.",
  },
  {
    id: 5,
    name: "Toalla Deportiva",
    description: "Toalla de microfibra con logo del club",
    price: "$7.500",
    image: "./images/toalla.webp",
    category: "Accesorios",
    detailedDescription:
      "Toalla deportiva de microfibra de secado rápido, 80x40cm. Con logo del club bordado. Ultra absorbente y compacta, ideal para natación y gimnasio.",
  },
  {
    id: 6,
    name: "Mochila CAYBC",
    description: "Mochila deportiva con múltiples compartimentos",
    price: "$18.000",
    image: "./images/mochila.webp",
    category: "Accesorios",
    detailedDescription:
      "Mochila deportiva con compartimento principal, bolsillo frontal con cierre y bolsillos laterales para botellas. Logo del club bordado. Tirantes acolchados y espalda ventilada. Capacidad 30L.",
  },
  {
    id: 7,
    name: "Short Deportivo",
    description: "Short deportivo oficial del club",
    price: "$12.000",
    image: "./images/short.webp",
    category: "Indumentaria",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rojo", "Blanco"],
    detailedDescription:
      "Short deportivo con cintura elástica y cordón ajustable. Tela ligera y transpirable. Logo del club estampado. Bolsillos laterales con cierre.",
  },
  {
    id: 8,
    name: "Medias Deportivas",
    description: "Pack de 3 pares de medias deportivas",
    price: "$5.500",
    image: "./images/medias.webp",
    category: "Indumentaria",
    sizes: ["35-38", "39-42", "43-46"],
    detailedDescription:
      "Pack de 3 pares de medias deportivas de algodón con elastano. Refuerzo en talón y punta. Banda con colores del club. Transpirables y de secado rápido.",
  },
]

export function Tienda() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  const handleWhatsAppOrder = () => {
    if (!selectedProduct) return

    let message = `Hola! Me interesa comprar: ${selectedProduct.name}\n`
    message += `Precio: ${selectedProduct.price}\n`

    if (selectedSize) message += `Talle: ${selectedSize}\n`
    if (selectedColor) message += `Color: ${selectedColor}\n`

    message += `\n¿Está disponible?`

    const phoneNumber = "5493512345678"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`

    window.open(whatsappUrl, "_blank")
  }


  return (
    <section id="tienda" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Tienda Oficial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Merchandising del Club</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Llevá los colores del CAYBC con vos. Productos oficiales de alta calidad.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative aspect-square">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary">{product.category}</Badge>
                      </div>
                      <div className="p-4 space-y-3 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                            {product.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-2xl font-bold text-primary">{product.price}</span>
                          <Button
                            onClick={() => {
                              setSelectedProduct(product)
                              setSelectedSize("")
                              setSelectedColor("")
                            }}
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            Ver más
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-white" />
          </Carousel>
        </div>

        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProduct?.name}</DialogTitle>
              <DialogDescription>{selectedProduct?.category}</DialogDescription>
            </DialogHeader>

            {selectedProduct && (
              <div className="space-y-6">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary" />
                      Descripción
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProduct.detailedDescription}</p>
                  </div>

                  {selectedProduct.sizes && (
                    <div>
                      <label className="font-semibold mb-2 block">Talle</label>
                      <Select value={selectedSize} onValueChange={setSelectedSize}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleccioná tu talle" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedProduct.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {selectedProduct.colors && (
                    <div>
                      <label className="font-semibold mb-2 block">Color</label>
                      <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Seleccioná el color" />
                        </SelectTrigger>
                        <SelectContent>
                          {selectedProduct.colors.map((color) => (
                            <SelectItem key={color} value={color}>
                              {color}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Precio</p>
                      <p className="text-3xl font-bold text-primary">{selectedProduct.price}</p>
                    </div>
                    <Button
                      onClick={handleWhatsAppOrder}
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Comprar por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
