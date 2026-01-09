
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"

const CarouselContext = React.createContext(null)

export function Carousel({ opts, className, children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts)

  return (
    <CarouselContext.Provider value={emblaApi}>
      <div
        ref={emblaRef}
        className={cn("relative overflow-hidden", className)}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className, children }) {
  return (
    <div
      className={cn(
        "flex gap-4 px-1",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CarouselItem({ className, children }) {
  return (
    <div
      className={cn(
        "min-w-0 shrink-0 grow-0",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CarouselPrevious({ className }) {
  const embla = React.useContext(CarouselContext)

  return (
    <button
      onClick={() => embla?.scrollPrev()}
      className={cn(
        "absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow hover:bg-muted",
        className
      )}
    >
      <ChevronLeft className="h-4 w-4" />
    </button>
  )
}

export function CarouselNext({ className }) {
  const embla = React.useContext(CarouselContext)

  return (
    <button
      onClick={() => embla?.scrollNext()}
      className={cn(
        "absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-background p-2 shadow hover:bg-muted",
        className
      )}
    >
      <ChevronRight className="h-4 w-4" />
    </button>
  )
}
