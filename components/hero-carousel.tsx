"use client"

import React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const slides = [
  {
    src: "/slide-web-BẢN-ĐỒ-XÂY-NHÀ.jpg",
    alt: "Bản đồ xây nhà - hành trình xây dựng",
  },
  {
    src: "/slide-web-BẢN-ĐỒ-XÂY-NHÀ4.jpg",
    alt: "Bản đồ xây nhà - tầm bản đồ",
  },
]

export function HeroCarousel() {
  const [api, setApi] = React.useState<any>(null)

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: true,
        }),
      ]}
      setApi={setApi}
      className="relative"
    >
      <CarouselContent className="m-0">
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="p-0">
            <div className="relative w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1000}
                height={600}
                priority={index === 0}
                className="relative rounded-2xl shadow-strong object-cover w-full h-auto"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <CarouselPrevious
          variant="outline"
          className="bg-white/80 hover:bg-white border-white text-[#0066CC]"
        />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <CarouselNext
          variant="outline"
          className="bg-white/80 hover:bg-white border-white text-[#0066CC]"
        />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === (api?.selectedIndex ?? 0)
                ? "bg-white w-8"
                : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  )
}

