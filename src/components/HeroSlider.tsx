import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    id: 1,
    image: hero1,
    title: "Premium Audio Experience",
    subtitle: "Discover our latest wireless headphones",
    description: "Immerse yourself in crystal-clear sound with our premium collection",
    cta: "Shop Audio",
    badge: "🎧 New Arrivals"
  },
  {
    id: 2,
    image: hero2,
    title: "Smart Lifestyle Technology",
    subtitle: "Track your fitness journey",
    description: "Advanced smartwatches that adapt to your active lifestyle",
    cta: "Explore Wearables",
    badge: "⌚ Featured"
  },
  {
    id: 3,
    image: hero3,
    title: "Fashion Forward",
    subtitle: "Trending styles for every season",
    description: "Curated fashion collection from top designers worldwide",
    cta: "Shop Fashion",
    badge: "👕 Trending"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4 px-4 py-2">
                    {slide.badge}
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <h2 className="text-xl md:text-2xl text-accent mb-4">
                    {slide.subtitle}
                  </h2>
                  
                  <p className="text-lg text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <Button className="btn-hero text-lg px-8 py-4">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-accent scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}