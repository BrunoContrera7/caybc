import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { Cabañas } from "./components/cabañas"
import { Noticias } from "./components/noticias"
import { Tienda } from "./components/tienda"
import { Deportes } from "./components/deportes"
import { CaribeAlRojo } from "./components/caribe-al-rojo"
import { SalonFiestas } from "./components/salon-de-fiestas"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Cabañas />
      <Noticias />
      <Tienda />
      <Deportes />
      <CaribeAlRojo />
      <SalonFiestas />
    </main>
  )
}
