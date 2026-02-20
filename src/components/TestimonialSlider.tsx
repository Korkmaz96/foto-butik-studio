import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/content";

export const TestimonialSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t) => (
            <div key={t.id} className="flex-none w-full px-4">
              <div className="text-center py-8">
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="hsl(var(--sand))"
                      color="hsl(var(--sand))"
                    />
                  ))}
                </div>
                <blockquote className="font-display text-xl md:text-2xl font-light italic leading-relaxed text-foreground mb-8 px-4">
                  „{t.text}"
                </blockquote>
                <div>
                  <p className="font-medium text-sm tracking-wide">{t.name}</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={scrollPrev}
          className="w-9 h-9 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Vorherige Bewertung"
        >
          <ChevronLeft size={14} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`carousel-dot ${i === selectedIndex ? "active" : ""}`}
              aria-label={`Bewertung ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={scrollNext}
          className="w-9 h-9 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Nächste Bewertung"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
};
