import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1581092918484-8313e1f2524e?q=80&w=2070',
      title: 'Crafting Excellence',
      subtitle: 'In Every Stitch',
      description: 'Three decades of vision, commitment, and global recognition',
    },
    {
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea1847c8?q=80&w=2074',
      title: 'Innovation & Design',
      subtitle: 'Fashion Forward',
      description: 'Transforming creative visions into reality through cutting-edge design',
    },
    {
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070',
      title: 'Quality Assured',
      subtitle: 'Global Standards',
      description: 'Meeting the highest international standards for compliance and performance',
    },
    {
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2086',
      title: 'Sustainable Manufacturing',
      subtitle: 'Eco-Conscious',
      description: '40% renewable energy and zero hazardous chemicals in production',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" data-testid="hero-slider">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#0f172a]/85 to-[#0f172a]/75"></div>
            
            <div className="relative z-20 h-full flex items-center justify-center">
              <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-center">
                <div className="animate-fade-in-up">
                  <h1 className="font-oswald text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase text-white mb-4 leading-[1.1]">
                    {slide.title}
                  </h1>
                  <h2 className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-[#ea580c] mb-8">
                    {slide.subtitle}
                  </h2>
                  <p className="font-inter text-xl md:text-2xl max-w-3xl mx-auto text-slate-300 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 transition-all duration-300 group"
        data-testid="prev-slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#ea580c] transition-colors" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 md:p-4 transition-all duration-300 group"
        data-testid="next-slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#ea580c] transition-colors" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#ea580c] w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            data-testid={`dot-${index}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-30 bg-white/10 backdrop-blur-sm px-4 py-2">
        <span className="font-oswald text-white text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default HeroSlider;
