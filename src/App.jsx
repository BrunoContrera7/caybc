import { Navigation } from "./components/navigation"
import { Hero } from "./components/hero"
import { Noticias } from "./components/noticias"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Noticias />
    </main>
  )
}
