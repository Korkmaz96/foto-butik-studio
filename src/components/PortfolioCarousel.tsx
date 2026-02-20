import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioImages } from "@/data/content";

interface PortfolioCarouselProps {
  images?: typeof portfolioImages;
  className?: string;
}

export const PortfolioCarousel = ({
  images = portfolioImages,
  className = "",
}: PortfolioCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 md:gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="flex-none w-[75vw] sm:w-[45vw] md:w-[32vw] lg:w-[25vw] xl:w-[22vw]"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-white/80 bg-black/30 px-2 py-1">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-8">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`carousel-dot ${index === selectedIndex ? "active" : ""}`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
